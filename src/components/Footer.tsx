import { useState, useEffect } from "react";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace("T", " ").substring(0, 19) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] relative z-20 font-mono text-[9px] uppercase tracking-widest text-white/40">
      <div className="flex flex-col md:flex-row">
        {/* Connection Status */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-[var(--color-border)] p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>System Status: Online</span>
          </div>
          <div>NET.RTT: 14ms</div>
        </div>

        {/* Local Time */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-[var(--color-border)] p-4 md:p-6 flex items-center justify-between">
          <span>Local Time</span>
          <span className="text-white/80">{time}</span>
        </div>

        {/* Current Focus */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-[var(--color-border)] p-4 md:p-6 flex items-center justify-between">
          <span>Current Focus</span>
          <span className="text-[var(--color-accent)]">
            Engine Architecture
          </span>
        </div>

        {/* Identity */}
        <div className="flex-1 p-4 md:p-6 flex items-center justify-between bg-[var(--color-background)]">
          <span>Built with React & TS</span>
          <span className="font-bold text-white/80">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
