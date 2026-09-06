import { siteConfig } from "@/data/config";
import { imgPath } from "@/lib/imgPath";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Our Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 flex-shrink-0">
                <img
                  src={imgPath("/images/ngo_logo.png")}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white leading-tight">Omkar Health and Education</p>
                <p className="text-green-400 text-sm">Foundation</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-4">
              {siteConfig.description}
            </p>
            <span className="inline-block bg-green-900 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-700">
              Section 8 Non-Profit · Companies Act 2013
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-green-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-green-600 inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <p className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">📍</span>
                <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.state} – {siteConfig.pincode}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-green-500">📞</span>
                <span>{siteConfig.phone}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-green-500">✉️</span>
                <span>{siteConfig.email}</span>
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              {[
                { label: "FB", href: siteConfig.socialMedia.facebook },
                { label: "IG", href: siteConfig.socialMedia.instagram },
                { label: "TW", href: siteConfig.socialMedia.twitter },
                { label: "YT", href: siteConfig.socialMedia.youtube },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} Omkar Health and Education Foundation. All rights reserved.</p>
          <p>Non-Profit · No profits distributed to members</p>
        </div>
      </div>
    </footer>
  );
}
