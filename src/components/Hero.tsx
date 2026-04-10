"use client";

import { useState } from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534239143101-1b1c627395c5?auto=format&fit=crop&q=80&w=1600"
          alt="Опънати тавани Благост"
          fill
          className="object-cover scale-110"
          priority
        />
        {/* Stronger overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 dark:bg-primary-950/80 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-primary-950"></div>
      </motion.div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter text-balance">
            Красиви и функционални
            <span className="block text-gradient mt-2">опънати тавани</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed italic font-medium">
            &quot;Домовете започват с нас&quot;
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed hidden sm:block font-medium">
            Качествено изработени опънати тавани за всяка стая от дома или
            офиса. С наша помощ можете да преобразите по необикновен начин своя
            интериор.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-primary-900 hover:bg-primary-50 font-black py-5 px-10 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 group shadow-2xl cursor-pointer uppercase tracking-widest text-sm shimmer"
              onClick={() => setIsModalOpen(true)}
            >
              <span>Поискайте оферта</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group flex items-center space-x-4 text-white hover:text-primary-300 transition-all duration-300 cursor-pointer p-2 rounded-2xl hover:bg-white/5"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-primary-300 transition-colors bg-white/10 backdrop-blur-md">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary-300 font-bold">
                  Обадете ни се
                </p>
                <p className="text-xl md:text-2xl font-black">
                  {siteConfig.phone}
                </p>
              </div>
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { val: "15+", label: "години опит" },
              { val: "2000+", label: "завършени проекта" },
              { val: "10г.", label: "гаранция" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`text-center p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 transition-all cursor-default ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className="text-3xl md:text-5xl font-black text-white mb-2">
                  {stat.val}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-primary-200 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Поискайте оферта
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Име и фамилия"
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Имейл"
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <textarea
                placeholder="Опишете вашия проект..."
                rows={4}
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <div className="flex gap-4">
                <button type="submit" className="btn-primary flex-1">
                  Изпрати
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-primary-200 text-primary-700 rounded-lg hover:bg-primary-50"
                >
                  Отказ
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
