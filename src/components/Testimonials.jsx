export default function Testimonials() {
  const items = [
    { name: 'Léa', quote: 'Competition Mode is wild. We turned a chill night into a full-on tournament. 10/10 party game!' },
    { name: 'Max', quote: 'The spicy packs are hilarious and surprisingly creative. Perfect couples game — and yes, a fun drinking game too.' },
    { name: 'Nina', quote: 'Roles & Events add the perfect chaos. You never know what’s coming next and that’s the best part.' },
    { name: 'Alex', quote: 'Clean design, offline works great, and making our own dares was super easy. We play every weekend.' },
  ]

  return (
    <section id="reviews" aria-label="Social proof" className="relative bg-gradient-to-b from-black to-[#06030f] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_30%_at_50%_20%,rgba(124,58,237,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm text-violet-300/80">⭐ 4.8/5 — Rated by 10,000+ players</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Loved by party people and night owls</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_80px_rgba(236,72,153,0.15)]">
              <figcaption className="text-sm text-slate-300/90">{t.quote}</figcaption>
              <div className="mt-4 text-slate-200">— {t.name} 🥂</div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
