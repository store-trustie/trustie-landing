"use client";

import { ArrowRight, Star } from "lucide-react";

const featureData = [
  {
    id: 1,
    title: "Collect Reviews",
    description: "Collect reviews with photos and videos automatically or via custom email request",
    image: "/assets/Collect Reviews.png",
    alt: "Collect Reviews Feature"
  },
  {
    id: 2,
    title: "Manage with Ease",
    description: "Advanced review management tools, filtering, sorting and bulk actions save you time.",
    image: "/assets/Manage with Ease.png",
    alt: "Manage with Ease Feature"
  },
  {
    id: 3,
    title: "AI-Powered Tools",
    description: "Generate AI replies, auto-publish reviews and QA, save hours of manual work.",
    image: "/assets/AI-Powered Tools.png",
    alt: "AI-Powered Tools Feature"
  },
  {
    id: 4,
    title: "Display Anywhere",
    description: "Beautiful, customizable widgets that match your store's design perfectly",
    image: "/assets/Display Anywhere.png",
    alt: "Display Anywhere Feature"
  }
];

export default function Features() {
  return (
    <section id="features" className="landing-section">
      
      {/* Top Header Badge */}
      <div className="mb-3">
        <div className="feature-badge">
          <Star className="w-3.5 h-3.5 text-slate-700 stroke-[2]" />
          <span>Everything you need to build trust</span>
        </div>
      </div>

      {/* Main Title & Learn More Button */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
        <h2 className="section-heading max-w-2xl">
          Powerful Features to Grow Your Business
        </h2>
        <a href="#pricing" className="btn-learn-more shrink-0 self-start sm:self-auto">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* 4 Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureData.map((item) => (
          <div key={item.id} className="feature-card">
            <div>
              <div className="feature-card-img-box">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover select-none"
                />
              </div>
              <h3 className="feature-card-title">{item.title}</h3>
            </div>
            <p className="feature-card-desc">{item.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
