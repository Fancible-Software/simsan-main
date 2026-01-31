import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EpoxyFlooringServiceDetail from "./EpoxyFlooringServiceDetail";

export default function EpoxyFlooringInstallationPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/our-services" },
    { label: "Epoxy Flooring Installation" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <EpoxyFlooringServiceDetail breadcrumbs={breadcrumbs} />
      </main>
      <Footer />
    </>
  );
}

