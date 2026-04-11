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

  const categories = [
    "Всички",
    "Профили",
    "Осветление",
    "Аксесоари",
    "Курнези",
  ];

  const items = [
    {
      id: 1,
      category: "Профили",
      title: "Стенен перфориран профил 01-3",
      description:
        "PVC профил за опънати тавани осигурява лесен монтаж и демонтаж. Гъвкав, удобен за рязане, пробиване и не цапа стените.",
      price: "1,5€/м",
      image: "/images/01-03_1-Стенен перфориран профил.jpg",
      features: ["PVC материал", "Лесен монтаж", "Гъвкав", "Не цапа стените"],
    },
    {
      id: 2,
      category: "Профили",
      title: "Разделящ алуминиев профил 03-2 подсилен",
      description:
        "Подсилен алуминиев профил за разделяне на нива в опънати тавани. Осигурява здравина и стабилност на конструкцията.",
      price: "По запитване",
      image: "/images/03-2 Разделящ алуминиев профил - подсилен.jpg",
      features: [
        "Алуминиева сплав",
        "Подсилен дизайн",
        "За две нива",
        "Висока здравина",
      ],
    },
    {
      id: 3,
      category: "Профили",
      title: "Профил за тавани на две нива 05-06",
      description:
        "Специализиран профил за инсталиране на тавани на две нива с интегрирано осветление за модерен интериор.",
      price: "По запитване",
      image:
        "/images/05-06_1Профил за инсталиране на тавани на две нива с осветление.jpg",
      features: [
        "За две нива",
        "С осветление",
        "Модерен дизайн",
        "Лесен монтаж",
      ],
    },
    {
      id: 4,
      category: "Профили",
      title: "Алуминиев профил за подсветка 06-06",
      description:
        "Алуминиев профил за подсветка по периметъра на опънатия таван. Идеален за контурно осветление.",
      price: "По запитване",
      image: "/images/06-06_11Алуминиев профил за подсветка по периметъра.jpg",
      features: ["За периметър", "Алуминиев", "За LED ленти", "Тънък профил"],
    },
    {
      id: 5,
      category: "Профили",
      title: "Профил за висящи тавани D12 06-18",
      description:
        "Алуминиев профил за висящи тавани с екран D12 (13мм). Осигурява елегантен завършек на висящите конструкции.",
      price: "По запитване",
      image:
        "/images/06-18_11Алуминиев профил за висящи тавани с екран D12 (13мм).jpg",
      features: [
        "Екран D12",
        "13мм дебелина",
        "За висящи тавани",
        "Елегантен дизайн",
      ],
    },
    {
      id: 6,
      category: "Профили",
      title: "Сенчест профил 8мм",
      description:
        "Тънък сенчест профил за създаване на дискретни преходи между нивата на опънатия таван.",
      price: "По запитване",
      image: "/images/Сенчест профил 8мм.jpg",
      features: ["8мм дебелина", "Сенчест дизайн", "Дискретен", "Лесен монтаж"],
    },
    {
      id: 7,
      category: "Осветление",
      title: "Светеща линия D33 06-19",
      description:
        "Светеща линия D33 (35 мм) за създаване на впечатляващи светлинни ефекти в опънатите тавани.",
      price: "По запитване",
      image: "/images/06-19_Deep_1Светеща линия D33 (35 мм).jpg",
      features: [
        "35 мм ширина",
        "Светеща линия",
        "За ефекти",
        "LED технология",
      ],
    },
    {
      id: 8,
      category: "Осветление",
      title: "Еднофазна шина TRK01-1/TRK01-2",
      description:
        "Еднофазна шина за монтаж на релсови системи за осветление. Позволява гъвкаво позициониране на светлините.",
      price: "По запитване",
      image: "/images/TRK01-1-TRK01-2-Еднофазна-шина.webp",
      features: ["Еднофазна", "Релсова система", "Гъвкав монтаж", "GU10/GX53"],
    },
    {
      id: 9,
      category: "Осветление",
      title: "Съединител IC01-1/IC01-2",
      description:
        "Съединител за еднофазна релса за свързване на секции от релсовата осветителна система.",
      price: "По запитване",
      image:
        "/images/IC01-1-IC01-2-Съединител-за-еднофазна-релса-1024x766.webp",
      features: ["За релси", "Свързване", "Еднофазна", "Здрав"],
    },
    {
      id: 10,
      category: "Осветление",
      title: "Съединител IC01-3/IC01-4",
      description:
        "Съединител за еднофазна релса с ъглова конфигурация за комплексни осветителни инсталации.",
      price: "По запитване",
      image: "/images/IC01-3-IC01-4-Съединител-за-еднофазна-релса.webp",
      features: ["Ъглов", "За релси", "Еднофазна", "Комплексен монтаж"],
    },
    {
      id: 11,
      category: "Осветление",
      title: "Съединител IC01-5/IC01-6",
      description:
        "Съединител за еднофазна релса с T-образна конфигурация за разклоняване на осветителни линии.",
      price: "По запитване",
      image: "/images/IC01-5-IC01-6-Съединител-за-еднофазна-релса.webp",
      features: ["T-образен", "Разклоняване", "За релси", "Еднофазна"],
    },
    {
      id: 12,
      category: "Осветление",
      title: "Съединител IC01-7/IC01-8",
      description:
        "Съединител за еднофазна релса с кръгова конфигурация за затворени осветителни контури.",
      price: "По запитване",
      image:
        "/images/IC01-7-IC01-8-Съединител-за-еднофазна-релса-1024x766.webp",
      features: ["Кръгов", "За контури", "За релси", "Еднофазна"],
    },
    {
      id: 13,
      category: "Аксесоари",
      title: "Магнитен адаптор 07-05",
      description:
        "Магнитен адаптор за лесен монтаж и демонтаж на осветителни елементи в опънати тавани.",
      price: "По запитване",
      image: "/images/07-05_107-5 Магнитен адаптор.jpg",
      features: ["Магнитен", "Бърз монтаж", "Лесен демонтаж", "Универсален"],
    },
    {
      id: 14,
      category: "Аксесоари",
      title: "Алуминиева лента brusbox 40x40мм",
      description:
        "Алуминиева лента за укрепване и довършване на конструкцията на опънатия таван.",
      price: "По запитване",
      image: "/images/08-1-Алуминиева-лента-brusbox-40x40мм.webp",
      features: ["40x40мм", "Алуминиева", "За укрепване", "Универсална"],
    },
    {
      id: 15,
      category: "Аксесоари",
      title: "Магнитна шина TRM01",
      description:
        "Магнитна шина за бърз и лесен монтаж на осветителни елементи без инструменти.",
      price: "По запитване",
      image: "/images/TRM01-Магнитна-шина.webp",
      features: ["Магнитна", "Без инструменти", "Бърз монтаж", "Универсална"],
    },
    {
      id: 16,
      category: "Курнези",
      title: "L-образен курниз за пердета 09-11",
      description:
        "L-образен плосък курниз за завеси и пердета, който се монтира дискретно в опънатия таван.",
      price: "По запитване",
      image: "/images/09-11-L-образен-курниз-за-пердета-плосък-1024x767.webp",
      features: ["L-образен", "Плосък", "За пердета", "Дискретен"],
    },
    {
      id: 17,
      category: "Курнези",
      title: "Двоен курниз за две пердета PK-15",
      description:
        "Двоен курниз за монтаж на две завеси или пердета едновременно с едно решение.",
      price: "По запитване",
      image: "/images/PK-15-Двоен-курниз-за-две-пердета-1024x767.webp",
      features: ["Двоен", "За две пердета", "Едно решение", "Компактен"],
    },
  ];

  const filteredItems =
    activeCategory === "Всички"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section
      id="materials"
      className="py-24 bg-white dark:bg-primary-950 text-primary-900 dark:text-white relative overflow-hidden transition-colors duration-300"
    >
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
            Предлагаме пълна гама от висококачествени профили, осветителни тела
            и аксесоари за професионален монтаж.
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
                    <span className="text-xl font-black text-primary-900 dark:text-white uppercase tracking-tighter">
                      {item.price}
                    </span>
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
                        <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none text-primary-900 dark:text-white">
                          {item.title}
                        </h3>
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
