import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import HeroBanner from "@/components/HeroBanner";
import FraserValleyMap from "@/components/FraserValleyMap";
import Box from "@mui/material/Box";

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroBanner
          title="Get In Touch With us"
          breadcrumbs={breadcrumbs}
          backgroundImage="/home-about-imp2.png"
          minHeight="260px"
        />

        {/* Contact Us Section */}
        <ContactUs />

        {/* Fraser Valley Map Section */}
        <Box className="w-full bg-white py-8 md:py-12">
          <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
            <FraserValleyMap />
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}

