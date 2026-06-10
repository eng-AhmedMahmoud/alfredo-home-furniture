const items = [
  "Handcrafted in Cairo",
  "Solid walnut & oak",
  "Free delivery in Egypt",
  "Bespoke options",
  "10-year frame warranty",
  "Sustainable sourcing",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="bg-coffee text-ivory border-y border-walnut-dark overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap py-5 w-max">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-sm tracking-wide">
            <span>{t}</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-bronze" />
          </div>
        ))}
      </div>
    </div>
  );
}
