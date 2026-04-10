import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Materials from "@/components/Materials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Материали - Благост",
  description: "Висококачествени профили, осветителни тела и аксесоари за монтаж на опънати тавани. Пълна гама от професионални материали.",
};

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary-950">
      <Header />
      <div className="pt-32">
        <Materials />
      </div>
      <Footer />
    </main>
  );
}
