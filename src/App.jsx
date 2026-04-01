import { useEffect } from "react";
import AboutDoctor from "./components/AboutDoctor";
import Appointment from "./components/Appointment";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Contact from "./components/Contact";
import DoctorCredibilityStrip from "./components/DoctorCredibilityStrip";
import EmergencyBar from "./components/EmergencyBar";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import GoogleReviews from "./components/GoogleReviews";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PolicyCards from "./components/PolicyCards";
import Services from "./components/Services";
import Staff from "./components/Staff";
import StickyCTA from "./components/StickyCTA";
import Testimonials from "./components/Testimonials";
import TreatmentHighlights from "./components/TreatmentHighlights";
import WhyChooseUs from "./components/WhyChooseUs";
import { config } from "./data/config";

export default function App() {
  useEffect(() => {
    document.title = config.seo.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", config.seo.description);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", config.seo.title);
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute("content", config.seo.description);
    }
  }, []);

  return (
    <>
      <Navbar />
      <EmergencyBar />
      <main>
        <Hero />
        <Services />
        <TreatmentHighlights />
        <DoctorCredibilityStrip />
        <AboutDoctor />
        <Gallery />
        <BeforeAfterSlider />
        <Staff />
        <Testimonials />
        <GoogleReviews />
        <WhyChooseUs />
        <PolicyCards />
        <FAQSection />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
