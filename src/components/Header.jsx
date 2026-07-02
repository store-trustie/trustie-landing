"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-6 px-4 md:px-16 max-w-7xl mx-auto w-full">
      <a href="/" className="flex items-center gap-2 font-bold text-xl text-[#111] no-underline">
        <img src="/default-logo.svg" alt="TrustFlow Logo" width={28} height={28} className="object-contain" />
        TrustFlow
      </a>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <a href="#features" className="text-[#6B7280] font-medium text-[15px] hover:text-[#111] transition-colors">Features</a>
        <a href="#pricing" className="text-[#6B7280] font-medium text-[15px] hover:text-[#111] transition-colors">Pricing</a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-600 hover:text-gray-900 p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white border border-gray-100 rounded-xl shadow-xl p-4 md:hidden flex flex-col gap-4 z-50">
          <a href="#features" className="text-[#6B7280] font-medium text-lg p-2 hover:bg-gray-50 rounded-lg">Features</a>
          <a href="#pricing" className="text-[#6B7280] font-medium text-lg p-2 hover:bg-gray-50 rounded-lg">Pricing</a>
        </div>
      )}
    </header>
  );
}
