import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] text-[#111111]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-5 py-20 w-full">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_12px_24px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <h1 className="text-4xl font-bold mb-8 tracking-tight">Terms of Service</h1>
          <div className="space-y-6 text-[#4B5563] leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By installing and using the TrustFlow Reviews Shopify Application ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App. These terms apply specifically to merchants using our App on the Shopify platform.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">2. Description of Service</h2>
            <p>TrustFlow Reviews provides merchants with tools to collect, display, and manage customer product reviews, including photo and video reviews, as well as AI-powered review summaries and reply drafting. We grant you a revocable, non-exclusive, non-transferable, limited license to use the App in connection with your Shopify store.</p>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">3. Subscriptions and Payments</h2>
            <p>If you choose to use our premium features, billing and payments will be handled entirely through the Shopify Billing API. All charges will appear on your regular Shopify invoice. You may cancel your subscription at any time by uninstalling the App or modifying your billing plan within the App settings.</p>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">4. AI Features and Liability</h2>
            <p>TrustFlow Reviews utilizes third-party artificial intelligence models (such as Google Gemini) to provide features like review sentiment summaries and automated response drafting. While we strive for accuracy, AI-generated content may occasionally contain errors or inaccuracies. You acknowledge that you are solely responsible for reviewing and approving any AI-generated content before publishing it to your storefront or sending it to customers.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">5. Intellectual Property and Data</h2>
            <p><strong>Your Data:</strong> You retain all rights to the data you process through the App, including customer lists and reviews. By using the App, you grant us permission to process this data solely for the purpose of providing the service to you.</p>
            <p><strong>Our App:</strong> We retain all right, title, and interest in and to the App, its source code, and its underlying technology. You may not copy, modify, distribute, sell, or lease any part of our App.</p>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the App's availability, reliability, or fitness for a particular purpose. We do not guarantee that the App will be uninterrupted, secure, or error-free.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">7. Limitation of Liability</h2>
            <p>In no event shall TrustFlow Reviews, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the App.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">8. Termination</h2>
            <p>You may terminate this agreement at any time by uninstalling the App from your Shopify store. We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">9. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:hello@trustflow.store" className="text-[#0089FF] hover:underline">hello@trustflow.store</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
