const ORBITAL_PATH =
  "M0,-383.697C36.163,-383.697,353.743,-152.962,364.918,-118.569C376.092,-84.176,254.788,289.162,225.531,310.417C196.275,331.673,-196.275,331.673,-225.531,310.417C-254.788,289.162,-376.092,-84.176,-364.918,-118.569C-353.743,-152.962,-36.163,-383.697,0,-383.697Z";

const layers = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  transform:
    index === 0
      ? undefined
      : `translate(${-14 * index} ${16 * index}) rotate(${5 * index})`,
}));

export function OrbitalBackground() {
  return (
    <div className="ambientOrbital">
      <svg
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 2000 840"
      >
        <defs>
          <linearGradient
            id="ambient-orbital-gradient"
            gradientUnits="userSpaceOnUse"
            x1="-229.68"
            x2="-169.186"
            y1="34.334"
            y2="589.962"
          >
            <stop offset="0.1%" stopColor="var(--orbital-edge)" />
            <stop offset="50%" stopColor="var(--orbital-core)" />
            <stop offset="100%" stopColor="var(--orbital-edge)" />
          </linearGradient>
        </defs>

        <g transform="matrix(2.625 0.736 -0.309 1.103 4 176)">
          <g transform="matrix(2.277 0.094 -0.094 2.277 1542.555 -1153.461)">
            {layers.map(({ id, transform }) => (
              <g key={id} transform={transform}>
                <path
                  className="orbitalShape"
                  d={ORBITAL_PATH}
                  stroke="url(#ambient-orbital-gradient)"
                  strokeWidth="371"
                />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
