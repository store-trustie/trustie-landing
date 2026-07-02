"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const MailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0089FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function Hero() {
  const [shopUrl, setShopUrl] = useState("");

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    // Since the app is not listed yet, redirect to the contact form for demo requests
    window.location.href = "#contact";
  };

  return (
    <section className="relative max-w-5xl mx-auto mt-20 mb-20 px-5 text-center min-h-[60vh] flex flex-col items-center justify-center">
      
      {/* Floating Element 1 - Top Left */}
      <div className="absolute top-[10%] left-[-5%] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 p-4 animate-float -rotate-6 w-40 hidden md:block z-[-1]">
        <div className="flex gap-1 text-[#ffb800] text-sm mb-2">★★★★★</div>
        <div className="w-full h-2 bg-[#f3f4f6] rounded mb-2"></div>
        <div className="w-2/3 h-2 bg-[#f3f4f6] rounded"></div>
      </div>

      {/* Floating Element 2 - Top Right */}
      <div className="absolute top-[5%] right-[-5%] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 p-4 animate-float-delay-1 rotate-6 w-48 hidden md:flex items-center gap-3 z-[-1]">
        <div className="w-8 h-8 bg-[#0089FF] rounded-lg flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
        <div className="text-left">
          <div className="text-xs font-semibold text-[#111]">Review Approved</div>
          <div className="text-[10px] text-[#666]">Just now</div>
        </div>
      </div>

      {/* Floating Element 3 - Bottom Left */}
      <div className="absolute bottom-0 left-[5%] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 p-4 animate-float-delay-2 rotate-3 w-36 hidden md:block z-[-1]">
         <MailIcon />
         <div className="w-4/5 h-2 bg-[#f3f4f6] rounded mt-3 mb-2"></div>
         <div className="w-3/5 h-2 bg-[#f3f4f6] rounded"></div>
      </div>

      {/* Main Content */}
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-white/80 z-10">
        <img src="/default-logo.svg" alt="TrustFlow Logo" width={40} height={40} className="object-contain" />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111] mb-6 leading-[1.1] z-10">
        Collect, manage, and display <br />
        <span className="text-[#9CA3AF] font-medium">all in one place</span>
      </h1>
      
      <p className="text-xl text-[#4B5563] max-w-2xl mx-auto mb-10 leading-relaxed z-10">
        Efficiently manage your store's social proof, build trust with elegant widgets, and boost productivity.
      </p>

      <div id="install" className="w-full max-w-md mx-auto bg-white p-2 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] z-10">
        <form onSubmit={handleDemoSubmit} className="flex flex-col sm:flex-row w-full gap-2">
          <div className="relative flex-1 flex items-center bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] px-3 focus-within:border-[#0089FF] focus-within:ring-1 focus-within:ring-[#0089FF] transition-all">
            <input 
              className="w-full bg-transparent border-none outline-none py-3 text-[#111] placeholder:text-[#9CA3AF] text-[15px]" 
              type="text" 
              name="shop" 
              placeholder="your-store-name" 
              value={shopUrl}
              onChange={(e) => setShopUrl(e.target.value)}
              required
            />
            <span className="text-[#6B7280] text-[15px] whitespace-nowrap pl-1 pointer-events-none">.myshopify.com</span>
          </div>
          <button className="bg-[#0089FF] hover:bg-[#0076e0] text-white px-6 py-3 rounded-lg font-semibold text-[15px] transition-all whitespace-nowrap" type="submit">
            Get free demo
          </button>
        </form>
      </div>
    </section>
  );
}
