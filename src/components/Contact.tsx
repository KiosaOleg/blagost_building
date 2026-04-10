"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-primary-950 relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-6xl font-black text-primary-900 dark:text-white mb-8 uppercase tracking-tighter">
              Свържете се <span className="text-gradient">с нас</span>
            </h2>
            <p className="text-xl text-primary-700 dark:text-primary-200 mb-12 font-medium">
              Имате въпроси или искате безплатна оферта? Нашият екип е на ваше
              разположение 24/7.
            </p>

            <div className="space-y-10">
              {[
                {
                  icon: Phone,
                  label: "Телефон",
                  value: siteConfig.phone,
                },
                {
                  icon: Mail,
                  label: "Имейл",
                  value: siteConfig.email,
                },
                {
                  icon: MapPin,
                  label: "Адрес",
                  value: siteConfig.address,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900 rounded-[1.2rem] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg border border-primary-100 dark:border-primary-800">
                    <item.icon className="w-7 h-7 text-primary-900 dark:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-primary-500 dark:text-primary-400 uppercase tracking-[0.3em] font-black mb-2">
                      {item.label}
                    </p>
                    <p className="text-xl font-black text-primary-900 dark:text-white group-hover:text-primary-500 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-primary-900 dark:bg-primary-900/50 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden border dark:border-primary-800">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-primary-400 uppercase tracking-widest ml-1">
                      Вашето име
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-primary-500 focus:outline-none focus:ring-4 focus:ring-white/10 transition-all font-bold"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-primary-400 uppercase tracking-widest ml-1">
                      Телефонен номер
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-primary-500 focus:outline-none focus:ring-4 focus:ring-white/10 transition-all font-bold"
                      placeholder="+359 888 ..."
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-primary-400 uppercase tracking-widest ml-1">
                    Съобщение
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-primary-500 focus:outline-none focus:ring-4 focus:ring-white/10 transition-all resize-none font-bold"
                    placeholder="Здравейте, интересувам се от..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "success"}
                  className={`w-full py-6 rounded-[1.5rem] font-black text-xl transition-all duration-500 flex items-center justify-center space-x-4 uppercase tracking-widest ${
                    formStatus === "success"
                      ? "bg-green-500 text-white"
                      : "bg-white text-primary-900 hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
                  }`}
                >
                  {formStatus === "success" ? (
                    <>
                      <CheckCircle className="w-8 h-8" />
                      <span>Изпратено успешно!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Изпрати запитване</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
