export default function WaveDivider({
  flip = false,
  className = "",
}: {
  /** Mirror horizontally — pair a normal divider at a section's bottom with a flipped one at the next section's top. */
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={` w-full overflow-hidden ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      {/* <svg
        viewBox="0 0 1600 160"
        preserveAspectRatio="none"
        className="h-16 w-full sm:h-24"
      >
        <defs>
          <linearGradient id="waveFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--brand-red-dark)" />
            <stop offset="55%" stopColor="var(--brand-red)" />
            <stop offset="100%" stopColor="var(--brand-gold)" />
          </linearGradient>
        </defs>

        <path
          fill="url(#waveFill)"
          d="M-10,50 C250,10 380,110 620,75 C830,45 970,120 1200,70 C1360,35 1480,55 1610,10
             L1610,55 C1480,100 1360,80 1200,115 C970,165 830,90 620,120 C380,155 250,55 -10,95 Z"
        />
        <path
          fill="none"
          stroke="var(--brand-gold)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
          d="M600,95 C830,65 970,140 1200,90 C1380,52 1500,72 1610,28"
        />
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
          d="M700,108 C900,78 1020,150 1230,102 C1400,66 1510,84 1610,42"
        />
        <path
          fill="none"
          stroke="var(--brand-gold)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
          d="M800,118 C970,90 1070,158 1260,112 C1420,78 1520,94 1610,54"
        />
      </svg> */}
    </div>
  );
}
