"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import HeroParticles from "@/components/HeroParticles";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  const copy = {
    fr: {
      role: "Étudiant en Licence IoT & Systèmes Embarqués",
      ctaCv: "Télécharger mon CV",
      ctaContact: "Me contacter",
      tipCv: "Télécharger le CV (PDF)",
    },
    en: {
      role: "BSc student in IoT & Embedded Systems",
      ctaCv: "Download my CV",
      ctaContact: "Contact me",
      tipCv: "Download CV (PDF)",
    },
  } as const;

  const t = isFr ? copy.fr : copy.en;

  return (
    <section className="relative -mt-16 pt-16 overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <Image
          src="/illustrations/hero-iot.svg"
          alt="Illustration IoT"
          fill
          className="object-cover"
          priority
        />
      </div>

      <HeroParticles />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, 40, -30, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[560px] w-[560px] rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Trabelsi Mohamed Rayen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-3 drop-shadow-md"
        >
          {t.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-white/90 mb-8"
        >
          Ben Arous, Tunis • trabelsimedrayen@ieee.org • +216 55 130 119
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Tooltip.Provider delayDuration={150}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="/CV_Trabelsi_Med_Rayen.pdf"
                  download
                  className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-colors transform-gpu hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t.ctaCv}
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  sideOffset={10}
                  className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white shadow-lg"
                >
                  {t.tipCv}
                  <Tooltip.Arrow className="fill-slate-900" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white/90 text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-700 transition-colors transform-gpu hover:-translate-y-0.5 active:translate-y-0"
          >
            {t.ctaContact}
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        />
      </div>
    </section>
  );
}
