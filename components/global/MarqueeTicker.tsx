interface MarqueeTickerProps {
  keywords: string[];
}

export function MarqueeTicker({ keywords }: MarqueeTickerProps) {
  // Triple the list so the linear-translate loop has enough material to fill
  // the viewport without visible seams as the track wraps.
  const tripled = [...keywords, ...keywords, ...keywords];
  return (
    <div
      className="border-border/50 overflow-hidden border-y py-6"
      aria-hidden="true"
    >
      <div className="marquee-track opacity-20">
        {tripled.map((k, i) => (
          <span
            key={`${k}-${i}`}
            className="mx-8 inline-flex items-center font-mono text-sm tracking-[0.2em] text-fg-muted"
          >
            {k}
            <span className="mx-8 text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
