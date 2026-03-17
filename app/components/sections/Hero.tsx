import { siteContent } from "../../data/content";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const { hero, company } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-stone-900" />

      {/* Subtle architectural pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                           linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Company label */}
        <p className="text-white/60 tracking-[0.5em] uppercase text-xs md:text-sm mb-8 font-light">
          {company.name}
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-tight mb-8">
          {hero.headline}
        </h1>

        {/* Decorative line */}
        <div className="w-16 h-px bg-white/40 mx-auto mb-8" />

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          {hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projekty"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-sm tracking-widest uppercase font-medium hover:bg-neutral-100 transition-colors"
          >
            {hero.cta}
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-sm tracking-widest uppercase font-light hover:bg-white/10 transition-colors"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown size={16} className="text-white/40" />
      </div>

      {/* Founded year */}
      <div className="absolute bottom-10 right-8 lg:right-12">
        <p className="text-white/20 text-xs tracking-widest">
          Est. {company.founded}
        </p>
      </div>
    </section>
  );
}
