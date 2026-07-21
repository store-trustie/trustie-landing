import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A] p-2 sm:p-4 md:p-6 lg:p-8">
      {/* Top Rounded Light Blue Hero Container holding Header & Hero section */}
      <div className="hero-wrapper w-full relative overflow-hidden pb-8 md:pb-16 pt-2">
        <Header />
        <Hero />
      </div>

      <main className="flex-1 w-full mt-6 md:mt-10">
        {/* Features Section */}
        <Features />

        {/* Horizontal Divider Line */}
        <div className="section-divider-wrapper">
          <div className="section-divider" />
        </div>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Horizontal Divider Line */}
        <div className="section-divider-wrapper">
          <div className="section-divider" />
        </div>

        {/* Integrations Section */}
        <Integrations />

        {/* CTA Banner Section */}
        <CtaBanner />

        {/* Horizontal Divider Line */}
        <div className="section-divider-wrapper">
          <div className="section-divider" />
        </div>

        {/* FAQ Section */}
        <Faq />

        {/* Horizontal Divider Line */}
        <div className="section-divider-wrapper">
          <div className="section-divider" />
        </div>

        {/* Pricing Section */}
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
