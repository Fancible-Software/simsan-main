'use client';
import RoofGutterIcon from "@/public/icons/tsx/RoofGutterIcon";
import ServiceCard from "./ServiceCard";
import WindowWashingIcon from "@/public/icons/tsx/WindowWashingIcon";
import PressureCleaningIcon from "@/public/icons/tsx/PressureCleaningIcon";
import ChristmasDecorationIcon from "@/public/icons/tsx/ChristmasDecorationIcon";
import AsphaltShingleRoofCleaningIcon from "@/public/icons/tsx/AsphaltShingleRoofCleaningIcon";
import CedarRoofCleaningIcon from "@/public/icons/tsx/CedarRoofCleaningIcon";
import ConcreteTileRoofCleaningIcon from "@/public/icons/tsx/ConcreteTileRoofCleaningIcon";
import FlatRoofCleaningIcon from "@/public/icons/tsx/FlatRoofCleaningIcon";
import PressureWashingConcreteFloorsIcon from "@/public/icons/tsx/PressureWashingConcreteFloorsIcon";
import PressureWashingFloorsIcon from "@/public/icons/tsx/PressureWashingFloorsIcon";
import RoofBlowDebrisCleaningIcon from "@/public/icons/tsx/RoofBlowDebrisCleaningIcon";
import SpanishTileRoofCleaningIcon from "@/public/icons/tsx/SpanishTileRoofCleaningIcon";
import { colors } from "@/lib/colors";
import { SERVICES } from "@/constants/services";

const serviceIcons: Record<string, React.ReactNode> = {
    "roof-gutter-cleaning": <RoofGutterIcon className="w-full h-full" />,
    "window-washing": <WindowWashingIcon className="w-full h-full" />,
    "soft-washing": <PressureCleaningIcon className="w-full h-full" />,
    "pressure-cleaning": <PressureCleaningIcon className="w-full h-full" />,
    "christmas-lighting-decoration": <ChristmasDecorationIcon className="w-full h-full" />,
    "asphalt-shingle-roof-cleaning": <AsphaltShingleRoofCleaningIcon className="w-full h-full" />,
    "cedar-roof-cleaning": <CedarRoofCleaningIcon className="w-full h-full" />,
    "concrete-tile-roof-cleaning": <ConcreteTileRoofCleaningIcon className="w-full h-full" />,
    "flat-roof-cleaning": <FlatRoofCleaningIcon className="w-full h-full" />,
    "pressure-washing-concrete-floors": <PressureWashingConcreteFloorsIcon className="w-full h-full" />,
    "pressure-washing-floors": <PressureWashingFloorsIcon className="w-full h-full" />,
    "roof-blow-and-debris-cleaning": <RoofBlowDebrisCleaningIcon className="w-full h-full" />,
    "spanish-tile-roof-cleaning": <SpanishTileRoofCleaningIcon className="w-full h-full" />,
};

const ServicesSection = () => {
    return (
        <section className="py-10 pb-0 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section - Centered on Mobile/Tablet, Left on Desktop */}
                <div className="mb-10 sm:mb-12 md:mb-16 text-center lg:text-left">
                    <h2 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
                        style={{ color: colors.primary }}
                    >
                        Our Professional Services
                    </h2>
                    <p 
                        className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        style={{ color: '#666666' }}
                    >
                        We deliver a full range of property maintenance solutions, all
                        optimized for long-lasting results:
                    </p>
                </div>

                {/* Services List */}
                <div className="space-y-0">
                    {SERVICES.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            icon={serviceIcons[service.slug] || <RoofGutterIcon className="w-full h-full" />}
                            title={service.title}
                            description={service.description}
                            slug={service.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
