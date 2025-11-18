import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Video', href: '#teaser' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_40px_rgba(124,58,237,0.25)]">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(236,72,153,0.6)]" aria-hidden="true"></span>
              <span className="font-semibold tracking-tight text-white">Oseras-tu</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-slate-200/80 hover:text-white transition">
                  {n.label}
                </a>
              ))}
              <a href="#download" className="text-sm rounded-full px-4 py-2 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white shadow-[0_8px_30px_rgba(124,58,237,0.5)] hover:brightness-110 transition">Download</a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-slate-200/90 py-1">
                    {n.label}
                  </a>
                ))}
                <a href="#download" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full px-4 py-2 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white shadow-[0_8px_30px_rgba(124,58,237,0.5)]">Download</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
