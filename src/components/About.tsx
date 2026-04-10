"use client";

import {
  CheckCircle,
  Users,
  Award,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Zap,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const advantages = [
    {
      icon: Handshake,
      title: "Сключване на договор",
      description:
        "Задължително работим с договор и издаваме фактури по желание за ваша сигурност.",
    },
    {
      icon: Zap,
      title: "Бърз монтаж",
      description:
        "Монтажът отнема само няколко часа, без прах, шум и строителни отпадъци.",
    },
    {
      icon: Award,
      title: "Гарантирано качество",
      description:
        "Използваме само висококачествени материали с европейски сертификати за произход.",
    },
    {
      icon: Shield,
      title: "10 години гаранция",
      description:
        "Предоставяме пълна 10-годишна гаранция за всички наши материали и монтажни дейности.",
    },
  ];

  const stats = [
    { number: "10+", label: "Години опит" },
    { number: "1500+", label: "Завършени тавани" },
    { number: "100%", label: "Доволни клиенти" },
    { number: "24ч", label: "Реакция при запитване" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-primary-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-50 dark:bg-primary-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-800/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-black text-primary-900 dark:text-white mb-8 leading-tight uppercase tracking-tighter">
              Защо да изберете{" "}
              <span className="text-gradient">
                Благост
              </span>
              ?
            </h2>
            <p className="text-xl text-primary-700 dark:text-primary-200 mb-10 leading-relaxed font-medium">
              Работата с нас има своите предимства и гарантира дълготрайни
              резултати. Ние не просто монтираме тавани – ние създаваме уют та
              визия, която вдъхновява.
            </p>

            <div className="space-y-6">
              {[
                "Индивидуален подход към всеки детайл",
                "Безплатна консултация и прецизно замерване",
                "Конкурентни цени без скрити такси",
                "Сертифицирани материали от Европа",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 text-primary-900 dark:text-primary-100 font-bold uppercase tracking-tight"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-900 dark:bg-white flex items-center justify-center text-white dark:text-primary-900 shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-black py-5 px-12 rounded-2xl hover:bg-primary-800 dark:hover:bg-primary-50 transition-all shadow-2xl flex items-center space-x-4 uppercase tracking-widest cursor-pointer shimmer"
            >
              <span>Повече за нас</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary-50 dark:bg-primary-900/50 p-10 rounded-[2.5rem] text-center border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all shadow-lg group"
              >
                <div className="text-4xl md:text-6xl font-black text-primary-900 dark:text-white mb-3 group-hover:scale-110 transition-transform tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-primary-500 dark:text-primary-400 font-bold uppercase tracking-widest text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Advantages cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-primary-50 dark:border-white/5 group"
            >
              <div className="w-16 h-16 bg-primary-900 dark:bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-all shadow-lg">
                <advantage.icon className="w-8 h-8 text-white dark:text-primary-900" />
              </div>
              <h4 className="text-2xl font-black text-primary-900 dark:text-white mb-5 uppercase tracking-tight leading-none">
                {advantage.title}
              </h4>
              <p className="text-primary-600 dark:text-primary-400 leading-relaxed font-medium">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
