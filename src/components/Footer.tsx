import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold text-primary tracking-tight">
              HP<span className="text-slate-900">.</span>
            </a>
            <p className="text-slate-500 text-sm mt-2 max-w-xs">
              Building data-driven solutions and innovative systems for the next generation of users.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/acipandrey-gif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:acipandrey@gmail.com" 
                className="p-2 text-slate-400 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-400 text-xs">
              © {currentYear} Hero Andrey B. Pica. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
