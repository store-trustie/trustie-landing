"use client";

import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    description: "Yeni başlayan mağazalar için temel özellikler.",
    features: [
      { name: "50 Review Imports / month", included: true },
      { name: "Basic Review Widgets", included: true },
      { name: "Manual Review Publishing", included: true },
      { name: "AI Review Generator", included: false },
      { name: "AI Store Replies", included: false },
      { name: "Photo & Video Reviews", included: false },
    ],
    buttonText: "Start for Free",
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "$9.99",
    period: "/mo",
    description: "Satışlarını otomatize edip güven inşa etmek isteyenler için.",
    features: [
      { name: "Unlimited Review Imports", included: true },
      { name: "All Premium Widgets", included: true },
      { name: "Smart Autopilot Publishing", included: true },
      { name: "AI Review & QA Generator", included: true },
      { name: "AI Store Replies", included: true },
      { name: "Photo & Video Reviews", included: true },
    ],
    buttonText: "Upgrade to Pro",
    popular: true,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="landing-section">
      <div className="text-center mb-16">
        <div className="feature-badge mb-4">
          <span>Pricing</span>
        </div>
        <h2 className="section-heading mb-4">
          Simple, transparent pricing
        </h2>
        <p className="section-subheading max-w-2xl mx-auto">
          No hidden fees. Pick the plan that suits you best and upgrade anytime.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`w-full max-w-sm flex flex-col bg-white rounded-3xl p-8 border ${
              plan.popular 
                ? 'border-[#0089FF] shadow-[0_20px_40px_rgba(0,137,255,0.12)] relative z-10 scale-100 md:scale-105' 
                : 'border-[#EBEBEB] shadow-[0_12px_24px_rgba(0,0,0,0.04)] mt-0 md:mt-4 mb-0 md:mb-4'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0089FF] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#111] mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-[#111] tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-[#6B7280] font-medium">{plan.period}</span>}
              </div>
              <p className="text-[#6B7280] text-sm mt-4">{plan.description}</p>
            </div>

            <div className="flex-1 mb-8">
              <ul className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-[#0089FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#0089FF]" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-[#9CA3AF]" strokeWidth={3} />
                      </div>
                    )}
                    <span className={`text-sm font-medium ${feature.included ? 'text-[#111]' : 'text-[#9CA3AF]'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className={`w-full inline-flex justify-center items-center px-6 py-4 rounded-xl text-[15px] font-semibold transition-all ${
                plan.popular
                  ? 'bg-[#0089FF] hover:bg-[#0076e0] text-white shadow-[0_4px_12px_rgba(0,137,255,0.3)] hover:-translate-y-0.5'
                  : 'bg-white hover:bg-[#F9FAFB] text-[#111] border border-[#EBEBEB] hover:border-[#D1D5DB]'
              }`}
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
