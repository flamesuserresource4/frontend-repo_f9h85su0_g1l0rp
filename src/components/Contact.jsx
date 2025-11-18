import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // For now, just simulate success. Backend can be added later if needed.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you soon.')
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s build something memorable</h2>
            <p className="mt-4 text-slate-300">Tell me about your idea, timeline, and goals. I’ll respond with thoughts and ways to help.</p>
            {status && <p className="mt-4 text-cyan-300">{status}</p>}
          </motion.div>

          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-2 text-white outline-none focus:border-cyan-300/40" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-2 text-white outline-none focus:border-cyan-300/40" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows="5" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white outline-none focus:border-cyan-300/40"></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
