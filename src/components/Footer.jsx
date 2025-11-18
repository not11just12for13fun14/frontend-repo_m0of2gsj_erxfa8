export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-400 text-sm">© 2025 Oseras-tu</div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="text-slate-300/80 hover:text-white transition">Legal Notice</a>
          <a href="#" className="text-slate-300/80 hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-slate-300/80 hover:text-white transition">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
