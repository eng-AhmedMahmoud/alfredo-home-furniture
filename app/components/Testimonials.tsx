const quotes = [
  {
    q: "Our Alfredo dining table is the heart of every dinner. Six years in and it still feels like the day it arrived.",
    name: "Yasmine A.",
    place: "Maadi, Cairo",
  },
  {
    q: "The team helped us design a custom wardrobe that fits our apartment perfectly. The finish is unreal.",
    name: "Karim & Nada",
    place: "Zamalek",
  },
  {
    q: "I&rsquo;ve bought sofas from international brands before. The Marsa is comfier, prettier, and lasted twice as long.",
    name: "Layla M.",
    place: "New Cairo",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-sand/40">
      <div className="container-x mx-auto max-w-7xl">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-walnut/80">
            Loved at home
          </p>
          <h2 className="mt-4 font-display text-coffee text-4xl md:text-5xl">
            Words from <span className="italic">our families.</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((t) => (
            <figure
              key={t.name}
              className="bg-ivory rounded-2xl p-7 md:p-8 border border-walnut/10 flex flex-col"
            >
              <span
                aria-hidden
                className="font-display text-walnut text-5xl leading-none"
              >
                &ldquo;
              </span>
              <blockquote
                className="mt-2 text-coffee/90 leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: t.q }}
              />
              <figcaption className="mt-6 pt-6 border-t border-walnut/10">
                <div className="text-sm font-medium text-coffee">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-walnut/80 mt-1">
                  {t.place}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
