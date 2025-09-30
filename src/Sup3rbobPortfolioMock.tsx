import { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Gamepad2, Link as LinkIcon } from "lucide-react";

// --- Quick theming knobs ---
const PALETTE = {
  bg: "from-[#0f1224] via-[#11172a] to-[#0b0f1e]",
  accent: "#7CFFB2", // neon mint
  accent2: "#7ab8ff", // soft sky
  text: "#e8eefc",
  sub: "#9fb3d6",
};

const projects = [
  {
    title: "SuperColony",
    blurb:
      "A real‑time ant simulation / RTS. Steam release. Crowd logic, swarm AI, and colony management.",
    tags: ["Unity", "C#", "AI"],
    link: "https://store.steampowered.com/app/3115790/SuperColony/",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Roguetris",
    blurb:
      "Minimalist rogue‑lite meets falling blocks. Tight loops, power‑ups, juicy game feel.",
    tags: ["Godot", "GDScript"],
    link: "https://sup3rbob.itch.io/roguetris",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Extreme Tag!",
    blurb:
      "Online multiplayer tag with propulsive movement and trick‑shots.",
    tags: ["Unity Netcode", "Multiplayer"],
    link: "https://sup3rbob.itch.io/extreme-tag",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CRAIGPOCALYPSE",
    blurb: "A fast game‑jam collab — crunchy VFX, comedic chaos.",
    tags: ["Game Jam", "VFX"],
    link: "https://sup3rbob.itch.io/craigpocalypse",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Lab",
    blurb: "Top‑down sci‑fi prototype with puzzle nodes and terminals.",
    tags: ["Raylib", "C"],
    link: "https://sup3rbob.itch.io/the-lab",
    img: "https://images.unsplash.com/photo-1614935151651-0bea6508f4d9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Sup3rbobPortfolioMock() {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });

    // --- Runtime self‑test ---
    if (typeof window !== "undefined" && window.location.hash === "#test") {
      console.group("SelfTest: PortfolioMock");
      console.assert(projects.length >= 5, "Should render at least 5 projects");
      console.assert(typeof PALETTE.accent === "string", "Palette accent should be string");
      console.groupEnd();
    }
  }, [controls]);

  return (
    <div className={`min-h-screen text-[${PALETTE.text}] bg-gradient-to-b ${PALETTE.bg}`}>      
      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-[--acc]" style={{"--acc": PALETTE.accent} as any}></div>
            <span className="font-semibold tracking-wide text-slate-100">SUP3RBOB</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 font-medium text-black" style={{background: PALETTE.accent}}>Hire me</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Soft animated blobs */}
        <motion.div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: PALETTE.accent, opacity: glow as any }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl"
          style={{ background: PALETTE.accent2, opacity: 0.25 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="md:col-span-7"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ontario‑based Game Dev</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              Harris Ibrahimi builds <span style={{ color: PALETTE.accent }}>playable worlds</span> with Unity, Godot & C#
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              Portfolio concept with modern layout, motion flourishes, and clear calls‑to‑action. Optimized for skim‑reading — then deep‑diving into projects.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#work" className="rounded-xl px-4 py-2 font-medium text-black" style={{ background: PALETTE.accent }}>View Projects</a>
              <a href="#contact" className="rounded-xl px-4 py-2 font-medium border border-white/20 text-slate-200 hover:border-white/40">Get in touch</a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-slate-300">
              <a href="https://github.com/sup3rbob" className="hover:text-white" aria-label="GitHub"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/harris-ibrahimi" className="hover:text-white" aria-label="LinkedIn"><Linkedin size={22} /></a>
              <a href="mailto:harris@example.com" className="hover:text-white" aria-label="Email"><Mail size={22} /></a>
              <a href="https://sup3rbob.itch.io" className="hover:text-white" aria-label="Itch.io"><Gamepad2 size={22} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop"
                  alt="Showreel"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -left-4 rounded-2xl px-3 py-2 text-xs border border-white/10 bg-black/40 backdrop-blur flex items-center gap-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PALETTE.accent }}></span>
                Real‑time & Gameplay Systems
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORK GRID */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Header kicker="Selected Work" title="Featured Projects" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="text-slate-300 hover:text-white inline-flex items-center gap-2">
            Full project archive <LinkIcon size={18} />
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Header kicker="Tooling" title="Skills & Engines" />
        <ul className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
          {["Unity", "Unreal", "Godot", "Raylib", "C#", "C++", "GDScript", "Rust", "C", "Netcode", "Shaders", "CI/CD"].map((s) => (
            <li key={s} className="rounded-full border border-white/10 px-3 py-1.5">{s}</li>
          ))}
        </ul>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <Header kicker="Background" title="About Harris" />
        <p className="mt-4 text-slate-300 leading-relaxed">
          Game developer based in Ontario, Canada. I love building responsive game systems, juicy feel,
          and approachable UX. I’ve shipped jam games and commercial prototypes; currently exploring
          large‑scale agent simulation and multiplayer.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-2xl font-semibold">Let’s build something fun</h3>
          <p className="mt-2 text-slate-300">Open to collaborations, contract work, and full‑time roles.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="mailto:harris@example.com" className="rounded-xl px-4 py-2 font-medium text-black" style={{ background: PALETTE.accent }}>Email</a>
            <a href="https://www.linkedin.com/in/harris-ibrahimi" className="rounded-xl px-4 py-2 font-medium border border-white/20 text-slate-200">LinkedIn</a>
          </div>
        </div>
        <footer className="mt-10 pb-12 text-center text-xs text-slate-500">Concept redesign by a fan — not the official site.</footer>
      </section>
    </div>
  );
}

function Header({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{kicker}</span>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-100">{title}</h2>
    </div>
  );
}

function ProjectCard({ title, blurb, tags, link, img }: any) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="aspect-video overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        </div>
        <p className="mt-1 text-sm text-slate-300">{blurb}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
          {tags.map((t: string) => (
            <li key={t} className="rounded-full border border-white/10 px-2.5 py-1">{t}</li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}
