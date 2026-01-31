import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteriorExteriorPaintingServiceDetail from "./InteriorExteriorPaintingServiceDetail";

export default function InteriorExteriorPaintingPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/our-services" },
    { label: "Interior & Exterior Painting Services" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <InteriorExteriorPaintingServiceDetail breadcrumbs={breadcrumbs} />
      </main>
      <Footer />
    </>
  );
}

