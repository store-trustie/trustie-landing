"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const block1ListItems = [
  "Advanced filtering and search",
  "Review summary with AI Insights",
  "Customer Photos & Videos Gallery",
  "Recent Activity Feed",
  "Performance Analytics"
];

const block2ListItems = [
  "Product reviews, carousels, badges",
  "Video reviews carousel",
  "Fully customizable and responsive",
  "Seamless integration with your theme"
];

function Block1MediaSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Review Management",
      image: "/assets/Review Management.png",
      alt: "Review Management Dashboard",
      aspect: "aspect-[1152/728]"
    },
    {
      id: 1,
      title: "Performance Analytics",
      image: "/assets/Performance Analytics.png",
      alt: "Performance Analytics Dashboard",
      aspect: "aspect-[1152/524]"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className={`bg-[#F1F1F1] rounded-3xl p-1.5 sm:p-2.5 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] w-full relative overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center ${slides[currentSlide].aspect}`}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-1.5 sm:inset-2.5 transition-opacity duration-700 ease-in-out flex items-center justify-center ${currentSlide === index ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-contain rounded-2xl select-none"
            />
          </div>
        ))}
      </div>

      {/* Dot-Pill Navigation Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full h-2 focus:outline-none ${currentSlide === index
              ? "w-7 bg-[#0089FF]"
              : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

function Block2MediaSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Video Review Widget (3 Card)",
      image: "/assets/Video Review Widget(3card).png",
      alt: "Customer Video Reviews 3-Card Showcase",
      aspect: "aspect-[1216/783]"
    },
    {
      id: 1,
      title: "Review Widget Scrollable",
      image: "/assets/Review Widget_scrollable.png",
      alt: "Scrollable Review Widget Showcase",
      aspect: "aspect-[1506/1383]"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className={`bg-[#ffffff] rounded-3xl p-1.5 sm:p-2.5 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] w-full relative overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center ${slides[currentSlide].aspect}`}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-1.5 sm:inset-2.5 transition-opacity duration-700 ease-in-out flex items-center justify-center ${currentSlide === index ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-contain rounded-2xl select-none"
            />
          </div>
        ))}
      </div>

      {/* Dot-Pill Navigation Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full h-2 focus:outline-none ${currentSlide === index
              ? "w-7 bg-[#0089FF]"
              : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="landing-section space-y-16 md:space-y-24">

      {/* --- BLOCK 1: Media Left, Content Right --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Left: Media Slider */}
        <Block1MediaSlider />

        {/* Right: Content & Features List */}
        <div className="flex flex-col items-start pt-1">
          <div className="feature-badge mb-3">
            <Star className="w-3.5 h-3.5 text-slate-700 stroke-[2]" />
            <span>How it works</span>
          </div>

          <h2 className="section-heading mb-5">
            Complete Review Management in One Place
          </h2>

          <div className="space-y-3.5 mb-8">
            {block1ListItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base text-slate-600 font-normal">
                <Star className="w-4 h-4 text-slate-600 stroke-[1.8] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#install"
            className="btn-primary-shopify px-7 py-3.5 rounded-xl text-base font-semibold no-underline"
          >
            <span>Explore Dashboard</span>
          </a>
        </div>
      </div>

      {/* Horizontal Light Gray Divider */}
      <div className="w-full h-px bg-slate-200/80 my-8" />

      {/* --- BLOCK 2: Content Left, Media Right --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mt-20 items-start">
        {/* Left: Content & Features List */}
        <div className="flex flex-col items-start pt-1 order-2 lg:order-1">
          <div className="feature-badge mb-3">
            <Star className="w-3.5 h-3.5 text-slate-700 stroke-[2]" />
            <span>How it works</span>
          </div>

          <h2 className="section-heading mb-5">
            Beautiful Widgets that convert
          </h2>

          <div className="space-y-3.5 mb-8">
            {block2ListItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base text-slate-600 font-normal">
                <Star className="w-4 h-4 text-slate-600 stroke-[1.8] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#demo"
            className="btn-primary-shopify px-7 py-3.5 rounded-xl text-base font-semibold no-underline"
          >
            <span>View Live Demo</span>
          </a>
        </div>

        {/* Right: Media Slider */}
        <div className="order-1 lg:order-2 w-full">
          <Block2MediaSlider />
        </div>
      </div>

    </section>
  );
}
