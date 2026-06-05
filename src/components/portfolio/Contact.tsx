import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `From: ${form.name} <${form.email}>%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:saiashrithreddy08@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Get In Touch" title="Let's Connect" subtitle="Have an opportunity or project in mind? I'd love to hear from you." />
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</p>
              <a href="mailto:saiashrithreddy08@gmail.com" className="font-medium hover:text-primary transition-colors break-all">
                saiashrithreddy08@gmail.com
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <a href="mailto:saiashrithreddy08@gmail.com" aria-label="Email" className="glass rounded-2xl p-5 flex flex-col items-center gap-2 hover:border-primary hover:-translate-y-1 transition-all">
                <Mail size={22} className="text-primary" />
                <span className="text-xs">Email</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass rounded-2xl p-5 flex flex-col items-center gap-2 hover:border-primary hover:-translate-y-1 transition-all">
                <Github size={22} className="text-primary" />
                <span className="text-xs">GitHub</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass rounded-2xl p-5 flex flex-col items-center gap-2 hover:border-primary hover:-translate-y-1 transition-all">
                <Linkedin size={22} className="text-primary" />
                <span className="text-xs">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-glow hover:scale-105 transition-transform">
              <Send size={16} /> {sent ? "Sent — Check Your Mail App" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", value, onChange }: { label: string; type?: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required type={type} value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}