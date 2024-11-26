"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: 3,
              },
              move: {
                enable: true,
                speed: 2,
              },
            },
          }}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        {children}
      </body>
    </html>
  );
}
