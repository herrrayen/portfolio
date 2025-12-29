"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Radio, Database, PenTool, Video } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import type { IconType } from "react-icons";
import { useLanguage } from "@/components/LanguageProvider";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAffinity,
  SiArduino,
  SiCplusplus,
  SiDavinciresolve,
  SiPython,
  SiNextdotjs,
  SiEspressif,
  SiBluetooth,
  SiMqtt,
  SiPostgresql,
} from "react-icons/si";

export default function SkillsPage() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  const copy = {
    fr: {
      title: "Compétences",
      categories: {
        programming: "Programmation & Web",
        frameworks: "Frameworks",
        iot: "IoT & Embarqué",
        database: "Base de données",
        design: "Design graphique",
        video: "Montage vidéo",
      },
    },
    en: {
      title: "Skills",
      categories: {
        programming: "Programming & Web",
        frameworks: "Frameworks",
        iot: "IoT & Embedded",
        database: "Databases",
        design: "Graphic Design",
        video: "Video Editing",
      },
    },
  } as const;

  const t = isFr ? copy.fr : copy.en;

  const logoMap: Record<string, IconType> = {
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JavaScript: FaJs,
    "C/C++": SiCplusplus,
    Python: SiPython,
    "React.js": FaReact,
    "Next.js": SiNextdotjs,
    ESP32: SiEspressif,
    ESP8266: SiEspressif,
    Arduino: SiArduino,
    BLE: SiBluetooth,
    MQTT: SiMqtt,
    PostgreSQL: SiPostgresql,
    "Adobe Photoshop": SiAdobephotoshop,
    "Adobe Illustrator": SiAdobeillustrator,
    "Adobe Premiere Pro": SiAdobepremierepro,
    "Adobe After Effects": SiAdobeaftereffects,
    "DaVinci Resolve": SiDavinciresolve,
    Affinity: SiAffinity,
  };

  const skills = [
    {
      id: "programming",
      category: t.categories.programming,
      icon: Cpu,
      items: ["HTML", "CSS", "JavaScript", "C/C++", "Python"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "frameworks",
      category: t.categories.frameworks,
      icon: Code,
      items: ["React.js", "Next.js"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "iot",
      category: t.categories.iot,
      icon: Radio,
      items: [
        "ESP32",
        "ESP8266",
        "Arduino",
        "BLE",
        "MQTT",
        "HTTP",
        "UART",
        "SPI",
        "I2C",
      ],
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "database",
      category: t.categories.database,
      icon: Database,
      items: ["PostgreSQL"],
      color: "from-indigo-600 to-purple-600",
    },
    {
      id: "design",
      category: t.categories.design,
      icon: PenTool,
      items: ["Adobe Photoshop", "Adobe Illustrator", "Affinity"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "video",
      category: t.categories.video,
      icon: Video,
      items: ["CapCut", "Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve"],
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="max-w-6xl mx-auto">
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
          {skills.map((skillSet, index) => {
            const Icon = skillSet.icon;
            return (
              <motion.div
                key={skillSet.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="relative overflow-hidden bg-white/85 backdrop-blur p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all ring-1 ring-black/5 hover:ring-black/10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/50 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity after:content-[''] after:absolute after:-top-24 after:-right-24 after:h-48 after:w-48 after:rounded-full after:bg-gradient-to-br after:from-blue-200 after:to-indigo-200 after:blur-3xl after:opacity-60"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skillSet.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {skillSet.category}
                </h3>
                <Tooltip.Provider delayDuration={120}>
                  <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
                    {skillSet.items.map((skill, i) => {
                      const Logo = logoMap[skill];
                      return (
                        <Tooltip.Root key={skill}>
                          <Tooltip.Trigger asChild>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.06 + i * 0.02 }}
                              whileHover={{ scale: 1.06, y: -2, transition: { duration: 0.15 } }}
                              className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 ring-1 ring-black/5 shadow-sm hover:shadow-md"
                            >
                              <div className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br ${skillSet.color} opacity-0 group-hover:opacity-15 transition-opacity`} />
                              {Logo ? (
                                <Logo className="h-6 w-6 text-gray-800" />
                              ) : (
                                <span className="text-[10px] font-semibold text-gray-800">{skill}</span>
                              )}
                              <span className="sr-only">{skill}</span>
                            </motion.div>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              sideOffset={10}
                              className="rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg"
                            >
                              {skill}
                              <Tooltip.Arrow className="fill-slate-900" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      );
                    })}
                  </div>
                </Tooltip.Provider>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
