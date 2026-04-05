import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Contact Details</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Feel free to reach out to me through any of the following channels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col items-center"
            >
              <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
              <a href="mailto:acipandrey@gmail.com" className="text-slate-600 hover:text-primary transition-colors break-all">
                acipandrey@gmail.com
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col items-center"
            >
              <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6">
                <Phone size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
              <a href="tel:+639267651709" className="text-slate-600 hover:text-primary transition-colors">
                +63 926 765 1709
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col items-center"
            >
              <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">
                Purok B, Borongan City, Eastern Samar
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
