import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Python', 'FastAPI'
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I design and build human-centered digital experiences. My approach blends storytelling with modern engineering to craft interfaces that feel intuitive, expressive, and delightful.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I care deeply about performance, accessibility, and thoughtful motion — using animation to guide attention and create a sense of place.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} viewport={{ once: true }}>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur">
              <h3 className="text-white font-semibold">Core Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
