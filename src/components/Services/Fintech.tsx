import React from 'react';
import { BrandHeader } from "../BrandHeader"; // Make sure this is your BrandHeader component

const FintechLawAdvisoryHero = () => {
  return (
    <>
      <BrandHeader />
      <section
        id="fintech-law-advisory"
        className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
          {/* Left Content - Wider */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fintech Law Advisory
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Fintech law advisory is essential for navigating the complex and evolving regulatory landscape of financial technology. Our expertise ensures that your business remains compliant and competitive, whether you operate payment systems, digital wallets, lending platforms, or alternative investment funds across multiple jurisdictions[1][4][7].
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              OUR FINTECH LAW ADVISORY SERVICES INCLUDE:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl opacity-90">
              <li>
                <strong>Regulatory Licensing & Registration Advisory:</strong>
                <br />
                Guidance on obtaining necessary regulatory licenses and registrations for financial services businesses, including payment systems, digital wallets, lending platforms, and alternative investment funds (AIFs) across multiple jurisdictions.
              </li>
              <li>
                <strong>Business Model & Product Review:</strong>
                <br />
                Legal review and advisory on proposed business models, products, and service offerings to ensure compliance with local and international financial regulations, including anti-money laundering (AML), data protection, consumer protection, and financial services laws.
              </li>
              <li>
                <strong>Foreign Exchange Management Act (FEMA) Compliance:</strong>
                <br />
                Advisory services focused on international cross-border transactions, foreign investments, and compliance with global foreign exchange regulations.
              </li>
              <li>
                <strong>Foreign Direct Investment (FDI) & Corporate Restructuring:</strong>
                <br />
                Legal review of corporate structures, FDI compliance, and restructuring strategies to optimize your FinTech company’s global operations and investment opportunities.
              </li>
              <li>
                <strong>Investment Transaction Advisory:</strong>
                <br />
                Providing legal insights into funding strategies, investment agreements, and corporate governance for FinTech startups and established companies.
              </li>
              <li>
                <strong>Overseas Direct Investment (ODI) Compliance & Advisory:</strong>
                <br />
                Assistance with navigating the legal complexities of overseas investments, ensuring full compliance with local regulations and international trade laws.
              </li>
            </ul>
          </div>
          {/* Right Content - Smaller, Visual Focus */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
            <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
              <span className="text-6xl">💳</span>
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

export default FintechLawAdvisoryHero;
