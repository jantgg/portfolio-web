"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "src/app/components/animatedBackground.js";
import Navbar from "src/app/components/navbar.js";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {" "}
        <Navbar />
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
