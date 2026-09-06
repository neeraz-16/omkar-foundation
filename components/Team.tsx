import { directors, volunteers } from "@/data/config";

function Avatar({ name, size = "lg" }: { name: string; size?: "lg" | "md" }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const dim = size === "lg" ? "w-24 h-24 text-2xl" : "w-20 h-20 text-xl";
  return (
    <div
      className={`${dim} rounded-full bg-green-100 border-4 border-green-200 flex items-center justify-center mx-auto font-bold text-green-700`}
    >
      {initials}
    </div>
  );
}

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
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center flex flex-col items-center gap-3">
      <Avatar name={name} />
      <div>
        <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
        <p className="text-green-600 font-semibold text-sm">{role}</p>
        {designation && (
          <p className="text-gray-400 text-xs mt-0.5">{designation}</p>
        )}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            The People Behind the Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Team
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Directors */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-green-500 inline-block"></span>
            Directors
            <span className="w-8 h-0.5 bg-green-500 inline-block"></span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((d) => (
              <PersonCard key={d.name} {...d} />
            ))}
          </div>
        </div>

        {/* Volunteers */}
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-green-500 inline-block"></span>
            Volunteers
            <span className="w-8 h-0.5 bg-green-500 inline-block"></span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteers.map((v) => (
              <PersonCard key={v.name} {...v} />
            ))}
          </div>
        </div>

        {/* Join us CTA */}
        <div className="mt-14 text-center bg-green-50 rounded-2xl p-8 border border-green-100">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Want to Volunteer?
          </h3>
          <p className="text-gray-500 mb-6">
            Join our team and make a difference in the lives of thousands of
            people across underserved communities.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
