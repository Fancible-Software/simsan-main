import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/constants/services";

export default function RoofGutterCleaningPage() {
  const service = getServiceBySlug("roof-gutter-cleaning");
  
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
      question: "What can I expect on the day of service?",
      answer: "We'll call or text on the way to your home in Lower Mainland or Fraser Valley. You don't need to be home for outside work, but we'll knock on the door to greet you either way. We'll let you know if we have questions for you or if your home could benefit from any additional services. When finished, we will come to the door to chat before we leave. We can answer any other questions you may have, let you know if we encountered anything unusual while we worked and offer recommendations for a service schedule going forward."
    },
    {
      question: "How often should I have my gutters cleaned?",
      answer: "We recommend cleaning your gutters at least twice a year—typically in the spring and fall. However, homes with heavy tree coverage, frequent storms or moss-prone areas may benefit from more frequent cleanings (every 3-4 months). Our team can assess your specific situation and recommend a maintenance schedule that works best for your home."
    },
    {
      question: "Do I need to be home during the service?",
      answer: "No, you don't need to be home for outside work. We'll call or text when we're on our way and we'll knock on your door when we arrive. If you're not home, we'll complete the work and leave a note or call you afterward to discuss any findings or recommendations."
    },
    {
      question: "What happens if you find damage during the service?",
      answer: "If we discover any damage or potential issues during our service, we'll document it and discuss it with you immediately. We can provide recommendations for repairs and, if needed, refer you to trusted professionals. Our priority is keeping your home safe and well-maintained."
    },
    {
      question: "Do you offer any guarantees on your work?",
      answer: "Yes! We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with our service, we'll return to make it right at no additional charge. Your satisfaction is our top priority."
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
          faqTitle="Frequently Asked Questions"
          showBenefits={true}
          showCarePlan={true}
          showReliableServices={true}
        />
      </main>
      <Footer />
    </>
  );
}

