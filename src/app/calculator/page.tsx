"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    length: "",
    width: "",
    lights: "0",
    corners: "4",
    backlight: "0",
    curtainRail: "0",
    name: "",
    phone: "",
    email: "",
    consent: false,
  });

  const [isCalculated, setIsCalculated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculated(true);
    // Logic for calculation can be added here
  };

  return (
    <main className="min-h-screen bg-white dark:bg-primary-950">
      <Header />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-7xl font-black text-primary-900 dark:text-white uppercase tracking-tighter mb-6">
              Калкулатор за <span className="text-gradient">опънат таван</span>
            </h1>
            <p className="text-xl text-primary-700 dark:text-primary-200 max-w-2xl mx-auto font-medium leading-relaxed">
              Изчислете ориентировъчната стойност на вашия нов таван и заявете безплатна консултация със специалист.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 dark:bg-primary-900/40 p-10 md:p-16 rounded-[3rem] border border-primary-100 dark:border-primary-800 shadow-2xl relative overflow-hidden transition-colors glass-card">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              
              {!isCalculated ? (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-primary-500 dark:text-primary-400 uppercase tracking-widest ml-1">Дължина (м)</label>
                      <input
                        type="number"
                        step="0.1"
                        required
                        className="w-full bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-2xl px-8 py-5 text-primary-900 dark:text-white placeholder-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all font-bold"
                        placeholder="Напр. 5.5"
                        value={formData.length}
                        onChange={(e) => setFormData({...formData, length: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-primary-500 dark:text-primary-400 uppercase tracking-widest ml-1">Ширина (м)</label>
                      <input
                        type="number"
                        step="0.1"
                        required
                        className="w-full bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-2xl px-8 py-5 text-primary-900 dark:text-white placeholder-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all font-bold"
                        placeholder="Напр. 4.2"
                        value={formData.width}
                        onChange={(e) => setFormData({...formData, width: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-primary-500 dark:text-primary-400 uppercase tracking-widest ml-1">Брой осветителни тела</label>
                      <input
                        type="number"
                        className="w-full bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-2xl px-8 py-5 text-primary-900 dark:text-white placeholder-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all font-bold"
                        placeholder="0"
                        value={formData.lights}
                        onChange={(e) => setFormData({...formData, lights: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-primary-500 dark:text-primary-400 uppercase tracking-widest ml-1">Допълнителни ъгли (над 4)</label>
                      <input
                        type="number"
                        className="w-full bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-2xl px-8 py-5 text-primary-900 dark:text-white placeholder-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all font-bold"
                        placeholder="0"
                        value={formData.corners}
                        onChange={(e) => setFormData({...formData, corners: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-primary-500 dark:text-primary-400 uppercase tracking-widest ml-1">Вашите имена</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-2xl px-8 py-5 text-primary-900 dark:text-white placeholder-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all font-bold"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-primary-500 dark:text-primary-400 uppercase tracking-widest ml-1">Тел. номер</label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-2xl px-8 py-5 text-primary-900 dark:text-white placeholder-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all font-bold"
                        placeholder="+359 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      id="consent"
                      className="mt-1 w-5 h-5 rounded border-primary-100 text-primary-900 focus:ring-primary-500 cursor-pointer"
                      checked={formData.consent}
                      onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                    />
                    <label htmlFor="consent" className="text-sm font-bold text-primary-600 dark:text-primary-400 cursor-pointer">
                      Давам съгласие за обработка на посочената ми по-горе информация за целите на офертата.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-black py-6 rounded-2xl text-xl uppercase tracking-widest shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-4 cursor-pointer shimmer"
                  >
                    <Calculator size={24} />
                    <span>Изчисли стойност</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 text-center py-10"
                >
                  <div className="w-24 h-24 bg-primary-400/20 text-primary-500 dark:text-primary-400 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-black text-primary-900 dark:text-white uppercase tracking-tighter mb-6">Заявката е изпратена!</h2>
                  <p className="text-xl text-primary-700 dark:text-primary-200 font-bold mb-10 leading-relaxed">
                    Благодарим Ви, {formData.name}! Наш специалист ще се свърже с Вас до 24 часа за уточняване на детайлите и финализиране на офертата.
                  </p>
                  <button
                    onClick={() => setIsCalculated(false)}
                    className="bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-black py-4 px-10 rounded-2xl uppercase tracking-widest hover:scale-105 transition-all shadow-xl cursor-pointer"
                  >
                    Ново изчисление
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
