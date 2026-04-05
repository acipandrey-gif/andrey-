import { GraduationCap, Target, Gamepad2, Film } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Academic Background</h3>
                </div>
                <div className="pl-13 border-l-2 border-slate-100 space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider text-primary">College</h4>
                    <p className="font-bold text-slate-900">Eastern Samar State University</p>
                    <p className="text-sm text-slate-500">2022 - 2027</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider text-primary">Senior High School</h4>
                    <p className="font-bold text-slate-900">ESNCSH</p>
                    <p className="text-sm text-slate-500">2018 - 2022</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider text-primary">Junior High School</h4>
                    <p className="font-bold text-slate-900">SMCB</p>
                    <p className="text-sm text-slate-500">2016 - 2018</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider text-primary">Elementary</h4>
                    <p className="font-bold text-slate-900">ESDPES</p>
                    <p className="text-sm text-slate-500">2011 - 2016</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Career Goals</h3>
                </div>
                <p className="text-slate-600 pl-13 leading-relaxed">
                  To continuously learn and gain knowledge across different areas of technology, including data analytics, software development, and system design. I aim to improve my skills, explore new tools and concepts, and apply what I learn to solve real-world problems while growing as a well-rounded professional.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Gamepad2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Hobbies & Interests</h3>
                </div>
                <div className="pl-13 space-y-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <Film size={16} />
                    </div>
                    <span>Watching Documentaries</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <Gamepad2 size={16} />
                    </div>
                    <span>Playing Games</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
