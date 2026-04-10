import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти - Благост",
  description:
    "Свържете се с нас за безплатна консултация, оглед и оферта за вашите нови опънати тавани в София и страната.",
};

export default function KontaktiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary-950">
      <Header />
      <div className="pt-32">
        <Contact />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-primary-50 dark:bg-primary-900/20 p-10 rounded-[2.5rem] border border-primary-100 dark:border-primary-800 transition-colors hover-lift">
              <h3 className="text-2xl font-black text-primary-900 dark:text-white uppercase tracking-tighter mb-6">
                Работно време
              </h3>
              <ul className="space-y-4 text-lg font-bold text-primary-700 dark:text-primary-200">
                <li className="flex justify-between">
                  <span>Пон - Съб:</span>
                  <span className="text-primary-900 dark:text-white">
                    08:00 - 20:00 ч.
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Нед:</span>
                  <span className="text-primary-500 dark:text-primary-400">
                    Почивни дни
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 p-10 rounded-[2.5rem] border border-primary-100 dark:border-primary-800 transition-colors hover-lift">
              <h3 className="text-2xl font-black text-primary-900 dark:text-white uppercase tracking-tighter mb-6">
                Връзка с нас
              </h3>
              <ul className="space-y-4 text-lg font-bold text-primary-700 dark:text-primary-200">
                <li className="flex justify-between">
                  <span>Телефон:</span>
                  <a
                    href="tel:+359888000000"
                    className="text-primary-900 dark:text-white hover:text-primary-500 transition-colors cursor-pointer"
                  >
                    +359 888 000 000
                  </a>
                </li>
                <li className="flex justify-between">
                  <span>Имейл:</span>
                  <a
                    href="mailto:office@blagost.bg"
                    className="text-primary-900 dark:text-white hover:text-primary-500 transition-colors cursor-pointer"
                  >
                    office@blagost.bg
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
