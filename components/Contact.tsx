import { siteConfig } from "@/data/config";

const contactItems = [
  {
    icon: "📍",
    label: "Address",
    value: `${siteConfig.address}, ${siteConfig.city}, ${siteConfig.state} - ${siteConfig.pincode}`,
  },
  {
    icon: "📞",
    label: "Phone",
    value: siteConfig.phone,
  },
  {
    icon: "✉️",
    label: "Email",
    value: siteConfig.email,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="max-w-xl mx-auto text-gray-500">
            Have a question, want to volunteer, or looking to partner with us?
            We would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Our Details
            </h3>
            <div className="flex flex-col gap-4 mb-8">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-700 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex gap-3 flex-wrap">
              {[
                { label: "Facebook", href: siteConfig.socialMedia.facebook, icon: "f" },
                { label: "Instagram", href: siteConfig.socialMedia.instagram, icon: "in" },
                { label: "Twitter", href: siteConfig.socialMedia.twitter, icon: "tw" },
                { label: "YouTube", href: siteConfig.socialMedia.youtube, icon: "yt" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center text-xs font-bold text-green-800">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form via Google Form */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Click the button below to open our contact form. We will get back
              to you as soon as possible.
            </p>

            {/* Embedded Google Form (replace src with your form URL) */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
              <div className="bg-green-700 text-white text-center py-4 px-6">
                <p className="font-semibold">Contact Form</p>
                <p className="text-green-200 text-xs mt-1">
                  Fill in your details and we&apos;ll respond within 48 hours
                </p>
              </div>
              <div className="p-6 text-center">
                {/* IMPORTANT: Replace the href below with your actual Google Form URL */}
                <p className="text-gray-500 text-sm mb-4">
                  Our contact form is hosted on Google Forms for ease of use.
                </p>
                <a
                  href={siteConfig.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors w-full text-center"
                >
                  Open Contact Form →
                </a>
              </div>
            </div>

            {/* Quick info boxes */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "👥", label: "Volunteer Enquiries" },
                { icon: "💼", label: "Partnership" },
                { icon: "💰", label: "Donations" },
                { icon: "📰", label: "Media & Press" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-3 text-center border border-gray-100 text-sm"
                >
                  <span className="text-xl block mb-1">{item.icon}</span>
                  <span className="text-gray-600 font-medium text-xs">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
