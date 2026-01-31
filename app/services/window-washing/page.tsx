import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/constants/services";

export default function WindowWashingPage() {
  const service = getServiceBySlug("window-washing");
  
  if (!service) {
    return null;
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/our-services" },
    { label: service.title },
  ];

  const faqItems = [
    {
      question: "What is water-fed pole window cleaning?",
      answer: "Water-fed pole window cleaning is a modern method that uses extendable poles with soft-bristle brushes and 100% purified water to clean windows from the ground. The purified water removes dirt and grime and dries spot-free without the need for soaps or chemicals."
    },
    {
      question: "Is water-fed pole window cleaning safe for my windows?",
      answer: "Yes. This method is safe for glass, frames, seals and screens. The soft brushes are designed specifically for window cleaning and purified water contains no minerals that could cause damage or streaking."
    },
    {
      question: "Will my windows dry spot-free without soap?",
      answer: "Yes. Because we use natural and clean water, it dries naturally without leaving mineral spots or residue. This is what gives water-fed pole cleaning its streak-free finish."
    },
    {
      question: "Can you clean upper-floor windows with a water-fed pole?",
      answer: "Absolutely. Water-fed poles allow us to safely clean second-, third-, and multi-story windows without ladders, making it ideal for homes and commercial buildings throughout the Lower Mainland and Fraser Valley."
    },
    {
      question: "Is water-fed pole window washing better than traditional methods?",
      answer: "For most exterior window cleaning, yes. Water-fed pole systems are safer, more efficient and more environmentally friendly than traditional ladder and squeegee methods—especially for hard-to-reach windows."
    },
    {
      question: "Do you use any chemicals or detergents?",
      answer: "No. Our water-fed pole window cleaning uses pure water only, making it an eco-friendly solution that's safe for your family, pets, landscaping and the environment."
    },
    {
      question: "How often should I have my windows cleaned?",
      answer: "Most homeowners in the Lower Mainland and Fraser Valley schedule window cleaning 2–4 times per year, depending on exposure to rain, dust, pollen, and nearby trees. Commercial properties may benefit from more frequent service."
    },
    {
      question: "Can water-fed pole cleaning remove heavy buildup?",
      answer: "Yes. For regular maintenance and moderate buildup, water-fed pole cleaning is highly effective. For heavily soiled windows or first-time cleanings, we may combine methods to ensure the best possible results."
    },
    {
      question: "Do you offer water-fed pole window cleaning for commercial properties?",
      answer: "Yes. We provide residential and commercial window cleaning services for offices, retail spaces, strata buildings, and more across Lower Mainland and Fraser Valley."
    },
    {
      question: "Is water-fed pole window washing weather-dependent?",
      answer: "Light rain usually doesn't affect the results, as purified water dries spot-free. However, we may reschedule during heavy rain, strong winds or freezing conditions to ensure safety and quality."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <ServiceDetailTemplate 
          service={service} 
          breadcrumbs={breadcrumbs}
          faqItems={faqItems}
          faqTitle="Frequently Asked Questions – Window Washing"
          showBenefits={true}
          showCarePlan={false}
          showReliableServices={false}
        />
      </main>
      <Footer />
    </>
  );
}

