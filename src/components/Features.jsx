"use client";

const MailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0089FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Features = () => {
  return (
    <>
      {/* DASHBOARD MOCKUP SECTION */}

      

      {/* FEATURES GRID */}
      <section id="features" className="max-w-6xl mx-auto px-5 my-32">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F3F4F6] text-[#4B5563] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] tracking-tight mb-4">
            Keep everything in one place
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Forget complex tools. Manage social proof effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-8 border border-[#EBEBEB] shadow-[0_12px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl flex items-center justify-center mb-6">
               <MailIcon />
            </div>
            <h3 className="text-xl font-bold text-[#111] mb-3">Seamless Collection</h3>
            <p className="text-[#4B5563] leading-relaxed">
              Collect reviews automatically with our drag-and-drop email designer and smart triggers.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-[#EBEBEB] shadow-[0_12px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl flex items-center justify-center mb-6">
               <div className="bg-white border border-[#F3F4F6] shadow-sm rounded-lg p-2 w-10 -rotate-6">
                 <div className="text-[8px] text-[#FFB800] mb-1">★★★★★</div>
                 <div className="w-full h-1 bg-[#F3F4F6] rounded mb-1"></div>
                 <div className="w-2/3 h-1 bg-[#F3F4F6] rounded"></div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-[#111] mb-3">Beautiful Widgets</h3>
            <p className="text-[#4B5563] leading-relaxed">
              Display reviews beautifully on your store with customizable, fast-loading widgets.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-[#EBEBEB] shadow-[0_12px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl flex items-center justify-center mb-6">
               <div className="flex gap-2 items-center">
                 <div className="w-6 h-6 rounded-full border-2 border-white bg-[#D1D5DB] -mr-3 z-10"></div>
                 <div className="w-6 h-6 rounded-full border-2 border-white bg-[#9CA3AF] -mr-3 z-20"></div>
                 <div className="w-6 h-6 rounded-full border-2 border-white bg-[#6B7280] z-30"></div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-[#111] mb-3">Customer Q&A</h3>
            <p className="text-[#4B5563] leading-relaxed">
              Let customers ask questions and build a rich community around your products.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#EBEBEB] shadow-[0_12px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform lg:col-span-3">
             <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#111] mb-3">AI Powered Automation</h3>
                  <p className="text-[#4B5563] leading-relaxed mb-6">
                    Use our AI generator to reply to reviews, create natural-looking customer QA, and import photo reviews instantly.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[#111] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#0089FF]/10 text-[#0089FF] flex items-center justify-center">✓</div>
                      1-Click AliExpress Import
                    </li>
                    <li className="flex items-center gap-3 text-[#111] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#0089FF]/10 text-[#0089FF] flex items-center justify-center">✓</div>
                      AI Review & QA Generator
                    </li>
                    <li className="flex items-center gap-3 text-[#111] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#0089FF]/10 text-[#0089FF] flex items-center justify-center">✓</div>
                      Smart Autopilot Publishing
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#FAFAFA] rounded-xl border border-[#F3F4F6] p-6 text-center">
                   <div className="w-16 h-16 bg-[#0089FF]/10 text-[#0089FF] rounded-2xl mx-auto flex items-center justify-center mb-4 text-3xl">✨</div>
                   <div className="font-bold text-[#111] mb-1">AI Assistant</div>
                   <div className="text-sm text-[#6B7280]">Always working for you</div>
                </div>
             </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Features;
