import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/constants/services";

export default function SoftWashingPage() {
  const service = getServiceBySlug("soft-washing");
  
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
      question: "What is vinyl siding soft washing with a water-fed pole?",
      answer: "It's a low-pressure exterior cleaning method that uses extendable water-fed poles with soft-bristle brushes and professional cleaning solutions to gently remove dirt, algae, mildew and pollen from vinyl siding—without using damaging high pressure."
    },
    {
      question: "Is the water-fed pole system safe for vinyl siding?",
      answer: "Yes. The system is specifically designed for delicate surfaces like vinyl siding. The soft-bristle brush and controlled water flow prevent scratching, cracking or loosening of panels."
    },
    {
      question: "Will this method remove green algae and mildew?",
      answer: "Yes. Soft washing treats the root cause of staining by breaking down algae, mold and mildew, not just rinsing the surface. This results in a cleaner appearance that lasts longer."
    },
    {
      question: "Do you use high pressure on the siding?",
      answer: "No. We use low pressure only. High pressure can force water behind siding or cause damage. The water-fed pole system provides a gentle yet effective clean."
    },
    {
      question: "Can you clean upper-level vinyl siding?",
      answer: "Absolutely. Water-fed poles allow us to safely clean second- and third-story siding from the ground, reducing the need for ladders and improving safety."
    },
    {
      question: "Are the cleaning solutions safe?",
      answer: "Yes. We use biodegradable, exterior-safe cleaning solutions that are effective on grime and organic growth while being safe for landscaping, pets and surrounding surfaces when applied properly."
    },
    {
      question: "How often should vinyl siding be soft washed?",
      answer: "In the Lower Mainland and Fraser Valley climate, most homes benefit from soft washing every 1–2 years, depending on shade, moisture and nearby vegetation."
    },
    {
      question: "Will soft washing damage paint or fade vinyl?",
      answer: "No. When done correctly, soft washing is gentler than pressure washing and helps preserve the color and finish of vinyl siding."
    },
    {
      question: "Is water-fed pole soft washing better than traditional pressure washing?",
      answer: "Yes. For vinyl siding, water-fed pole soft washing is safer, more consistent and reduces the risk of water intrusion or surface damage compared to traditional pressure washing."
    },
    {
      question: "Do you offer this service throughout the Lower Mainland & Fraser Valley?",
      answer: "Yes. We provide vinyl siding soft washing services across Lower Mainland and Fraser Valley Area."
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
          faqTitle="Frequently Asked Questions – Soft Washing"
          showBenefits={true}
          showCarePlan={false}
          showReliableServices={false}
        />
      </main>
      <Footer />
    </>
  );
}

