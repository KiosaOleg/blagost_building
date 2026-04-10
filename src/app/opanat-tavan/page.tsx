import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Опънат таван - Видове и цени - Благост",
  description:
    "Всичко, което трябва да знаете за изработката на опънати тавани за баня, хол, детска стая, коридор и други помещения.",
};

export default function OpanatTavanPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary-950 transition-colors">
      <Header />
      <div className="pt-32">
        <Services />

        <section className="py-24 bg-primary-50 dark:bg-primary-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-primary-900 dark:text-white uppercase tracking-tighter mb-12 text-center">
                Какво представлява{" "}
                <span className="text-gradient">опънатият таван?</span>
              </h2>

              <div className="grid grid-cols-1 gap-12">
                {[
                  {
                    title: "Етап 1: Монтаж на профили",
                    content:
                      "Профилите са първоначалната и много важна част от монтажа. Те се поставят по стените на помещението, като се определя нивото на новия таван спрямо съществуващия.",
                  },
                  {
                    title: "Етап 2: Нагряване и разгъване",
                    content:
                      "Осъществява се нагряване на помещението до температура около 60 градуса с помощта на специални отоплителни уреди. Това прави платното еластично.",
                  },
                  {
                    title: "Етап 3: Закрепване в ъглите",
                    content:
                      "Платното се закрепва поетапно в ъглите посредством специални щипки. След това се пристъпва към окончателно загряване за перфектна опънатост.",
                  },
                  {
                    title: "Етап 4: Финализиране",
                    content:
                      "След приключване на монтажа платното изстива, опъва се напълно и приема окончателния си вид – гладък, равен таван без никакви несъвършенства.",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-primary-900 p-10 rounded-[2.5rem] shadow-xl border dark:border-primary-800 hover-lift"
                  >
                    <div className="w-16 h-16 bg-primary-900 dark:bg-white text-white dark:text-primary-900 rounded-2xl flex items-center justify-center text-3xl font-black flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-primary-900 dark:text-white uppercase tracking-tighter mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-primary-700 dark:text-primary-200 font-medium leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
