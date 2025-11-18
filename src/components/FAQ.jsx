import { useState } from 'react'

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <button onClick={() => setOpen(!open)} className="w-full text-left text-white flex items-center justify-between gap-4">
        <span className="font-medium">{q}</span>
        <span className="text-violet-300">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-slate-300/90 text-sm">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  const items = [
    { q: 'Is the game free?', a: 'You can play the core game for free. Optional premium packs and extra spicy content are available.' },
    { q: 'Is there NSFW content?', a: 'Yes, some packs include adult content. You control the spice level and can disable NSFW at any time.' },
    { q: 'How many players are required?', a: 'Play with 2 to 10+ players. Great for couples game nights or a full party game with friends.' },
    { q: 'Does it work offline?', a: 'Absolutely. The truth or dare app works offline so your party never stops, even without internet.' },
    { q: 'Can I create my own dares?', a: 'Yes! Personalize your experience by adding custom truths and dares and saving your favorite prompts.' },
  ]

  return (
    <section id="faq" aria-label="FAQ" className="relative bg-gradient-to-b from-[#06030f] to-black py-24">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently asked questions</h2>
          <p className="mt-2 text-slate-300/90">Answers to the most common questions about our truth or dare app.</p>
        </div>
        <div className="grid gap-4">
          {items.map((it, i) => (
            <Item key={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
