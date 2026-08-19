import { AboutSection } from "../components/AboutSection";
import { AiSection } from "../components/AiSection";
import { CaseStudySection } from "../components/CaseStudySection";
import { ContactSection } from "../components/ContactSection";
import { Hero } from "../components/Hero";
import { ProcessSection } from "../components/ProcessSection";
import { ToolsSection } from "../components/ToolsSection";
import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.page} id="main-content">
      <Hero />
      <ProcessSection />
      <AiSection />
      <CaseStudySection />
      <ToolsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
