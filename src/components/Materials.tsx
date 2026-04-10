"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Box,
  Layers,
  ArrowRight,
  X,
  CheckCircle2,
  ShoppingCart,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function Materials() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Всички");

  const categories = ["Всички", "Профили", "Осветление", "Аксесоари"];

  const items = [
    {
      id: 1,
      category: "Осветление",
      title: "TRL01-1/TRL01-2 Трекови светлини",
      description:
        "Релсова светлина за монтаж на релсови системи. Степен на защита IP20, цокъл GU10 до 35W. Цветове: черно моаре и бяло моаре.",
      price: "По запитване",
      image:
        "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&q=80&w=400",
      features: ["GU10 цокъл", "35W макс", "IP20 защита", "Черно/Бяло моаре"],
    },
    {
      id: 2,
      category: "Осветление",
      title: "TRL01-3/TRL01-4 Акцентно осветление",
      description:
        "Стилна релсова светлина за акцент в интериора. Интегрира се най-лесно с профил 07-2. Цокъл GX53 за LED лампи до 15W.",
      price: "По запитване",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400",
      features: [
        "GX53 цокъл",
        "15W LED",
        "Минималистичен дизайн",
        "Лесна интеграция",
      ],
    },
    {
      id: 3,
      category: "Профили",
      title: "Профил 07-2 за вграждане",
      description:
        "Специализиран алуминиев профил за монтаж на релсови системи в опънати тавани. Осигурява перфектен завършек и здравина.",
      price: "По запитване",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400",
      features: [
        "Алуминиева сплав",
        "Лесен монтаж",
        "Издръжливост",
        "Перфектен финиш",
      ],
    },
    {
      id: 4,
      category: "Профили",
      title: "Скрит профил за корниз",
      description:
        "Иновативно решение за скриване на корнизи в опънати тавани. Създава ефект на свободно падащи завеси от тавана.",
      price: "По запитване",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400",
      features: [
        "Скрит монтаж",
        "Модерен изглед",
        "Универсален",
        "Здрава фиксация",
      ],
    },
    {
      id: 5,
      category: "Аксесоари",
      title: "LED лента 24V Premium",
      description:
        "Висококачествена LED лента за контурно осветление и светещи тавани. Висок индекс на цветопредаване (CRI > 90).",
      price: "По запитване",
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400",
      features: [
        "24V захранване",
        "CRI > 90",
        "Дълъг живот",
        "Равномерна светлина",
      ],
    },
    {
      id: 6,
      category: "Аксесоари",
      title: "Захранващи блокове Mean Well",
      description:
        "Надеждни захранвания за вашето LED осветление. Защита от претоварване, късо съединение и пренапрежение.",
      price: "По запитване",
      image:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=400",
      features: [
        "Mean Well марка",
        "Висока ефективност",
        "Сертифицирани",
        "Гаранция",
      ],
    },
  ];

  const filteredItems =
    activeCategory === "Всички"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="materials" className="py-24 bg-white dark:bg-primary-950 text-primary-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-50 dark:bg-primary-800/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-900 dark:bg-white/5 border border-primary-800 dark:border-white/10 px-4 py-2 rounded-full mb-6 shadow-xl">
            <Box className="w-5 h-5 text-white dark:text-primary-300" />
            <span className="text-sm font-black uppercase tracking-widest text-white dark:text-primary-200">
              Материали и Профили
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            Всичко за вашия <span className="text-gradient">таван</span>
          </h2>
          <p className="text-xl text-primary-700 dark:text-primary-200 max-w-3xl mx-auto font-medium">
            Предлагаме пълна гама от висококачествени профили, осветителни тела и аксесоари за професионален монтаж.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300 border-2 cursor-pointer hover:scale-105 active:scale-95 ${
                activeCategory === cat
                  ? "bg-primary-900 dark:bg-white text-white dark:text-primary-900 border-primary-900 dark:border-white shadow-xl"
                  : "bg-white dark:bg-white/5 text-primary-700 dark:text-primary-300 border-primary-100 dark:border-white/10 hover:border-primary-300 dark:hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white dark:bg-white/5 border border-primary-100 dark:border-white/10 rounded-[2.5rem] overflow-hidden hover:shadow-2xl dark:hover:bg-white/10 transition-all duration-500 cursor-pointer shadow-lg hover-lift"
                onClick={() => setSelectedItem(item.id)}
              >
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-primary-900/90 dark:bg-primary-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                    {item.category}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-primary-700 dark:text-primary-300 mb-6 line-clamp-2 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-primary-900 dark:text-white uppercase tracking-tighter">{item.price}</span>
                    <div className="w-12 h-12 bg-primary-900 dark:bg-white text-white dark:text-primary-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Catalog Button */}
        <div className="mt-20 text-center">
          <button className="bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-black py-6 px-12 rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center space-x-4 mx-auto group uppercase tracking-widest cursor-pointer shimmer">
            <ShoppingCart className="w-6 h-6" />
            <span>Свали пълния каталог</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-primary-950/90 backdrop-blur-xl cursor-pointer"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-primary-900 border border-primary-100 dark:border-white/10 rounded-[3rem] max-w-5xl w-full overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-8 right-8 z-10 w-14 h-14 bg-primary-100 dark:bg-white/10 hover:bg-primary-200 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border dark:border-white/10 shadow-lg cursor-pointer"
              >
                <X className="w-8 h-8 text-primary-900 dark:text-white" />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-80 md:h-[600px] relative">
                  <Image
                    src={items.find((i) => i.id === selectedItem)?.image || ""}
                    alt="Material"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="md:w-1/2 p-10 md:p-16 overflow-y-auto">
                  {(() => {
                    const item = items.find((i) => i.id === selectedItem)!;
                    return (
                      <>
                        <div className="flex items-center space-x-2 text-primary-500 dark:text-primary-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                          <Zap className="w-4 h-4" />
                          <span>{item.category}</span>
                        </div>
                        <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none text-primary-900 dark:text-white">{item.title}</h3>
                        <p className="text-primary-600 dark:text-primary-200 text-lg leading-relaxed mb-10 font-medium">
                          {item.description}
                        </p>

                        <div className="space-y-4 mb-12">
                          <p className="text-[10px] font-black text-primary-400 dark:text-primary-500 uppercase tracking-[0.3em] mb-6">
                            Характеристики
                          </p>
                          {item.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-4"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-800 flex items-center justify-center shadow-inner">
                                <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-300" />
                              </div>
                              <span className="text-primary-900 dark:text-primary-100 font-bold uppercase tracking-tight">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-primary-100 dark:border-primary-800">
                          <button className="flex-1 bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-black py-5 px-8 rounded-2xl hover:scale-105 transition-all flex items-center justify-center space-x-4 uppercase tracking-widest shadow-xl">
                            <ShoppingCart className="w-6 h-6" />
                            <span>Запитване</span>
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
