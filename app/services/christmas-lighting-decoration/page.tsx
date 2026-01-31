import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChristmasLightServiceDetail from "./ChristmasLightServiceDetail";

export default function ChristmasLightPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/our-services" },
    { label: "Christmas Light Installation" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <ChristmasLightServiceDetail breadcrumbs={breadcrumbs} />
      </main>
      <Footer />
    </>
  );
}

