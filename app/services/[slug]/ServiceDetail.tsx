"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/colors";
import ZipCodeCta from "@/components/ZipCodeCta";
import FAQ, { FAQItem } from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import { Service } from "@/constants/services";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ServiceDetailProps {
    service: Service;
    breadcrumbs: BreadcrumbItem[];
}

export default function ServiceDetail({ service, breadcrumbs }: ServiceDetailProps) {
    return (
        <>
            {/* Hero Section with overlay gradient */}
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
                {/* Dark Overlay */}
                <Box
                    className="absolute top-0 left-0 w-full h-full z-0"
                    style={{
                        background: "rgba(0, 0, 0, 0.6)",
                    }}
                />

                <Box className="relative z-10 px-6 lg:px-16 py-16 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full">
                    {/* Title - Stacked: Orange on top (smaller), White below (larger) */}
                    <Box className="mb-6">

                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
                            {service.title}

                        </h1>
                    </Box>

                    {/* Breadcrumbs - Orange */}
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

                    {/* CTA Buttons */}
                    <Box className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button
                            className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base"
                            style={{ background: colors.primary }}
                        >
                            CALL US NOW
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base"
                            style={{ background: colors.primary }}
                        >
                            GET QUOTE
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Box>
                </Box>
            </Box>

            {/* Place the CTA with negative margin to overlap hero and white bg below */}
            {/* <Box className="w-full flex justify-center" style={{ marginTop: '-64px', position: 'relative', zIndex: 20 }}>
                <ZipCodeCta />
            </Box> */}

            {/* Main Content Section */}
            <Box className="bg-white py-12 md:py-16 lg:py-20">
                <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
                    <Box className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Left Column - Content */}
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
                            </Box>

                            {/* Benefits Section */}
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

                            {/* CTA Button */}
                            <button
                                className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base"
                                style={{ background: colors.primary }}
                            >
                                CALL EXPERTS NOW
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Box>

                        {/* Right Column - Image Gallery */}
                        <Box className="flex-1">
                            <Box className="grid grid-cols-2 gap-4">
                                {/* Top Left Image */}
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={service.galleryImages[0] || "/home-about-img1.png"}
                                        alt={`${service.title} - Image 1`}
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                {/* Top Right Image */}
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={service.galleryImages[1] || "/home-about-imp2.png"}
                                        alt={`${service.title} - Image 2`}
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                {/* Bottom Full Width Image */}
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

            {/* Care Plan Section */}
            <Box className="bg-gray-50 py-12 md:py-16 lg:py-20">
                <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
                    <Box className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                        {/* Left Column - Image */}
                        <Box className="flex-1 w-full">
                            <Box className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                                <Image
                                    src={service.galleryImages[0] || "/home-about-img1.png"}
                                    alt={`${service.title} - Care Plan`}
                                    fill
                                    className="object-cover"
                                />
                            </Box>
                        </Box>

                        {/* Right Column - Content */}
                        <Box className="flex-1 w-full">
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                style={{ color: colors.primary }}
                            >
                                Let Us Care For Your Home
                            </h2>
                            <h3
                                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6"
                                style={{ color: colors.secondary }}
                            >
                                Create a Plan That Works For You
                            </h3>

                            <Box className="space-y-4 mb-8" style={{ color: "#212121" }}>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Every home is unique—and so are your maintenance needs. That’s why our Roof & Gutter Cleaning plans are fully flexible. We start with what your home needs most and help you customize from there.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Most homeowners choose regular roof and gutter cleaning to prevent moss growth, water damage, and overflow issues. Our biannual service (every 6 months) is the most popular choice, but homes surrounded by trees or facing heavy rain may need more frequent cleaning.                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    We’re your one-stop shop for proactive roof and gutter maintenance. Not sure where to start? We’ll help you build a plan that fits your home, your schedule, and your budget.
                                </p>
                            </Box>

                            {/* Suggested Frequency Section */}
                            <Box className="mb-8">
                                <h4
                                    className="text-xl md:text-2xl font-bold mb-4"
                                    style={{ color: colors.primary }}
                                >
                                    Suggested Frequency:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span
                                            className="text-xl font-bold mt-1"
                                            style={{ color: colors.primary }}
                                        >
                                            •
                                        </span>
                                        <span className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                            <strong>Standard:</strong> Every 6 months
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span
                                            className="text-xl font-bold mt-1"
                                            style={{ color: colors.primary }}
                                        >
                                            •
                                        </span>
                                        <span className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                            <strong>High-debris or moss-prone homes:</strong> Every 3-4 months
                                        </span>
                                    </li>
                                </ul>
                            </Box>

                            {/* CTA Button */}
                            <button
                                className="text-white font-semibold px-8 py-4 rounded-lg w-full sm:w-fit flex items-center justify-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base"
                                style={{ background: colors.primary }}
                            >
                                CALL NOW TO SCHEDULE YOUR SERVICE
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Reliable Services Section */}
            <Box className="bg-white py-12 md:py-16 lg:py-20">
                <Box className="max-w-5xl mx-auto px-6 lg:px-8 xl:px-0">
                    {/* Main Heading */}
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        style={{ color: colors.primary }}
                    >
                        Reliable {service.title} That Protect Your Home
                    </h2>

                    {/* Sub-heading */}
                    <h3
                        className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6"
                        style={{ color: colors.secondary, opacity: 0.9 }}
                    >
                        See Why Homeowners Trust Simsan Fraser for Complete {service.title} Care
                    </h3>

                    {/* Introductory Paragraph */}
                    <Box className="space-y-5 mb-8">
                        <p className="text-base md:text-lg leading-relaxed">
                            Your roof and gutters are your home's first line of defense against water damage, especially in the Pacific Northwest's challenging climate. With wet seasons and dry summer debris, clogged gutters, moss buildup, and roof deterioration can become serious problems if not properly maintained.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed">
                            When roofs or gutters aren't functioning properly, rainwater can overflow or pool, causing serious issues:
                        </p>
                    </Box>

                    {/* Issues List */}
                    <Box className="mb-10">
                        <ul className="space-y-3">
                            {[
                                "Foundation and structural damage",
                                "Basement leaks or flooding",
                                "Soil erosion around the home",
                                "Exterior staining and mold growth",
                                "Roof damage from trapped moisture or backed-up water"
                            ].map((issue, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span
                                        className="text-xl font-bold mt-1 flex-shrink-0"
                                        style={{ color: colors.secondary }}
                                    >
                                        •
                                    </span>
                                    <span className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                        {issue}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Box>

                    {/* Company Solution Paragraph */}
                    <Box className="mb-10" >
                        <p className="text-base md:text-lg leading-relaxed">
                            That's where <strong>Simsan Fraser {service.title}</strong> comes in. We understand these challenges and provide comprehensive, year-round roof and gutter cleaning, including moss removal and debris clearing, using professional-grade equipment for flawless function.
                        </p>
                    </Box>

                    {/* Additional Services Section */}
                    <Box className="mb-10">
                        <h3
                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                            style={{ color: colors.secondary }}
                        >
                            Additional {service.title}
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "#212121" }}>
                            Beyond standard cleaning, we offer a full range of services to keep your home looking great and performing at its best.
                        </p>

                        {/* Gutter Whitening & Brightening */}
                        <Box className="mb-6">
                            <h4
                                className="text-xl md:text-2xl font-bold mb-3"
                                style={{ color: colors.secondary }}
                            >
                                Gutter Whitening & Brightening
                            </h4>
                            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                We safely remove exterior grime, stains, algae, and oxidation using specialized cleaners to restore your gutters' appearance and boost curb appeal—all without damaging the surface.
                            </p>
                        </Box>

                        {/* Moss Treatment & Removal */}
                        <Box className="mb-6">
                            <h4
                                className="text-xl md:text-2xl font-bold mb-3"
                                style={{ color: colors.secondary }}
                            >
                                Moss Treatment & Removal
                            </h4>
                            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                Moss is a major threat to Pacific Northwest roofs. Our team carefully removes moss and applies treatment to slow regrowth and protect your shingles.
                            </p>
                        </Box>
                    </Box>

                    {/* Service Process Section */}
                    <Box className="mb-10">
                        <h3
                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                            style={{ color: colors.secondary }}
                        >
                            Our {service.title} Service Process
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Complete debris removal from roof surfaces, gutters, and downspouts",
                                "Moss removal and application of preventive treatment (if needed)",
                                "Thorough inspection for potential damage or problem areas",
                                "Flushing the entire gutter system to confirm proper water flow",
                                "Installation of downspout strainers in key locations",
                                "Full cleanup of your property, leaving no mess behind"
                            ].map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span
                                        className="text-xl font-bold mt-1 flex-shrink-0"
                                        style={{ color: colors.secondary }}
                                    >
                                        •
                                    </span>
                                    <span className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                        {step}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Box>

                    {/* BOOK NOW Button */}
                    <Box className="flex justify-center sm:justify-start">
                        <button
                            className="text-white font-semibold px-8 py-4 rounded-lg w-full sm:w-fit flex items-center justify-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base"
                            style={{ background: colors.primary }}
                        >
                            BOOK NOW
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Box>
                </Box>
            </Box>

            {/* FAQ Section */}
            <FAQ
                introText="Choosing a Gutter Cleaning provider is an important decision, and we want you to feel confident every step of the way. Below are some of the most common questions we get from homeowners just like you—covering everything from safety to service details. Don't see your question here? Just reach out—we're happy to help!"
                items={[
                    {
                        question: "What can I expect on the day of service?",
                        answer: "We'll call or text on the way to your home in Greater Seattle and Portland. You don't need to be home for outside work, but we'll knock on the door to greet you either way. We'll let you know if we have questions for you or if your home could benefit from any additional services. When finished, we will come to the door to chat before we leave. We can answer any other questions you may have, let you know if we encountered anything unusual while we worked, and offer recommendations for a service schedule going forward."
                    },
                    {
                        question: "How often should I have my gutters cleaned?",
                        answer: "We recommend cleaning your gutters at least twice a year—typically in the spring and fall. However, homes with heavy tree coverage, frequent storms, or moss-prone areas may benefit from more frequent cleanings (every 3-4 months). Our team can assess your specific situation and recommend a maintenance schedule that works best for your home."
                    },
                    {
                        question: "Do I need to be home during the service?",
                        answer: "No, you don't need to be home for outside work. We'll call or text when we're on our way, and we'll knock on your door when we arrive. If you're not home, we'll complete the work and leave a note or call you afterward to discuss any findings or recommendations."
                    },
                    {
                        question: "What happens if you find damage during the service?",
                        answer: "If we discover any damage or potential issues during our service, we'll document it and discuss it with you immediately. We can provide recommendations for repairs and, if needed, refer you to trusted professionals. Our priority is keeping your home safe and well-maintained."
                    },
                    {
                        question: "Do you offer any guarantees on your work?",
                        answer: "Yes! We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with our service, we'll return to make it right at no additional charge. Your satisfaction is our top priority."
                    }
                ]}
            />

            {/* Contact Us Section */}
            <ContactUs />
        </>
    );
}

