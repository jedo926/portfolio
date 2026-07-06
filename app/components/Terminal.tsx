"use client";

import { useEffect, useRef, useState } from "react";
import { projects, skills, contact, experience } from "@/lib/data";

type Entry = { cmd?: string; out: string[] };

const HELP = [
  "available commands:",
  "  help         this list",
  "  whoami       who is this guy",
  "  projects     the shipped stuff",
  "  stack        languages and tools",
  "  experience   where I have worked",
  "  cv           download the resume (pdf)",
  "  contact      reach me",
  "  github       open my profile",
  "  clear        wipe the screen",
];

const BANNER = ["abdulmajeed tayyar, interactive shell", 'type "help" to look around.'];

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
          "abdulmajeed tayyar, full-stack and AI engineer, riyadh",
          "currently: AI and full-stack intern at trend micro",
          "previously: freelance for al-futtaim (M&S) and KSA ministry of education",
        ],
      };
    case "projects":
      return {
        out: projects.map((p) => `  ${p.name.padEnd(16)} ${p.desc.split(":")[0].split(",")[0].trim().slice(0, 58)}`),
      };
    case "stack":
      return {
        out: Object.entries(skills).map(([k, v]) => `  ${k.padEnd(11)} ${v.join(", ")}`),
      };
    case "experience":
      return {
        out: experience.map((e) => `  ${e.when}: ${e.role}, ${e.org}`),
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
      return { out: ["[sudo] permission granted. inbox: " + contact.email] };
    case "ls":
      return { out: ["projects/  experience/  skills/  resume.pdf"] };
    default:
      return { out: [`command not found: ${cmd}. try "help"`] };
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
      className="mono cursor-text border border-line text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={bodyRef} className="term-body h-80 overflow-y-auto p-4">
        {history.map((e, i) => (
          <div key={i} className="mb-1.5">
            {e.cmd !== undefined && (
              <div>
                <span className="text-gold">&gt;</span>{" "}
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
          <span className="text-gold">&gt;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className="flex-1 bg-transparent text-ink outline-none"
            style={{ caretColor: "var(--gold)" }}
            aria-label="terminal input"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
