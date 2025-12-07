import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface HeroBannerProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
}

const HeroBanner = ({ title, breadcrumbs }: HeroBannerProps) => {
    return (
        <section className="hero-banner">
            {/* Background Image */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                <img
                    src="/homepage1.png"
                    alt="Professional gutter cleaning services"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="hero-overlay" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16">
                    <div className="container mx-auto max-w-7xl">
                        {/* Title */}
                        <h1
                            className="mb-3 text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up"
                            style={{ animationDelay: "0.1s" }}
                        >
                            {title}
                        </h1>

                        {/* Breadcrumb */}
                        <nav
                            aria-label="Breadcrumb"
                            className="animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <ol className="flex items-center space-x-2 text-sm sm:text-base">
                                {breadcrumbs.map((item, index) => (
                                    <li key={item.label} className="flex items-center">
                                        {index > 0 && (
                                            <span className="breadcrumb-separator mx-2">-</span>
                                        )}
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="breadcrumb-link font-medium"
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <span className="breadcrumb-current font-medium">
                                                {item.label}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
