import Reveal from "./components/Reveal";
import Typer from "./components/Typer";
import Terminal from "./components/Terminal";
import GlowCard from "./components/GlowCard";
import { projects, caseStudies, experience, skills, contact } from "@/lib/data";

const MARQUEE = [
  "RAG PIPELINES", "LLM FIREWALLS", "NEXT.JS", "FASTAPI", "COMPUTER VISION",
  "LANGCHAIN", "SUPABASE", "AI AGENTS", "TYPESCRIPT", "PYTHON",
];

export default function Home() {
  return (
    <main className="relative">
      {/* ───────────────── nav ───────────────── */}
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs">
          <span className="text-ink-dim">
            <span className="text-green">➜</span> ~/tayyar
          </span>
          <div className="flex gap-6">
            <a href="#work" className="text-ink-dim transition-colors hover:text-amber">work</a>
            <a href="#clients" className="text-ink-dim transition-colors hover:text-amber">clients</a>
            <a href="#experience" className="text-ink-dim transition-colors hover:text-amber">experience</a>
            <a href="#terminal" className="text-ink-dim transition-colors hover:text-amber">terminal</a>
            <a href={contact.cv} download className="text-amber">cv ↓</a>
          </div>
        </div>
      </nav>

      {/* ───────────────── hero ───────────────── */}
      <header className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-20">
        <p className="rise text-sm text-ink-dim" style={{ animationDelay: "100ms" }}>
          $ cat introduction.txt
        </p>
        <h1
          className="display rise mt-6 text-[17vw] leading-[0.9] sm:text-[13vw] lg:text-[10rem]"
          style={{ animationDelay: "250ms" }}
        >
          Abdulmajeed
          <br />
          <span className="italic text-amber">Tayyar</span>
        </h1>
        <div className="rise mt-8 text-base sm:text-lg" style={{ animationDelay: "450ms" }}>
          <span className="text-ink-dim">&gt; </span>
          <Typer />
        </div>
        <div className="rise mt-12 flex flex-wrap items-center gap-6 text-sm" style={{ animationDelay: "650ms" }}>
          <span className="flex items-center gap-2 border border-line px-3 py-1.5 text-ink-dim">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green" />
            AI intern @ Trend Micro
          </span>
          <a href="#work" className="link-underline">view the work</a>
          <a href={contact.cv} download className="link-underline">download cv</a>
        </div>
        <p className="rise absolute bottom-8 left-6 text-xs text-ink-dim" style={{ animationDelay: "900ms" }}>
          scroll ↓
        </p>
      </header>

      {/* ───────────────── marquee ───────────────── */}
      <div className="overflow-hidden border-y border-line py-3" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0">
              {MARQUEE.map((w) => (
                <span key={w + n} className="display mx-6 whitespace-nowrap text-xl text-ink-dim">
                  {w} <span className="text-amber-dim">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────── projects ───────────────── */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="section-label">selected work</p>
          <h2 className="display mt-4 max-w-2xl text-5xl sm:text-6xl">
            Things I&apos;ve <span className="italic text-amber">shipped</span>, not just started.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-ink-dim">
            Every repo below is public — read the code, run the tests, judge for yourself.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120} className={i === 0 ? "md:col-span-2" : ""}>
              <GlowCard className="flex h-full flex-col overflow-hidden">
                {p.shot && (
                  <a
                    href={p.live ?? p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className={`block overflow-hidden border-b border-line ${i === 0 ? "max-h-80" : "aspect-video"}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.shot}
                      alt={`${p.name} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top opacity-80 saturate-[0.85] transition duration-500 hover:scale-[1.02] hover:opacity-100 hover:saturate-100"
                    />
                  </a>
                )}
                <div className="flex flex-1 flex-col p-7">
                <div className="flex items-baseline justify-between">
                  <span className="card-index text-xs text-ink-dim transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="border border-line px-2 py-0.5 text-[10px] uppercase tracking-widest text-amber">
                    {p.tag}
                  </span>
                </div>
                <h3 className="display mt-4 text-3xl">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm text-ink-dim">{p.desc}</p>
                <p className="mt-4 text-xs text-green">▸ {p.proof}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="bg-paper px-2 py-0.5 text-[11px] text-ink-dim">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-5 text-sm">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="link-underline">
                    code ↗
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="link-underline">
                      live ↗
                    </a>
                  )}
                </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── client case studies ───────────────── */}
      <section id="clients" className="border-t border-line bg-paper-raised/40">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <p className="section-label">client work</p>
            <h2 className="display mt-4 max-w-2xl text-5xl sm:text-6xl">
              Real clients, real <span className="italic text-amber">deadlines</span>.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-ink-dim">
              Delivered as a freelancer. Code stays private out of respect for the clients —
              the results speak on their sites.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {caseStudies.map((c, i) => (
              <div key={c.client} className="group bg-paper transition-colors hover:bg-paper-raised">
                <Reveal delay={i * 80}>
                  {c.shot && (
                    <a
                      href={c.live ?? undefined}
                      target="_blank"
                      rel="noreferrer"
                      className="block aspect-[21/9] overflow-hidden border-b border-line"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.shot}
                        alt={`${c.title} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top opacity-75 saturate-[0.85] transition duration-500 group-hover:opacity-100 group-hover:saturate-100"
                      />
                    </a>
                  )}
                  <div className="p-8">
                  <p className="text-xs uppercase tracking-widest text-amber">{c.client}</p>
                  <h3 className="display mt-3 text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm text-ink-dim">{c.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span key={s} className="border border-line px-2 py-0.5 text-[11px] text-ink-dim">
                        {s}
                      </span>
                    ))}
                  </div>
                  {c.live && (
                    <a href={c.live} target="_blank" rel="noreferrer" className="link-underline mt-5 inline-block text-sm">
                      visit live ↗
                    </a>
                  )}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── experience ───────────────── */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="section-label">experience</p>
          <h2 className="display mt-4 text-5xl sm:text-6xl">
            The <span className="italic text-amber">log file</span>.
          </h2>
        </Reveal>
        <div className="mt-14 space-y-0">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 100}>
              <div className="grid gap-4 border-t border-line py-10 last:border-b md:grid-cols-[220px_1fr]">
                <p className="text-xs text-amber">{e.when}</p>
                <div>
                  <h3 className="display text-3xl">{e.role}</h3>
                  <p className="mt-1 text-sm text-ink-dim">{e.org}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-dim">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="text-green">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="border border-line p-5">
                <p className="text-xs uppercase tracking-widest text-amber">{group}</p>
                <p className="mt-3 text-sm text-ink-dim">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ───────────────── terminal + contact ───────────────── */}
      <section id="terminal" className="border-t border-line bg-paper-raised/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 lg:grid-cols-2">
          <Reveal>
            <p className="section-label">say hello</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">
              Don&apos;t take my word for it —{" "}
              <span className="italic text-amber">type for yourself</span>.
            </h2>
            <p className="mt-5 max-w-md text-sm text-ink-dim">
              This shell is real. <code className="text-amber">help</code> lists the commands,{" "}
              <code className="text-amber">cv</code> grabs the resume,{" "}
              <code className="text-amber">sudo hire me</code> does what it says.
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <p>
                <span className="text-ink-dim">email · </span>
                <a href={`mailto:${contact.email}`} className="link-underline">{contact.email}</a>
              </p>
              <p>
                <span className="text-ink-dim">github · </span>
                <a href={contact.github} target="_blank" rel="noreferrer" className="link-underline">
                  github.com/jedo926
                </a>
              </p>
              <p>
                <span className="text-ink-dim">base · </span>
                {contact.location}
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Terminal />
          </Reveal>
        </div>
      </section>

      {/* ───────────────── footer ───────────────── */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-ink-dim">
          <span>© {new Date().getFullYear()} Abdulmajeed Tayyar · Riyadh</span>
          <span>
            built with Next.js — <span className="text-green">exit code 0</span>
          </span>
        </div>
      </footer>
    </main>
  );
}
