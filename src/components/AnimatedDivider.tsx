import { motion } from 'motion/react';

export function AnimatedDivider() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-transparent flex justify-center z-10">
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full bg-[var(--color-border)] origin-center"
      />
    </div>
  );
}
