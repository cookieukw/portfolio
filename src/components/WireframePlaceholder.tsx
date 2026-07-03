interface WireframePlaceholderProps {
  title: string;
}

export function WireframePlaceholder({ title }: WireframePlaceholderProps) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[var(--color-background)] flex items-center justify-center font-mono group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]">
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
        }}
      />

      {/* Crosshairs */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5"></div>
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5"></div>
      <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
      </div>

      {/* Tech Data */}
      <div className="absolute top-4 left-4 text-[9px] text-white/30 tracking-widest uppercase">
        <div>SYS: {title}</div>
        <div>RES: 1920x1080</div>
      </div>

      <div className="absolute bottom-4 right-4 text-[9px] text-white/30 tracking-widest uppercase text-right">
        <div>FRAME AWAITING RENDER</div>
        <div className="text-emerald-500/50">STATUS: STANDBY</div>
      </div>
    </div>
  );
}
