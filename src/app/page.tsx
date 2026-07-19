import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import DSA from "@/components/DSA";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <DSA />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
