export const BACKGROUND_VARIANTS = [
  "network",
  "background-01",
  "legacy-lights",
  "none",
] as const;

export type BackgroundVariant = (typeof BACKGROUND_VARIANTS)[number];

// Change this value to compare the available global backgrounds.
export const ACTIVE_BACKGROUND: BackgroundVariant = "none";
