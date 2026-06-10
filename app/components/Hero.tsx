import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=80"
          alt="Warm modern living room with curated furniture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee/40 via-coffee/25 to-ivory" />
      </div>

      <div className="container-x mx-auto max-w-7xl pt-40 md:pt-52 pb-20 md:pb-32">
        <div className="max-w-3xl">
          <p className="fade-up text-ivory/90 text-xs uppercase tracking-[0.35em]">
            Alfredo Home Furniture · Est. Cairo
          </p>
          <h1 className="fade-up mt-6 font-display text-ivory text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95]">
            Furniture that
            <br />
            <span className="italic text-sand">feels like home.</span>
          </h1>
          <p className="fade-up mt-7 max-w-xl text-ivory/85 text-base md:text-lg leading-relaxed">
            Designed in Cairo, crafted by hand. Alfredo brings together honest materials,
            modern silhouettes, and the kind of comfort you only notice once you sink in.
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 rounded-full bg-ivory text-coffee px-6 py-3.5 text-sm font-medium hover:bg-cream transition"
            >
              Explore collections
              <span aria-hidden>→</span>
            </a>
            <a
              href="#showroom"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/50 text-ivory px-6 py-3.5 text-sm hover:bg-ivory/10 transition"
            >
              Visit our showroom
            </a>
          </div>

          <div className="fade-up mt-16 grid grid-cols-3 gap-6 max-w-md text-ivory/85">
            <div>
              <div className="font-display text-3xl">12+</div>
              <div className="text-[11px] uppercase tracking-widest mt-1 text-ivory/70">
                Years crafting
              </div>
            </div>
            <div>
              <div className="font-display text-3xl">5k</div>
              <div className="text-[11px] uppercase tracking-widest mt-1 text-ivory/70">
                Homes furnished
              </div>
            </div>
            <div>
              <div className="font-display text-3xl">100%</div>
              <div className="text-[11px] uppercase tracking-widest mt-1 text-ivory/70">
                Made in Egypt
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-2 text-ivory/70 text-[10px] uppercase tracking-[0.3em]">
        <span>Scroll</span>
        <span className="block h-10 w-px bg-ivory/40" />
      </div>
    </section>
  );
}
