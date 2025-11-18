import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Narrative Dashboard',
    desc: 'A data experience that reveals insights through progressive storytelling and motion cues.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Interactive 3D Playground',
    desc: 'Playful 3D scenes integrated into a performant UI using Spline and Three.js.',
    tags: ['Spline', 'Three.js', 'Vite'],
    link: '#'
  },
  {
    title: 'Accessible Design System',
    desc: 'A component library with a focus on usability, accessibility, and expressive motion.',
    tags: ['Design System', 'A11y', 'Storybook'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
          <a href="#contact" className="text-sm text-cyan-300 hover:text-white">Request full portfolio →</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur hover:border-cyan-300/30"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-cyan-400/10 to-blue-500/10" />
              <h3 className="relative z-10 text-white font-semibold">{p.title}</h3>
              <p className="relative z-10 mt-2 text-slate-300">{p.desc}</p>
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
