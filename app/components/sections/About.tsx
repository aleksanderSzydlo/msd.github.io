import { siteContent } from "../../data/content";
import { Phone } from "lucide-react";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="o-nas" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
            {about.sectionTitle}
          </span>
          <div className="flex-1 h-px bg-neutral-100 max-w-16" />
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight tracking-tight mb-8">
              Pracownia założona <br />
              <span className="text-neutral-400">w 2014 roku</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6 font-light text-lg">
              {about.description}
            </p>
            <p className="text-neutral-500 leading-relaxed font-light">
              {about.secondDescription}
            </p>
          </div>

          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-neutral-50 -z-10" />
            <div className="bg-neutral-50 p-8 lg:p-12">
              <p className="text-sm tracking-[0.3em] uppercase text-neutral-400 mb-6 font-light">
                Nasze doświadczenie
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-neutral-900" />
                  <div>
                    <p className="text-neutral-900 font-medium text-sm">
                      Doświadczenie międzynarodowe
                    </p>
                    <p className="text-neutral-500 text-sm font-light">
                      Irlandia od 2006 roku
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-neutral-900" />
                  <div>
                    <p className="text-neutral-900 font-medium text-sm">
                      Dwie szkoły architektury
                    </p>
                    <p className="text-neutral-500 text-sm font-light">
                      Gliwicka i Wrocławska
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-neutral-900" />
                  <div>
                    <p className="text-neutral-900 font-medium text-sm">
                      Ponad 250 projektów
                    </p>
                    <p className="text-neutral-500 text-sm font-light">
                      Od 2014 roku działalności
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architects */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-10 font-light">
            Architekci
          </p>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {about.architects.map((architect) => (
              <div
                key={architect.name}
                className="border border-neutral-100 p-8 hover:border-neutral-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-1">
                      {architect.name}
                    </h3>
                    <p className="text-sm text-neutral-500 font-light">
                      {architect.title}
                    </p>
                  </div>
                  <a
                    href={`tel:${architect.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    <Phone size={14} />
                    <span className="font-light">{architect.phone}</span>
                  </a>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-400 mb-3 font-light">
                      Wykształcenie
                    </p>
                    <ul className="space-y-1">
                      {architect.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-sm text-neutral-600 font-light flex items-start gap-2"
                        >
                          <span className="text-neutral-300 mt-1.5">—</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-400 mb-3 font-light">
                      Doświadczenie
                    </p>
                    <ul className="space-y-1">
                      {architect.experience.map((exp, i) => (
                        <li
                          key={i}
                          className="text-sm text-neutral-600 font-light flex items-start gap-2"
                        >
                          <span className="text-neutral-300 mt-1.5">—</span>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
