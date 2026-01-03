"use client";
import { useState, FormEvent } from "react";
import Box from "@mui/material/Box";
import { colors } from "@/lib/colors";
import { CONTACT_INFO } from "@/constants";
import { createContact } from "@/lib/api/contact";
import type { ContactCreateRequest } from "@/types";
import Toast from "./Toast";
import { useToast } from "@/hooks/useToast";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactCreateRequest>({
    name: "",
    email: "",
    phone: "+1",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone formatting: formats to +1-XXX-XXX-XXXX
  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters except +
    const cleaned = value.replace(/[^\d+]/g, "");
    
    // Always ensure it starts with +1
    if (!cleaned.startsWith("+1")) {
      if (cleaned.startsWith("1")) {
        return `+${cleaned}`;
      }
      if (cleaned.startsWith("+")) {
        return cleaned.length === 1 ? "+1" : `+1${cleaned.slice(1)}`;
      }
      // If empty or doesn't start with + or 1, return +1
      if (cleaned === "") {
        return "+1";
      }
      return `+1${cleaned}`;
    }
    
    // If user tries to delete +1, keep it
    if (cleaned === "+1" || cleaned.length < 2) {
      return "+1";
    }
    
    // Extract digits after +1
    const digits = cleaned.slice(2);
    
    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);
    
    // Format: +1-XXX-XXX-XXXX
    if (limitedDigits.length === 0) {
      return "+1";
    } else if (limitedDigits.length <= 3) {
      return `+1-${limitedDigits}`;
    } else if (limitedDigits.length <= 6) {
      return `+1-${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3)}`;
    } else {
      return `+1-${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    }
  };

  // Phone validation: must start with +1 and have 10 digits after
  const validatePhone = (phone: string): boolean => {
    // Remove spaces and dashes for validation
    const cleanedPhone = phone.replace(/[\s-]/g, "");
    // Must start with +1 and have exactly 10 more digits
    const phoneRegex = /^\+1\d{10}$/;
    return phoneRegex.test(cleanedPhone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., johndoe@example.com)";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone must start with +1 followed by 10 digits (e.g., +1-604-880-4476)";
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Format phone number as user types
    if (name === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value || "" }));
    }
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Clean phone number (remove spaces and dashes) before sending
      const cleanedPhone = formData.phone.replace(/[\s-]/g, "");
      const payload: ContactCreateRequest = {
        ...formData,
        phone: cleanedPhone,
      };

      const response = await createContact(payload);

      if (response.status && response.message) {
        showToast(response.message, "success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "+1",
          service: "",
          message: "",
        });
      } else {
        showToast(
          response.message || "Failed to send message. Please try again.",
          "error"
        );
      }
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "An error occurred. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <Box className="w-full bg-gray-50 py-12 lg:py-16">
      <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
        <Box className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Section - Need Help */}
          <Box className="flex-1">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-center sm:text-left"
              
            >
              Need Help?
            </h2>
            <p
              className="text-xl md:text-2xl font-semibold mb-6 text-center sm:text-left"
              
            >
              We&apos;re just a message away!
            </p>
            <p className="text-base md:text-lg mb-8 leading-relaxed text-center sm:text-left" style={{ color: colors.text.primary }}>
              Whether you have questions, need guidance, or want to book a service, our team is always ready to assist you quickly and professionally.
            </p>

            {/* Contact Details */}
            <Box className="space-y-4 mb-8">
              {/* Email */}
              <Box className="flex items-center gap-3 justify-center sm:justify-start">
                <Box
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${colors.primary}15` }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </Box>
                <a
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="text-base md:text-lg hover:underline"
                  style={{ color: colors.text.primary }}
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </Box>

              {/* Phone 1 */}
              <Box className="flex items-center gap-3 justify-center sm:justify-start">
                <Box
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${colors.primary}15` }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </Box>
                <a
                  href="tel:+16048804476"
                  className="text-base md:text-lg hover:underline"
                  style={{ color: colors.text.primary }}
                >
                  +1-604-880-4476
                </a>
              </Box>

              {/* Phone 2 */}
              <Box className="flex items-center gap-3 justify-center sm:justify-start">
                <Box
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${colors.primary}15` }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </Box>
                <a
                  href="tel:+17782227988"
                  className="text-base md:text-lg hover:underline"
                  style={{ color: colors.text.primary }}
                >
                  +1-778-222-7988
                </a>
              </Box>
            </Box>

            {/* Social Media Icons */}
            <Box className="flex items-center gap-4 justify-center sm:justify-start">
              {/* WhatsApp */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ color: colors.text.primary }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ color: colors.text.primary }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ color: colors.text.primary }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </Box>
          </Box>

          {/* Right Section - Contact Form */}
          <Box className="flex-1">
            <Box
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center sm:text-left">
                Contact us Today
              </h2>
              <p className="text-white md:text-lg mb-8 leading-relaxed text-center sm:text-left">
                Have questions or need a service? We&apos;re here to help! Reach out to our team for quick support, bookings, or personalized assistance we&apos;d love to hear from you.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <Box>
                  <label className="text-white block mb-2 font-bold text-[16px] text-left">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white ${
                      errors.name ? "ring-2 ring-red-300" : ""
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-200 text-sm mt-1">{errors.name}</p>
                  )}
                </Box>

                {/* Email */}
                <Box>
                  <label className="text-white block mb-2 font-bold text-[16px] text-left">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white ${
                      errors.email ? "ring-2 ring-red-300" : ""
                    }`}
                    placeholder="johndoe@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-200 text-sm mt-1">{errors.email}</p>
                  )}
                </Box>

                {/* Mobile Number */}
                <Box>
                  <label className="text-white block mb-2 font-bold text-[16px] text-left">
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone || "+1"}
                    onChange={handleInputChange}
                    onFocus={(e) => {
                      if (!e.target.value || e.target.value === "") {
                        setFormData((prev) => ({ ...prev, phone: "+1" }));
                      }
                    }}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white ${
                      errors.phone ? "ring-2 ring-red-300" : ""
                    }`}
                    placeholder="+1-604-880-4476"
                  />
                  {errors.phone && (
                    <p className="text-red-200 text-sm mt-1">{errors.phone}</p>
                  )}
                </Box>

                {/* Select Service */}
                <Box>
                  <label className="text-white block mb-2 font-bold text-[16px] text-left">
                    Select Service*
                  </label>
                  <Box className="relative">
                    <select
                      name="service"
                      value={formData.service || ""}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white appearance-none ${
                        errors.service ? "ring-2 ring-red-300" : ""
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="Roof & Gutter Cleaning">Roof & Gutter Cleaning</option>
                      <option value="Window Washing">Window Washing</option>
                      <option value="Pressure Cleaning">Pressure Cleaning</option>
                      <option value="Christmas Lighting & Decoration">
                        Christmas Lighting & Decoration
                      </option>
                      <option value="Roof Cleaning">Roof Cleaning</option>
                    </select>
                    <Box className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </Box>
                  </Box>
                  {errors.service && (
                    <p className="text-red-200 text-sm mt-1">{errors.service}</p>
                  )}
                </Box>

                {/* Message */}
                <Box className="col-span-1 md:col-span-2">
                  <label className="text-white block mb-2 font-bold text-[16px] text-left">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message || ""}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white resize-none ${
                      errors.message ? "ring-2 ring-red-300" : ""
                    }`}
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="text-red-200 text-sm mt-1">{errors.message}</p>
                  )}
                </Box>

                {/* Submit Button */}
                <Box className="col-span-1 md:col-span-2 flex items-start mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-10 py-4 rounded-full bg-white text-[18px] font-semibold transition-opacity ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:opacity-90"
                    }`}
                    style={{ color: colors.primary }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}

