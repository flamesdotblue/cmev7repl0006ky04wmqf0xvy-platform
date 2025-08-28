import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(800px_400px_at_20%_20%,rgba(59,130,246,0.18),transparent)]"></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Respawn Labs. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
