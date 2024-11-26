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
            fps_limit: 60,
            interactivity: {
              detect_on: "canvas",
              events: {
                onclick: { enable: true, mode: "push" },
                onhover: {
                  enable: true,
                  mode: "attract",
                  parallax: { enable: false, force: 60, smooth: 10 },
                },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                attract: { distance: 200, duration: 0.4, factor: 5 },
              },
            },
            particles: {
              color: { value: "#FFA500" },
              line_linked: {
                color: "#FFA500",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 1, // Reduced speed for slower movement
                straight: false,
              },
              number: { density: { enable: true, value_area: 800 }, value: 80 },
              opacity: {
                anim: {
                  enable: false,
                  opacity_min: 0.1,
                  speed: 1,
                  sync: false,
                },
                random: false,
                value: 0.5,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                image: {
                  height: 100,
                  replace_color: true,
                  src: "images/github.svg",
                  width: 100,
                },
                polygon: { nb_sides: 5 },
                stroke: { color: "#000000", width: 0 },
                type: "circle",
              },
              size: {
                anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                random: true,
                value: 5,
              },
            },
            polygon: {
              draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
              move: { radius: 10 },
              scale: 1,
              type: "none",
              url: "",
            },
            retina_detect: true,
          }}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        {children}
      </body>
    </html>
  );
}
