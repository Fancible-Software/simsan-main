'use client';
import RoofGutterIcon from "@/public/icons/tsx/RoofGutterIcon";
import ServiceCard from "./ServiceCard";
import WindowWashingIcon from "@/public/icons/tsx/WindowWashingIcon";
import PressureCleaningIcon from "@/public/icons/tsx/PressureCleaningIcon";
import ChristmasDecorationIcon from "@/public/icons/tsx/ChristmasDecorationIcon";

const services = [
    {
        icon: <RoofGutterIcon className="w-full h-full" />,
        title: "Roof & Gutter Cleaning",
        description:
            "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    },
    {
        icon: <WindowWashingIcon className="w-full h-full" />,
        title: "Window Washing",
        description:
            "Crystal clear windows enhance your property's appearance and let in more natural light. Our professional window cleaning service removes dirt, grime, and streaks for spotless results every time.",
    },
    {
        icon: <PressureCleaningIcon className="w-full h-full" />,
        title: "Pressure Cleaning",
        description:
            "Restore your property's exterior surfaces to like-new condition. Our pressure cleaning service effectively removes mold, mildew, dirt, and stains from driveways, walkways, decks, and siding.",
    },
    {
        icon: <ChristmasDecorationIcon className="w-full h-full" />,
        title: "Christmas & Lighting Decoration",
        description:
            "Transform your property into a winter wonderland with our professional holiday lighting installation. We handle design, installation, maintenance, and removal for a hassle-free festive season.",
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6">
                <div className="mb-10 md:mb-14">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-service-heading mb-4">
                        Our Professional Services
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xl">
                        We deliver a full range of property maintenance solutions, all
                        optimized for long-lasting results:
                    </p>
                </div>

                <div className="divide-y divide-border">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            onLearnMore={() => console.log(`Learn more about ${service.title}`)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
