export function DecorativeFrame() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[var(--color-border)] opacity-50"></div>

      {/* Top Right */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--color-border)] opacity-50"></div>

      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--color-border)] opacity-50"></div>

      {/* Bottom Left - Just a dot */}
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-[var(--color-border)] opacity-50"></div>
    </div>
  );
}
