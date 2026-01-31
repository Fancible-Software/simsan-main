"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/colors";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import { Service } from "@/constants/services";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ServiceDetailTemplateProps {
    service: Service;
    breadcrumbs: BreadcrumbItem[];
    faqItems: Array<{ question: string; answer: string }>;
    faqTitle?: string;
    showBenefits?: boolean;
    showCarePlan?: boolean;
    showReliableServices?: boolean;
}

export default function ServiceDetailTemplate({ 
    service, 
    breadcrumbs, 
    faqItems, 
    faqTitle,
    showBenefits = true,
    showCarePlan = true,
    showReliableServices = true
}: ServiceDetailTemplateProps) {
    return (
        <>
            {/* Hero Section */}
            <Box
                className="relative w-full min-h-[520px] lg:min-h-[660px] flex flex-col justify-center"
                style={{
                    background: `url('${service.heroImage}') center center/cover no-repeat`,
                    position: 'relative',
                    borderBottomLeftRadius: '44px',
                    borderBottomRightRadius: '44px',
                    overflow: 'hidden'
                }}
            >
                <Box
                    className="absolute top-0 left-0 w-full h-full z-0"
                    style={{
                        background: "rgba(0, 0, 0, 0.6)",
                    }}
                />

                <Box className="relative z-10 px-6 lg:px-16 py-16 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full">
                    <Box className="mb-6">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
                            {service.title}
                        </h1>
                    </Box>

                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm sm:text-base">
                            {breadcrumbs.map((item, index) => (
                                <li key={item.label} className="flex items-center">
                                    {index > 0 && <span className="mx-2" style={{ color: colors.primary, opacity: 0.8 }}>-</span>}
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="hover:underline font-medium"
                                            style={{ color: colors.primary }}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span style={{ color: colors.primary }}>{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <Box className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a
                            href="tel:+17782227988"
                            className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base no-underline"
                            style={{ background: colors.primary }}
                        >
                            CALL US NOW
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                        <Link
                            href="/estimate"
                            className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base no-underline"
                            style={{ background: colors.primary }}
                        >
                            GET QUOTE
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </Box>
                </Box>
            </Box>

            {/* Main Content Section */}
            <Box className="bg-white py-12 md:py-16 lg:py-20">
                <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
                    <Box className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        <Box className="flex-1">
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
                                style={{ color: colors.primary }}
                            >
                                Expert {service.title} & Maintenance
                            </h2>
                            <p
                                className="text-lg md:text-xl mb-6"
                                style={{ color: colors.secondary }}
                            >
                                {service.subheading}
                            </p>

                            <Box className="space-y-4 mb-8" style={{ color: "#212121" }}>
                                <p className="text-base md:text-lg leading-relaxed">
                                    {service.longDescription.split(".")[0]}.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    {service.longDescription.split(".").slice(1).join(".").trim()}
                                </p>

                                {service.typesOfService?.length > 0 && (
                                    <Box>
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-4"
                                            style={{ color: colors.secondary }}
                                        >
                                            {service.typeOfServiceTitle || "Services:"}
                                        </h3>
                                        <ul className="space-y-3" style={{ color: colors.secondary }}>
                                            {service.typesOfService.map((type, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span
                                                        className="text-xl font-bold mt-1"
                                                        style={{ color: colors.secondary }}
                                                    >
                                                        •
                                                    </span>
                                                    <span className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                                        {type}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Box>
                                )}
                            </Box>

                            {showBenefits && service.benefits?.length > 0 && (
                                <Box className="mb-8">
                                    <h3
                                        className="text-xl md:text-2xl font-bold mb-4"
                                        style={{ color: colors.primary }}
                                    >
                                        Why Homeowners Choose Simsan Fraser Maintenance {service.title}:
                                    </h3>
                                    <ul className="space-y-3">
                                        {service.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span
                                                    className="text-xl font-bold mt-1"
                                                    style={{ color: colors.primary }}
                                                >
                                                    •
                                                </span>
                                                <span className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                                    {benefit}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            )}

                            <a
                                href="tel:+17782227988"
                                className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base no-underline"
                                style={{ background: colors.primary }}
                            >
                                CALL EXPERTS NOW
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </Box>

                        <Box className="flex-1">
                            <Box className="grid grid-cols-2 gap-4">
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={service.galleryImages[0] || "/home-about-img1.png"}
                                        alt={`${service.title} - Image 1`}
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={service.galleryImages[1] || "/home-about-imp2.png"}
                                        alt={`${service.title} - Image 2`}
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 col-span-2 rounded-lg overflow-hidden">
                                    <Image
                                        src={service.galleryImages[2] || "/homepage1.png"}
                                        alt={`${service.title} - Image 3`}
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* FAQ Section */}
            <FAQ
                title={faqTitle || "Frequently Asked Questions"}
                items={faqItems}
            />

            {/* Contact Us Section */}
            <ContactUs />
        </>
    );
}

