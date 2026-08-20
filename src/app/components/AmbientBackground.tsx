import { ACTIVE_BACKGROUND } from "../config/background";
import { LegacyLightsBackground } from "./LegacyLightsBackground";
import { NetworkBackground } from "./NetworkBackground";
import { OrbitalBackground } from "./OrbitalBackground";

function BackgroundVariant() {
  switch (ACTIVE_BACKGROUND) {
    case "legacy-lights":
      return <LegacyLightsBackground />;
    case "network":
      return <NetworkBackground />;
    case "background-01":
      return <OrbitalBackground />;
    case "none":
      return null;
  }
}

export function AmbientBackground() {
  return (
    <div
      className="ambientBackground"
      data-background={ACTIVE_BACKGROUND}
      aria-hidden="true"
    >
      <BackgroundVariant />
      <div className="ambientNoise" />
    </div>
  );
}
