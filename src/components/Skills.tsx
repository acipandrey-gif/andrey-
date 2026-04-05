import { motion } from "motion/react";
import { 
  Code2, 
  Layers, 
  Terminal, 
  Globe, 
  Database, 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal size={20} />,
    skills: [
      { name: "C++", icon: <Code2 size={16} /> },
      { name: "Python", icon: <Code2 size={16} /> },
      { name: "SQL", icon: <Database size={16} /> }
    ]
  },
  {
    title: "Frameworks & Tools",
    icon: <Layers size={20} />,
    skills: [
      { name: "Arduino IDE", icon: <Terminal size={16} /> },
      { name: "Git & GitHub", icon: <Terminal size={16} /> }
    ]
  },
  {
    title: "Data & Technologies",
    icon: <Database size={20} />,
    skills: [
      { name: "Pandas & NumPy", icon: <Database size={16} /> },
      { name: "Excel", icon: <Database size={16} /> },
      { name: "REST APIs", icon: <Globe size={16} /> }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Skills & Tools</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
