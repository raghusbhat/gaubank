import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import JourneySection from "./components/JourneySection";
import FacilitySection from "./components/FacilitySection";
import AddressSection from "./components/AddressSection";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <FacilitySection />
      <Donate />
      <AddressSection />
      <Footer />
    </>
  );
}

export default App;
