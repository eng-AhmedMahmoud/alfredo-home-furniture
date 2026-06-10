import Image from "next/image";

const collections = [
  {
    name: "Living",
    items: "Sofas · Armchairs · Coffee tables",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Bedroom",
    items: "Beds · Wardrobes · Nightstands",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Dining",
    items: "Tables · Chairs · Sideboards",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Office",
    items: "Desks · Shelving · Storage",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative py-20 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-walnut/80">
              Collections
            </p>
            <h2 className="mt-4 font-display text-coffee text-4xl md:text-5xl lg:text-6xl leading-[1.02]">
              Pieces for every <span className="italic">room of the house.</span>
            </h2>
          </div>
          <p className="text-muted max-w-md text-base leading-relaxed">
            From the quiet centerpiece in the living room to the bed you sink into at night,
            every Alfredo collection is designed to age with you, not against you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((c) => (
            <a
              key={c.name}
              href="#contact"
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-cream"
            >
              <Image
                src={c.img}
                alt={`${c.name} collection`}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/85 via-coffee/15 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-ivory">
                <div className="font-display text-2xl md:text-3xl">{c.name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-ivory/75">
                  {c.items}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm opacity-90 group-hover:gap-3 transition-all">
                  Explore <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
