"use client";

import { useState } from "react";

export default function Footer() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <footer id="contact" className="footer-container mt-12 scroll-mt-10">
      <div className="landing-section py-16 md:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Brand & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="/" className="flex items-center gap-2 mb-4 font-bold text-xl text-[#0F172A] no-underline">
                <img src="/default-logo.svg" alt="Trustie Logo" width={28} height={28} className="object-contain" />
                <span className="tracking-tight text-xl font-bold">Trustie</span>
              </a>
              <p className="text-[#64748B] text-[15px] max-w-sm mb-10 leading-relaxed">
                All-in-one social proof, review, and Q&A automation for your Shopify stores.
              </p>
              
              <div className="grid grid-cols-2 gap-8 max-w-sm">
                <div>
                  <h4 className="text-[#0F172A] font-bold mb-4 text-base">Product</h4>
                  <ul className="space-y-3 text-[15px]">
                    <li><a href="#features" className="footer-link">Features</a></li>
                    <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
                    <li><a href="#pricing" className="footer-link">Pricing</a></li>
                    <li><a href="#faq" className="footer-link">FAQ</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#0F172A] font-bold mb-4 text-base">Legal</h4>
                  <ul className="space-y-3 text-[15px]">
                    <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                    <li><a href="/terms" className="footer-link">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Vertical Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center py-4 self-stretch">
            <div className="w-px h-full bg-slate-200/80 self-center"></div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Get in touch</h3>
            <p className="text-[#64748B] text-sm mb-6">Have a question? Drop us a message below.</p>

            {status === "success" ? (
              <div className="bg-[#0089FF]/5 text-[#0F172A] p-6 rounded-2xl border border-[#0089FF]/20 text-center py-10">
                <div className="w-12 h-12 bg-[#0089FF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xs">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-[#0F172A]">Message Sent!</h4>
                <p className="text-[#64748B] text-sm">We'll get back to you shortly.</p>
                <button onClick={() => setStatus("idle")} className="mt-4 text-[#0089FF] text-sm font-semibold hover:underline cursor-pointer">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {status === "error" && (
                  <div className="bg-red-50 text-red-600 p-3.5 rounded-xl text-sm border border-red-200">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#0F172A] mb-1.5">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      disabled={status === "loading"}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0089FF] focus:ring-1 focus:ring-[#0089FF] transition-all disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#0F172A] mb-1.5">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      disabled={status === "loading"}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0089FF] focus:ring-1 focus:ring-[#0089FF] transition-all disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#0F172A] mb-1.5">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="3" 
                    required 
                    disabled={status === "loading"}
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0089FF] focus:ring-1 focus:ring-[#0089FF] transition-all resize-none disabled:opacity-50"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-[#0089FF] hover:bg-[#0076E0] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-[1px] shadow-[0_8px_20px_rgba(0,137,255,0.25)] disabled:opacity-70 flex justify-center items-center gap-2 w-full md:w-auto md:ml-auto cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Trustie. All rights reserved.</p>
          <p>Made for Shopify Merchants.</p>
        </div>
      </div>
    </footer>
  );
}
