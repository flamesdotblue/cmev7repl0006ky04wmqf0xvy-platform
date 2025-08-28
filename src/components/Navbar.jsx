import React from 'react'
import { Gamepad2, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute -inset-1 rounded-xl bg-fuchsia-500/30 blur" />
              <Gamepad2 className="relative h-7 w-7 text-fuchsia-400" />
            </div>
            <span className="font-semibold tracking-tight">Respawn Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-900/20 hover:opacity-95 transition">
              Get a Demo
            </a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white/80 hover:text-white hover:bg-white/5">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
