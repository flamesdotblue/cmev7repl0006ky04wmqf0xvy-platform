import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="showcase" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 md:py-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
              Next‑gen Console Experiences
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Powering the future of gaming console launches
            </h1>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-xl">
              We’re a creative-tech agency crafting immersive product sites and real‑time 3D demos for gaming consoles and accessories.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-medium shadow-lg shadow-fuchsia-900/25 hover:opacity-95 transition">
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/0 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                Explore features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-white/50">
              <div>
                <span className="text-white font-semibold">50+ launches</span>
                <span className="ml-2">shipped globally</span>
              </div>
              <div>
                <span className="text-white font-semibold">Realtime 3D</span>
                <span className="ml-2">with Spline & WebGL</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent pointer-events-none" />
              <div className="w-full aspect-[4/3] md:aspect-[16/10]">
                <iframe
                  title="3D Console Showcase"
                  src="https://my.spline.design/gameconsole-HdFnDg9XWjW1WyZHMV5QIlbt/"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 opacity-60 blur-3xl bg-gradient-to-r from-fuchsia-600/30 via-indigo-600/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
