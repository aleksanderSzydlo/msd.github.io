"use client";

import { siteContent } from "../../data/content";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { contact, company } = siteContent;

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
            {contact.sectionTitle}
          </span>
          <div className="flex-1 h-px bg-white/10 max-w-16" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Headline */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-8">
              {contact.headline}
            </h2>
            <p className="text-white/60 leading-relaxed font-light text-lg mb-12">
              {contact.description}
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin size={18} className="text-white/40" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/30 mb-2 font-light">
                    Adres
                  </p>
                  <p className="text-white/80 font-light">
                    {company.fullName}
                  </p>
                  <p className="text-white/60 font-light text-sm">
                    {contact.address.street}
                  </p>
                  <p className="text-white/60 font-light text-sm">
                    {contact.address.city}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail size={18} className="text-white/40" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/30 mb-2 font-light">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-white/80 font-light hover:text-white transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone size={18} className="text-white/40" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/30 mb-2 font-light">
                    Telefon
                  </p>
                  <div className="space-y-2">
                    {contact.phones.map((phone) => (
                      <div key={phone.person} className="flex items-center gap-3">
                        <span className="text-white/40 text-sm font-light w-12">
                          {phone.person}
                        </span>
                        <a
                          href={`tel:${phone.number.replace(/\s/g, "")}`}
                          className="text-white/80 font-light hover:text-white transition-colors"
                        >
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-white/40 mb-2 font-light">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm font-light focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-white/40 mb-2 font-light">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm font-light focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="+48 600 000 000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-white/40 mb-2 font-light">
                  Adres e-mail
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm font-light focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-white/40 mb-2 font-light">
                  Temat
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm font-light focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Projekt domu jednorodzinnego"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-white/40 mb-2 font-light">
                  Wiadomość
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm font-light focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Opisz swój projekt..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-neutral-900 py-4 text-sm tracking-widest uppercase font-medium hover:bg-neutral-100 transition-colors"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
