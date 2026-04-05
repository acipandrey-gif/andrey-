import { ExternalLink, Github, Code2 } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: "1",
    title: "Raketero",
    description: "A comprehensive freelance marketplace platform designed for students and professionals to connect for side gigs. Built with real-time Firebase integration and a responsive UI.",
    image: "https://placehold.co/800x500/3b82f6/white?text=RAKETERO",
    tags: ["React", "Firebase", "Tailwind CSS", "Google AI Studio"],
    liveUrl: "https://raketero.vercel.app/",
    githubUrl: "https://github.com/acipandrey-gif/roketero",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            A selection of my recent work, ranging from web applications to data-driven systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={16} className="text-primary" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                    aria-label="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
