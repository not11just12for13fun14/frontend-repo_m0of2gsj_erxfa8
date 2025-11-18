import { Play, Pause } from 'lucide-react'
import { useRef, useState } from 'react'

export default function Teaser() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section id="teaser" aria-label="Teaser video" className="relative bg-gradient-to-b from-[#070311] to-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[0_20px_120px_rgba(99,102,241,0.25)]">
          <div className="relative overflow-hidden rounded-2xl">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full"
              poster="https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1200&auto=format&fit=crop"
            >
              <source src="https://cdn.coverr.co/videos/coverr-nightclub-hands-1479/1080p.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex items-center justify-center">
              <button onClick={toggle} className="rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 inline-flex items-center gap-2 hover:bg-white/15 transition">
                {playing ? <Pause size={18} /> : <Play size={18} />}
                <span className="text-sm">{playing ? 'Pause' : 'Play'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#download" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 px-6 py-3 text-white shadow-[0_10px_40px_rgba(236,72,153,0.45)] hover:brightness-110 transition">Download Now</a>
        </div>
      </div>
    </section>
  )
}
