import { siteContent } from "../data/content";

export default function Footer() {
  const { footer, company, nav, contact } = siteContent;

  return (
    <footer className="bg-neutral-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & description */}
          <div>
            <div className="mb-6">
              <p className="text-lg font-bold tracking-widest uppercase text-white">
                MSD
              </p>
              <p className="text-xs font-light tracking-[0.3em] uppercase text-white/50">
                Architekci
              </p>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              Funkcjonalne, przemyślane i estetyczne rozwiązania architektoniczne.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6 font-light">
              Nawigacja
            </p>
            <ul className="space-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm font-light hover:text-white transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6 font-light">
              Kontakt
            </p>
            <div className="space-y-2 text-white/50 text-sm font-light">
              <p>{company.fullName}</p>
              <p>{contact.address.street}</p>
              <p>{contact.address.city}</p>
              <a
                href={`mailto:${contact.email}`}
                className="block hover:text-white transition-colors mt-4"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-white/20 text-xs font-light tracking-wide text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
