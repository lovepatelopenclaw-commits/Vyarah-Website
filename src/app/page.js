import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import PageLoader from "@/components/PageLoader";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <Hero />
      <Marquee />
      <ProblemSolution />
      <Services />
      <Process />
      <Portfolio />
      <WhyUs />
      <TechStack />
      <Team />
      <Testimonials />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
      <ScrollReveal />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
