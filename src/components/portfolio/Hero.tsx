import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaJava, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { ArrowDown, Download, Mail, FolderGit2 } from "lucide-react";
import profile from "@/assets/profile.jpg";

const phrases = [
  "Full Stack Developer",
  "Java Enthusiast",
  "Problem Solver",
  "Software Engineer",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = phrases[i % phrases.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, del ? 45 : 85);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-0.5 h-6 bg-primary translate-y-1 ml-1 animate-pulse" />
    </span>
  );
}

const floatIcons = [
  { Icon: FaJava, x: "8%", y: "20%", delay: 0 },
  { Icon: FaReact, x: "85%", y: "15%", delay: 0.4 },
  { Icon: FaNodeJs, x: "12%", y: "75%", delay: 0.8 },
  { Icon: SiJavascript, x: "88%", y: "70%", delay: 1.2 },
  { Icon: FaPython, x: "5%", y: "50%", delay: 0.6 },
  { Icon: SiMongodb, x: "92%", y: "45%", delay: 1.0 },
  { Icon: FaGitAlt, x: "20%", y: "88%", delay: 1.4 },
  { Icon: FaDatabase, x: "78%", y: "88%", delay: 0.2 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-hero overflow-hidden">
      {/* animated blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* floating tech icons */}
      {floatIcons.map(({ Icon, x, y, delay }, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 1 + delay, duration: 0.6 }}
          className="absolute hidden lg:block text-primary/60 animate-float"
          style={{ left: x, top: y, animationDelay: `${delay}s` }}
        >
          <Icon size={36} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Internships & Placements
          </motion.p>
          <h2 className="text-muted-foreground text-lg mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-4">
            K. Ashrith <span className="text-gradient">Reddy</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Integrated M.Tech Software Engineering Student
          </p>
          <p className="text-lg md:text-xl font-medium mb-6 h-8">
            <Typewriter />
          </p>
          <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Building Innovative Software Solutions Through Code, Creativity, and Continuous Learning.
            Passionate about Full Stack Development, Java Programming, and Emerging Technologies.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-glow hover:scale-105 transition-transform">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:border-primary transition-colors">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border border-border hover:bg-muted transition-colors">
              <FolderGit2 size={18} /> View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-primary shadow-glow">
              <img
                src={profile}
                alt="K. Ashrith Reddy"
                width={768}
                height={768}
                className="w-full h-full rounded-full object-cover bg-card"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 glass rounded-2xl px-4 py-3 shadow-card">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold">VIT-AP University</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs"
      >
        Scroll
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}