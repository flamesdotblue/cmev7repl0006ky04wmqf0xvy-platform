import React from 'react'
import { Layers, Cpu, Zap, MonitorSmartphone } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Design + Dev, unified',
    description: 'A cross‑disciplinary team shipping pixel‑perfect frontends with robust, performant code.'
  },
  {
    icon: Cpu,
    title: 'Real‑time 3D',
    description: 'Spline, WebGL and GPU‑accelerated shaders to showcase consoles with cinematic fidelity.'
  },
  {
    icon: Zap,
    title: 'Lightning performance',
    description: 'Vite + React + edge rendering tuned for 90+ Lighthouse on desktop and mobile.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Fully responsive',
    description: 'Adaptive layouts and interactions that look great from 4K televisions to handhelds.'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-white/70">Production‑ready launch sites, interactive product reveals and high‑impact digital campaigns for gaming hardware brands.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(300px_120px_at_20%_-20%,rgba(168,85,247,0.35),transparent)]" />
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/10 p-3">
                  {React.createElement(f.icon, { className: 'h-6 w-6 text-fuchsia-300' })}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
