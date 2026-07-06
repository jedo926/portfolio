import Terminal from "./components/Terminal";
import { projects, caseStudies, experience, skills, contact } from "@/lib/data";

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-3">
      <span className="mono text-xs text-gold">{n}</span>
      <h2 className="mono text-xs uppercase tracking-[0.2em] text-ink-dim">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      {/* header */}
      <header>
        <p className="fade mono text-xs text-ink-dim" style={{ animationDelay: "0ms" }}>
          Riyadh, Saudi Arabia
        </p>
        <h1 className="fade mt-6 text-4xl font-medium leading-tight sm:text-5xl" style={{ animationDelay: "100ms" }}>
          Abdulmajeed Tayyar
        </h1>
        <p className="fade mt-2 text-xl italic text-gold" style={{ animationDelay: "180ms" }}>
          Full-stack and AI engineer
        </p>
        <p className="fade mt-6 max-w-prose text-ink-dim" style={{ animationDelay: "260ms" }}>
          I ship production systems end to end: an enterprise RAG platform at Trend Micro,
          client work for Al-Futtaim and Saudi Arabia&apos;s Ministry of Education, and a NASA
          Space Apps ML project. Currently an AI and full-stack intern at Trend Micro.
        </p>
        <p className="fade mono mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ animationDelay: "340ms" }}>
          <a className="quiet" href={`mailto:${contact.email}`}>email</a>
          <a className="quiet" href={contact.github} target="_blank" rel="noreferrer">github</a>
          <a className="quiet" href={contact.cv} download>download cv</a>
        </p>
      </header>

      {/* work */}
      <section id="work" className="mt-24">
        <SectionHead n="01" title="Selected work" />
        <ul className="space-y-12">
          {projects.map((p) => (
            <li key={p.name} className="row">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-2xl font-medium">{p.name}</h3>
                    <span className="mono text-xs text-ink-dim">{p.tag}</span>
                  </div>
                  <p className="mt-2 text-ink-dim">{p.desc}</p>
                  <p className="mono mt-3 text-xs text-ink-dim">{p.stack.join(" / ")}</p>
                  <p className="mono mt-3 flex gap-5 text-sm">
                    <a className="quiet" href={p.repo} target="_blank" rel="noreferrer">code</a>
                    {p.live && (
                      <a className="quiet" href={p.live} target="_blank" rel="noreferrer">live</a>
                    )}
                  </p>
                </div>
                {p.shot && (
                  <a
                    href={p.live ?? p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden shrink-0 sm:block"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.shot}
                      alt={`${p.name} screenshot`}
                      loading="lazy"
                      width={144}
                      height={90}
                      className="thumb h-[90px] w-36 border border-line object-cover object-top"
                    />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* client work */}
      <section id="clients" className="mt-24">
        <SectionHead n="02" title="Client work" />
        <p className="mb-10 -mt-4 text-sm text-ink-dim">
          Delivered as a freelancer. Code stays private out of respect for the clients.
        </p>
        <ul className="space-y-12">
          {caseStudies.map((c) => (
            <li key={c.client} className="row">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p className="mono text-xs text-gold">{c.client}</p>
                  <h3 className="mt-1 text-xl font-medium">{c.title}</h3>
                  <p className="mt-2 text-ink-dim">{c.desc}</p>
                  <p className="mono mt-3 text-xs text-ink-dim">{c.stack.join(" / ")}</p>
                  {c.live && (
                    <p className="mono mt-3 text-sm">
                      <a className="quiet" href={c.live} target="_blank" rel="noreferrer">visit live</a>
                    </p>
                  )}
                </div>
                {c.shot && (
                  <a
                    href={c.live ?? undefined}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden shrink-0 sm:block"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.shot}
                      alt={`${c.title} screenshot`}
                      loading="lazy"
                      width={144}
                      height={90}
                      className="thumb h-[90px] w-36 border border-line object-cover object-top"
                    />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* experience */}
      <section id="experience" className="mt-24">
        <SectionHead n="03" title="Experience" />
        <ul className="space-y-12">
          {experience.map((e) => (
            <li key={e.role}>
              <p className="mono text-xs text-ink-dim">{e.when}</p>
              <h3 className="mt-1 text-xl font-medium">
                {e.role}, <span className="italic text-gold">{e.org}</span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-ink-dim">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mono text-xs leading-6 text-gold">+</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mono mt-12 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-dim">{group}</p>
              <p className="mt-1 text-ink">{items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* terminal */}
      <section id="terminal" className="mt-24">
        <SectionHead n="04" title="Terminal" />
        <p className="mb-6 -mt-4 text-sm text-ink-dim">
          A real shell. Type <span className="mono text-gold">help</span> to look around.
        </p>
        <Terminal />
      </section>

      {/* footer */}
      <footer className="mono mt-24 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-6 text-xs text-ink-dim">
        <span>{new Date().getFullYear()} Abdulmajeed Tayyar</span>
        <a className="quiet" href={`mailto:${contact.email}`}>{contact.email}</a>
      </footer>
    </main>
  );
}
