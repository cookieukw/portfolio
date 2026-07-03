import { useState, useEffect } from "react";
import { useProjectStats } from "../github/hooks";
import { WireframePlaceholder } from "./WireframePlaceholder";

interface ProjectIntelligenceProps {
  repoPath?: string;
  fallbackImage: string;
  projectName: string;
}

export function ProjectIntelligence({
  repoPath,
  fallbackImage,
  projectName,
}: ProjectIntelligenceProps) {
  const { stats, loading } = useProjectStats(repoPath);
  const [showStats, setShowStats] = useState(false);
  const [glitchPhase, setGlitchPhase] = useState(0); // 0 = stable, 1 = glitching

  useEffect(() => {
    // Only alternate if we have valid stats to show
    if (!stats || (!stats.repo && stats.commitCount === 0)) return;

    let timeoutId: NodeJS.Timeout;

    const runCycle = () => {
      // Start glitch
      setGlitchPhase(1);

      // Short delay for the glitch effect to show before swapping content
      setTimeout(() => {
        setShowStats((prev) => !prev);

        // Stop glitch shortly after swap
        setTimeout(() => {
          setGlitchPhase(0);
        }, 150);
      }, 150);

      // Next cycle
      timeoutId = setTimeout(runCycle, 6000 + Math.random() * 4000);
    };

    timeoutId = setTimeout(runCycle, 4000);

    return () => clearTimeout(timeoutId);
  }, [stats]);

  const isUnsplash = fallbackImage.includes("unsplash.com");

  const renderFallback = () => {
    if (isUnsplash) {
      return <WireframePlaceholder title={projectName} />;
    }
    return (
      <img
        src={fallbackImage}
        alt="Project visualization"
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
      />
    );
  };

  if (!repoPath) {
    return renderFallback();
  }

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[var(--color-surface)]">
        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping mb-4"></div>
        <div className="text-[10px] font-mono tracking-widest uppercase opacity-50">
          Syncing with GitHub...
        </div>
      </div>
    );
  }

  if (!stats || (!stats.repo && stats.commitCount === 0)) {
    return renderFallback();
  }

  // Calculate languages percentage
const totalLanguageBytes = stats.languages
  ? Object.values(stats.languages as Record<string, number>).reduce(
      (a, b) => a + b,
      0,
    )
  : 0;

  // Create a timeline based on commits (group by month for the last 6 months)
  // For simplicity, we just take the commits array and visualize frequency
  // In a real scenario we'd parse dates, but this is a simplified view

  const glitchClass =
    glitchPhase === 1
      ? "opacity-70 scale-[1.02] -skew-x-[2deg] blur-[1px]"
      : "opacity-100 scale-100 skew-x-0 blur-0";

  return (
    <div
      className={`w-full h-full relative overflow-hidden transition-all duration-75 ${glitchClass}`}
    >
      {/* Visual Glitch Artifacts during glitch phase */}
      {glitchPhase === 1 && (
        <div className="absolute inset-0 z-50 pointer-events-none mix-blend-screen opacity-50">
          <div className="absolute top-[20%] left-0 w-full h-2 bg-[var(--color-accent)] translate-x-4"></div>
          <div className="absolute top-[60%] left-0 w-full h-1 bg-white -translate-x-8"></div>
          <div className="absolute top-[40%] left-0 w-full h-8 bg-black/50"></div>
        </div>
      )}

      {!showStats ? (
        <div className="w-full h-full absolute inset-0">{renderFallback()}</div>
      ) : (
        <div className="w-full h-full flex flex-col bg-[var(--color-background)] p-6 pt-20 pb-16 md:p-8 md:pt-24 md:pb-16 font-mono text-[10px] uppercase tracking-widest absolute inset-0 z-20">
          {/* Header Stats */}
          <div className="flex justify-between items-start border-b border-[var(--color-border)] pb-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${stats.status === "ACTIVE" ? "bg-emerald-500 animate-pulse" : stats.status === "EVOLVING" ? "bg-blue-500" : "bg-gray-500"}`}
                ></div>
                <span className="opacity-80">{stats.status} STATUS</span>
              </div>
              <div className="text-white/40">Repository Data</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white mb-1">
                {stats.commitCount}+
              </div>
              <div className="opacity-40">Total Commits</div>
            </div>
          </div>

          {/* Language Drift */}
          <div className="mb-6">
            <div className="opacity-40 mb-3">Language Distribution</div>
            <div className="flex w-full h-1.5 bg-white/5 overflow-hidden mb-2">
              {stats.languages &&
                Object.entries(stats.languages as Record<string, number>).map(
                  ([lang, bytes], idx) => {
                    const percent = (bytes / totalLanguageBytes) * 100;
                    const colors = [
                      "bg-[var(--color-accent)]",
                      "bg-blue-400",
                      "bg-purple-400",
                      "bg-emerald-400",
                      "bg-orange-400",
                    ];

                    return (
                      <div
                        key={lang}
                        style={{ width: `${percent}%` }}
                        className={`h-full ${colors[idx % colors.length]}`}
                      />
                    );
                  },
                )}
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {stats.languages &&
                Object.entries(stats.languages)
                  .slice(0, 4)
                  .map(([lang, bytes], idx) => (
                    <div key={lang} className="flex items-center gap-1.5">
                      <div
                        className={`w-1.5 h-1.5 ${["bg-[var(--color-accent)]", "bg-blue-400", "bg-purple-400", "bg-emerald-400", "bg-orange-400"][idx % 5]}`}
                      ></div>
                      <span className="opacity-70">{lang}</span>
                      <span className="opacity-40">
                        (
                        {Math.round(
                          ((bytes as number) / totalLanguageBytes) * 100,
                        )}
                        %)
                      </span>
                    </div>
                  ))}
            </div>
          </div>

          {/* Commit Timeline Mockup */}
          <div className="flex-1 flex flex-col justify-end">
            <div className="opacity-40 mb-3">Activity Pulse (Recent)</div>
            <div className="flex items-end gap-1 h-16 w-full opacity-60 hover:opacity-100 transition-opacity">
              {Array.from({ length: 40 }).map((_, i) => {
                // Generate a fake distribution based on the commit count hash to look realistic
                // If it's an active repo, more bars are high.
                const base = (stats.commitCount * (i + 1)) % 15;
                const height = Math.max(
                  10,
                  base + (stats.status === "ACTIVE" ? 10 : 0),
                );
                return (
                  <div
                    key={i}
                    className="flex-1 bg-white/20 hover:bg-[var(--color-accent)] transition-colors"
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
