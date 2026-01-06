-- Create enum for certificate status
CREATE TYPE public.certificate_status AS ENUM ('ACTIVE', 'REVOKED', 'EXPIRED');

-- Create enum for admin role
CREATE TYPE public.app_role AS ENUM ('admin', 'staff');

-- Create students table
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_name TEXT NOT NULL,
  center_name TEXT NOT NULL DEFAULT 'Noida',
  completion_date DATE,
  remarks TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create certificates table
CREATE TABLE public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_number TEXT UNIQUE NOT NULL,
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE NOT NULL,
  course_name TEXT NOT NULL,
  issue_date DATE NOT NULL DEFAULT CURRENT_DATE,
  validity_date DATE,
  grade TEXT DEFAULT 'A',
  status public.certificate_status DEFAULT 'ACTIVE' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Create profiles table for admin user info
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create certificate counter table for sequential numbering
CREATE TABLE public.certificate_counter (
  id INTEGER PRIMARY KEY DEFAULT 1,
  year INTEGER NOT NULL,
  counter INTEGER NOT NULL DEFAULT 0,
  UNIQUE(year)
);

-- Initialize current year counter
INSERT INTO public.certificate_counter (id, year, counter) VALUES (1, 2026, 0);

-- Enable RLS on all tables
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificate_counter ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid()
      AND role = 'admin'
  )
$$;

-- RLS Policies for students table (admin only)
CREATE POLICY "Admins can view all students"
  ON public.students FOR SELECT
  TO authenticated
  USING (public.is_admin());

CREATE POLICY "Admins can insert students"
  ON public.students FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update students"
  ON public.students FOR UPDATE
  TO authenticated
  USING (public.is_admin());

CREATE POLICY "Admins can delete students"
  ON public.students FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- RLS Policies for certificates table
CREATE POLICY "Admins can view all certificates"
  ON public.certificates FOR SELECT
  TO authenticated
  USING (public.is_admin());

CREATE POLICY "Public can view active certificates for verification"
  ON public.certificates FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admins can insert certificates"
  ON public.certificates FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update certificates"
  ON public.certificates FOR UPDATE
  TO authenticated
  USING (public.is_admin());

CREATE POLICY "Admins can delete certificates"
  ON public.certificates FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- RLS Policies for user_roles table
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.is_admin());

-- RLS Policies for profiles table
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- RLS Policies for certificate_counter (admin only)
CREATE POLICY "Admins can view counter"
  ON public.certificate_counter FOR SELECT
  TO authenticated
  USING (public.is_admin());

CREATE POLICY "Admins can update counter"
  ON public.certificate_counter FOR UPDATE
  TO authenticated
  USING (public.is_admin());

-- Create function to generate certificate number
CREATE OR REPLACE FUNCTION public.generate_certificate_number()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_year INTEGER;
  current_counter INTEGER;
  new_cert_number TEXT;
BEGIN
  current_year := EXTRACT(YEAR FROM CURRENT_DATE);
  
  -- Get or create counter for current year
  INSERT INTO public.certificate_counter (id, year, counter)
  VALUES (1, current_year, 0)
  ON CONFLICT (id) DO UPDATE SET year = current_year, counter = 0
  WHERE certificate_counter.year != current_year;
  
  -- Increment counter and get new value
  UPDATE public.certificate_counter
  SET counter = counter + 1
  WHERE id = 1
  RETURNING counter INTO current_counter;
  
  -- Generate certificate number
  new_cert_number := 'PROLIFIC-' || current_year::TEXT || '-' || LPAD(current_counter::TEXT, 6, '0');
  
  RETURN new_cert_number;
END;
$$;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_students_updated_at
  BEFORE UPDATE ON public.students
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_certificates_updated_at
  BEFORE UPDATE ON public.certificates
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name');
  RETURN NEW;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Allow public read access to students for certificate verification joins
CREATE POLICY "Public can view students for verification"
  ON public.students FOR SELECT
  TO anon
  USING (true);