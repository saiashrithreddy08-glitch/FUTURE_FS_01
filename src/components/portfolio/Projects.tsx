import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Cpu, Globe, Database, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Cpu,
    title: "Smart Solar Panel Monitoring System",
    desc: "An IoT-based monitoring solution that tracks solar panel performance, power generation, efficiency, and system health in real time.",
    tech: ["IoT", "Sensors", "Embedded Systems"],
  },
  {
    icon: Globe,
    title: "Personal Portfolio Website",
    desc: "A fully responsive and modern portfolio website showcasing projects, skills, achievements, and educational background.",
    tech: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Student Management System",
    desc: "A full-stack web application for managing student records, attendance, academic performance, and administrative operations.",
    tech: ["Java", "MySQL", "Web Tech"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[color-mix(in_oklab,var(--background-2)_50%,transparent)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="My Work" title="Featured Projects" subtitle="Selected work that reflects my skills and curiosity." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <p.icon className="text-primary-foreground" size={26} />
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}