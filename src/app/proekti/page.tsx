import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Проекти - Благост",
  description: "Разгледайте галерията ни от завършени обекти - опънати тавани в София и цяла България. Качествени изпълнения и модерен дизайн.",
};

export default function ProektiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary-950">
      <Header />
      <div className="pt-32">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
