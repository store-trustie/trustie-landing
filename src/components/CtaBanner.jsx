"use client";

export default function CtaBanner() {
  return (
    <section className="landing-section py-8 md:py-12">
      <div className="cta-banner-wrapper">
        {/* Left Text Stack */}
        <div className="flex flex-col">
          <h2 className="cta-banner-title">
            Ready to Build Trust <br className="hidden sm:inline" />
            and Sales?
          </h2>
          <p className="cta-banner-subtitle">
            Import reviews and works seamlessly with your favorite tools.
          </p>
        </div>

        {/* Right Action Button */}
        <a
          href="#install"
          className="btn-cta-shopify shrink-0"
        >
          <img
            src="/assets/shopfiy_logo_blue.svg"
            alt="Shopify Logo"
            width={22}
            height={22}
            className="object-contain"
          />
          <span>Install on Shopify</span>
        </a>
      </div>
    </section>
  );
}
