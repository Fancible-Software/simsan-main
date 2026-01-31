"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/colors";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ServiceDetailProps {
    breadcrumbs: BreadcrumbItem[];
}

export default function PressureWashingServiceDetail({ breadcrumbs }: ServiceDetailProps) {
    const heroImage = "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_1.webp";
    const galleryImages = [
        "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_1.webp",
        "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_2.webp",
        "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_3.webp"
    ];

    return (
        <>
            {/* Hero Section */}
            <Box
                className="relative w-full min-h-[520px] lg:min-h-[660px] flex flex-col justify-center"
                style={{
                    background: `url('${heroImage}') center center/cover no-repeat`,
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
                            Pressure Washing for Concrete & Wooden Surfaces
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
                        {/* Left Column - Content */}
                        <Box className="flex-1">
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
                                style={{ color: colors.primary }}
                            >
                                Expert Pressure Washing for Concrete & Wooden Surfaces & Maintenance
                            </h2>
                            <p
                                className="text-lg md:text-xl mb-6"
                                style={{ color: colors.secondary }}
                            >
                                Serving the Lower Mainland & Fraser Valley
                            </p>

                            <Box className="space-y-4 mb-8" style={{ color: "#212121" }}>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Our pressure washing services for concrete and wooden surfaces are designed to safely restore the appearance of your outdoor areas while protecting the integrity of the surface. We use professional-grade pressure washing equipment with carefully controlled pressure levels to remove dirt, algae, moss, mildew, grease and buildup without causing damage.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Concrete surfaces such as driveways, sidewalks, patios, garage floors, and walkways benefit from pressure washing to remove stains and improve safety by reducing slippery algae and moss. For wooden surfaces like decks, fences and pergolas, we use lower pressure and proper techniques to clean effectively without splintering or etching the wood.
                                </p>

                                {/* Surfaces List */}
                                <Box>
                                    <h3
                                        className="text-xl md:text-2xl font-bold mb-4"
                                        style={{ color: colors.secondary }}
                                    >
                                        Surfaces we pressure wash:
                                    </h3>
                                    <ul className="space-y-3" style={{ color: colors.secondary }}>
                                        {[
                                            "Concrete driveways, patios, sidewalks and slabs",
                                            "Garage floors and parking areas",
                                            "Wooden decks, fences, railings and stairs",
                                            "Pool decks and outdoor living spaces"
                                        ].map((type, index) => (
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

                                {/* Benefits List */}
                                <Box>
                                    <h3
                                        className="text-xl md:text-2xl font-bold mb-4"
                                        style={{ color: colors.secondary }}
                                    >
                                        Benefits of professional pressure washing:
                                    </h3>
                                    <ul className="space-y-3" style={{ color: colors.secondary }}>
                                        {[
                                            "Restores curb appeal and brightens outdoor spaces",
                                            "Removes slippery algae, moss and mildew",
                                            "Prepares surfaces for sealing or staining",
                                            "Extends the life of concrete and wood",
                                            "Improves safety and overall appearance"
                                        ].map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span
                                                    className="text-xl font-bold mt-1"
                                                    style={{ color: colors.secondary }}
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

                                <p className="text-base md:text-lg leading-relaxed">
                                    Regular pressure washing is especially important in the Lower Mainland and Fraser Valley climate, where moisture promotes algae and organic growth. Routine cleaning helps protect your investment and keeps your property looking clean and well-maintained year-round.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    At Simsan Fraser Maintenance Ltd, we provide professional concrete and wood pressure washing services across Lower Mainland and Fraser Valley area, delivering consistent, high-quality results you can trust.
                                </p>
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
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[0]}
                                        alt="Pressure Washing - Image 1"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[1]}
                                        alt="Pressure Washing - Image 2"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 col-span-2 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[2]}
                                        alt="Pressure Washing - Image 3"
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
                title="Frequently Asked Questions – Concrete & Wood Pressure Washing"
                items={[
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
                ]}
            />

            {/* Contact Us Section */}
            <ContactUs />
        </>
    );
}

