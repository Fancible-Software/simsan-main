import HeroBanner from "@/components/HeroBanner";
import ServiceSection from "./ServiceSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZipCodeCta from "@/components/ZipCodeCta";
import Box from "@mui/material/Box";

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
                    backgroundImage="simsan_fraser_main.jpg"
                    minHeight="360px"
                />
                {/* Services Section */}
                <ServiceSection />

            </main>
            <Footer />
        </>
    );
};

export default Index;
