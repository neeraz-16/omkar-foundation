import { directors, volunteers } from "@/data/config";
import { imgPath } from "@/lib/imgPath";

const roleColors: Record<string, string> = {
  Director: "bg-green-100 text-green-700 border-green-200",
  Volunteer: "bg-blue-100 text-blue-700 border-blue-200",
};

function PersonCard({
  name,
  role,
  designation,
  bio,
}: {
  name: string;
  role: string;
  designation?: string;
  bio: string;
}) {
  const badgeStyle = roleColors[role] ?? "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <div className="card-hover bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
      {/* Square photo box */}
      <div className="relative w-full" style={{ paddingBottom: "75%" }}>
        <img
          src={imgPath("/images/team-placeholder.png")}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay gradient at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)" }}
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-gray-800 text-base leading-tight">{name}</h3>
          <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full border ${badgeStyle}`}>
            {role}
          </span>
        </div>
        {designation && (
          <p className="text-green-600 text-xs font-semibold">{designation}</p>
        )}
        <p className="text-gray-500 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap px-2">
        {label}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            The People Behind the Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
          <div className="section-divider"></div>
          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Our foundation is led by dedicated directors and supported by passionate volunteers
            committed to serving underserved communities.
          </p>
        </div>

        {/* Directors */}
        <div className="mb-14">
          <SectionDivider label="Directors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((d) => (
              <PersonCard key={d.name} {...d} />
            ))}
          </div>
        </div>

        {/* Volunteers */}
        <div className="mb-14">
          <SectionDivider label="Volunteers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteers.map((v) => (
              <PersonCard key={v.name} {...v} />
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-green-700 rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="text-4xl mb-4">🙌</div>
          <h3 className="text-2xl font-bold mb-3">Want to Volunteer?</h3>
          <p className="text-green-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Join our growing team and make a meaningful difference in the lives of thousands
            of people across underserved communities in India.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg"
          >
            Get Involved →
          </a>
        </div>
      </div>
    </section>
  );
}
