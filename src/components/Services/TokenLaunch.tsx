import React from "react";
import { BrandHeader } from "../BrandHeader"; // Make sure this is your BrandHeader component

const TokenLaunchHero = () => {
  return (
    <>
      <BrandHeader />
      <section
        id="token-launch"
        className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
          {/* Left Content - Wider */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Token Launch
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 opacity-90">
              ICO / IDO / IEO / ILO / INO
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              A significant number of crypto projects involve the issuance of
              native tokens or cryptocurrencies to raise capital for the
              development, scaling, or upkeep of their networks or ecosystems.
              Since the early days of token fundraising around 2016–2017, the
              methods for launching tokens have evolved considerably. While
              Initial Coin Offerings (ICOs) were once the dominant model for
              raising funds, newer mechanisms such as Initial DEX Offerings
              (IDOs) and Initial Exchange Offerings (IEOs) have gained
              popularity among blockchain projects.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Decentralized Finance (DeFi) platforms, in particular, often adopt
              the Initial Liquidity Offering (ILO) model, encouraging token
              buyers to contribute directly to liquidity pools. Other
              fundraising methods like Initial NFT Offerings (INOs) have also
              emerged, reflecting the diversification of token launch
              strategies.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Many jurisdictions have now introduced regulations governing ICOs
              and other token sale formats. Where tokens exhibit characteristics
              of securities, additional registration and regulatory approvals
              may be required. For instance, in the United States, public ICOs
              must generally be registered with the SEC unless an exemption
              applies. Meanwhile, in other regions, these offerings may remain
              unregulated due to the absence of specific legal frameworks—though
              securities and financial compliance obligations may still apply
              based on the token's functionality and classification.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              OUR TOKEN LAUNCH SERVICES INCLUDE:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl opacity-90">
              <li>
                <strong>
                  Legal review and analysis of token and its possible
                  characterization
                </strong>
              </li>
              <li>
                <strong>Advisory on Token Structuring & Documentation</strong>
              </li>
              <li>
                <strong>DAO Structuring & Legal Wrappers</strong>
              </li>
              <li>
                <strong>Platform & Protocol Legal Frameworks</strong>
              </li>
              <li>
                <strong>NFT and IP Protection</strong>
              </li>
              <li>
                <strong>DEX/CEX Compliance & Risk Management</strong>
              </li>
              <li>
                <strong>
                  Advisory services relating to appropriate corporate
                  structuring and incorporation of the token issuing entity
                </strong>
              </li>
              <li>
                <strong>
                  Preparation of documentation and liaising with centralized and
                  decentralized exchanges for token listings
                </strong>
              </li>
              <li>
                <strong>
                  Comprehensive review of tokenomics and evaluation of
                  security-related concerns
                </strong>
              </li>
            </ul>
          </div>
          {/* Right Content - Smaller, Visual Focus */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
            <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
              <span className="text-6xl">🚀</span>
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

export default TokenLaunchHero;
