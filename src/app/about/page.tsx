"use client";

import { motion } from "framer-motion";
import { User, Target, Lightbulb, Download, Handshake } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  const copy = {
    fr: {
      title: "Profil",
      p1:
        "Étudiant en Licence IoT et Systèmes Embarqués, passionné par la conception de solutions intelligentes alliant capteurs, microcontrôleurs et plateformes connectées.",
      p2:
        "Je m'intéresse particulièrement au développement de systèmes IoT complets : acquisition de données en temps réel, communication via ESP32, automatisation de processus, traitement embarqué et création d'interfaces mobiles/web.",
      p3:
        "Motivé, rigoureux et orienté innovation, je souhaite contribuer à des projets intégrant IoT, IA légère et pilotage automatisé.",
      download: "Télécharger le CV",
      downloadTip: "Télécharger le CV (PDF)",
      cards: {
        whoTitle: "Qui je suis",
        whoText: "Licence IoT & Systèmes Embarqués (3ème année)",
        focusTitle: "Mon focus",
        focusText: "Systèmes IoT complets, acquisition temps réel, automatisation",
        approachTitle: "Ma démarche",
        approachText: "Rigueur, prototypage rapide et innovation",
      },
      ieeeTitle: "Volontariat IEEE",
      ieeeText:
        "Participation à l'organisation et à la communication d'événements IEEE (Student Branch / Chapters), avec un focus sur la coordination, la création de contenu et le support logistique.",
      toolsTitle: "Outils",
    },
    en: {
      title: "About",
      p1:
        "IoT & Embedded Systems undergraduate student, passionate about designing smart solutions combining sensors, microcontrollers, and connected platforms.",
      p2:
        "I’m especially interested in end‑to‑end IoT systems: real‑time data acquisition, ESP32 connectivity, process automation, embedded processing, and building mobile/web interfaces.",
      p3:
        "Motivated, detail‑oriented, and innovation‑driven, I want to contribute to projects mixing IoT, lightweight AI, and automated control.",
      download: "Download CV",
      downloadTip: "Download CV (PDF)",
      cards: {
        whoTitle: "Who I am",
        whoText: "BSc student in IoT & Embedded Systems",
        focusTitle: "My focus",
        focusText: "Full IoT systems, real‑time acquisition, automation",
        approachTitle: "My approach",
        approachText: "Rigor, fast prototyping, and innovation",
      },
      ieeeTitle: "IEEE Volunteering",
      ieeeText:
        "Contributed to organizing and communicating IEEE events (Student Branch / Chapters), focusing on coordination, content creation, and logistical support.",
      toolsTitle: "Tools",
    },
  } as const;

  const t = isFr ? copy.fr : copy.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          {t.title}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mx-auto -mt-8 mb-12 h-1 w-40 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
        />

        <motion.div variants={itemVariants} className="mx-auto mb-12 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
          <p className="text-lg text-gray-800 leading-relaxed">{t.p1}</p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">{t.p2}</p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">{t.p3}</p>

          <div className="mt-8 flex justify-center">
            <Tooltip.Provider delayDuration={150}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href="/CV_Trabelsi_Med_Rayen.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-colors transform-gpu hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Download className="h-5 w-5" />
                    {t.download}
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    sideOffset={10}
                    className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white shadow-lg"
                  >
                      {t.downloadTip}
                    <Tooltip.Arrow className="fill-slate-900" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[9/7] overflow-hidden rounded-2xl bg-white/70 ring-1 ring-black/5 shadow-lg">
                <Image
                  src="/illustrations/about-iot.svg"
                  alt="Illustration: IoT et systèmes embarqués"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="relative overflow-hidden text-center p-6 bg-white/85 backdrop-blur rounded-xl shadow-lg hover:shadow-2xl transition-all ring-1 ring-black/5 hover:ring-black/10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/50 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity after:content-[''] after:absolute after:-top-24 after:-right-24 after:h-48 after:w-48 after:rounded-full after:bg-gradient-to-br after:from-blue-200 after:to-indigo-200 after:blur-3xl after:opacity-60"
          >
            <User className="relative z-10 h-12 w-12 mx-auto mb-4 text-blue-700" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.cards.whoTitle}</h3>
            <p className="text-gray-700">
              {t.cards.whoText}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="relative overflow-hidden text-center p-6 bg-white/85 backdrop-blur rounded-xl shadow-lg hover:shadow-2xl transition-all ring-1 ring-black/5 hover:ring-black/10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/50 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity after:content-[''] after:absolute after:-top-24 after:-right-24 after:h-48 after:w-48 after:rounded-full after:bg-gradient-to-br after:from-indigo-200 after:to-purple-200 after:blur-3xl after:opacity-60"
          >
            <Target className="relative z-10 h-12 w-12 mx-auto mb-4 text-indigo-700" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.cards.focusTitle}</h3>
            <p className="text-gray-700">
              {t.cards.focusText}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="relative overflow-hidden text-center p-6 bg-white/85 backdrop-blur rounded-xl shadow-lg hover:shadow-2xl transition-all ring-1 ring-black/5 hover:ring-black/10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/50 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity after:content-[''] after:absolute after:-top-24 after:-right-24 after:h-48 after:w-48 after:rounded-full after:bg-gradient-to-br after:from-purple-200 after:to-blue-200 after:blur-3xl after:opacity-60"
          >
            <Lightbulb className="relative z-10 h-12 w-12 mx-auto mb-4 text-purple-700" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.cards.approachTitle}</h3>
            <p className="text-gray-700">
              {t.cards.approachText}
            </p>
          </motion.div>
        </div>

        <motion.section
          variants={itemVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative overflow-hidden mt-16 bg-white/85 backdrop-blur rounded-2xl shadow-lg p-8 ring-1 ring-black/5 hover:ring-black/10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-28 -left-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 blur-3xl" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-800">{t.ieeeTitle}</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {t.ieeeText}
          </p>

          <ul className="mt-5 list-disc pl-5 space-y-2 text-gray-700">
            <li>IEEE ISTIC Student Branch</li>
            <li>IEEE Computer Society (CS) Chapter</li>
            <li>IEEE PES Day</li>
            <li>IEEE Tunisia Section — IEEE Day Camp</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.toolsTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Canva",
                "Affinity",
                "CapCut",
                "Google Workspace",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full transition-transform transform-gpu hover:-translate-y-0.5"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </section>
  );
}
