import { Github, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#2563eb_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Computer Engineering Student
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
              Hi, I'm <span className="text-primary">Hero Andrey B. Pica</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
              To continuously learn and gain knowledge across different areas of technology, including <span className="font-semibold text-slate-900">data analytics</span>, <span className="font-semibold text-slate-900">software development</span>, and <span className="font-semibold text-slate-900">system design</span>. 
              I aim to improve my skills, explore new tools and concepts, and apply what I learn to solve real-world problems while growing as a well-rounded professional.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 focus-visible:ring-4 focus-visible:ring-primary/30"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="https://github.com/acipandrey-gif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:border-primary hover:text-primary transition-all shadow-sm focus-visible:ring-4 focus-visible:ring-slate-200"
                aria-label="Visit my GitHub profile"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Available for internships
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Big Data Analyst Track
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
              src="https://github.com/acipandrey-gif.png" 
              alt="Hero Andrey B. Pica - Computer Engineering Student" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-2xl -z-10 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
