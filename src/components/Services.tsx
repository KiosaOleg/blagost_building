"use client";

import { useState } from "react";
import {
  Home,
  Building,
  Users,
  Wrench,
  Hammer,
  PaintBucket,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Home,
      title: "Опънати тавани за баня",
      description:
        "Влагоустойчивите материали предпазват от мухъл и конденз, а гладката повърхност улеснява поддръжката.",
      features: [
        "100% Влагоустойчивост",
        "Защита от мухъл и конденз",
        "Лесно почистване",
        "Бърз монтаж без прах",
      ],
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      icon: Building,
      title: "Опънати тавани за хол",
      description:
        "Елегантна и уютна атмосфера в хола с опънат таван. Изборът на цветове и форми позволява пълно персонализиране.",
      features: [
        "Луксозен огледален ефект",
        "Вградено скрито осветление",
        "Персонализиран дизайн",
        "Акустичен комфорт",
      ],
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      icon: PaintBucket,
      title: "Опънати тавани за детска",
      description:
        "Опънатият таван за детска стая съчетава безопасност, издръжливост и впечатляващ дизайн за вашите деца.",
      features: [
        "Хипоалергенни материали",
        "Възможност за фотопечат",
        "Безопасен монтаж",
        "Устойчивост на удар",
      ],
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      icon: Wrench,
      title: "Опънати тавани за коридор",
      description:
        "Визуално разширява пространството, осигурява равномерно осветление и крие всички несъвършенства на стария таван.",
      features: [
        "Визуално разширяване",
        "Равномерно осветление",
        "Скриване на кабели",
        "Минимално снижаване",
      ],
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      icon: Hammer,
      title: "Ден и нощ",
      description:
        "Комбинира два различни визуални ефекта в едно. През деня е елегантен таван, а вечер създава магическа атмосфера.",
      features: [
        "Уникален двоен ефект",
        "Светодиодно управление",
        "Звездно небе ефект",
        "Дизайнерско решение",
      ],
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      icon: Users,
      title: "Опънати тавани за спалня",
      description:
        "Създайте релаксираща и спокойна атмосфера с матови или сатенени покрития за вашата перфектна спалня.",
      features: [
        "Спокоен матов завършек",
        "Безшевна повърхност",
        "Екологични материали",
        "Дълготраен цвят",
      ],
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-primary-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-primary-900 dark:text-white mb-6 uppercase tracking-tighter">
            Нашите <span className="text-gradient">услуги</span>
          </h2>
          <div className="w-24 h-1 bg-primary-900 dark:bg-primary-400/50 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-primary-700 dark:text-primary-200 max-w-3xl mx-auto font-medium">
            Разделили сме опънатите тавани, които предлагаме на следните видове,
            спрямо помещението и вашите нужди
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-primary-50 dark:bg-primary-900/50 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full border border-transparent dark:border-primary-800 hover-lift"
              onClick={() => setSelectedService(service.id)}
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition-colors"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary-900 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-primary-900 group-hover:rotate-6 transition-transform shadow-lg">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div className="w-10 h-10 border border-primary-200 dark:border-primary-700 rounded-full flex items-center justify-center group-hover:bg-primary-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-primary-900 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-primary-900 dark:text-white mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>

                <p className="text-primary-700 dark:text-primary-200 mb-6 line-clamp-3 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center text-primary-900 dark:text-primary-400 font-black text-sm uppercase tracking-widest">
                  <span>Виж детайли</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-primary-950/90 backdrop-blur-xl cursor-pointer"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-primary-900 rounded-[2.5rem] max-w-5xl w-full overflow-hidden shadow-2xl border dark:border-primary-800"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/80 dark:bg-primary-800/80 hover:bg-white dark:hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              >
                <X className="w-6 h-6 text-primary-900 dark:text-white" />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-80 lg:h-[600px] relative">
                  <Image
                    src={
                      services.find((s) => s.id === selectedService)?.image ||
                      ""
                    }
                    alt="Service"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="lg:w-1/2 p-8 lg:p-14 overflow-y-auto">
                  {(() => {
                    const s = services.find(
                      (serv) => serv.id === selectedService,
                    )!;
                    return (
                      <>
                        <div className="w-16 h-16 bg-primary-50 dark:bg-primary-800 rounded-2xl flex items-center justify-center text-primary-900 dark:text-white mb-8 shadow-inner">
                          <s.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl font-bold text-primary-900 dark:text-white mb-6">
                          {s.title}
                        </h3>

                        <p className="text-xl text-primary-600 dark:text-primary-300 mb-10 leading-relaxed">
                          {s.description}
                        </p>

                        <div className="space-y-4 mb-12">
                          <p className="text-xs font-bold text-primary-400 dark:text-primary-500 uppercase tracking-widest mb-6">
                            Предимства
                          </p>
                          {s.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-4"
                            >
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                              </div>
                              <span className="text-primary-800 dark:text-primary-200 font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-primary-50 dark:border-primary-800">
                          <button className="flex-1 bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-bold py-5 px-8 rounded-2xl hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors flex items-center justify-center space-x-3 shadow-xl">
                            <span>Поискайте оферта</span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setSelectedService(null)}
                            className="flex-1 border-2 border-primary-100 dark:border-primary-700 text-primary-600 dark:text-primary-300 font-bold py-5 px-8 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors"
                          >
                            Затвори
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
