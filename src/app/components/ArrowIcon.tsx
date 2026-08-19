type ArrowIconProps = {
  direction?: "down" | "left" | "right" | "up-right";
};

const rotations = {
  down: 90,
  left: 180,
  right: 0,
  "up-right": -45,
};

export function ArrowIcon({ direction = "right" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <path d="M4 12h15M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
