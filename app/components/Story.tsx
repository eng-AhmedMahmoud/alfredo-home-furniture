import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="relative py-20 md:py-32 bg-cream">
      <div className="container-x mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-walnut/80">
            Our Story
          </p>
          <h2 className="mt-4 font-display text-coffee text-4xl md:text-5xl leading-[1.05]">
            A workshop, a family, and a quiet love for wood.
          </h2>
          <p className="mt-6 text-muted leading-relaxed text-base">
            Alfredo began in a small workshop on the outskirts of Cairo more than a decade
            ago. What started as a single dining table built for a friend grew, piece by
            piece, into a studio of designers and craftspeople obsessed with the details
            most people will never see.
          </p>
          <p className="mt-4 text-muted leading-relaxed text-base">
            We believe a great piece of furniture should outlast trends, repair beautifully,
            and earn its place in the room. So we build slowly, with solid timber, full-grain
            leathers, and joinery that doesn&apos;t rely on glue alone.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-widest text-walnut/80">
                Materials
              </dt>
              <dd className="mt-1 font-display text-xl text-coffee">
                Walnut · Oak · Linen
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-walnut/80">
                Finish
              </dt>
              <dd className="mt-1 font-display text-xl text-coffee">Hand-rubbed oil</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-walnut/80">
                Lead time
              </dt>
              <dd className="mt-1 font-display text-xl text-coffee">3–6 weeks</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-walnut/80">
                Warranty
              </dt>
              <dd className="mt-1 font-display text-xl text-coffee">10 years</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 h-[420px] md:h-[560px] lg:h-[640px]">
            <div className="relative col-span-4 row-span-4 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=80"
                alt="Craftsman shaping a wooden chair"
                fill
                sizes="(min-width:1024px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 row-span-3 col-start-5 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=900&q=80"
                alt="Detail of wood grain"
                fill
                sizes="(min-width:1024px) 20vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 row-span-3 col-start-5 row-start-4 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80"
                alt="Linen upholstery detail"
                fill
                sizes="(min-width:1024px) 20vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-4 row-span-2 row-start-5 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80"
                alt="Finished sofa in styled interior"
                fill
                sizes="(min-width:1024px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
