import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Code2, Lightbulb, Rocket, Target } from "lucide-react";

const stats = [
  { icon: Code2, label: "Languages", value: "4+" },
  { icon: Rocket, label: "Projects Built", value: "3+" },
  { icon: Lightbulb, label: "Tech Stacks", value: "8+" },
  { icon: Target, label: "Years Learning", value: "3+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Who I Am" title="About Me" />
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              I am <span className="text-foreground font-semibold">K. Ashrith Reddy</span>, an
              Integrated M.Tech Software Engineering student at <span className="text-foreground font-semibold">VIT-AP University</span> with a strong passion for software development,
              full-stack web development, Java programming, and problem-solving.
            </p>
            <p>
              I enjoy creating modern web applications, learning emerging technologies, and continuously improving
              my technical and analytical skills. My goal is to build impactful software solutions that solve
              real-world problems while growing into a skilled software engineer and technology professional.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 hover:border-primary transition-colors">
                <s.icon className="text-primary mb-3" size={26} />
                <p className="text-3xl font-bold text-gradient">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}