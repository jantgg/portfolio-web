"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedBackground from "src/app/components/animatedBackground.js";



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <AnimatedBackground/>
      <body className="background">{children}</body>
    </html>
  )
}
