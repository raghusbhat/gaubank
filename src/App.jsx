import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import JourneySection from "./components/JourneySection";
import FacilitySection from "./components/FacilitySection";
import AddressSection from "./components/AddressSection";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import LanguageModal from "./components/LanguageModal";

function App() {
  return (
    <>
      <LanguageModal />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <FacilitySection />
      <Donate />
      <AddressSection />
      <Footer />
      <WhatsAppChat />
    </>
  );
}

export default App;
