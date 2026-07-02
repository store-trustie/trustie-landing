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
            <p>By viewing or using this website, which can be accessed at trustflow.store, you are agreeing to be bound by these website’s Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on TrustFlow's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on TrustFlow's Website;</li>
              <li>remove any copyright or other proprietary notations from the materials.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">3. Disclaimer</h2>
            <p>All the materials on TrustFlow's Website are provided "as is". TrustFlow makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, TrustFlow does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">4. Limitations</h2>
            <p>TrustFlow or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on TrustFlow's Website, even if TrustFlow or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.</p>
            
            <h2 className="text-2xl font-semibold text-[#111] mt-8 mb-4">5. Revisions and Errata</h2>
            <p>The materials appearing on TrustFlow's Website may include technical, typographical, or photographic errors. TrustFlow will not promise that any of the materials in this Website are accurate, complete, or current. TrustFlow may change the materials contained on its Website at any time without notice.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
