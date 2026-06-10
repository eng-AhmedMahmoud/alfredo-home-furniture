const pillars = [
  {
    n: "01",
    title: "Honest materials",
    body: "Kiln-dried solid timber, natural linens, and full-grain leathers — chosen for how they age, not just how they look on day one.",
  },
  {
    n: "02",
    title: "Considered design",
    body: "Silhouettes that feel quiet in a room. We sketch, prototype, and live with each piece before it leaves the workshop.",
  },
  {
    n: "03",
    title: "Built to be repaired",
    body: "Bolted frames, slip-on covers, replaceable cushions. Your Alfredo should outlive the room you bought it for.",
  },
  {
    n: "04",
    title: "Made here, by hand",
    body: "Every piece is made in our Cairo atelier by craftspeople we know by name — and that we&rsquo;ve trained for years.",
  },
];

export default function Craft() {
  return (
    <section id="craft" className="relative py-20 md:py-32 bg-coffee text-ivory">
      <div className="container-x mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze">
            The craft
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Four ideas we won&apos;t compromise on.
          </h2>
          <p className="mt-6 text-ivory/75 leading-relaxed">
            We&apos;re a small studio. That&apos;s on purpose. It lets us care about the
            details that make furniture feel like family — the joinery you don&apos;t see,
            the weight of a drawer pull, the way a cushion holds its shape.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-walnut-dark rounded-2xl overflow-hidden border border-walnut-dark">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="bg-coffee p-8 md:p-10 lg:p-12 group hover:bg-walnut-dark/60 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-bronze text-2xl">{p.n}</span>
                <span className="h-px flex-1 bg-ivory/15 group-hover:bg-bronze/60 transition-colors" />
              </div>
              <h3 className="mt-6 font-display text-2xl md:text-3xl">{p.title}</h3>
              <p
                className="mt-4 text-ivory/70 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
