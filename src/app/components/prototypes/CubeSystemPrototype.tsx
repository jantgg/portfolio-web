import styles from "../../page.module.css";

const moduleClasses = [
  styles.systemModuleClient,
  styles.systemModuleCriteria,
  styles.systemModuleLayers,
  styles.systemModuleBuild,
  styles.systemModuleEvidence,
  styles.systemModuleProduction,
];

type CubeProps = {
  className: string;
  index?: number;
  label: string;
};

function Cube({ className, index, label }: CubeProps) {
  const moduleProps =
    index === undefined
      ? {}
      : {
          "data-system-module": "",
          "data-joined": String(index === 0),
        };

  return (
    <div className={className} {...moduleProps}>
      <div className={styles.systemCube}>
        <span className={`${styles.systemCubeFace} ${styles.systemCubeFront}`}>
          {label}
        </span>
        <span className={`${styles.systemCubeFace} ${styles.systemCubeBack}`}>
          {label}
        </span>
        <span className={`${styles.systemCubeFace} ${styles.systemCubeRight}`} />
        <span className={`${styles.systemCubeFace} ${styles.systemCubeLeft}`} />
        <span className={`${styles.systemCubeFace} ${styles.systemCubeTop}`} />
        <span className={`${styles.systemCubeFace} ${styles.systemCubeBottom}`} />
      </div>
    </div>
  );
}

type CubeSystemPrototypeProps = {
  labels: readonly string[];
  systemLabel: string;
};

export function CubeSystemPrototype({
  labels,
  systemLabel,
}: CubeSystemPrototypeProps) {
  return (
    <>
      <div className={styles.systemOrbit} />
      <div className={styles.systemAssembly} data-system-assembly>
        <Cube className={styles.systemCore} label={systemLabel} />
        {labels.map((label, index) => (
          <Cube
            className={`${styles.systemModule} ${moduleClasses[index]}`}
            index={index}
            key={label}
            label={label}
          />
        ))}
      </div>
    </>
  );
}
