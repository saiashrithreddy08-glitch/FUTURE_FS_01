import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div>
          <p className="font-bold text-lg">K. Ashrith Reddy</p>
          <p className="text-sm text-muted-foreground mt-1">Integrated M.Tech Software Engineering Student</p>
          <p className="text-sm text-gradient mt-2 font-medium">Building the Future Through Technology</p>
        </div>
        <div className="md:text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Quick Links</p>
          <div className="flex md:justify-center gap-5 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Connect</p>
          <div className="flex md:justify-end gap-3">
            <a href="mailto:saiashrithreddy08@gmail.com" aria-label="Email" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:border-primary"><Mail size={16} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:border-primary"><Github size={16} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:border-primary"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-10 pt-8 border-t border-border">
        © 2026 K. Ashrith Reddy. All rights reserved.
      </p>
    </footer>
  );
}