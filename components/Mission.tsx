import { missions } from "@/data/config";

export default function Mission() {
  return (
    <section id="mission" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            What We Stand For
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Mission & Objectives
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-500 text-base">
            Our foundation is guided by the following objectives as set out in
            our Memorandum of Association.
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{m.icon}</span>
                <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 text-lg">{m.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>

        {/* Furtherance of Objects */}
        <div className="mt-14 bg-green-700 text-white rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            How We Operate
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Receive grants, donations, CSR contributions and lawful assistance from individuals and organisations",
              "Acquire land, buildings, equipment and resources necessary for carrying out our objects",
              "Organise conferences, seminars, health camps and educational programmes",
              "Appoint employees, doctors, teachers, trainers, researchers and volunteers as needed",
              "Establish branches, centres, offices and project facilities across India",
              "Undertake all lawful activities incidental to the attainment of our objects",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-300 mt-1 text-lg font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-green-100 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
