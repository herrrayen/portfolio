"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  const copy = {
    fr: {
      title: "Projets",
      demo: "Démo",
      code: "Code",
      projects: [
        {
          id: "smart-plug",
          title: "Prise Intelligente Connectée (IoT)",
          description:
            "Mesure tension/courant en temps réel (ZMPT101B, SCT-013-030) avec ESP32, calcul RMS, filtrage, détection de seuil et coupure automatique via relais. Dashboard (ThingSpeak/serveur embarqué) + interface mobile.",
          tech: [
            "ESP32",
            "ZMPT101B",
            "SCT-013-030",
            "Traitement RMS",
            "Relais",
            "ThingSpeak",
          ],
          link: undefined as string | undefined,
          github: undefined as string | undefined,
          gradient: "from-blue-500 to-indigo-500",
        },
        {
          id: "smart-notes",
          title: "Système Intelligent de Prise de Notes (Mobile)",
          description:
            "Intégration BLE pour le suivi de présence (+30% précision), notes collaboratives (+25% engagement) et score d'engagement basé sur présence & activité (+20% métriques).",
          tech: ["BLE", "Mobile", "Module collaboratif", "Score d'engagement"],
          link: undefined as string | undefined,
          github: undefined as string | undefined,
          gradient: "from-indigo-500 to-purple-500",
        },
        {
          id: "ads-valley",
          title: "Ads Valley — Modules & Dashboards",
          description:
            "Modules de planification (formations, disponibilités, détection de conflits), suivi logistique/budgétaire (+20% efficacité) et KPI/dashboards (+25% précision des rapports).",
          tech: ["Planification", "KPI", "Dashboards"],
          link: undefined as string | undefined,
          github: undefined as string | undefined,
          gradient: "from-purple-500 to-blue-500",
        },
      ],
    },
    en: {
      title: "Projects",
      demo: "Demo",
      code: "Code",
      projects: [
        {
          id: "smart-plug",
          title: "Smart Connected Plug (IoT)",
          description:
            "Real‑time voltage/current measurement (ZMPT101B, SCT-013-030) with ESP32: RMS computation, filtering, threshold detection, and automatic cut‑off via relay. Dashboard (ThingSpeak/embedded server) + mobile UI.",
          tech: [
            "ESP32",
            "ZMPT101B",
            "SCT-013-030",
            "RMS processing",
            "Relay",
            "ThingSpeak",
          ],
          link: undefined as string | undefined,
          github: undefined as string | undefined,
          gradient: "from-blue-500 to-indigo-500",
        },
        {
          id: "smart-notes",
          title: "Smart Note‑Taking System (Mobile)",
          description:
            "BLE integration for attendance tracking (+30% accuracy), collaborative notes (+25% engagement), and an engagement score based on presence & activity (+20% metrics).",
          tech: ["BLE", "Mobile", "Collaboration", "Engagement score"],
          link: undefined as string | undefined,
          github: undefined as string | undefined,
          gradient: "from-indigo-500 to-purple-500",
        },
        {
          id: "ads-valley",
          title: "Ads Valley — Modules & Dashboards",
          description:
            "Scheduling modules (trainings, availability, conflict detection), logistics/budget tracking (+20% efficiency), and KPI dashboards (+25% reporting accuracy).",
          tech: ["Scheduling", "KPI", "Dashboards"],
          link: undefined as string | undefined,
          github: undefined as string | undefined,
          gradient: "from-purple-500 to-blue-500",
        },
      ],
    },
  } as const;

  const t = isFr ? copy.fr : copy.en;

  const projects = t.projects;

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="mx-auto mb-6 max-w-2xl">
          <div className="relative aspect-[1000/650] overflow-hidden rounded-2xl bg-white/70 ring-1 ring-black/5 shadow-lg">
            <Image
              src="/illustrations/projects.svg"
              alt="Illustration: projets et dashboards"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          {t.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto -mt-8 mb-12 h-1 w-40 origin-left rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden bg-white/85 backdrop-blur rounded-xl shadow-lg hover:shadow-2xl transition-all ring-1 ring-black/5 hover:ring-black/10"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 blur-3xl opacity-60" />
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-700 mb-4 min-h-[60px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={`${project.id}-${index}`}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full transition-transform transform-gpu group-hover:-translate-y-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.link || project.github) && (
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t.demo}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
                      >
                        <Github className="h-4 w-4" />
                        {t.code}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
