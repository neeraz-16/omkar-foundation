import { directors, volunteers } from "@/data/config";

const avatarColors = [
  "bg-green-100 text-green-700 border-green-300",
  "bg-blue-100 text-blue-700 border-blue-300",
  "bg-purple-100 text-purple-700 border-purple-300",
  "bg-orange-100 text-orange-700 border-orange-300",
];

function Avatar({ name, index }: { name: string; index: number }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const color = avatarColors[index % avatarColors.length];
  return (
    <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mx-auto font-bold text-2xl shadow-md ${color}`}>
      {initials}
    </div>
  );
}

function PersonCard({
  name, role, designation, bio, index,
}: {
  name: string; role: string; designation?: string; bio: string; index: number;
}) {
  return (
    <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Top color bar */}
      <div className="h-2 bg-green-600 w-full" />
      <div className="p-6 flex flex-col items-center text-center gap-4 flex-1">
        <Avatar name={name} index={index} />
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mt-1">
            {role}
          </span>
          {designation && (
            <p className="text-gray-400 text-xs mt-1 font-medium">{designation}</p>
          )}
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{bio}</p>
      </div>
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
        </div>

        {/* Directors */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest px-2">Directors</h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((d, i) => (
              <PersonCard key={d.name} {...d} index={i} />
            ))}
          </div>
        </div>

        {/* Volunteers */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest px-2">Volunteers</h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteers.map((v, i) => (
              <PersonCard key={v.name} {...v} index={i + directors.length} />
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-green-700 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Want to Volunteer?</h3>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Join our team and make a difference in the lives of thousands of people across
            underserved communities across India.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
