import { siteContent } from "../../data/content";
import { Home, Building2, Landmark, RefreshCw } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={24} />,
  Building2: <Building2 size={24} />,
  Landmark: <Landmark size={24} />,
  RefreshCw: <RefreshCw size={24} />,
};

export default function Projects() {
  const { projects } = siteContent;

  return (
    <section id="projekty" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
            {projects.sectionTitle}
          </span>
          <div className="flex-1 h-px bg-neutral-200 max-w-16" />
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
            {projects.headline}
          </h2>
          <p className="text-neutral-500 leading-relaxed font-light text-lg">
            {projects.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 mb-20">
          {projects.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-stone-50 px-8 py-10 text-center"
            >
              <p className="text-4xl md:text-5xl font-light text-neutral-900 mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-neutral-400 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.categories.map((category) => (
            <div
              key={category.title}
              className="group bg-white border border-neutral-100 p-8 hover:border-neutral-200 hover:shadow-sm transition-all"
            >
              <div className="text-neutral-400 mb-6 group-hover:text-neutral-700 transition-colors">
                {iconMap[category.icon]}
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3 tracking-wide">
                {category.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
