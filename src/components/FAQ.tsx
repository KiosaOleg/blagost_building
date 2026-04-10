"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "С колко сантиметра се снижава таванът при монтаж?",
      answer:
        "Обикновено таванът се снижава с 4-5 см, но възможен минимум е 2,5 см при използване на таванна лайсна. Ако е необходимо да се монтират вградени лампи, таванът ще падне до височината на тези лампи – средно 5-7 см.",
    },
    {
      question: "Колко време отнема монтажът на един таван?",
      answer:
        "Монтажът на стандартен таван в едно помещение обикновено отнема между 3 и 5 часа, в зависимост от сложността, броя на ъглите и осветителните тела.",
    },
    {
      question: "Какво се случва при наводнение от съседите?",
      answer:
        "Опънатият таван е изключително здрав и може да издържи до 100 литра вода на квадратен метър. В случай на наводнение, водата се събира в тавана, без да повреди мебелите ви. Ние можем да източим водата и да възстановим първоначалния вид на тавана.",
    },
    {
      question: "Може ли да се монтира опънат таван в баня?",
      answer:
        "Да, това е идеално решение за баня. Материалът е влагоустойчив, не кондензира вода и предпазва от появата на мухъл и плесен.",
    },
    {
      question: "Как се поддържа опънатият таван?",
      answer:
        "Поддръжката е изключително лесна. Таванът не привлича прах (антистатичен е) и може да се почиства с мека кърпа и препарат за стъкло при нужда.",
    },
    {
      question: "Трябва ли да изнасям мебелите при монтаж?",
      answer:
        "Не е необходимо пълно изнасяне на мебелите. Достатъчно е да се осигури свободен достъп до стените по периметъра на помещението.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 bg-primary-50 dark:bg-black transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-white/5 border border-primary-100 dark:border-white/10 px-4 py-2 rounded-full shadow-sm mb-6">
            <HelpCircle className="w-5 h-5 text-primary-500 dark:text-primary-400" />
            <span className="text-sm font-black text-primary-900 dark:text-white uppercase tracking-widest">
              Въпроси
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary-900 dark:text-white mb-6 uppercase tracking-tighter">
            Често задавани <span className="text-gradient">въпроси</span>
          </h2>
          <p className="text-xl text-primary-700 dark:text-primary-200 max-w-2xl mx-auto font-medium">
            Ето какво ни питат най-често нашите клиенти за опънатите тавани
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-[2rem] overflow-hidden transition-all duration-500 cursor-pointer ${
                openIndex === index
                  ? "bg-white dark:bg-primary-900 shadow-2xl border-primary-200 dark:border-primary-700 ring-4 ring-primary-50 dark:ring-primary-900/30"
                  : "bg-white/50 dark:bg-white/5 border-primary-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left cursor-pointer"
              >
                <span
                  className={`text-lg md:text-xl font-bold transition-colors ${
                    openIndex === index
                      ? "text-primary-900 dark:text-white"
                      : "text-primary-800 dark:text-primary-200"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === index
                      ? "bg-primary-900 dark:bg-white text-white dark:text-primary-900 rotate-180 shadow-lg"
                      : "bg-primary-100 dark:bg-white/10 text-primary-600 dark:text-primary-400"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-lg text-primary-700 dark:text-primary-200 leading-relaxed border-t border-primary-50 dark:border-primary-800/50 pt-6 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-primary-600 dark:text-primary-400 font-bold mb-6 uppercase tracking-widest text-sm">
            Имате друг въпрос?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-black py-4 px-8 rounded-2xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest text-sm cursor-pointer"
          >
            <span>Свържете се с нас</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
