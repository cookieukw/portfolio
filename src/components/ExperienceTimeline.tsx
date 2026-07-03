import { useState } from "react";
import { motion } from "motion/react";
import type { Experience } from "../types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="flex flex-col relative w-full pt-8 pb-12 font-mono">
      {/* Central Technical Line */}
      <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden lg:block"></div>
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/5 block lg:hidden"></div>

      {experiences.map((exp, index) => {
        const isHovered = hoveredId === exp.id;
        const isLeft = index % 2 === 0;

        return (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
            className={`relative flex items-center justify-between w-full mb-24 lg:mb-32 group ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
            onMouseEnter={() => setHoveredId(exp.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Checkpoint marker */}
            <div className="absolute left-6 lg:left-1/2 top-0 lg:top-1/2 w-4 h-4 -translate-x-1/2 lg:-translate-y-1/2 flex items-center justify-center z-20">
              <div className="w-full h-full border border-white/20 bg-[var(--color-background)] rotate-45 transition-all duration-500 flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:scale-125">
                 <div className={`w-1 h-1 transition-colors duration-500 ${isHovered ? 'bg-[var(--color-accent)]' : 'bg-transparent'}`}></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-[45%] pl-16 lg:pl-0 pt-2 lg:pt-0">
              <div className={`flex flex-col ${isLeft ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} items-start text-left`}>
                
                <div className="text-[9px] tracking-[0.3em] uppercase opacity-40 mb-4 flex items-center gap-4">
                  {isLeft ? (
                    <>
                      <span className="hidden lg:inline-block w-8 h-[1px] bg-white/20"></span>
                      <span>{exp.period}</span>
                    </>
                  ) : (
                    <>
                      <span>{exp.period}</span>
                      <span className="hidden lg:inline-block w-8 h-[1px] bg-white/20"></span>
                    </>
                  )}
                  {/* Mobile line */}
                  <span className="inline-block lg:hidden w-8 h-[1px] bg-white/20"></span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-[var(--color-accent)] transition-colors duration-500 font-sans">
                  {exp.role}
                </h4>
                
                <div className="text-[10px] font-bold tracking-widest uppercase text-white/60 mt-2 mb-6">
                  {exp.company}
                </div>

                <div className="overflow-hidden">
                  <p className="text-xs opacity-50 leading-relaxed font-light italic font-sans max-w-sm transition-opacity duration-500 group-hover:opacity-80">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {['ARCHITECTURE', 'ENGINEERING'].map(tag => (
                      <span key={tag} className="text-[8px] tracking-widest uppercase px-2 py-1 border border-white/10 bg-white/5 text-white/50 transition-colors duration-500 group-hover:border-white/30 group-hover:text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Empty side for balance */}
            <div className="hidden lg:block w-[45%]"></div>

          </motion.div>
        );
      })}
    </div>
  );
}
