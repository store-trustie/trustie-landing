"use client";

import { LayoutGrid } from "lucide-react";

const integrationData = [
  {
    id: 1,
    title: "Ali Express",
    description: "Import reviews from AliExpress.",
    image: "/assets/Ali Express.png",
    alt: "Ali Express"
  },
  {
    id: 2,
    title: "Other Apps",
    description: "Import reviews from other review apps.",
    image: "/assets/Other Apps.png",
    alt: "Other Apps"
  },
  {
    id: 3,
    title: "Shopify",
    description: "Built for Shopify seamless experience.",
    image: "/assets/Shopify.png",
    alt: "Shopify"
  },
  {
    id: 4,
    title: "Email",
    description: "Custom emails automation",
    image: "/assets/Email.png",
    alt: "Email"
  }
];

export default function Integrations() {
  return (
    <section id="integrations" className="landing-section">
      
      {/* Top Header Badge */}
      <div className="mb-3">
        <div className="feature-badge">
          <LayoutGrid className="w-3.5 h-3.5 text-slate-700 stroke-[2]" />
          <span>Integration</span>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="mb-10 md:mb-12">
        <h2 className="section-heading">
          Powerful Integrations
        </h2>
        <p className="section-subheading mt-2.5">
          Import reviews and works seamlessly with your favorite tools.
        </p>
      </div>

      {/* 4 Horizontal Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {integrationData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-5 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Left Image Box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden flex items-center justify-center p-0 bg-slate-50 border border-slate-100">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Right Text Content */}
            <div className="flex flex-col justify-center text-left">
              <h3 className="font-bold text-base sm:text-lg text-[#0F172A] mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
