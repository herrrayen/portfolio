"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  const copy = {
    fr: {
      title: "Contact",
      subtitle: "Pour un stage, un projet IoT ou une collaboration, contactez-moi.",
      formTitle: "Envoyer un message",
      infoTitle: "Coordonnées",
      fields: {
        name: "Nom",
        email: "Email",
        message: "Message",
      },
      button: {
        sending: "Envoi...",
        send: "Envoyer",
      },
      success: "Message envoyé (simulation). Je vous répondrai dès que possible.",
      validation: {
        nameMin: "Veuillez saisir votre nom (min. 2 caractères).",
        email: "Veuillez saisir un email valide.",
        messageMin: "Votre message doit contenir au moins 10 caractères.",
      },
      cards: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
      },
    },
    en: {
      title: "Contact",
      subtitle: "For an internship, an IoT project, or a collaboration, feel free to reach out.",
      formTitle: "Send a message",
      infoTitle: "Details",
      fields: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      button: {
        sending: "Sending...",
        send: "Send",
      },
      success: "Message sent (simulation). I’ll get back to you soon.",
      validation: {
        nameMin: "Please enter your name (min. 2 characters).",
        email: "Please enter a valid email address.",
        messageMin: "Your message must be at least 10 characters.",
      },
      cards: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
    },
  } as const;

  const t = isFr ? copy.fr : copy.en;

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.validation.nameMin),
        email: z.string().email(t.validation.email),
        message: z.string().min(10, t.validation.messageMin),
      }),
    [t.validation.email, t.validation.messageMin, t.validation.nameMin]
  );

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log("Form submitted:", values);
    reset();
  };

  const socialLinks: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    href?: string;
    subtitle: string;
    color: string;
  }> = [
    {
      name: t.cards.email,
      icon: Mail,
      href: "mailto:trabelsimedrayen@ieee.org",
      subtitle: "trabelsimedrayen@ieee.org",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: t.cards.phone,
      icon: Phone,
      href: "tel:+21655130119",
      subtitle: "+216 55 130 119",
      color: "from-indigo-600 to-purple-600",
    },
    {
      name: t.cards.location,
      icon: MapPin,
      subtitle: "Ben Arous, Tunis",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-100 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          {t.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto -mt-5 mb-10 h-1 w-40 origin-left rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-800 mb-12 text-center"
        >
          {t.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden bg-white/85 backdrop-blur p-8 rounded-xl shadow-lg ring-1 ring-black/5"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 blur-3xl opacity-60" />
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">{t.formTitle}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.fields.name}
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.fields.email}
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.fields.message}
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 transform-gpu hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                {isSubmitting ? t.button.sending : t.button.send}
              </button>

              {isSubmitSuccessful && (
                <p className="text-sm text-green-700">
                  {t.success}
                </p>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">{t.infoTitle}</h2>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              const Card = (
                <>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{link.name}</h3>
                    <p className="text-sm text-gray-600">{link.subtitle}</p>
                  </div>
                </>
              );

              if (link.href) {
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="relative overflow-hidden flex items-center gap-4 p-4 bg-white/85 backdrop-blur rounded-xl shadow-md hover:shadow-lg transition-all ring-1 ring-black/5 hover:ring-black/10"
                  >
                    <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 blur-3xl opacity-50" />
                    {Card}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative overflow-hidden flex items-center gap-4 p-4 bg-white/85 backdrop-blur rounded-xl shadow-md ring-1 ring-black/5"
                >
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 blur-3xl opacity-50" />
                  {Card}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
