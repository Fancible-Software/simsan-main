"use client";
import { useState, FormEvent, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Box from "@mui/material/Box";
import Image from "next/image";
import { colors } from "@/lib/colors";
import { createContact } from "@/lib/api/contact";
import type { ContactCreateRequest } from "@/types";
import Toast from "@/components/Toast";
import { useToast } from "@/hooks/useToast";
import { SERVICES } from "@/constants/services";
import { getCategoryDisplayName } from "@/lib/gallery-types";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function EstimatePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Free Estimate" },
  ];

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

  // Get all service options from SERVICES and additional gallery categories
  const allServices = useMemo(() => {
    // Start with services from SERVICES constant
    const serviceOptions = SERVICES.map((service) => service.title);
    
    // Add additional gallery categories that aren't in SERVICES
    const additionalCategories: string[] = [];
    
    // Filter out categories that already exist in SERVICES
    const servicesSlugs = SERVICES.map((s) => s.slug);
    const uniqueAdditionalCategories = additionalCategories.filter(
      (cat) => !servicesSlugs.includes(cat)
    );
    
    // Get display names for additional categories
    const additionalServiceNames = uniqueAdditionalCategories.map((cat) =>
      getCategoryDisplayName(cat)
    );
    
    // Combine and remove duplicates, then sort alphabetically
    const allServicesSet = new Set([...serviceOptions, ...additionalServiceNames]);
    return Array.from(allServicesSet).sort();
  }, []);

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
      // Ensure value is always a string
      setFormData((prev) => ({ ...prev, [name]: value ?? "" }));
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
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroBanner
          title="Get Free Estimate Now"
          breadcrumbs={breadcrumbs}
          backgroundImage="/mask-group.png"
          minHeight="260px"
        />

        {/* Introduction Section */}
        <Box className="w-full bg-white py-12 lg:py-16">
          <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3"
              style={{ color: colors.primary }}
            >
              Get Started With a Free Estimate Today
            </h2>
            <p
              className="text-xl md:text-2xl font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Thank you for choosing Simsan Fraser!
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: colors.text.primary }}>
              For a fast and accurate free estimate, simply complete the form below. Our team will review your request and get back to you shortly with all the details. If you need immediate support, feel free to call us at{" "}
              <a
                href="tel:+16048804476"
                className="hover:underline font-semibold"
                style={{ color: colors.primary }}
              >
                +1-604-880-4476
              </a>
              {", "}
              <a
                href="tel:+17782227988"
                className="hover:underline font-semibold"
                style={{ color: colors.primary }}
              >
                +1-778-222-7988
              </a>
              {" "}and one of our service specialists will be happy to assist you. We look forward to helping you with reliable, high-quality cleaning services!
            </p>
          </Box>
        </Box>

        {/* Two Column Section - Image Left, Form Right */}
        <Box className="w-full bg-white py-8 lg:py-12">
          <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
            <Box className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Column - Image with Logo Overlay */}
              <Box className="flex-1 relative">
                <Box className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="/home-about-img1.png"
                    alt="Simsan Fraser Maintenance Services"
                    fill
                    className="object-cover"
                  />
                  {/* Logo Overlay - Centered */}
                  <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 lg:p-8">
                    <Image
                      src="/icons/logo.svg"
                      alt="Simsan Fraser Maintenance Ltd."
                      width={200}
                      height={60}
                      className="mb-2 mx-auto"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <p className="text-white text-lg lg:text-xl font-semibold">
                      Simsan Fraser Maintenance Ltd.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* Right Column - Contact Form */}
              <Box className="flex-1">
                <Box
                  className="rounded-2xl p-8 lg:p-10"
                  style={{
                    backgroundColor: colors.primary,
                  }}
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Get a Free Estimate
                  </h2>
                  <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                    Have questions or need a service? We&apos;re here to help! Reach out to our team for quick support, bookings, or personalized assistance we&apos;d love to hear from you.
                  </p>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="w-full mt-4 grid grid-cols-1 gap-4">
                    {/* Name */}
                    <Box>
                      <label className="text-white block mb-2 font-bold text-[16px] text-left">
                        Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name ?? ""}
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
                        value={formData.email ?? ""}
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
                        value={formData.phone ?? "+1"}
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
                          value={formData.service ?? ""}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white appearance-none ${
                            errors.service ? "ring-2 ring-red-300" : ""
                          }`}
                        >
                          <option value="">Select a service</option>
                          {allServices.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        <Box className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </Box>
                      </Box>
                      {errors.service && (
                        <p className="text-red-200 text-sm mt-1">{errors.service}</p>
                      )}
                    </Box>

                    {/* Message */}
                    <Box>
                      <label className="text-white block mb-2 font-bold text-[16px] text-left">
                        Message*
                      </label>
                      <textarea
                        name="message"
                        value={formData.message ?? ""}
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
                    <Box className="flex items-start mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-10 py-4 rounded-full bg-white text-[18px] font-semibold transition-opacity ${
                          isSubmitting
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:bg-gray-100"
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
      </main>
      <Footer />
    </>
  );
}

