import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { SectionHeader } from "./components/SectionHeader";
import { ProjectCard } from "./components/ProjectCard";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";
import { BackgroundOverlay } from "./components/BackgroundOverlay";
import { DecorativeFrame } from "./components/DecorativeFrame";
import { AnimatedDivider } from "./components/AnimatedDivider";
import type { Project, Experience } from "./types";

const DUMMY_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Vivid Studio",
    category: "Game Engine • Visual Editor",
    description:
      "A visual 2D game engine and editor featuring scene management, keyframe animation, visual scripting and an extensible architecture built entirely with web technologies.",
    technologies: ["React", "Vite", "TypeScript", "Konva.js", "Zustand"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/vivid-studio",
    demoUrl: "https://vivid-studio.vercel.app",
  },
  {
    id: "proj-2",
    title: "Hytale UI Studio",
    category: "Desktop App • Visual Editor",
    description:
      "A desktop visual editor that accurately reproduces Hytale's proprietary UI layout engine, allowing interfaces to be designed visually and exported with pixel-perfect parity.",
    technologies: ["React", "Vite", "TypeScript", "Tauri", "Zustand"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/hytale-ui-studio",
    demoUrl: "https://hytale-ui-studio-2.vercel.app",
  },
  {
    id: "proj-4",
    title: "RuneCore — Magic Engine",
    category: "Game Engine • Library",
    description:
      "A modular magic engine for Hytale providing status effects, elemental systems, spell APIs and persistent gameplay mechanics for mod developers.",
    technologies: [
      "Java",
      "Hytale Modding API",
      "Gradle",
      "Event-Driven Architecture",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/runecore",
  },
  {
    id: "proj-5",
    title: "Caskara — Data Engine",
    category: "Library • Database Engine",
    description:
      "A lightweight data engine combining SQLite and JSON to simplify persistent storage for Hytale mods through a flexible, schema-free API.",
    technologies: ["Java", "SQLite", "JSON", "Gradle"],
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/caskara",
    demoUrl: "https://www.curseforge.com/hytale/mods/caskara",
  },
  {
    id: "proj-6",
    title: "Jinko — The Animal Guesser",
    category: "Artificial Intelligence • Web Application • Game",
    description:
      "A mobile-first web game inspired by Akinator, featuring an entropy-driven probabilistic engine that dynamically selects informative questions to guess an animal.",
    technologies: ["TypeScript", "Vite", "React", "C++", "Web Speech API"],
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/magic-jinko",
    demoUrl: "https://magic-jinko.netlify.app/",
  },
  {
    id: "proj-10",
    title: "AniMind",
    category: "Mobile App • Artificial Intelligence • Anime",
    description:
      "An Android application that uses artificial intelligence to help users discover new anime, generating intelligent summaries, pros/cons analysis, and personalized recommendations.",
    technologies: ["Kotlin", "Android Studio", "Material Design", "Gemini API"],
    imageUrl:
      "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=2070",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/AniMind",
  },
  {
    id: "proj-11",
    title: "AetherexFactory",
    category: "Game Mod • Experimental Project • Hytale",
    description:
      "An early experimental project developed to explore the Hytale Modding API, establish team development patterns, and build the foundational architecture for future game systems.",
    technologies: ["Java", "Hytale Modding API", "Gradle"],
    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2070",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/AetherexFactory",
  },
  {
    id: "proj-14",
    title: "PigeonCraft",
    category: "Game Development • Game Engine • Web Game",
    description:
      "A modern web browser reimplementation of the classic Minicraft, porting the original Java engine to JavaScript/TypeScript using HTML5 Canvas while introducing new exclusive content.",
    technologies: [
      "TypeScript",
      "Vanilla JavaScript",
      "HTML5 Canvas",
      "Vite",
      "Pixel Rendering",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/PigeonCraft",
    demoUrl: "https://pigeoncraft.netlify.app/",
  },
  {
    id: "proj-15",
    title: "Max2D Player",
    category: "Game Engine • Runtime • Mobile Engine • Flutter",
    description:
      "A complete rewrite of the legacy runtime for the Max2D engine, transitioning the old version to a new architecture using Flutter, Flame Engine, and Box2D to execute games on mobile devices.",
    technologies: ["Dart", "Flutter", "Flame Engine", "Box2D", "Android"],
    imageUrl:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2070",
    year: "2026",
    githubUrl: "https://github.com/cookieukw/max2d-player",
  },
  {
    id: "proj-12",
    title: "Tá Barato?",
    category: "PWA • Mobile App • Community Platform • Smart Price Comparison",
    description:
      "A collaborative platform for recording and comparing supermarket prices, featuring a smart validation algorithm to detect spam and calculate data reliability based on community contributions.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Firebase",
      "Capacitor",
      "PWA",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=2070",
    year: "2025",
    demoUrl: "https://ta-barato.vercel.app/",
  },
  {
    id: "proj-8",
    title: "Moorie",
    category: "Social Platform • Digital Memorial",
    description:
      "A collaborative digital memorial platform created to preserve stories, memories and tributes of people and pets who have passed away, turning memories into permanent visual experiences.",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Zustand",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1444464666168-49b626f1110c?auto=format&fit=crop&q=80&w=2069",
    year: "2024",
    githubUrl: "https://github.com/cookieukw/Moorie",
    demoUrl: "http://moorie.vercel.app/",
  },
  {
    id: "proj-9",
    title: "Sorcery",
    category: "Education • Productivity • Study Planner",
    description:
      "A modern platform for managing study cycles, helping students organize their routines intelligently using flexible, data-driven cycle management.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Zustand",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070",
    year: "2024",
    githubUrl: "https://github.com/cookieukw/Sorcery",
    demoUrl: "https://soorcery.vercel.app/",
  },
  {
    id: "proj-16",
    title: "LocaMilha",
    category: "Business Platform • Car Rental System • Management System",
    description:
      "A comprehensive web platform for managing car rentals, including fleet management, reservations, and payments. Notably developed entirely on an Android smartphone using Acode and Termux.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Firebase",
      "Mobile Development",
      "Termux",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070",
    year: "2024",
    demoUrl: "https://locamilha.vercel.app/",
  },
  {
    id: "proj-13",
    title: "PocketLibrary API",
    category: "REST API • Web Scraping • Backend • Open Data",
    description:
      "An unofficial REST API developed to facilitate access to the Domínio Público portal collection using real-time web scraping instead of maintaining a local database.",
    technologies: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "Web Scraping",
      "REST API",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2070",
    year: "2022",
    githubUrl: "https://github.com/cookieukw/PocketLibraryAPI",
  },
  {
    id: "proj-7",
    title: "Mobs&Mate",
    category: "Game Dev • Minecraft Addon",
    description:
      "A Minecraft Bedrock addon where villagers become intelligent companions capable of understanding natural language commands and performing autonomous tasks.",
    technologies: ["JavaScript", "Minecraft Script API", "JSON"],
    imageUrl:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2070",
    year: "2020",
    githubUrl: "https://github.com/cookieukw/MobsAndMates",
  },
  {
    id: "proj-3",
    title: "Vex AI",
    category: "Virtual Assistant • Web App • Mobile App",
    description:
      "A virtual assistant evolving since 2019 with persistent memory, dynamic personality, offline capabilities and cloud-powered language models.",
    technologies: [
      "React",
      "Capacitor",
      "Gemini API",
      "IndexedDB",
      "NaiveBayes",
      "PWA",
      "TypeScript",
      "Neural Network",
      "TD-IDF",
      "KNN",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076",
    year: "2019",
    githubUrl: "https://github.com/Vex-AI/Vex-AI",
    demoUrl: "https://vexxx.vercel.app/enUS",
  },
];

const DUMMY_EXPERIENCES: Experience[] = [
  {
    "id": "exp-6",
    "role": "Vex AI",
    "company": "Virtual Assistant",
    "period": "2019",
    "description": "Started developing Vex AI as an experimental conversational assistant, laying the foundation for future interaction research and interaction systems."
  },
  {
    "id": "exp-pl",
    "role": "PocketLibrary API",
    "company": "Library API & Open Data",
    "period": "2022",
    "description": "Developed an unofficial REST API using real-time web scraping to access the Domínio Público portal collection, extracting books and metadata automatically."
  },
  {
    "id": "exp-s",
    "role": "Sorcery",
    "company": "Study Planner & Analytics",
    "period": "2024",
    "description": "Developed a modern platform for managing flexible study cycles with integrated analytics, productivity tracking, and intelligent cycle distribution."
  },
  {
    "id": "exp-m",
    "role": "Moorie",
    "company": "Digital Memorial Platform",
    "period": "2024",
    "description": "Built a collaborative digital memorial platform to preserve stories and tributes, turning memories into permanent visual experiences."
  },
  {
    "id": "exp-lm",
    "role": "LocaMilha",
    "company": "Car Rental System",
    "period": "2024",
    "description": "Developed a full-stack car rental management SPA entirely on an Android smartphone using Acode and Termux."
  },
  {
    "id": "exp-tb",
    "role": "Tá Barato?",
    "company": "Community Platform & PWA",
    "period": "2025",
    "description": "Developed a collaborative price comparison platform with a smart validation algorithm to detect spam and calculate data reliability."
  },
  {
    "id": "exp-4",
    "role": "Caskara",
    "company": "Data Engine",
    "period": "2026",
    "description": "Designed a lightweight persistence engine combining SQLite and JSON to simplify data management for complex game projects."
  },
  {
    "id": "exp-ae",
    "role": "AetherexFactory",
    "company": "Experimental Mod",
    "period": "2026",
    "description": "Developed an experimental lab project to explore the Hytale Modding API and establish core development patterns for the team."
  },
  {
    "id": "exp-j",
    "role": "Jinko",
    "company": "AI Guessing Game",
    "period": "2026",
    "description": "Built a mobile-first web game using an entropy-driven probabilistic engine, Web Speech API and C++ to guess animals dynamically."
  },
  {
    "id": "exp-a",
    "role": "AniMind",
    "company": "Android AI App",
    "period": "2026",
    "description": "Created an AI-powered Android application using Kotlin and Gemini API to generate intelligent anime recommendations and analysis."
  },
  {
    "id": "exp-3",
    "role": "RuneCore",
    "company": "Game Engine",
    "period": "2026",
    "description": "Started building a modular magic engine focused on reusable gameplay systems and APIs for Hytale."
  },
  {
    "id": "exp-2",
    "role": "Hytale UI Studio",
    "company": "Desktop App",
    "period": "2026",
    "description": "Developed a visual UI editor capable of reproducing Hytale's layout engine with near pixel-perfect accuracy."
  },
  {
    "id": "exp-1",
    "role": "Vivid Studio",
    "company": "Visual Editor",
    "period": "2026",
    "description": "Began developing a visual game engine featuring animation tools, scene editing and node-based scripting."
  },
  {
    "id": "exp-pc",
    "role": "PigeonCraft",
    "company": "Web Game Engine",
    "period": "2026",
    "description": "Reimplemented the classic Minicraft in JavaScript/TypeScript using HTML5 Canvas, porting the original Java engine to the web."
  },
  {
    "id": "exp-max2d",
    "role": "Max2D Player",
    "company": "Mobile Game Engine",
    "period": "2026",
    "description": "Rewrote the old version of the legacy runtime for the Max2D engine to a new modern version using Flutter, Flame Engine, and Box2D."
  }
];

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[var(--color-background)] font-sans">
      <BackgroundOverlay />
      <Navigation />

      <div className="pt-16 flex w-full relative z-10">
        <aside className="hidden lg:flex w-20 border-r border-[var(--color-border)] flex-col items-center py-12 justify-between fixed h-[calc(100vh-64px)] top-16 left-0">
          <div className="text-[10px] [writing-mode:vertical-rl] rotate-180 opacity-30 tracking-[0.5em] uppercase font-bold">
            I like strategic games
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-1 h-1 bg-[var(--color-accent)]"></div>
            <div className="w-1 h-1 bg-white/20"></div>
            <div className="w-1 h-1 bg-white/20"></div>
          </div>
          <div className="text-[10px] [writing-mode:vertical-rl] rotate-180 opacity-30 tracking-[0.5em] uppercase font-bold font-mono">
            (˶ˆᗜˆ˵)
          </div>
        </aside>

        <main className="flex-1 lg:ml-20 flex flex-col relative border-l-0 lg:border-l border-[var(--color-border)]">
          <Hero />

          <section
            id="work"
            className="relative py-24 md:py-32 px-6 md:px-16 w-full "
          >
            <DecorativeFrame />
            <AnimatedDivider />
            <SectionHeader
              number="01"
              category="Projects"
              title="Selected Work"
              description="A collection of developer tools, engines, AI systems and open-source projects built to solve real engineering challenges."
            />
            <div className="flex flex-col mt-16">
              {DUMMY_PROJECTS.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="relative py-24 md:py-32 px-6 md:px-16 w-full "
          >
            <DecorativeFrame />
            <AnimatedDivider />
            <SectionHeader
              number="02"
              category="Evolution"
              title="Project Evolution"
              description="A timeline detailing the major projects and developments throughout my technical journey."
            />
            <div className="max-w-4xl mt-16">
              <ExperienceTimeline experiences={DUMMY_EXPERIENCES} />
            </div>
          </section>

          <section
            id="about"
            className="relative py-24 md:py-32 px-6 md:px-16 bg-[var(--color-surface)] "
          >
            <DecorativeFrame />
            <AnimatedDivider />
            <div className="w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
              <div className="w-full md:w-1/2">
                <SectionHeader
                  number="03"
                  category="About"
                  title="Engineering Philosophy"
                />
                <div className="prose prose-invert max-w-none">
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm md:text-base font-light italic mb-6 text-balance">
                    I am a full stack web developer with a strong foundation in
                    Java, and experience working with Kotlin, Dart, and Python.
                    I'm well-versed in building APIs with Next.js and
                    architecting scalable systems, as demonstrated by the
                    various projects and engines throughout this portfolio.
                  </p>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm md:text-base font-light italic mb-6 text-balance">
                    Beyond coding, I'm a video editor, a writer (whether I'm
                    good at it is another story), and a scriptwriter for my own
                    YouTube channel (
                    <a
                      href="https://youtube.com/@cookieukw"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      @cookieukw
                    </a>
                    ). I also have an eclectic taste in music, usually leaning
                    towards beat-heavy tracks, which often fuels my creative and
                    engineering focus.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t border-[var(--color-border)]">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-text-main)] mb-2">
                      5+
                    </div>
                    <div className="font-bold text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
                      Years creating random crap
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-text-main)] mb-2">
                      20+
                    </div>
                    <div className="font-bold text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
                      Projects Shipped
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 relative aspect-[4/5] bg-[var(--color-background)] border border-[var(--color-border)] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
                  alt="Code architecture placeholder"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
                <div className="absolute bottom-6 left-6 z-20 font-bold text-[10px] tracking-widest text-white/50 uppercase">
                  Fig. 1 — Cool code
                </div>
              </div>
            </div>
          </section>

          <section
            id="stack"
            className="relative py-24 md:py-32 px-6 md:px-16 w-full "
          >
            <DecorativeFrame />
            <AnimatedDivider />
            <SectionHeader
              number="04"
              category="Technology"
              title="Technical Arsenal"
              description="Technologies and tools I use to build desktop applications, developer tools, game engines and AI-powered software."
            />
            <div className="mt-16 md:mt-24">
              <TechStack />
            </div>
          </section>

          <section
            id="contact"
            className="py-24 md:py-48 px-6 md:px-16 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <DecorativeFrame />
            <AnimatedDivider />

            <span className="font-bold font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-8">
              05 / Next Steps
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12 max-w-4xl leading-[0.9] text-balance uppercase">
              Let's talk about software.
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <a
                href="mailto:erik.contato.ukw@gmail.com"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] bg-white/5 transition-all overflow-hidden hover:-translate-y-1"
              >
                <span className="relative z-10 font-bold font-mono text-[11px] tracking-[0.3em] uppercase">
                  Email
                </span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] bg-white/5 transition-all overflow-hidden hover:-translate-y-1"
              >
                <span className="relative z-10 font-bold font-mono text-[11px] tracking-[0.3em] uppercase">
                  GitHub
                </span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] bg-white/5 transition-all overflow-hidden hover:-translate-y-1"
              >
                <span className="relative z-10 font-bold font-mono text-[11px] tracking-[0.3em] uppercase">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://youtube.com/@cookieukw"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] bg-white/5 transition-all overflow-hidden hover:-translate-y-1"
              >
                <span className="relative z-10 font-bold font-mono text-[11px] tracking-[0.3em] uppercase">
                  YouTube
                </span>
              </a>
            </div>
          </section>
        </main>
      </div>

      <Footer />

      {/* OVERLAY TEXTURE (GRAIN EFFECT) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
    </div>
  );
}
