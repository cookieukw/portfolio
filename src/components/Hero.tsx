import { motion } from "motion/react";
import { DecorativeFrame } from "./DecorativeFrame";
import { AnimatedDivider } from "./AnimatedDivider";
import { GlitchName } from "./GlitchName";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center py-12 px-6 md:px-16 overflow-hidden">
      <DecorativeFrame />
      <AnimatedDivider />
      <div className="w-full relative z-10 grid grid-cols-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-12 lg:col-span-10 flex flex-col justify-center"
        >
          <div className="mb-8">
            <span className="text-[var(--color-accent)] text-[11px] font-bold tracking-widest font-mono">00 / HERO</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mb-2 h-10 flex items-center text-2xl md:text-4xl"
          >
            <GlitchName />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[60px] md:text-[100px] lg:text-[120px] font-bold leading-[0.85] tracking-tighter uppercase group"
          >
            Software Beyond<br className="hidden md:block" />
            <span className="text-transparent stroke-white inline-block transition-transform duration-1000 group-hover:translate-x-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Applications</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-8 max-w-md text-sm leading-relaxed opacity-40 font-light italic"
          >
            I build developer tools, game engines, desktop applications and AI systems focused on solving complex technical problems. Most of my work revolves around creating infrastructure, frameworks and editors that help developers build better software.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-12 flex items-center gap-6"
          >
            <a href="#work" className="px-8 py-3 border border-white/10 hover:border-white/40 transition-all text-[11px] tracking-[0.3em] uppercase bg-white/5 font-bold hover:bg-white/10 relative overflow-hidden group">
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 inline-block">Explore Work</span>
            </a>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest opacity-30">Specialties</span>
              <span className="text-[11px] font-mono mt-1 opacity-70">Open Source / Engines / Desktop / AI [●]</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 right-12 flex flex-col items-center opacity-30"
      >
        <div className="w-[1px] h-32 bg-[var(--color-border)] relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 128] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
