import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Trophy, Code, Users, Zap, BookOpen, Brain } from "lucide-react";

const items = [
  { icon: Code, text: "Completed Java Programming from Beginner to Advanced Level" },
  { icon: Trophy, text: "Active Participant in Coding Competitions" },
  { icon: Users, text: "Active Member of Photon Club" },
  { icon: Zap, text: "Passionate Technology Enthusiast" },
  { icon: BookOpen, text: "Consistent Learner of Emerging Technologies" },
  { icon: Brain, text: "Dedicated Problem Solver" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Highlights" title="Achievements" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-primary transition-colors"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center">
                <it.icon size={20} className="text-primary-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}