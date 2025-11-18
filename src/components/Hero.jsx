import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" aria-label="Oseras-tu hero" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0b0b1a] to-[#0a0614]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_10%_90%,rgba(236,72,153,0.2),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 text-center">
        <h1 className="mx-auto max-w-4xl text-balance bg-gradient-to-br from-white via-violet-100 to-fuchsia-100 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent drop-shadow-[0_0_30px_rgba(124,58,237,0.25)]">
          Oseras-tu — The Truth or Dare Game That Heats Up Your Night
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200/90 text-lg sm:text-xl">
          Spicy dares, bold truths, and a competitive mode with points. A party game built for friends and couples — play offline or turn it into a drinking game.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4" id="download">
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 px-6 py-3 text-white shadow-[0_10px_40px_rgba(236,72,153,0.45)] hover:brightness-110 transition">
            Download on Google Play
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md hover:bg-white/15 transition">
            See Features
          </a>
        </div>

        {/* Phone mockups */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
          {[
            { src: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=600&auto=format&fit=crop', alt: 'Packs screen' },
            { src: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop', alt: 'Competition mode screen' },
            { src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop', alt: 'Home screen' },
          ].map((img, i) => (
            <div key={i} className="relative mx-auto w-64 h-[520px] rounded-[2.5rem] border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_20px_120px_rgba(124,58,237,0.35)]">
              <div className="absolute inset-0 rounded-[2.5rem] p-2">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="absolute inset-x-16 -top-2 h-2 rounded-b-full bg-black/40" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
