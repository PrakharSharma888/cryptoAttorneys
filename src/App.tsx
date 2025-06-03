import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContractDrafting from "./components/Services/ContractDrafting";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Taxation from "./components/Services/Taxation";
import PolicyResearchHero from "./components/Services/PolicyAndResearch";
import RegulatoryComplianceHero from "./components/Services/RegulatoryCompliance";
import StartupLegalHero from "./components/Services/StartupLegal";
import TechPrivacyLawHero from "./components/Services/TechPrivacyLaw";
import TokenLaunchHero from "./components/Services/TokenLaunch";
import FintechLawAdvisoryHero from "./components/Services/Fintech";
import CorporateStructuringHero from "./components/Services/CorporateStructuringIncorporation";

function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

// New component to handle routing-aware content
function AppContent() {
  const location = useLocation();
  const excludeNavbarPaths = ["/services/contractDrafting", "/services/taxation", "/services/policyAndResearch", "/services/regulatoryComplaince", "/services/startupLegal", "/services/techPrivacy", "/services/tokenLaunch"];
  const shouldShowNavbar = !excludeNavbarPaths.includes(location.pathname);

  useEffect(() => {
    document.title = "Crypto Attorney's | Expert Legal Services";

    // Named function for proper cleanup
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (!href) return;
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="font-sans">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/contractDrafting" element={<ContractDrafting />} />
        <Route path="/services/taxation" element={<Taxation />} />
        <Route path="/services/policyAndResearch" element={<PolicyResearchHero />} />
        <Route path="/services/regulatoryComplaince" element={<RegulatoryComplianceHero />} />
        <Route path="/services/startupLegal" element={<StartupLegalHero />} />
        <Route path="/services/techPrivacy" element={<TechPrivacyLawHero />} />
        <Route path="/services/tokenLaunch" element={<TokenLaunchHero />} />
        <Route path="/services/fintech" element={<FintechLawAdvisoryHero />} />
        <Route path="/services/corporateStIn" element={<CorporateStructuringHero />} />
      </Routes>
      {shouldShowNavbar && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
