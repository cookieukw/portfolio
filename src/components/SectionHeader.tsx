import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface SectionHeaderProps {
  number: string;
  category: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ number, category, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("relative flex flex-col md:flex-row md:items-start gap-8 md:gap-24 mb-12 md:mb-20", className)}>
      
      {/* Giant Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-10 -left-10 text-[180px] leading-none font-bold select-none pointer-events-none text-white overflow-hidden"
      >
        {number}
      </motion.div>

      {/* Side Label */}
      <div className="absolute top-0 -left-12 bottom-0 hidden xl:flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-12 bg-white/50"></div>
        <span className="text-[8px] font-mono tracking-widest -rotate-90 origin-center min-w-max my-8">
          {category.toUpperCase()}
        </span>
        <div className="w-[1px] h-32 bg-white/50"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-2 shrink-0 md:w-32 relative z-10"
      >
        <span className="text-[11px] font-bold text-[var(--color-accent)] font-mono tracking-widest">{number} / {category}</span>
        <div className="w-12 h-[1px] bg-[var(--color-accent)] mt-1 opacity-50"></div>
      </motion.div>
      
      <div className="flex flex-col gap-6 max-w-2xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight uppercase relative inline-block"
        >
          {title}
        </motion.h2>
        
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed text-balance font-light italic"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
