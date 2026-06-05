import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const items = [
  {
    title: "Integrated M.Tech Software Engineering",
    institution: "VIT-AP University",
    meta: "5-Year Integrated Program · Expected 2029",
    status: "Currently Pursuing",
    description:
      "Pursuing advanced education in software engineering, programming, software development methodologies, databases, web technologies, data structures, algorithms, and modern software practices.",
  },
  {
    title: "Intermediate Education (MPC)",
    institution: "SR Educational Academy",
    meta: "Andhra Pradesh · MPC Stream",
    status: "95.6%",
    description:
      "Developed strong logical reasoning, mathematical problem-solving skills, and scientific knowledge that laid the foundation for engineering studies.",
  },
  {
    title: "Secondary School Education (SSC)",
    institution: "Bhashyam EM High School",
    meta: "Guntur, Andhra Pradesh · State Board",
    status: "87.5%",
    description:
      "Built strong academic foundations in mathematics, science, and analytical thinking while actively participating in academic and extracurricular activities.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[color-mix(in_oklab,var(--background-2)_50%,transparent)]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="My Journey" title="Education" subtitle="Academic milestones that shaped my engineering foundation." />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />
          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow">
                    <div className="flex items-center gap-2 mb-2 text-xs text-primary font-medium">
                      <Calendar size={14} /> {item.meta}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 flex items-center gap-1">
                      <MapPin size={14} /> {item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    <span className="inline-block mt-4 px-3 py-1 rounded-full text-xs bg-gradient-primary text-primary-foreground font-medium">
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <GraduationCap size={18} className="text-primary-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}