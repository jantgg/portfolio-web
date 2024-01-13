"use client";
import Image from "next/image";
import "./page.css";
import Section1 from "src/app/components/section1.js";
import Section2 from "src/app/components/s2-components/section2.js";
import Section3 from "src/app/components/s3-components/section3.js";
import Section4 from "src/app/components/s4-components/section4.js";

import Banner from "src/app/components/banner.js";
import { Section1Provider } from "src/app/components/loader/s1-context.js";
import { Section2Provider } from "src/app/components/s2-components/s2-context.js";
import { Section3Provider } from "src/app/components/s3-components/s3-context.js";

export default function Home() {
  return (
    <main className="mainhome">
        <Section1Provider>
        <Section1 />
      </Section1Provider>
      <Section2Provider>
        <Section2 />
      </Section2Provider>
      <Section3Provider>
        <Section3 />
      </Section3Provider>
      <Section4 />
      {/* <Banner /> */}
    </main>
  );
}
