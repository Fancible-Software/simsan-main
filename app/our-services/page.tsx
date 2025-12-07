import HeroBanner from "./HeroBanner";
import ServiceSection from "./ServiceSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services" },
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                <HeroBanner
                    title="Our Services"
                    breadcrumbs={breadcrumbs}
                />
                {/* Page Content Placeholder */}
                <ServiceSection />
            </main>
            <Footer />
        </>
    );
};

export default Index;
