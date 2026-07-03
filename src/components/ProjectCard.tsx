import { motion } from "motion/react";
import type { Project } from "../types";
import { Key } from "react";
import { ProjectIntelligence } from "./ProjectIntelligence";

interface ProjectCardProps {
  key?: Key;
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="group relative flex flex-col lg:flex-row bg-[var(--color-surface)] border border-[var(--color-border)] mb-12 overflow-hidden"
    >
      <div className="w-full lg:w-1/3 flex flex-col justify-between p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] relative z-10">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-bold font-mono tracking-widest text-[var(--color-accent)] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
             <span>0{index + 1}</span>
             <span className="w-4 h-[1px] bg-[var(--color-accent)] group-hover:w-8 transition-all duration-500"></span>
             <span>{project.category.toUpperCase()}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase mt-4 tracking-tight group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-500 font-sans">
            {project.title}
          </h3>
          <p className="text-xs mt-6 leading-relaxed opacity-40 font-light font-sans text-justify">
            {project.description}
          </p>
        </div>
        
        <div className="mt-12 hidden lg:flex items-center gap-6">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-[10px] font-mono tracking-[0.3em] uppercase font-bold border-b border-[var(--color-accent)] pb-1 text-[var(--color-accent)] hover:text-white transition-colors">
              View Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-[10px] font-mono tracking-[0.3em] uppercase font-bold border-b border-white/30 pb-1 hover:text-white transition-colors">
              GitHub Repository
            </a>
          )}
          {!project.demoUrl && !project.githubUrl && (
            <button className="text-[10px] font-mono tracking-[0.3em] uppercase font-bold border-b border-[var(--color-accent)] pb-1 hover:text-[var(--color-accent)] transition-colors">
              View Details
            </button>
          )}
        </div>
      </div>
      
      <div className="w-full lg:w-2/3 p-4 md:p-8 relative flex items-center justify-center bg-[var(--color-background)]">
        <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9] bg-white/5 overflow-hidden border border-[var(--color-border)] flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-border),transparent)] pointer-events-none"></div>
          
          <ProjectIntelligence repoPath={project.githubUrl} fallbackImage={project.imageUrl} projectName={project.title} />
          
          {/* DECORATIVE LINES */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30 z-10 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30 z-10 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>
          
          <div className="absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-1.5 sm:gap-2 pointer-events-none max-w-[60%] sm:max-w-none">
             {project.technologies.slice(0, 3).map((tech) => (
               <span key={tech} className="px-2 py-1 bg-[#0A0A0A]/80 border border-[var(--color-border)] backdrop-blur-md text-white text-[9px] font-mono uppercase tracking-widest rounded-none whitespace-nowrap flex items-center">
                 {tech}
               </span>
             ))}
          </div>
          
          {/* Technical Plate */}
          <div className="absolute bottom-4 left-4 z-10 font-mono text-[8px] uppercase tracking-widest text-white/40 pointer-events-none">
            <div>PRJ-00{index + 1}</div>
            <div className="text-emerald-500/50">STATUS ACTIVE</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
