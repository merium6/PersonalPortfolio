import BentoGrid from "@/components/BentoGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col bg-background">
      <Header />
      <main className="w-full flex-1 px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
        <BentoGrid />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}