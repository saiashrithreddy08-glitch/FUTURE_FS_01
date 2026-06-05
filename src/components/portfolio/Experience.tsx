import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[color-mix(in_oklab,var(--background-2)_50%,transparent)]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="My Path" title="Professional Journey" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-10 shadow-card relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
              <Briefcase className="text-primary-foreground" size={26} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Software Engineering Student</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Currently enhancing software development skills through academic projects, self-learning,
                coding practice, and hands-on development experiences while exploring modern technologies
                and software engineering concepts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}