import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(59,130,246,0.12),transparent)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />

        <footer className="border-t border-white/10 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
            <p className="text-slate-400">© {new Date().getFullYear()} Hengki Kurniawan. All rights reserved.</p>
            <p className="text-slate-500">Built with love, motion, and clean code.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
