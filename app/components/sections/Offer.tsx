import { siteContent } from "../../data/content";
import { CheckCircle2 } from "lucide-react";

export default function Offer() {
  const { offer } = siteContent;

  return (
    <section id="oferta" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
            {offer.sectionTitle}
          </span>
          <div className="flex-1 h-px bg-neutral-100 max-w-16" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight tracking-tight mb-20 max-w-2xl">
          {offer.headline}
        </h2>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {offer.services.map((service, index) => (
            <div
              key={service.title}
              className="relative pl-8 border-l-2 border-neutral-100 hover:border-neutral-900 transition-colors group"
            >
              <span className="absolute -left-px top-0 text-xs text-neutral-300 -translate-x-full pr-4 font-light tracking-widest group-hover:text-neutral-900 transition-colors">
                0{index + 1}
              </span>
              <h3 className="text-lg font-medium text-neutral-900 mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advisory section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 bg-stone-50 p-10 lg:p-16 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6 font-light">
              Doradztwo
            </p>
            <h3 className="text-2xl md:text-3xl font-light text-neutral-900 mb-6 leading-tight">
              {offer.advisory.title}
            </h3>
            <p className="text-neutral-500 leading-relaxed font-light">
              {offer.advisory.description}
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-4">
              {offer.advisory.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-neutral-400 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-neutral-600 font-light">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <div className="border border-neutral-100 p-8 lg:p-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4 font-light">
            {offer.pricing.title}
          </p>
          <p className="text-neutral-600 font-light max-w-xl mx-auto leading-relaxed mb-8">
            {offer.pricing.description}
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm tracking-widest uppercase font-light hover:bg-neutral-700 transition-colors"
          >
            Zapytaj o wycenę
          </a>
        </div>
      </div>
    </section>
  );
}
