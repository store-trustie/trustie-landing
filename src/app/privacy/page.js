import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] text-[#111111]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-5 py-20 w-full">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_12px_24px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <h1 className="text-4xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
          <div className="space-y-6 text-[#4B5563] leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">1. Introduction</h2>
            <p>Welcome to TrustFlow. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at hello@trustflow.store.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and Contact Data</li>
              <li>Credentials</li>
              <li>Payment Data</li>
              <li>Shopify Store Information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">4. Sharing Your Information</h2>
            <p>We only share and disclose your information with the following third parties. We have categorized each party so that you may be easily understand the purpose of our data collection and processing practices.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">5. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at <a href="mailto:hello@trustflow.store" className="text-[#0089FF] hover:underline">hello@trustflow.store</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
