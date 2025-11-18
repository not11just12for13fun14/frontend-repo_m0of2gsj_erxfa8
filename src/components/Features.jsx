import { Trophy, Zap, Users, Wand2 } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_8px_60px_rgba(99,102,241,0.15)] hover:shadow-[0_20px_120px_rgba(124,58,237,0.25)] transition">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-violet-500/10 via-fuchsia-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.5)]">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-300/90 text-sm">{desc}</p>
    </div>
  </div>
)

export default function Features() {
  return (
    <section id="features" aria-label="Game features" className="relative bg-gradient-to-b from-[#0a0614] to-[#070311] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_30%_at_20%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_30%_at_80%_100%,rgba(236,72,153,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Playful features that turn any night into a legend</h2>
          <p className="mt-3 text-slate-300/90">A truth or dare app that’s built for parties, couples, and unforgettable moments. Mix classic packs with a neon-fast competition mode.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Trophy} title="Competition Mode" desc="Choose difficulty, earn points, and risk penalties. The scoreboard keeps everyone on their toes." />
          <FeatureCard icon={Zap} title="Classic Packs" desc="Pick themed packs: fun, spicy, friends, drinking game, and more. Add chaos with Roles & Events." />
          <FeatureCard icon={Users} title="Roles & Events" desc="Twists appear between rounds: swap points, team up, double dares, or sabotage your rivals." />
          <FeatureCard icon={Wand2} title="Customization" desc="Create your own dares and truths. Save favorites, build private decks, and tweak the spice level." />
        </div>
      </div>
    </section>
  )
}
