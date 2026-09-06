import { partners } from "@/data/config";

export default function Partners() {
  return (
    <section id="partners" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Who We Work With
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-500">
            We collaborate with government bodies, local organisations, and
            corporate partners to amplify our impact and serve more communities.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-14">
          {partners.map((p, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-green-300 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[120px]"
            >
              {/* Placeholder logo box */}
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-700 font-bold text-lg">
                  {p.name.charAt(0)}
                </span>
              </div>
              <p className="font-semibold text-gray-700 text-sm text-center leading-snug">
                {p.name}
              </p>
            </div>
          ))}
        </div>

        {/* Become a partner CTA */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Become a Partner
          </h3>
          <p className="text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            We welcome collaborations with government authorities, NGOs,
            corporates, hospitals, educational institutions and foundations who
            share our vision of a healthier and more educated India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors shadow"
            >
              Partner With Us
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-colors"
            >
              CSR Contributions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
