import { siteConfig } from "@/data/config";

const values = [
  {
    icon: "❤️",
    title: "Compassion",
    desc: "We serve with empathy, treating every individual with dignity and respect.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Building long-term solutions that create lasting change in communities.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    desc: "Working hand-in-hand with governments, organisations and communities.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    desc: "Operating with full accountability and openness in all our activities.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About the Foundation
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Omkar Health and Education Foundation is a Section 8 non-profit
              company established with the sole purpose of serving
              disadvantaged, economically weaker and underserved communities
              across India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe that access to quality healthcare and education is a
              fundamental right, not a privilege. Through our programs, we
              strive to bridge the gap and ensure that every individual —
              regardless of their economic background — has the opportunity to
              lead a healthy, educated and productive life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a non-profit organisation, every rupee received goes directly
              towards our programs and beneficiaries. We do not distribute
              profits or dividends to our members.
            </p>
          </div>

          {/* Non-profit character box */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚖️</span>
              <h3 className="text-xl font-bold text-green-800">
                Non-Profit Character
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Foundation shall apply its income and profits, if any,
              solely towards the promotion of its charitable objects.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No portion shall be paid or transferred, directly or indirectly,
              by way of dividend, bonus or otherwise by way of profit to its
              members — in accordance with the Companies Act, 2013.
            </p>
            <div className="mt-6 flex items-center gap-2 text-green-700 font-semibold">
              <span>✓</span>
              <span>Section 8 Company</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 font-semibold">
              <span>✓</span>
              <span>100% Non-Profit</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 font-semibold">
              <span>✓</span>
              <span>Fully Accountable</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Our Core Values
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-3">{v.icon}</div>
              <h4 className="font-bold text-gray-800 mb-2">{v.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
