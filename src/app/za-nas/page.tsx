import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "За нас - Благост",
  description:
    "Научете повече за историята, мисията и професионалния опит на строителна компания Благост.",
};

export default function ZaNasPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary-950">
      <Header />
      <div className="pt-32">
        <About />

        <section className="py-24 bg-primary-50 dark:bg-primary-900/20 transition-colors">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-primary-900 dark:text-white uppercase tracking-tighter mb-8">
                Нашата <span className="text-gradient">История</span>
              </h2>
              <div className="space-y-6 text-lg text-primary-700 dark:text-primary-200 leading-relaxed text-left font-medium">
                <p>
                  През 2020 година, след успешно преминати обучения в Румъния,
                  навлизаме в света на опънатите тавани, усвоявайки най-добрите
                  практики и технологии в сферата.
                </p>
                <p>
                  Вдъхновени от иновациите и качеството на този продукт, през
                  2021 година започнахме активно да предлагаме доставки и
                  монтажи в София и цялата страна. Основателят на фирмата има
                  повече от десетилетие опит в строителния сектор, което ни дава
                  стабилна основа за изграждане на професионална и надеждна
                  услуга.
                </p>
                <p>
                  Опънатите тавани са изключително популярни в страни като
                  Полша, Литва и Франция, където се използват масово както в
                  жилищни, така и в търговски и обществени сгради. Основната ни
                  цел в началото бе да въведем този продукт на българския пазар,
                  демонстрирайки неговите предимства – конкурентна цена, бърз
                  монтаж и дълготрайност.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-primary-900 dark:text-white uppercase tracking-tighter mb-8">
                Фирмата <span className="text-gradient">днес</span>
              </h2>
              <div className="space-y-6 text-lg text-primary-700 dark:text-primary-200 leading-relaxed text-left font-medium">
                <p>
                  Към днешна дата компанията ни е сред водещите доставчици и
                  изпълнители на опънати тавани в София и страната. Работим с
                  широка гама от материали и технологии, предлагайки
                  персонализирани решения, които напълно отговарят на
                  изискванията на клиентите. Разполагаме с висококвалифицирани
                  специалисти, които не само извършват монтажи с висока
                  прецизност, но и консултират клиентите относно най-добрите
                  варианти за техния интериор.
                </p>
                <p>
                  Гордеем се с голямата си клиентска база, която включва както
                  индивидуални собственици на жилища, така и бизнес клиенти.
                  Благодарение на добрата ни репутация, голяма част от новите ни
                  клиенти идват при нас по препоръка, което е най-доброто
                  доказателство за качеството на нашата работа. Използваме само
                  сертифицирани материали с дългосрочна гаранция, като
                  предлагаме модерни и стилни решения, съобразени със
                  съвременните архитектурни и дизайнерски тенденции.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
