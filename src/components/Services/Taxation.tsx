import React from 'react';
import { BrandHeader } from "../BrandHeader"; // Make sure this is your BrandHeader component

const TaxationHero = () => {
  return (
    <>
      <BrandHeader />
      <section
        id="taxation"
        className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
          {/* Left Content - Wider */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tax Planning for Web3, DeFi & Tokenized Economies
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Cryptocurrency taxation is complex and varies significantly across jurisdictions. We assist individuals, founders, DAOs, and corporate entities in meeting tax obligations, optimizing structures, and minimizing unnecessary burdens.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              OUR CRYPTO TAX SERVICES INCLUDE:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl opacity-90">
              <li>
                <strong>Cross-border tax strategy and jurisdictional tax mapping</strong>
              </li>
              <li>
                <strong>Income, capital gains, and staking/airdrop tax treatment</strong>
              </li>
              <li>
                <strong>Tax-efficient entity and foundation structuring (onshore/offshore)</strong>
              </li>
              <li>
                <strong>Corporate tax planning for exchanges, DAOs, and NFT platforms</strong>
              </li>
              <li>
                <strong>Legal structuring for token vesting, unlocks, and liquidity events</strong>
              </li>
              <li>
                <strong>Personal tax strategy for founders, token holders, and investors</strong>
              </li>
              <li>
                <strong>Regulatory risk mitigation through robust tax compliance frameworks</strong>
              </li>
              <li>
                We assist with accounts, financial advice, and crypto-native tax to offer integrated, secure tax solutions.
              </li>
            </ul>
          </div>
          {/* Right Content - Smaller, Visual Focus */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
            <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
              <span className="text-6xl">💰</span>
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

export default TaxationHero;
