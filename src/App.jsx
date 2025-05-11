import "./App.css";
import FAQ from "./components/FAQ";
import FeaturesPanel from "./components/FeaturesPanel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import KeyBenefits from "./components/KeyBenefits";
import LearnMore from "./components/LearnMore";
import OutputValues from "./components/OutputValues";
import PricingSection from "./components/PricingSection";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
<<<<<<< HEAD
          {/* <FeaturesPanel /> */}
=======
>>>>>>> e7a0bd7b9107f3c5972dc1ab482f56443995d4b8
          <KeyBenefits />
          <PricingSection />
          <OutputValues />
          <LearnMore />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
