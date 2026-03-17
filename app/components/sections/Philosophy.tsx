import { siteContent } from "../../data/content";

export default function Philosophy() {
  const { philosophy } = siteContent;

  return (
    <section id="filozofia" className="py-24 lg:py-32 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
            {philosophy.sectionTitle}
          </span>
          <div className="flex-1 h-px bg-white/10 max-w-16" />
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
            {philosophy.headline}
          </h2>
          <p className="text-white/60 leading-relaxed font-light text-lg lg:pt-4">
            {philosophy.description}
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {philosophy.principles.map((principle, index) => (
            <div
              key={principle.title}
              className="bg-neutral-900 p-8 lg:p-10 hover:bg-neutral-800 transition-colors"
            >
              <div className="mb-6">
                <span className="text-xs text-white/20 font-light tracking-widest">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-medium mb-4 tracking-wide">
                {principle.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 pt-20 border-t border-white/10 text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed italic">
            &bdquo;Nie stawiamy ambicji ponad realne potrzeby i budżet inwestora.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
