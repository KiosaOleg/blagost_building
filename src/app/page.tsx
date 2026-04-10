import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary-950 transition-colors duration-300">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}
