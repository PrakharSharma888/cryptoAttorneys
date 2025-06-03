import React, { useState } from "react";
import ContractDrafting from "./Services/ContractDrafting";
import Taxation from "./Services/Taxation";
import { useNavigate } from 'react-router-dom';

// Import other service components similarly

const serviceComponents = [
  { title: "Contract Drafting", component: <ContractDrafting />, route: '/services/contractDrafting' },
  { title: "Taxation", component: <Taxation />, route: '/services/taxation' },
  { title: "Corporate Structuring & Incorporation", component: <div>Corporate Structuring Component</div>, route: '/services/corporateStIn' },
  { title: "FinTech Law", component: <div>FinTech Law Component</div>, route: '/services/fintech' },
  { title: "Token Launch & ICOs", component: <div>Token Launch Component</div>, route: '/services/tokenLaunch' },
  { title: "Tech & Privacy Law", component: <div>Tech & Privacy Component</div>, route: '/services/techPrivacy' },
  { title: "Regulatory Compliance", component: <div>Regulatory Compliance Component</div>, route: '/services/regulatoryComplaince' },
  { title: "Policy & Research", component: <div>Policy & Research Component</div>, route: '/services/policyAndResearch' },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-2">
            Crypto, Web3 & Blockchain Legal Services
          </h2>
          <h3 className="text-xl font-semibold text-[#0A2540] mb-4">
            Strategic Legal Support for Decentralized Innovation
          </h3>
        </div>

        {selected === null ? (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {serviceComponents.map((service, idx) => (
              <button
                key={idx}
                className="text-xl font-bold text-[#0A2540] bg-white rounded-xl shadow-md p-8 hover:bg-[#BF9B30]/10 transition-all duration-300"
                onClick={() => navigate(service.route)}
              >
                {service.title}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button
              className="mb-4 px-4 py-2 bg-gray-200 rounded"
              onClick={() => setSelected(null)}
            >
              ← Back to Services
            </button>
            {serviceComponents[selected].component}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;