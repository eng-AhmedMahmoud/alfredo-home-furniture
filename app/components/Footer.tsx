export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-walnut-dark text-ivory/80">
      <div className="container-x mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-3xl text-ivory">Alfredo</div>
            <p className="mt-4 max-w-sm text-ivory/70 leading-relaxed">
              A small Cairo studio designing and making honest, modern furniture for
              homes that are lived in, not just looked at.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-widest text-bronze">
              Shop
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#collections" className="hover:text-ivory">Living</a></li>
              <li><a href="#collections" className="hover:text-ivory">Bedroom</a></li>
              <li><a href="#collections" className="hover:text-ivory">Dining</a></li>
              <li><a href="#collections" className="hover:text-ivory">Office</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-widest text-bronze">
              Studio
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#story" className="hover:text-ivory">Our Story</a></li>
              <li><a href="#craft" className="hover:text-ivory">Craft</a></li>
              <li><a href="#showroom" className="hover:text-ivory">Showroom</a></li>
              <li><a href="#contact" className="hover:text-ivory">Bespoke</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-widest text-bronze">
              Follow
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/AlfredoHomeFurniture"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ivory inline-flex items-center gap-2"
                >
                  Facebook <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ivory inline-flex items-center gap-2"
                >
                  Instagram <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@alfredohome.com"
                  className="hover:text-ivory inline-flex items-center gap-2"
                >
                  hello@alfredohome.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 hairline" />
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-ivory/55">
          <div>© {year} Alfredo Home Furniture. Made in Cairo.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-ivory">Privacy</a>
            <a href="#" className="hover:text-ivory">Terms</a>
            <a href="#" className="hover:text-ivory">Care guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
