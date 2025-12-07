'use client';

import { ReactNode } from "react";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    onLearnMore?: () => void;
}

const ServiceCard = ({ icon, title, description, onLearnMore }: ServiceCardProps) => {
    return (
        <div className="flex flex-col sm:flex-row items-start gap-6 py-8 border-b border-border last:border-b-0">
            <div className="flex-shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-service flex items-center justify-center shadow-service">
                    <div className="w-14 h-14 md:w-16 md:h-16 text-white">
                        {icon}
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-service-heading">
                    {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {description}
                </p>
                <button
                    onClick={onLearnMore}
                    className="group"
                >
                    LEARN MORE
                    <img src="/icons/arrow-right.svg" alt="Arrow Right" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
