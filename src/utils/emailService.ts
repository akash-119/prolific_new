import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface CourseDetails {
  title: string;
  duration: string;
  mode: string[];
  syllabusFile: string;
}

export const sendSyllabusEmail = async (formData: FormData, courseDetails: CourseDetails) => {
  try {
    // Check if EmailJS is configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.log('EmailJS not configured. Proceeding with direct download only.');
      return { success: true, emailSent: false };
    }

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      course_name: courseDetails.title,
      duration: courseDetails.duration,
      mode: courseDetails.mode.join(', '),
      syllabus_link: `${window.location.origin}${courseDetails.syllabusFile}`,
      to_email: formData.email
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return { success: true, emailSent: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, emailSent: false, error };
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};
