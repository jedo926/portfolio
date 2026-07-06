"use client";

import { useEffect, useRef, useState } from "react";
import { projects, skills, contact, experience } from "@/lib/data";

type Entry = { cmd?: string; out: string[] };

const HELP = [
  "available commands:",
  "  help         this list",
  "  whoami       who is this guy",
  "  projects     the shipped stuff",
  "  stack        languages & tools",
  "  experience   where I've worked",
  "  cv           download the resume (pdf)",
  "  contact      reach me",
  "  github       open my profile",
  "  clear        wipe the screen",
];

const BANNER = [
  "abdulmajeed tayyar — interactive shell v1.0",
  'type "help" to look around. recruiters welcome.',
];

function run(raw: string): { out: string[]; action?: "clear" | "cv" | "github" } {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "":
      return { out: [] };
    case "help":
      return { out: HELP };
    case "whoami":
      return {
        out: [
          "abdulmajeed tayyar · full-stack & AI engineer · riyadh, sa",
          "currently: AI & full-stack intern @ trend micro",
          "previously: freelance for al-futtaim (M&S) and KSA ministry of education",
        ],
      };
    case "projects":
      return {
        out: projects.map((p) => `  ${p.name.padEnd(16)} ${p.desc.split(":")[0].split("—")[0].trim().slice(0, 58)}`),
      };
    case "stack":
      return {
        out: Object.entries(skills).map(([k, v]) => `  ${k.padEnd(11)} ${v.join(", ")}`),
      };
    case "experience":
      return {
        out: experience.flatMap((e) => [`  ${e.when} · ${e.role} — ${e.org}`]),
      };
    case "cv":
      return { out: ["opening resume.pdf ..."], action: "cv" };
    case "contact":
      return { out: [`  email   ${contact.email}`, `  github  ${contact.github}`, `  base    ${contact.location}`] };
    case "github":
      return { out: ["opening github.com/jedo926 ..."], action: "github" };
    case "clear":
      return { out: [], action: "clear" };
    case "sudo hire me":
      return { out: ["[sudo] permission granted. inbox: " + contact.email + " ✓"] };
    case "ls":
      return { out: ["projects/  experience/  skills/  resume.pdf"] };
    default:
      return { out: [`command not found: ${cmd} — try "help"`] };
  }
}

export default function Terminal() {
  const [history, setHistory] = useState<Entry[]>([{ out: BANNER }]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  const submit = () => {
    const { out, action } = run(input);
    if (action === "clear") {
      setHistory([]);
    } else {
      setHistory((h) => [...h, { cmd: input, out }]);
    }
    if (action === "cv") window.open(contact.cv, "_blank");
    if (action === "github") window.open(contact.github, "_blank");
    setInput("");
  };

  return (
    <div
      className="term flex h-105 flex-col text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 text-xs text-ink-dim">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3f3b32]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3f3b32]" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-dim" />
        <span className="ml-3">guest@tayyar — zsh</span>
      </div>
      <div ref={bodyRef} className="term-body flex-1 overflow-y-auto px-4 py-3">
        {history.map((e, i) => (
          <div key={i} className="mb-1.5">
            {e.cmd !== undefined && (
              <div>
                <span className="text-green">➜</span>{" "}
                <span className="text-ink-dim">~</span>{" "}
                <span className="text-ink">{e.cmd}</span>
              </div>
            )}
            {e.out.map((l, j) => (
              <div key={j} className="whitespace-pre-wrap text-ink-dim">
                {l}
              </div>
            ))}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-green">➜</span>
          <span className="text-ink-dim">~</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className="flex-1 bg-transparent text-ink caret-amber outline-none"
            aria-label="terminal input"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
