import { LazyLottie } from "./LazyLottie";
import styles from "../page.module.css";

export function AiSystemLottie() {
  return (
    <LazyLottie
      className={styles.aiLottie}
      path="/animations/ai-system.json"
      staticFrame={72}
    />
  );
}
