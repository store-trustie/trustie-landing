"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "How does Trustie Reviews help increase my store's sales?",
    answer: "Trustie displays authentic customer photo & video reviews, star rating badges, and AI review summaries directly on your product pages. Social proof builds instant buyer confidence, reduces cart abandonment, and significantly boosts conversion rates."
  },
  {
    question: "Can I import existing reviews from AliExpress or other review apps?",
    answer: "Yes! You can import hundreds of photo and text reviews directly from AliExpress in seconds. You can also import CSV files from Judge.me, Loox, Yotpo, Stamped, Okendo, or any existing review app with one click."
  },
  {
    question: "How does the AI Autopilot & AI Reply feature work?",
    answer: "Trustie's built-in AI automatically generates personalized, professional responses to customer reviews and Q&As, auto-publishes 4-star and 5-star reviews based on your criteria, and summarizes customer feedback into instant pros & cons—saving you hours of manual work."
  },
  {
    question: "Does Trustie Reviews affect my store's page loading speed?",
    answer: "Not at all! Trustie widgets are ultra-lightweight, loaded asynchronously via Shopify App Embeds, and fully optimized for Shopify OS 2.0 themes to guarantee fast page loads and zero impact on performance."
  },
  {
    question: "How do post-purchase review request emails and coupons work?",
    answer: "Trustie automatically sends customizable review request emails to customers after order delivery. You can enable coupon discount codes in these emails to reward customers for sharing photo or video reviews, driving higher response rates and repeat sales."
  },
  {
    question: "Do I need coding skills to install and customize Trustie?",
    answer: "Zero coding required! Installation takes less than 60 seconds with 1-click Shopify App Embeds. You can customize colors, fonts, widget layouts, and email templates visually inside your Shopify admin."
  },
  {
    question: "Is there a free plan available?",
    answer: "Yes! Trustie offers a 100% Free Plan with essential features so you can start collecting and displaying reviews immediately. You can upgrade to Pro anytime as your business scales."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="landing-section">
      {/* Top Header Badge */}
      <div className="mb-3">
        <div className="feature-badge">
          <HelpCircle className="w-3.5 h-3.5 text-slate-700 stroke-[2]" />
          <span>Frequently Asked Questions</span>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="mb-10 md:mb-14 w-full">
        <h2 className="section-heading">
          Got Questions? We've Got Answers
        </h2>
        <p className="section-subheading mt-2.5">
          Everything you need to know about Trustie Reviews, installation, AI features, and pricing.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 w-full">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen ? "border-[#0089FF]/60 shadow-md" : "border-slate-200/80 shadow-xs hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-base sm:text-lg text-[#0F172A]">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "bg-[#0089FF]/10 text-[#0089FF] rotate-180" : "bg-slate-100 text-slate-500"
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100 pb-5 sm:pb-6 px-5 sm:px-6" : "max-h-0 opacity-0 overflow-hidden py-0 px-5 sm:px-6"
                }`}
              >
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed border-t border-slate-100 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
