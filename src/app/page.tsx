import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Materials from "@/components/Materials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary-950 transition-colors duration-300">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Materials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
