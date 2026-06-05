import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const groups = [
  { title: "Programming Languages", items: [["Java", 90], ["Python", 80], ["JavaScript", 85], ["C", 75]] },
  { title: "Frontend Development", items: [["HTML5", 95], ["CSS3", 90], ["React.js", 85], ["Tailwind CSS", 88]] },
  { title: "Backend Development", items: [["Node.js", 78], ["Express.js", 75]] },
  { title: "Database Technologies", items: [["MySQL", 82], ["MongoDB", 75]] },
  { title: "Developer Tools", items: [["Git", 85], ["GitHub", 88], ["VS Code", 92], ["Postman", 80]] },
  { title: "Core Concepts", items: [["Data Structures", 85], ["Algorithms", 82], ["OOP", 90], ["Software Engineering", 80], ["Problem Solving", 88]] },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="What I Know" title="Skills & Expertise" subtitle="The technologies and concepts I work with." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="glass rounded-2xl p-6 hover:border-primary transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold mb-5 text-gradient">{g.title}</h3>
              <div className="space-y-4">
                {g.items.map(([name, val]) => (
                  <div key={name as string}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{name}</span>
                      <span className="text-muted-foreground text-xs">{val}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}