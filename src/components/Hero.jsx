"use client";

import { Play } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCentralWidget() {
  const [activeWidget, setActiveWidget] = useState(0); // 0 = Video, 1 = Scrollable
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (activeWidget === 0) {
      // Show Video widget for 4 seconds, then transition to Scrollable widget
      timeoutId = setTimeout(() => {
        setActiveWidget(1);
        setIsScrolling(false);
      }, 4000);
    } else if (activeWidget === 1) {
      // Scrollable widget starts at top, wait 600ms then start smooth scroll down
      const scrollStartTimer = setTimeout(() => {
        setIsScrolling(true);
      }, 600);

      // Scroll for 4.2s + hold at bottom for 1s = 5.2s total before fading back to Video widget
      const transitionTimer = setTimeout(() => {
        setActiveWidget(0);
        setIsScrolling(false);
      }, 5400);

      return () => {
        clearTimeout(scrollStartTimer);
        clearTimeout(transitionTimer);
      };
    }

    return () => clearTimeout(timeoutId);
  }, [activeWidget]);

  return (
    <div className="main-widget-shadow rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-white/80 transition-transform duration-300 hover:scale-[1.01] relative w-full aspect-[1424/692]">
      {/* 1. Video Review Widget Image (Static video showcase with fade) */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          activeWidget === 0 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        <img
          src="/assets/Video Review Widget.png"
          alt="Customer Video Reviews Showcase"
          className="w-full h-full object-cover block select-none"
        />
      </div>

      {/* 2. Review Widget Scrollable Image (Fade in + smooth inner scroll down) */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out overflow-hidden ${
          activeWidget === 1 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        <div
          className="w-full transition-transform duration-[4200ms] ease-in-out"
          style={{
            transform: isScrolling && activeWidget === 1 ? "translateY(-48%)" : "translateY(0%)"
          }}
        >
          <img
            src="/assets/Review Widget_scrollable.png"
            alt="Scrollable Customer Reviews List Showcase"
            className="w-full h-auto block select-none"
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto pt-10 pb-8 md:pt-10 md:pb-12 px-4 sm:px-6 text-center">
      {/* Title */}
      <h1 className="section-heading text-center max-w-5xl mx-auto mt-4 md:mt-6 mb-2">
        Collect, Manage &amp; Showcase Reviews <br className="hidden sm:inline" />
        that <span className="hero-heading-highlight">Drive Sales</span>
      </h1>

      {/* Subtitle */}
      <p className="section-subheading max-w-xl mx-auto mb-8 md:mb-12">
        Build trust with authentic customer reviews and photos.<br className="hidden sm:inline" />
        powerful tools to collect, manage and display reviews beautifully your store
      </p>

      {/* Main Showcase and Floating Cards Area */}
      <div className="relative max-w-[1360px] mx-auto w-full flex flex-col items-center justify-center min-h-[300px] sm:min-h-[440px] md:min-h-[640px] mt-4 sm:mt-6 md:mt-8">

        {/* --- ARC 1 (TOP PAIR): Reversed Rotations --- */}
        {/* Left Top: Coupon Card */}
        <div className="absolute top-[0%] sm:top-[0%] md:top-[0%] left-[-2%] sm:left-[-6%] md:left-[-5%] lg:left-[-2%] xl:left-[0%] w-24 sm:w-44 md:w-64 lg:w-72 floating-card rotate-[8deg] animate-hero-float block z-20">
          <img
            src="/assets/Coupon card.png"
            alt="Coupon Code Conversions"
            className="w-full h-auto object-contain select-none"
          />
        </div>
        {/* Right Top: Mail Card */}
        <div className="absolute top-[0%] sm:top-[0%] md:top-[0%] right-[-2%] sm:right-[-6%] md:right-[-5%] lg:right-[-2%] xl:right-[0%] w-24 sm:w-44 md:w-64 lg:w-72 floating-card -rotate-[8deg] animate-hero-float-delay-1 block z-20">
          <img
            src="/assets/Mail card.png"
            alt="Direct Click Conversions"
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* --- ARC 2 (MID-HIGH PAIR): -rotate-[6deg] / rotate-[6deg] --- */}
        {/* Left Mid: Attributed Revenue Card */}
        <div className="absolute top-[12%] sm:top-[16%] md:top-[20%] left-[-4%] sm:left-[-8%] md:left-[-7%] lg:left-[-4%] xl:left-[-2%] w-24 sm:w-44 md:w-64 lg:w-72 floating-card animate-hero-float-delay-1 block z-20">
          <img
            src="/assets/Attributed revenue card.png"
            alt="Attributed Revenue"
            className="w-full h-auto object-contain select-none"
          />
        </div>
        {/* Right Mid: Review Request Conversions Card */}
        <div className="absolute top-[12%] sm:top-[16%] md:top-[20%] right-[-4%] sm:right-[-8%] md:right-[-7%] lg:right-[-4%] xl:right-[-2%] w-24 sm:w-44 md:w-64 lg:w-72 floating-card animate-hero-float-delay-2 block z-20">
          <img
            src="/assets/Review Request Conversions Card.png"
            alt="Review Request Conversions"
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* --- ARC 3 (MID-LOW PAIR): -rotate-[10deg] / rotate-[10deg] --- */}
        {/* Left Low: Rating Card */}
        <div className="absolute top-[30%] sm:top-[34%] md:top-[auto] md:bottom-[18%] left-[-5%] sm:left-[-10%] md:left-[-12%] lg:left-[-8%] xl:left-[-5%] w-28 sm:w-52 md:w-76 lg:w-84 floating-card -rotate-[10deg] animate-hero-float-delay-2 block z-20">
          <img
            src="/assets/Rating card.png"
            alt="Rating Overview"
            className="w-full h-auto object-contain select-none"
          />
        </div>
        {/* Right Low: Review Widget */}
        <div className="absolute top-[28%] sm:top-[32%] md:top-[auto] md:bottom-[12%] right-[-6%] sm:right-[-14%] md:right-[-18%] lg:right-[-14%] xl:right-[-10%] w-32 sm:w-60 md:w-84 lg:w-96 floating-card rotate-[10deg] animate-hero-float block z-20">
          <img
            src="/assets/Review Widget.png"
            alt="Customer Review Card"
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* --- ARC 4 (BOTTOM PAIR): -rotate-[6deg] / rotate-[6deg] --- */}
        {/* Left Bottom: Import AliExpress Icon */}
        <div className="absolute top-[48%] sm:top-[50%] md:top-[auto] md:bottom-[2%] left-[4%] sm:left-[4%] md:left-[8%] lg:left-[10%] xl:left-[12%] w-10 sm:w-16 md:w-24 lg:w-28 floating-card -rotate-[6deg] animate-hero-float-delay-3 block z-20">
          <img
            src="/assets/Import from ali express.png"
            alt="Import from AliExpress"
            className="w-full h-auto object-contain select-none"
          />
        </div>
        {/* Right Bottom: Stars Widget */}
        <div className="absolute top-[48%] sm:top-[50%] md:top-[auto] md:bottom-[2%] right-[3%] sm:right-[4%] md:right-[6%] lg:right-[8%] xl:right-[10%] w-24 sm:w-44 md:w-64 lg:w-72 floating-card rotate-[6deg] animate-hero-float-delay-3 block z-20">
          <img
            src="/assets/Stars Widget.png"
            alt="Star Ratings Overview"
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* --- CENTRAL MAIN SHOWCASE WIDGET (ANIMATED SHOWCASE LOOP) --- */}
        <div className="main-widget-container relative z-40 max-w-[720px] md:max-w-[800px] lg:max-w-[860px] w-full px-2 scale-[0.85] translate-y-[0px] md:translate-y-[-10px]">
          <AnimatedCentralWidget />
        </div>

        {/* --- CTA BUTTONS UNDER CENTRAL WIDGET --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10 z-30 relative w-full sm:w-auto">
          {/* Primary Shopify CTA Button */}
          <a
            href="#install"
            className="btn-primary-shopify px-7 py-3.5 rounded-xl text-base font-semibold w-full sm:w-auto"
          >
            <img src="/assets/shopfiy_logo_white.svg" alt="Shopify" width={20} height={20} className="object-contain" />
            <span>Install on Shopify</span>
          </a>

          {/* Secondary Live Demo CTA Button */}
          <a
            href="#demo"
            className="btn-secondary-demo px-7 py-3.5 rounded-xl text-base font-semibold w-full sm:w-auto"
          >
            <div className="w-5 h-5 rounded-full bg-[#0089FF] text-white flex items-center justify-center shadow-sm">
              <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
            </div>
            <span>Live Demo</span>
          </a>
        </div>

      </div>
    </section>
  );
}
