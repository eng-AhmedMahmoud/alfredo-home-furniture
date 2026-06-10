import Image from "next/image";

export default function Showroom() {
  return (
    <section id="showroom" className="relative py-20 md:py-32">
      <div className="container-x mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-[5/6] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?auto=format&fit=crop&w=1400&q=80"
            alt="Alfredo showroom interior"
            fill
            sizes="(min-width:1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-walnut/80">
            The showroom
          </p>
          <h2 className="mt-4 font-display text-coffee text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Come sit on it. <span className="italic">We brewed coffee.</span>
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Furniture is a tactile thing — the weight of a drawer, the give of a cushion,
            the warmth of oiled walnut under your hand. Come spend an hour with us at the
            Cairo showroom and we&apos;ll help you choose with confidence.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-walnut/80">
                Address
              </div>
              <div className="mt-1 text-coffee leading-relaxed">
                Alfredo Atelier &amp; Showroom
                <br />
                New Cairo, Cairo Governorate
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-walnut/80">
                Open
              </div>
              <div className="mt-1 text-coffee leading-relaxed">
                Sat – Thu · 11:00 – 21:00
                <br />
                Friday · 14:00 – 21:00
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-coffee text-ivory px-6 py-3 text-sm hover:bg-walnut-dark transition"
            >
              Book a private visit <span aria-hidden>→</span>
            </a>
            <a
              href="https://www.facebook.com/AlfredoHomeFurniture"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-walnut/30 text-coffee px-6 py-3 text-sm hover:bg-cream transition"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
