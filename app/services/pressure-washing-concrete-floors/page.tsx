import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PressureWashingServiceDetail from "./PressureWashingServiceDetail";

export default function PressureWashingConcreteFloorsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/our-services" },
    { label: "Pressure Washing for Concrete & Wooden Surfaces" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <PressureWashingServiceDetail breadcrumbs={breadcrumbs} />
      </main>
      <Footer />
    </>
  );
}

