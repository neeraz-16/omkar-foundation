import { siteConfig } from "@/data/config";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/images/ngo_logo.png"
            alt="Omkar Foundation Logo"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-300 shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {siteConfig.name}
        </h1>
        <p className="text-xl sm:text-2xl text-green-200 font-medium mb-6">
          {siteConfig.tagline}
        </p>
        <p className="max-w-3xl mx-auto text-green-100 text-base sm:text-lg mb-10 leading-relaxed">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="#about"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-green-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
