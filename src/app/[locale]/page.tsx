import { AboutSection } from "../components/AboutSection";
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
      <CaseStudySection />
      <ToolsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
