"use client";
import Image from "next/image";
import "./page.css";
import Section1 from "src/app/components/section1.js";
import Section2 from "src/app/components/s2-components/section2.js";

export default function Home() {
  return (
    <main className="mainhome">
      <Section1 />
      <Section2 />
    </main>
  );
}
