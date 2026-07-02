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
    <footer id="contact" className="border-t border-[#EBEBEB] bg-[#FAFAFA] mt-12 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Brand & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 font-bold text-lg text-[#111]">
                <img src="/default-logo.svg" alt="TrustFlow Logo" width={24} height={24} className="object-contain" />
                TrustFlow
              </div>
              <p className="text-[#6B7280] text-[15px] max-w-sm mb-10 leading-relaxed">
                All-in-one social proof, review, and Q&A automation for your Shopify stores.
              </p>
              
              <div className="grid grid-cols-2 gap-8 max-w-sm">
                <div>
                  <h4 className="text-[#111] font-bold mb-4">Product</h4>
                  <ul className="space-y-3 text-[15px] text-[#6B7280]">
                    <li><a href="#features" className="hover:text-[#0089FF] transition-colors">Features</a></li>
                    <li><a href="#pricing" className="hover:text-[#0089FF] transition-colors">Pricing</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#111] font-bold mb-4">Legal</h4>
                  <ul className="space-y-3 text-[15px] text-[#6B7280]">
                    <li><a href="/privacy" className="hover:text-[#0089FF] transition-colors">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-[#0089FF] transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Vertical Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center py-4">
            <div className="w-px h-4/5 bg-[#EBEBEB] self-center"></div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold text-[#111] mb-2">Get in touch</h3>
            <p className="text-[#6B7280] text-sm mb-6">Have a question? Drop us a message below.</p>

            {status === "success" ? (
              <div className="bg-[#27C93F]/10 text-[#111] p-6 rounded-xl border border-[#27C93F]/20 text-center py-10">
                <div className="w-12 h-12 bg-[#27C93F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                <p className="text-[#4B5563] text-sm">We'll get back to you shortly.</p>
                <button onClick={() => setStatus("idle")} className="mt-4 text-[#0089FF] text-sm font-medium hover:underline">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {status === "error" && (
                  <div className="bg-[#FF5F56]/10 text-[#FF5F56] p-3 rounded-xl text-sm border border-[#FF5F56]/20">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#111] mb-1.5">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      disabled={status === "loading"}
                      className="w-full bg-white border border-[#EBEBEB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0089FF] focus:ring-1 focus:ring-[#0089FF] transition-all disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#111] mb-1.5">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      disabled={status === "loading"}
                      className="w-full bg-white border border-[#EBEBEB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0089FF] focus:ring-1 focus:ring-[#0089FF] transition-all disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#111] mb-1.5">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="3" 
                    required 
                    disabled={status === "loading"}
                    className="w-full bg-white border border-[#EBEBEB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0089FF] focus:ring-1 focus:ring-[#0089FF] transition-all resize-none disabled:opacity-50"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-[#111] hover:bg-black text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-[1px] shadow-sm mt-1 disabled:opacity-70 flex justify-center items-center gap-2 w-full md:w-auto md:ml-auto"
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

        <div className="mt-16 pt-8 border-t border-[#EBEBEB] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} Trustflow. All rights reserved.</p>
          <p>Made for Shopify Merchants.</p>
        </div>
      </div>
    </footer>
  );
}
