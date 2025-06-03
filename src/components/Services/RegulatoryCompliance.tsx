import React from "react";
import { BrandHeader } from "../BrandHeader"; // Make sure this is your BrandHeader component

const RegulatoryComplianceHero = () => {
  return (
    <>
      <BrandHeader />
      <section
        id="regulatory-compliance"
        className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
          {/* Left Content - Wider */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Regulatory Compliance
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Blockchain and cryptocurrency ventures operate in an environment
              marked by fast-evolving regulatory developments and legal
              uncertainty. This demands constant vigilance and adaptability.
              Beyond crypto-specific regulations, these businesses may also be
              subject to a range of legal frameworks—spanning corporate law,
              taxation, banking and payments, foreign exchange regulations, and
              more—depending on the nature of their operations.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Compliance requirements vary widely across statutes but can
              generally be grouped into key categories, including licensing and
              registration, maintenance of statutory records, filing of forms
              and returns, payment of recurring regulatory fees, disclosure and
              display obligations, adherence to security protocols, and
              procedural standards.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              OUR REGULATORY COMPLIANCE SERVICES INCLUDE:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl opacity-90">
              <li>
                <strong>
                  Advisory and assistance in securing regulatory licenses,
                  approvals, and registrations with authorities in Crypto and
                  Web3 sector
                </strong>
              </li>
              <li>
                <strong>
                  Project-specific legal reviews and compliance strategy
                  consulting
                </strong>
              </li>
              <li>
                <strong>
                  Preparation of customized regulatory compliance checklists and
                  implementation of operational compliance frameworks
                </strong>
              </li>
              <li>
                <strong>
                  Liaison and communication with relevant regulatory bodies
                </strong>
              </li>
              <li>
                <strong>
                  Advice on AML/KYC framework development and internal policy
                  creation
                </strong>
              </li>
              <li>
                <strong>
                  Securities classification and exemption strategies
                </strong>
              </li>
              <li>
                <strong>
                  Data privacy compliance (GDPR, CCPA, PDPA, etc.)
                </strong>
              </li>
              <li>
                <strong>International product compliance for Crypto</strong>
              </li>
              <li>
                <strong>
                  Drafting and submission of regulatory filings, forms, and
                  applications
                </strong>
              </li>
              <li>
                <strong>
                  Legal representation before domestic and international
                  regulatory authorities
                </strong>
              </li>
              <li>
                Our lawyers assist with the entire lifecycle—from regulatory
                planning and license applications to governance setup and
                ongoing compliance audits.
              </li>
            </ul>
          </div>
          {/* Right Content - Smaller, Visual Focus */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
            <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
              <span className="text-6xl">🛡️</span>
              {/* Or use a custom icon if you have one */}
            </div>
            <div className="bg-opacity-10 bg-white p-6 rounded-2xl backdrop-blur-md border border-white border-opacity-20 shadow-lg w-full">
              <h3 className="text-xl font-bold mb-4 opacity-90">
                Why Choose Us?
              </h3>
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

export default RegulatoryComplianceHero;
