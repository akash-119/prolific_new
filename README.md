# Prolific Automation - Certificate Management System

A full-stack web application for managing training certificates at Prolific Systems & Technologies.

## Features

### Public Features
- **Certificate Verification** (`/verify`) - Public page to verify certificate authenticity
- **Certificate View** (`/certificate/:number`) - View and print certificate details with QR code
- **Course Catalog** - Browse all training courses offered
- **Contact & About Pages** - Company information and contact forms

### Admin Features
- **Admin Dashboard** (`/admin/dashboard`) - Overview with stats and recent certificates
- **Student Management** (`/admin/students`) - CRUD operations for student records
- **Certificate Management** (`/admin/certificates`) - Generate, edit, and revoke certificates
- Auto-generated certificate numbers (PROLIFIC-YYYY-XXXXXX format)

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion + GSAP
- **Backend**: Lovable Cloud
- **Database**: PostgreSQL with Row Level Security
- **Authentication**: Email/Password with role-based access

## Database Schema

### Tables
- `students` - Student information (name, email, phone, course, center)
- `certificates` - Certificate records with auto-generated numbers
- `user_roles` - Admin role assignments
- `profiles` - User profile data
- `certificate_counter` - Sequential numbering for certificates

## Getting Started

### Development
```sh
# Install dependencies
npm install

# Run development server
npm run dev
```

### Creating Admin User
To create an admin user:
1. Sign up via the authentication system
2. Add admin role to the user via the backend database

## Project Structure

```
src/
├── components/
│   ├── admin/           # Admin layout components
│   ├── home/            # Homepage sections
│   ├── layout/          # Main layout (Navbar, Footer, etc.)
│   └── ui/              # shadcn/ui components
├── data/                # Course data
├── hooks/               # Custom React hooks
├── pages/
│   ├── admin/           # Admin pages
│   └── ...              # Public pages
└── integrations/        # Backend client
```

## Routes

### Public Routes
- `/` - Homepage
- `/about` - About Us
- `/contact` - Contact Page
- `/courses` - All Courses
- `/courses/:slug` - Individual Course Page
- `/verify` - Certificate Verification
- `/certificate/:number` - Certificate View/Print
- `/placements` - Placements Information
- `/gallery` - Office Gallery

### Admin Routes (Protected)
- `/admin/login` - Admin Login
- `/admin/dashboard` - Dashboard
- `/admin/students` - Student Management
- `/admin/certificates` - Certificate Management

## Deployment

1. Build: `npm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Or use Lovable Publish for one-click deployment

## License

© 2026 Prolific Systems & Technologies. All Rights Reserved.
