"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, MapPin, Ruler, ArrowRight, Tag, Phone } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState("Всички");

  const projects = [
    {
      id: 1,
      title: "Бял Мат",
      location: "гр. София",
      area: "13 м2",
      price: "1 600.00 лв.",
      category: "Класик",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      description:
        "Изчистен и елегантен матов таван за малка спалня. Перфектно решение за спокоен и модерен интериор.",
    },
    {
      id: 2,
      title: "Бял Гланц",
      location: "кв. Овче Купел",
      area: "30 м2",
      price: "2 900.00 лв.",
      category: "Премиум",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      description:
        "Гланцов таван с огледален ефект, който визуално разширява пространството в хола.",
    },
    {
      id: 3,
      title: "Бял Мат",
      location: "бул. Черни връх, София",
      area: "3 м2",
      price: "1 400.00 лв.",
      category: "Класик",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      description:
        "Монтаж на матов таван в малка баня. Влагоустойчив и лесен за поддръжка.",
    },
    {
      id: 4,
      title: "Цветен Гланц",
      location: "кв. Лозенец",
      area: "18 м2",
      price: "2 100.00 лв.",
      category: "Модерен",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
      description:
        "Смело решение с цветен гланц за детска стая. Създава жива и игрива атмосфера.",
    },
    {
      id: 5,
      title: "Светещ таван",
      location: "гр. Пловдив",
      area: "25 м2",
      price: "3 500.00 лв.",
      category: "Дизайнерски",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      description:
        "Иновативен светещ таван с вградено LED осветление по цялата повърхност.",
    },
    {
      id: 6,
      title: "Многостепенен таван",
      location: "гр. Варна",
      area: "45 м2",
      price: "5 200.00 лв.",
      category: "Премиум",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      description:
        "Сложен многостепенен дизайн за голямо помещение с акцентно осветление.",
    },
  ];

  const categories = ["Всички", "Класик", "Премиум", "Модерен", "Дизайнерски"];

  const filteredProjects =
    filter === "Всички"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-24 bg-primary-950 dark:bg-black text-white overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            Нашите <span className="text-gradient">проекти</span>
          </h2>
          <div className="w-24 h-1 bg-primary-400/50 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto font-medium">
            Разгледайте част от нашите реализирани обекти и се вдъхновете за
            вашата трансформация
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${
                filter === cat
                  ? "bg-white text-primary-900 border-white shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-transparent text-primary-300 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-[2.5rem] cursor-pointer shadow-2xl hover-lift"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-2 text-primary-300 text-xs font-black uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <Tag className="w-4 h-4" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-6 text-primary-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary-300" />
                      <span className="font-bold">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Ruler className="w-4 h-4 text-primary-300" />
                      <span className="font-bold">{project.area}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    {project.price}
                  </div>
                  <button className="flex items-center space-x-3 text-white font-black uppercase tracking-widest text-xs group/btn cursor-pointer">
                    <span>Виж проекта</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-primary-900 transition-all">
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-primary-950/95 backdrop-blur-xl cursor-pointer"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-primary-900 border border-white/10 rounded-[3rem] max-w-6xl w-full overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-10 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
              >
                <X className="w-8 h-8 text-white" />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                <div className="lg:w-3/5 h-[400px] lg:h-auto relative">
                  <Image
                    src={
                      projects.find((p) => p.id === selectedProject)?.image ||
                      ""
                    }
                    alt="Project"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="lg:w-2/5 p-10 lg:p-16 overflow-y-auto bg-gradient-to-br from-primary-900 to-primary-950">
                  {(() => {
                    const p = projects.find(
                      (proj) => proj.id === selectedProject,
                    )!;
                    return (
                      <>
                        <div className="flex items-center space-x-3 text-primary-400 text-xs font-black uppercase tracking-widest mb-6">
                          <Tag className="w-4 h-4" />
                          <span>{p.category}</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none">
                          {p.title}
                        </h3>

                        <div className="grid grid-cols-2 gap-10 mb-12">
                          <div>
                            <p className="text-primary-500 text-[10px] uppercase tracking-[0.3em] font-black mb-3">
                              Локация
                            </p>
                            <div className="flex items-center space-x-3">
                              <MapPin className="w-5 h-5 text-primary-400" />
                              <span className="text-lg font-bold">
                                {p.location}
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-primary-500 text-[10px] uppercase tracking-[0.3em] font-black mb-3">
                              Площ
                            </p>
                            <div className="flex items-center space-x-3">
                              <Ruler className="w-5 h-5 text-primary-400" />
                              <span className="text-lg font-bold">
                                {p.area}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-12">
                          <p className="text-primary-500 text-[10px] uppercase tracking-[0.3em] font-black mb-4">
                            Описание
                          </p>
                          <p className="text-lg text-primary-200 leading-relaxed font-medium">
                            {p.description}
                          </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 mb-12">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-primary-400 text-[10px] uppercase tracking-[0.3em] font-black mb-2">
                                Обща стойност
                              </p>
                              <p className="text-4xl font-black">{p.price}</p>
                            </div>
                            <div className="w-16 h-16 bg-white text-primary-900 rounded-2xl flex items-center justify-center shadow-2xl rotate-3">
                              <Tag className="w-8 h-8" />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4">
                          <button className="w-full bg-white text-primary-900 font-black py-5 px-8 rounded-2xl hover:bg-primary-50 transition-all flex items-center justify-center space-x-4 uppercase tracking-widest">
                            <span>Поискайте оферта</span>
                            <ArrowRight className="w-6 h-6" />
                          </button>
                          <a
                            href="tel:+359888000000"
                            className="w-full border-2 border-white/20 text-white font-black py-5 px-8 rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center space-x-4 uppercase tracking-widest"
                          >
                            <Phone className="w-6 h-6" />
                            <span>Свържете се</span>
                          </a>
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
