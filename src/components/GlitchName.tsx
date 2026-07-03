import { useState, useEffect } from "react";

export function GlitchName() {
  const [name, setName] = useState("Erik");
  const [isGlitching, setIsGlitching] = useState(false);
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const triggerGlitch = () => {
      setIsGlitching(true);
      const targetName = name === "Erik" ? "cookieukw" : "Erik";
      const chars = "!<>-_\\\\/[]{}—=+*^?#_";
      let iterations = 0;
      const maxIterations = 15;

      const scrambleInterval = setInterval(() => {
        if (iterations >= maxIterations) {
          clearInterval(scrambleInterval);
          setName(targetName);
          setIsGlitching(false);
          setFlicker(false);
          // Schedule next glitch between 4 and 8 seconds
          timeoutId = setTimeout(triggerGlitch, Math.random() * 4000 + 4000);
        } else {
          setFlicker(Math.random() > 0.5);
          setName(
            targetName
              .split("")
              .map((char, index) => {
                if (index < (iterations / maxIterations) * targetName.length) {
                  return targetName[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join(""),
          );
          iterations++;
        }
      }, 40);
    };

    timeoutId = setTimeout(triggerGlitch, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [name]);

  return (
    <div
      className={`font-mono font-bold tracking-widest text-[var(--color-accent)] transition-all duration-75 uppercase inline-block
      ${isGlitching ? "skew-x-[-10deg] scale-110 blur-[0.5px]" : ""} 
      ${flicker ? "opacity-50 translate-x-[2px]" : "opacity-100"}
    `}
    >
      {name}
    </div>
  );
}
