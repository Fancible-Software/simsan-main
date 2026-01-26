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

                                {service.typesOfService?.length > 0 && (
                                    <Box>
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-4"
                                            style={{ color: colors.secondary }}
                                        >
                                            {service.typeOfServiceTitle || "BELOW ARE THE TYPE OF ROOFS CLEANED BY US:"}
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
            </Box >

            {/* Care Plan Section */}
            < Box className="bg-gray-50 py-12 md:py-16 lg:py-20" >
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
                            <a
                                href="tel:+17782227988"
                                className="text-white font-semibold px-8 py-4 rounded-lg w-full sm:w-fit flex items-center justify-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base no-underline"
                                style={{ background: colors.primary }}
                            >
                                CALL NOW TO SCHEDULE YOUR SERVICE
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box >

            {/* Reliable Services Section */}
            < Box className="bg-white py-12 md:py-16 lg:py-20" >
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
                            Your roof and gutters are your home's first line of defense against water damage, especially in the lower mainland and fraser valley challenging climate. With wet seasons and dry summer debris, clogged gutters, moss buildup and roof deterioration can become serious problems if not properly maintained.
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
                                We safely remove exterior grime, stains, algae and oxidation using specialized cleaners to restore your gutters' appearance and boost curb appeal—all without damaging the surface.
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
                                Moss is a major threat to lower mainland and fraser valley roofs. Our team carefully removes moss and applies treatment to slow regrowth and protect your shingles.

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
                        <Link
                            href="/contact"
                            className="text-white font-semibold px-8 py-4 rounded-lg w-full sm:w-fit flex items-center justify-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base no-underline"
                            style={{ background: colors.primary }}
                        >
                            BOOK NOW
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </Box>
                </Box>
            </Box >

            {/* FAQ Section */}
            < FAQ
                title={
                    service.slug === "water-fed-pole-window-washing"
                        ? "Frequently Asked Questions – Water-Fed Pole Window Washing"
                        : service.slug === "vinyl-siding-soft-washing"
                        ? "Frequently Asked Questions – Vinyl Siding Soft Washing (Water-Fed Pole System)"
                        : service.slug === "stucco-exterior-wall-soft-washing"
                        ? "Frequently Asked Questions – Stucco & Exterior Wall Soft Washing"
                        : service.slug === "christmas-lighting-decoration"
                        ? "Frequently Asked Questions – Christmas Light Installation"
                        : service.slug === "pressure-washing-concrete-floors"
                        ? "Frequently Asked Questions – Concrete & Wood Pressure Washing"
                        : service.slug === "interior-exterior-painting"
                        ? "Frequently Asked Questions – Interior & Exterior Painting"
                        : service.slug === "epoxy-flooring-installation"
                        ? "Frequently Asked Questions – Epoxy Flooring"
                        : "Frequently Asked Questions"
                }
                introText={
                    service.slug === "water-fed-pole-window-washing" ||
                    service.slug === "vinyl-siding-soft-washing" ||
                    service.slug === "stucco-exterior-wall-soft-washing" ||
                    service.slug === "christmas-lighting-decoration" ||
                    service.slug === "pressure-washing-concrete-floors" ||
                    service.slug === "interior-exterior-painting" ||
                    service.slug === "epoxy-flooring-installation"
                        ? undefined
                        : "Choosing a Gutter Cleaning provider is an important decision, and we want you to feel confident every step of the way. Below are some of the most common questions we get from homeowners just like you—covering everything from safety to service details. Don't see your question here? Just reach out—we're happy to help!"
                }
                items={
                    service.slug === "water-fed-pole-window-washing"
                        ? [
                            {
                                question: "What is water-fed pole window cleaning?",
                                answer: "Water-fed pole window cleaning is a modern method that uses extendable poles with soft-bristle brushes and 100% purified water to clean windows from the ground. The purified water removes dirt and grime and dries spot-free without the need for soaps or chemicals."
                            },
                            {
                                question: "Is water-fed pole window cleaning safe for my windows?",
                                answer: "Yes. This method is safe for glass, frames, seals and screens. The soft brushes are designed specifically for window cleaning and purified water contains no minerals that could cause damage or streaking."
                            },
                            {
                                question: "Will my windows dry spot-free without soap?",
                                answer: "Yes. Because we use natural and clean water, it dries naturally without leaving mineral spots or residue. This is what gives water-fed pole cleaning its streak-free finish."
                            },
                            {
                                question: "Can you clean upper-floor windows with a water-fed pole?",
                                answer: "Absolutely. Water-fed poles allow us to safely clean second-, third-, and multi-story windows without ladders, making it ideal for homes and commercial buildings throughout the Lower Mainland and Fraser Valley."
                            },
                            {
                                question: "Is water-fed pole window washing better than traditional methods?",
                                answer: "For most exterior window cleaning, yes. Water-fed pole systems are safer, more efficient and more environmentally friendly than traditional ladder and squeegee methods—especially for hard-to-reach windows."
                            },
                            {
                                question: "Do you use any chemicals or detergents?",
                                answer: "No. Our water-fed pole window cleaning uses pure water only, making it an eco-friendly solution that's safe for your family, pets, landscaping and the environment."
                            },
                            {
                                question: "How often should I have my windows cleaned?",
                                answer: "Most homeowners in the Lower Mainland and Fraser Valley schedule window cleaning 2–4 times per year, depending on exposure to rain, dust, pollen, and nearby trees. Commercial properties may benefit from more frequent service."
                            },
                            {
                                question: "Can water-fed pole cleaning remove heavy buildup?",
                                answer: "Yes. For regular maintenance and moderate buildup, water-fed pole cleaning is highly effective. For heavily soiled windows or first-time cleanings, we may combine methods to ensure the best possible results."
                            },
                            {
                                question: "Do you offer water-fed pole window cleaning for commercial properties?",
                                answer: "Yes. We provide residential and commercial window cleaning services for offices, retail spaces, strata buildings, and more across Lower Mainland and Fraser Valley."
                            },
                            {
                                question: "Is water-fed pole window washing weather-dependent?",
                                answer: "Light rain usually doesn't affect the results, as purified water dries spot-free. However, we may reschedule during heavy rain, strong winds or freezing conditions to ensure safety and quality."
                            }
                        ]
                        : service.slug === "vinyl-siding-soft-washing"
                        ? [
                            {
                                question: "What is vinyl siding soft washing with a water-fed pole?",
                                answer: "It's a low-pressure exterior cleaning method that uses extendable water-fed poles with soft-bristle brushes and professional cleaning solutions to gently remove dirt, algae, mildew, and pollen from vinyl siding—without using damaging high pressure."
                            },
                            {
                                question: "Is the water-fed pole system safe for vinyl siding?",
                                answer: "Yes. The system is specifically designed for delicate surfaces like vinyl siding. The soft-bristle brush and controlled water flow prevent scratching, cracking, or loosening of panels."
                            },
                            {
                                question: "Will this method remove green algae and mildew?",
                                answer: "Yes. Soft washing treats the root cause of staining by breaking down algae, mold, and mildew, not just rinsing the surface. This results in a cleaner appearance that lasts longer."
                            },
                            {
                                question: "Do you use high pressure on the siding?",
                                answer: "No. We use low pressure only. High pressure can force water behind siding or cause damage. The water-fed pole system provides a gentle yet effective clean."
                            },
                            {
                                question: "Can you clean upper-level vinyl siding?",
                                answer: "Absolutely. Water-fed poles allow us to safely clean second- and third-story siding from the ground, reducing the need for ladders and improving safety."
                            },
                            {
                                question: "Are the cleaning solutions safe?",
                                answer: "Yes. We use biodegradable, exterior-safe cleaning solutions that are effective on grime and organic growth while being safe for landscaping, pets, and surrounding surfaces when applied properly."
                            },
                            {
                                question: "How often should vinyl siding be soft washed?",
                                answer: "In the Lower Mainland and Fraser Valley climate, most homes benefit from soft washing every 1–2 years, depending on shade, moisture, and nearby vegetation."
                            },
                            {
                                question: "Will soft washing damage paint or fade vinyl?",
                                answer: "No. When done correctly, soft washing is gentler than pressure washing and helps preserve the color and finish of vinyl siding."
                            },
                            {
                                question: "Is water-fed pole soft washing better than traditional pressure washing?",
                                answer: "Yes. For vinyl siding, water-fed pole soft washing is safer, more consistent and reduces the risk of water intrusion or surface damage compared to traditional pressure washing."
                            },
                            {
                                question: "Do you offer this service throughout the Lower Mainland & Fraser Valley?",
                                answer: "Yes. We provide vinyl siding soft washing services across Lower Mainland and Fraser Valley Area."
                            }
                        ]
                        : service.slug === "stucco-exterior-wall-soft-washing"
                        ? [
                            {
                                question: "What is soft washing for stucco and exterior walls?",
                                answer: "Soft washing is a low-pressure cleaning method that uses a pressure washer set to safe levels along with professional, biodegradable cleaning solutions. It gently removes algae, mold, mildew, dirt, and stains without damaging stucco or other textured surfaces."
                            },
                            {
                                question: "Is pressure washing safe for stucco?",
                                answer: "High-pressure washing is not recommended for stucco. However, when done correctly at low pressure, pressure washing as part of a soft washing process is safe and effective. We carefully control pressure to prevent cracking, erosion, or water intrusion."
                            },
                            {
                                question: "What types of walls can be soft washed?",
                                answer: "We soft wash a variety of exterior wall surfaces, including: Stucco and EIFS (synthetic stucco), Painted exterior walls, Concrete and masonry walls, Brick and block walls."
                            },
                            {
                                question: "Will soft washing remove mold and algae completely?",
                                answer: "Yes. Soft washing doesn't just remove surface stains—it treats the root cause by killing mold, algae, and mildew. This helps keep walls cleaner for longer compared to high-pressure washing alone."
                            },
                            {
                                question: "Do you use harsh chemicals?",
                                answer: "No. We use biodegradable, industry-approved cleaning solutions that are effective yet safe for surrounding plants, pets, and the environment when applied correctly."
                            },
                            {
                                question: "How often should stucco and exterior walls be cleaned?",
                                answer: "In the Lower Mainland and Fraser Valley, we recommend soft washing every 1–2 years, depending on shade, moisture, and exposure to organic growth."
                            },
                            {
                                question: "Will soft washing damage paint or finishes?",
                                answer: "No. When performed properly, soft washing is gentler than high-pressure washing and helps preserve paint and finishes rather than stripping or damaging them."
                            },
                            {
                                question: "Can you clean multi-story walls?",
                                answer: "Yes. We safely clean two- and three-story homes and buildings using proper equipment and techniques, ensuring consistent results without unnecessary risk."
                            },
                            {
                                question: "Is soft washing better than pressure washing for stucco?",
                                answer: "Yes. Soft washing is the preferred method for stucco and delicate wall surfaces because it reduces the risk of damage while delivering longer-lasting results."
                            },
                            {
                                question: "Do you offer stucco and wall soft washing for commercial properties?",
                                answer: "Yes. We provide residential, commercial, and strata wall cleaning services throughout Lower Mainland and Fraser Valley areas."
                            }
                        ]
                        : service.slug === "christmas-lighting-decoration"
                        ? [
                            {
                                question: "What does your Christmas light installation service include?",
                                answer: "Our service includes design, professional installation, and optional takedown of your holiday lights. We install lights on roofs, eaves, gutters, trees, shrubs, and other exterior areas while ensuring safety and even placement."
                            },
                            {
                                question: "Do you provide the Christmas lights, or do I need to supply them?",
                                answer: "We can work with your lights or provide high-quality, energy-efficient LED lights for your display. We also offer options for custom colors and themes to match your vision."
                            },
                            {
                                question: "Is professional installation safe for my roof and gutters?",
                                answer: "Yes. Our trained technicians use proper tools, ladders, and safety equipment to prevent damage to your roof, siding, gutters, and landscaping."
                            },
                            {
                                question: "Can you install lights on multi-story homes?",
                                answer: "Absolutely. We safely install lights on multi-story homes, large trees, and hard-to-reach areas using specialized poles and safety equipment."
                            },
                            {
                                question: "Do you remove the lights after the holidays?",
                                answer: "Yes. We offer takedown and optional storage services to make the process easy and stress-free."
                            },
                            {
                                question: "How early should I book my Christmas light installation?",
                                answer: "We recommend booking early in the season (October–November) to ensure availability and allow time for design planning, especially for larger homes or commercial displays."
                            },
                            {
                                question: "Can you create a custom light display?",
                                answer: "Yes. We can design classic, elegant, themed, or fully custom displays to make your home or business stand out during the holidays."
                            },
                            {
                                question: "Are the lights energy-efficient?",
                                answer: "Yes. We use LED lights that are long-lasting, bright, and energy-efficient, helping reduce electricity costs while keeping your display stunning."
                            },
                            {
                                question: "Do you offer commercial Christmas light installation?",
                                answer: "Yes. We provide professional installation for residential homes, businesses, office buildings, and commercial properties throughout the Lower Mainland & Fraser Valley."
                            }
                        ]
                        : service.slug === "pressure-washing-concrete-floors"
                        ? [
                            {
                                question: "Is pressure washing safe for concrete?",
                                answer: "Yes. Concrete is durable and responds very well to pressure washing. We adjust pressure and techniques to remove stains and buildup without damaging the surface."
                            },
                            {
                                question: "Can pressure washing damage wooden surfaces?",
                                answer: "High pressure can damage wood if done incorrectly. We use lower pressure and proper nozzle selection to safely clean decks, fences and other wooden structures without splintering or gouging."
                            },
                            {
                                question: "What stains can pressure washing remove from concrete?",
                                answer: "Pressure washing can remove dirt, algae, moss, mildew, tire marks, grease and most surface stains. Some deep oil stains may lighten but not disappear completely."
                            },
                            {
                                question: "How often should concrete and wood be pressure washed?",
                                answer: "Most properties in the Lower Mainland and Fraser Valley benefit from pressure washing once every 1–2 years, depending on shade, moisture and usage."
                            },
                            {
                                question: "Do you use chemicals when pressure washing?",
                                answer: "We may use surface-safe, biodegradable cleaners when needed for heavy staining, algae or grease. These products help improve results while remaining environmentally responsible."
                            },
                            {
                                question: "Is pressure washing better than soft washing for concrete?",
                                answer: "Yes. Concrete can handle higher pressure, making pressure washing the most effective method. Soft washing is typically reserved for delicate surfaces like siding or stucco."
                            },
                            {
                                question: "Can you clean large driveways and commercial areas?",
                                answer: "Yes. We offer pressure washing for large residential driveways, parking areas, walkways and commercial properties."
                            },
                            {
                                question: "Will pressure washing prepare wood for staining or sealing?",
                                answer: "Yes. Pressure washing is an excellent way to prepare wood surfaces before staining or sealing by removing dirt, old residue and organic buildup."
                            },
                            {
                                question: "Do you offer services year-round?",
                                answer: "Weather permitting, yes. We operate throughout the year but may reschedule during freezing temperatures or unsafe conditions."
                            }
                        ]
                        : service.slug === "interior-exterior-painting"
                        ? [
                            {
                                question: "How do I prepare my home for painting?",
                                answer: "We take care of most preparation, including covering floors, protecting furniture, patching small holes, sanding and priming. We simply ask that small personal items be moved beforehand."
                            },
                            {
                                question: "What type of paint do you use?",
                                answer: "We use high-quality, professional-grade paints suited for each surface and environment. We can also work with specific brands or finishes upon request."
                            },
                            {
                                question: "How long does interior painting take?",
                                answer: "Most interior painting projects take 1–5 days, depending on the size of the space, number of rooms and preparation required."
                            },
                            {
                                question: "How long does exterior paint last?",
                                answer: "With proper preparation and quality paint, exterior paint typically lasts 7–10 years, depending on exposure, surface type and maintenance."
                            },
                            {
                                question: "Do you help with color selection?",
                                answer: "Yes. We can provide color consultation and recommendations to help you choose shades that complement your space and lighting."
                            },
                            {
                                question: "Is exterior painting weather-dependent?",
                                answer: "Yes. Exterior painting requires dry conditions and suitable temperatures. We schedule work carefully to ensure proper curing and long-lasting results."
                            },
                            {
                                question: "Do you paint over damaged surfaces?",
                                answer: "No. We address surface issues first. Minor repairs, sanding and priming are completed before painting to ensure a smooth and durable finish."
                            },
                            {
                                question: "Are your painters insured?",
                                answer: "Yes. Our team is fully insured and trained to work safely and professionally on both interior and exterior projects."
                            },
                            {
                                question: "Do you offer commercial painting services?",
                                answer: "Yes. We provide painting services for offices, retail spaces, strata buildings and commercial properties."
                            }
                        ]
                        : service.slug === "epoxy-flooring-installation"
                        ? [
                            {
                                question: "What is epoxy flooring?",
                                answer: "Epoxy flooring is a protective coating made by combining resin and hardener, which chemically bond to create a strong, seamless surface over concrete."
                            },
                            {
                                question: "Is epoxy flooring suitable for garages?",
                                answer: "Yes. Epoxy is one of the best options for garages because it resists oil, chemicals, tire marks and moisture while providing a clean, durable finish."
                            },
                            {
                                question: "How long does epoxy flooring last?",
                                answer: "With proper preparation and professional installation, epoxy flooring can last 10–20 years, depending on usage and maintenance."
                            },
                            {
                                question: "Is epoxy flooring slippery?",
                                answer: "Epoxy can be slippery when wet, but we offer non-slip additives to improve traction and safety."
                            },
                            {
                                question: "How long does installation take?",
                                answer: "Most epoxy flooring projects take 1–3 days, including surface preparation and curing time."
                            },
                            {
                                question: "Can epoxy be applied over old or damaged concrete?",
                                answer: "Yes, as long as the concrete is structurally sound. We repair minor cracks and surface issues before applying epoxy to ensure proper adhesion."
                            },
                            {
                                question: "Is epoxy flooring easy to maintain?",
                                answer: "Yes. Epoxy floors are low-maintenance and easy to clean with regular sweeping and occasional mopping."
                            },
                            {
                                question: "Can I customize the look of my epoxy floor?",
                                answer: "Absolutely. We offer solid colors, decorative flakes and high-gloss finishes to match your style and space."
                            },
                            {
                                question: "Is epoxy flooring suitable for commercial spaces?",
                                answer: "Yes. Epoxy is widely used in commercial and industrial environments due to its strength, durability, and professional appearance."
                            }
                        ]
                        : [
                            {
                                question: "What can I expect on the day of service?",
                                answer: "We'll call or text on the way to your home in Lower Mainland or Fraser Valley. You don't need to be home for outside work, but we'll knock on the door to greet you either way. We'll let you know if we have questions for you or if your home could benefit from any additional services. When finished, we will come to the door to chat before we leave. We can answer any other questions you may have, let you know if we encountered anything unusual while we worked, and offer recommendations for a service schedule going forward."
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
                        ]
                }
            />

            {/* Contact Us Section */}
            < ContactUs />
        </>
    );
}

