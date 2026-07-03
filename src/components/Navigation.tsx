import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.95]);
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header 
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[var(--color-background)] border-b border-[var(--color-border)] h-16`}
    >
      <div className="h-full px-6 md:px-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.2em] font-bold text-[var(--color-accent)]">PORTFOLIO</span>
          <div className="h-4 w-[1px] bg-[var(--color-border)] hidden md:block"></div>
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-medium hidden md:block">Portfolio System</span>
        </div>
        
        <nav className="hidden md:flex gap-10">
          {["Work", "About", "Experience", "Contact"].map((item, i) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] tracking-widest uppercase font-medium opacity-40 hover:opacity-100 transition-opacity cursor-pointer relative group"
            >
              0{i + 1} {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        
        <button className="md:hidden flex flex-col gap-1.5 p-2 opacity-50 hover:opacity-100">
           <div className="w-5 h-[1px] bg-[var(--color-text-main)]" />
           <div className="w-5 h-[1px] bg-[var(--color-text-main)]" />
        </button>
      </div>
    </motion.header>
  );
}
