const values = [
  { icon: "❤️", title: "Compassion", desc: "Serving every individual with dignity, empathy and respect." },
  { icon: "🌱", title: "Sustainability", desc: "Building long-term solutions that create lasting community change." },
  { icon: "🤝", title: "Collaboration", desc: "Partnering with governments, organisations and communities." },
  { icon: "🔍", title: "Transparency", desc: "Operating with full accountability in all our activities." },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About the Foundation
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Two-column */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Story */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-5">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Omkar Health and Education Foundation is a Section 8 non-profit company established with
              the sole purpose of serving disadvantaged, economically weaker and underserved communities
              across India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe that access to quality healthcare and education is a fundamental right, not a
              privilege. Through our programs, we strive to bridge the gap and ensure that every
              individual — regardless of their economic background — has the opportunity to lead a
              healthy, educated and productive life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a non-profit organisation, every rupee received goes directly towards our programs
              and beneficiaries. We do not distribute profits or dividends to our members.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Section 8 Company", "100% Non-Profit", "Fully Accountable", "Govt. Compliant"].map((tag) => (
                <span key={tag} className="bg-green-50 text-green-700 border border-green-200 text-sm font-semibold px-4 py-1.5 rounded-full">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Non-profit box */}
          <div className="bg-green-700 text-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">⚖️</span>
              <h3 className="text-xl font-bold">Non-Profit Character</h3>
            </div>
            <p className="text-green-100 leading-relaxed mb-4">
              The Foundation shall apply its income and profits, if any, solely towards the promotion
              of its charitable objects.
            </p>
            <p className="text-green-100 leading-relaxed mb-6">
              No portion shall be paid or transferred, directly or indirectly, by way of dividend,
              bonus or otherwise by way of profit to its members — in accordance with the
              Companies Act, 2013.
            </p>
            <div className="border-t border-green-600 pt-6 grid grid-cols-2 gap-4">
              {[
                { icon: "🏥", label: "Healthcare" },
                { icon: "🎓", label: "Education" },
                { icon: "🔧", label: "Skill Dev." },
                { icon: "🌍", label: "Community" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <span className="text-2xl block mb-1">{item.icon}</span>
                  <span className="text-green-200 text-xs font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {v.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
