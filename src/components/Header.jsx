"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto pt-5 px-4 sm:px-6 md:px-8 z-30 relative">
      <div className="hero-navbar-pill px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 font-bold text-xl text-[#0F172A] no-underline">
          <img src="/default-logo.svg" alt="Trustie Logo" width={28} height={28} className="object-contain" />
          <span className="tracking-tight text-xl font-bold">Trustie</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="hero-nav-link">Features</a>
          <a href="#how-it-works" className="hero-nav-link">How It Works</a>
          <a href="#pricing" className="hero-nav-link">Pricing</a>
          <a href="#faq" className="hero-nav-link">FAQ</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#install"
            className="btn-primary-shopify px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            <img src="/assets/shopfiy_logo_white.svg" alt="Shopify" width={16} height={16} className="object-contain" />
            <span>Install on Shopify</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 md:hidden flex flex-col gap-3 z-50">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hero-nav-link py-2 px-3 hover:bg-gray-50 rounded-lg">Features</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="hero-nav-link py-2 px-3 hover:bg-gray-50 rounded-lg">How It Works</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hero-nav-link py-2 px-3 hover:bg-gray-50 rounded-lg">Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hero-nav-link py-2 px-3 hover:bg-gray-50 rounded-lg">FAQ</a>
          <a
            href="#install"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary-shopify py-3 rounded-xl text-center text-sm font-semibold mt-2"
          >
            <img src="/assets/shopfiy_logo_white.svg" alt="Shopify" width={16} height={16} className="object-contain" />
            <span>Install on Shopify</span>
          </a>
        </div>
      )}
    </header>
  );
}
