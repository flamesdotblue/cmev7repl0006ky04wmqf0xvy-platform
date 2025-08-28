import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
          <div className="absolute -inset-x-10 -top-10 h-40 opacity-60 blur-3xl bg-gradient-to-r from-fuchsia-600/30 via-indigo-600/30 to-transparent" />
          <div className="relative grid gap-10 lg:grid-cols-2 p-8 md:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to launch something iconic?</h3>
              <p className="mt-3 text-white/70 max-w-md">Tell us about your console, controller or accessory. We’ll craft an immersive launch experience with measurable impact.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:hello@respawnlabs.studio" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-medium shadow-lg shadow-fuchsia-900/25 hover:opacity-95 transition">
                  Email us: hello@respawnlabs.studio
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/0 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                  Download capabilities deck
                </a>
              </div>
            </div>
            <form className="grid gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-500/50" />
                <input type="email" placeholder="Work email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-500/50" />
              </div>
              <input type="text" placeholder="Company" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-500/50" />
              <textarea placeholder="Project brief" rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-500/50" />
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
                Request proposal
              </button>
              <p className="text-xs text-white/40">We’ll get back within 1–2 business days. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
