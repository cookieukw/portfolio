import { motion } from "motion/react";

const stackItems = [
  { category: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Konva"] },
  { category: "Desktop", tools: ["Tauri", "Capacitor"] },
  { category: "Backend", tools: ["Node.js", "Java", "SQLite"] },
  { category: "Game Development", tools: ["Hytale", "Minecraft Bedrock", "Game Engines", "Visual Editors"] },
  { category: "AI", tools: ["Gemini API", "Naive Bayes", "Speech API", "IndexedDB"] },
  { category: "Tools", tools: ["Git", "Linux", "Android Studio", "IntelliJ", "VSCode"] },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 lg:border-t lg:border-l border-[var(--color-border)]">
      {stackItems.map((group, groupIndex) => (
        <motion.div 
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: groupIndex * 0.05 }}
          className="flex flex-col p-0 lg:p-8 lg:border-r lg:border-b border-[var(--color-border)]"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-border)]">
             <h4 className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
               {group.category}
             </h4>
             <span className="font-mono text-[9px] opacity-30">0{groupIndex + 1}</span>
          </div>
          
          <ul className="flex flex-col gap-4">
            {group.tools.map((tool, i) => (
              <li key={tool} className="font-bold tracking-tight text-lg group flex justify-between items-center cursor-default">
                <span className="uppercase group-hover:text-[var(--color-accent)] transition-colors">
                  {tool}
                </span>
                <span className="opacity-0 group-hover:opacity-30 text-[10px] font-mono transition-opacity">
                  [{i + 1}]
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
