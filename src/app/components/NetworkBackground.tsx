type NetworkPoint = {
  id: number;
  x: number;
  y: number;
  z: number;
};

type NetworkEdge = {
  from: NetworkPoint;
  id: string;
  length: number;
  opacity: number;
  pitch: number;
  to: NetworkPoint;
  yaw: number;
};

const POINT_COUNT = 48;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const points: NetworkPoint[] = Array.from({ length: POINT_COUNT }, (_, id) => {
  const normalizedY = 1 - (id / (POINT_COUNT - 1)) * 2;
  const ringRadius = Math.sqrt(1 - normalizedY * normalizedY);
  const angle = GOLDEN_ANGLE * id;
  const depthVariation = 0.78 + ((id * 37) % 23) / 100;

  return {
    id,
    x: Math.cos(angle) * ringRadius * 650 * depthVariation,
    y: normalizedY * 430 * depthVariation,
    z: Math.sin(angle) * ringRadius * 360 * depthVariation,
  };
});

function distanceBetween(a: NetworkPoint, b: NetworkPoint) {
  return Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z);
}

function createEdge(from: NetworkPoint, to: NetworkPoint): NetworkEdge {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dz = to.z - from.z;
  const horizontalLength = Math.hypot(dx, dz);
  const length = Math.hypot(dx, dy, dz);
  const averageDepth = (from.z + to.z) / 720;

  return {
    from,
    id: `${Math.min(from.id, to.id)}-${Math.max(from.id, to.id)}`,
    length,
    opacity: 0.24 + (averageDepth + 1) * 0.16,
    pitch: Math.atan2(dy, horizontalLength) * (180 / Math.PI),
    to,
    yaw: Math.atan2(-dz, dx) * (180 / Math.PI),
  };
}

const edgeIds = new Set<string>();
const edges: NetworkEdge[] = [];

for (const point of points) {
  const nearestPoints = points
    .filter(({ id }) => id !== point.id)
    .map((candidate) => ({
      candidate,
      distance: distanceBetween(point, candidate),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  for (const { candidate } of nearestPoints) {
    const edge = createEdge(point, candidate);

    if (!edgeIds.has(edge.id)) {
      edgeIds.add(edge.id);
      edges.push(edge);
    }
  }
}

export function NetworkBackground() {
  return (
    <div className="ambientNetwork">
      <div className="networkScene">
        <div className="networkConnections">
          {edges.map(({ from, id, length, opacity, pitch, yaw }) => (
            <span
              className="networkConnection"
              key={id}
              style={{
                opacity,
                transform: `translate3d(${from.x.toFixed(2)}px, ${from.y.toFixed(2)}px, ${from.z.toFixed(2)}px) rotateY(${yaw.toFixed(2)}deg) rotateZ(${pitch.toFixed(2)}deg)`,
                width: `${length.toFixed(2)}px`,
              }}
            />
          ))}
        </div>

        <div className="networkPoints">
          {points.map(({ id, x, y, z }) => (
            <span
              className="networkPoint"
              key={id}
              style={{
                transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px) translate(-50%, -50%)`,
              }}
            >
              <span
                className="networkPointCore"
                style={{
                  animationDelay: `${-((id * 0.37) % 5.2).toFixed(2)}s`,
                  animationDuration: `${(3.8 + (id % 7) * 0.34).toFixed(2)}s`,
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
