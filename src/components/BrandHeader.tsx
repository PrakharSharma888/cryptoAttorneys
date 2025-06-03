import React from "react";
import { useNavigate } from "react-router-dom";

export function BrandHeader() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-transparent bg-gradient-to-br from-[#0A2540] to-[#1A365D]">
      <div className="flex items-center gap-3">
        {/* Uncomment and update src if you have a logo */}
        {/* <img src="/logo.png" alt="Logo" className="h-10 w-10" /> */}
        <span className="text-xl font-bold text-white">Crypto Attorney's</span>
      </div>
      <button
        onClick={() => navigate("/")}
        className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded transition"
      >
        Back to Home
      </button>
    </div>
  );
}
