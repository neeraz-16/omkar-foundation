import { stories } from "@/data/config";

const categoryColors: Record<string, string> = {
  Health: "bg-red-100 text-red-600",
  Education: "bg-blue-100 text-blue-600",
  "Skill Development": "bg-purple-100 text-purple-600",
};

export default function Stories() {
  return (
    <section id="stories" className="py-20 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Real Impact, Real Lives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-500">
            Here are some stories from the people whose lives have been touched
            by our work.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col gap-4"
            >
              {/* Category badge */}
              <span
                className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full ${
                  categoryColors[s.category] || "bg-gray-100 text-gray-600"
                }`}
              >
                {s.category}
              </span>

              {/* Quote */}
              <div className="relative">
                <span className="text-5xl text-green-200 font-serif leading-none absolute -top-2 -left-1">
                  &ldquo;
                </span>
                <p className="text-gray-600 text-sm leading-relaxed pl-6 pt-3 italic">
                  {s.quote}
                </p>
              </div>

              {/* Person */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">
                    {s.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {s.name}
                  </p>
                  <p className="text-gray-400 text-xs">{s.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          * Names and locations are representative. We protect the privacy of
          our beneficiaries.
        </p>
      </div>
    </section>
  );
}
