import React from 'react';
import { BrandHeader } from "../BrandHeader"; // Make sure this is your BrandHeader component

const PolicyResearchHero = () => {
  return (
    <>
      <BrandHeader />
      <section
        id="policy-research"
        className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
          {/* Left Content - Wider */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Policy & Research
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              It is increasingly evident that both institutional actors and governments are recognizing not only the economic efficiencies but also the ethical potential of blockchain technologies. In recent years, adoption of these technologies has surged—accelerated further by the post-pandemic digital shift that redefined how people interact, transact, and collaborate. This transformation has presented new challenges for policymakers across a wide range of sectors. Critical questions around equality, justice, access, and efficiency in the digital age are now central to global discourse among business leaders, regulators, and governments alike.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              At Crypto Attorneys, we closely monitor these evolving developments and offer in-depth, research-backed insights on pressing policy issues. We collaborate actively with academic institutions, think tanks, and advocacy organizations to contribute to evidence-based policymaking in the blockchain and Web3 space.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              OUR POLICY & RESEARCH SERVICES INCLUDE:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl opacity-90">
              <li>
                <strong>In-depth, sector-specific research</strong>
              </li>
              <li>
                <strong>Exploration and promotion of blockchain use-cases</strong>
              </li>
              <li>
                <strong>Policy analysis and advocacy initiatives</strong>
              </li>
              <li>
                <strong>Social impact assessments for blockchain and emerging technologies</strong>
              </li>
              <li>
                <strong>Stakeholder mapping and engagement strategies</strong>
              </li>
              <li>
                <strong>Legal and policy analysis across jurisdictions</strong>
              </li>
            </ul>
          </div>
          {/* Right Content - Smaller, Visual Focus */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
            <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
              <span className="text-6xl">📚</span>
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

export default PolicyResearchHero;
