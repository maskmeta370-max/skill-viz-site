import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleNetwork from "@/components/ParticleNetwork";
import CodeRain from "@/components/CodeRain";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleNetwork />
      <CodeRain />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
