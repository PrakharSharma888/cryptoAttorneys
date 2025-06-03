import React from 'react';
import { BrandHeader } from "../BrandHeader"; // Make sure this is your BrandHeader component

const StartupLegalHero = () => {
  return (
    <>
      <BrandHeader />
      <section
        id="startup-legal"
        className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
          {/* Left Content - Wider */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Legal Services for Startups
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 opacity-90">
              Full-Spectrum Legal Support for Founders and Innovators
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Startups move fast, and we keep pace with flexible, scalable legal services that grow with you. We help you launch confidently, raise capital, and protect your vision.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              STARTUP SERVICES INCLUDE:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl opacity-90">
              <li>
                <strong>Entity formation and jurisdictional selection</strong>
              </li>
              <li>
                <strong>Founders’ agreements and internal governance documents</strong>
              </li>
              <li>
                <strong>SAFE, convertible note, and priced equity round documentation</strong>
              </li>
              <li>
                <strong>Intellectual property protection and licensing</strong>
              </li>
              <li>
                <strong>Employee agreements and equity incentive plans</strong>
              </li>
              <li>
                <strong>Product compliance reviews for app launches, dApps, and token-based systems</strong>
              </li>
              <li>
                <strong>General counsel services for ongoing legal needs</strong>
              </li>
              <li>
                We work with founders in fintech, blockchain, SaaS, AI, gaming, and beyond—building legal strategies that support growth, innovation, and fundraising.
              </li>
            </ul>
          </div>
          {/* Right Content - Smaller, Visual Focus */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
            <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
              <span className="text-6xl">⚖️</span>
              {/* Or use a custom icon if you have one */}
            </div>
            <div className="bg-opacity-10 bg-white p-6 rounded-2xl backdrop-blur-md border border-white border-opacity-20 shadow-lg w-full">
              <h3 className="text-xl font-bold mb-4 opacity-90">Why Choose Us?</h3>
              <ul className="space-y-2 opacity-90">
                <li>✓ Customized for your jurisdiction</li>
                <li>✓ Secure and compliant</li>
                <li>✓ Fast turnaround</li>
                <li>✓ Expert legal review</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      </section>
    </>
  );
};

export default StartupLegalHero;
