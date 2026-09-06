import { siteConfig } from "@/data/config";
import { imgPath } from "@/lib/imgPath";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-green-700 text-white overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)", transform: "translate(-30%, 30%)" }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: "linear-gradient(135deg, #14532d 0%, #15803d 50%, #16a34a 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div
            className="mb-8 rounded-full overflow-hidden border-4 border-green-300 shadow-2xl"
            style={{ width: 140, height: 140 }}
          >
            <img
              src={imgPath("/images/ngo_logo.png")}
              alt="Omkar Foundation Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Badge */}
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/30 mb-6 backdrop-blur-sm">
            Section 8 Non-Profit Company · India
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {siteConfig.name}
          </h1>
          <p className="text-xl sm:text-2xl text-green-200 font-medium mb-6">
            {siteConfig.tagline}
          </p>
          <p className="max-w-2xl text-green-100 text-base sm:text-lg mb-10 leading-relaxed">
            {siteConfig.description}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="#about"
              className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg text-base"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-green-700 transition-all text-base"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-green-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
