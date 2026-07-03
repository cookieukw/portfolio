import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function BackgroundOverlay() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -400]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Small parallax offset based on mouse
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Fine lines */}
      <div className="absolute top-0 bottom-0 left-[5%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-[5%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      {/* Coordinates / Markers */}
      <div className="absolute top-[10%] left-[5%] -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
        <div className="w-[1px] h-8 bg-white/50"></div>
        <span className="text-[8px] font-mono rotate-90 my-4 tracking-widest">LAT 45.92</span>
        <div className="w-[1px] h-8 bg-white/50"></div>
      </div>

      <div className="absolute bottom-[20%] right-[5%] translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
        <div className="w-[1px] h-4 bg-white/50"></div>
        <span className="text-[8px] font-mono -rotate-90 my-6 tracking-widest text-emerald-400">SYS.ONLINE</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>

      {/* Floating Geometry Layer 1 */}
      <motion.div 
        style={{ y: y1, x: mousePos.x * -1, translateY: mousePos.y * -1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-[20%] left-[20%] w-32 h-32 border border-white/5 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-white/10 rounded-full"></div>
        </div>
        <div className="absolute top-[60%] right-[15%] w-8 h-8 border border-white/10 rotate-45"></div>
        <div className="absolute bottom-[30%] left-[30%] flex gap-2">
           <div className="w-1 h-1 bg-white/10"></div>
           <div className="w-1 h-1 bg-white/10"></div>
           <div className="w-1 h-1 bg-white/10"></div>
        </div>
      </motion.div>

      {/* Floating Geometry Layer 2 */}
      <motion.div 
        style={{ y: y2, x: mousePos.x * 0.5, translateY: mousePos.y * 0.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-[40%] right-[30%] w-[1px] h-32 bg-white/10 transform rotate-45"></div>
        <div className="absolute top-[70%] left-[10%] text-[8px] font-mono tracking-[0.5em] text-white/10">
          SEC-001
        </div>
        <div className="absolute top-[10%] right-[40%] flex gap-1">
           <div className="w-4 h-[1px] bg-white/10"></div>
           <div className="w-8 h-[1px] bg-white/5"></div>
        </div>
      </motion.div>
    </div>
  );
}
