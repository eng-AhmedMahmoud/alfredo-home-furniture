import Image from "next/image";

const products = [
  {
    name: "Marsa Sofa",
    tag: "New",
    price: "From EGP 48,500",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Atelier Dining Table",
    tag: "Signature",
    price: "From EGP 32,000",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Noor Bed",
    tag: "Bespoke",
    price: "From EGP 39,000",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rama Armchair",
    tag: "Best seller",
    price: "From EGP 18,900",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Yara Sideboard",
    tag: "Studio pick",
    price: "From EGP 27,500",
    img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sahar Coffee Table",
    tag: "New",
    price: "From EGP 11,400",
    img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Featured() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-walnut/80">
              Featured
            </p>
            <h2 className="mt-4 font-display text-coffee text-4xl md:text-5xl">
              This season&apos;s pieces.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-coffee/80 hover:text-coffee inline-flex items-center gap-2"
          >
            See the full catalogue <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-ivory/90 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-coffee">
                  {p.tag}
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl text-coffee">{p.name}</h3>
                  <p className="text-sm text-muted mt-1">{p.price}</p>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-walnut/30 text-coffee hover:bg-coffee hover:text-ivory transition"
                  aria-label={`Enquire about ${p.name}`}
                >
                  →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
