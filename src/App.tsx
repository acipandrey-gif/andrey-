import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
      {/* Accessibility: Skip to main content link */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
