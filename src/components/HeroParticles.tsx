"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 2 },
            },
          },
          particles: {
            number: {
              value: 55,
              density: { enable: true, area: 900 },
            },
            color: {
              value: ["#FFFFFF", "#DBEAFE", "#E0E7FF"],
            },
            links: {
              enable: true,
              color: "#FFFFFF",
              opacity: 0.18,
              distance: 140,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.55,
              direction: "none",
              outModes: { default: "out" },
            },
            opacity: {
              value: { min: 0.15, max: 0.5 },
              animation: { enable: true, speed: 0.35, minimumValue: 0.12, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
        className="h-full w-full"
      />
    </div>
  );
}
