"use client";

import { useEffect, useState } from "react";

const LINES = [
  "full-stack & AI engineer",
  "RAG pipelines & LLM firewalls",
  "computer vision that watches back",
  "ships to production, end to end",
];

export default function Typer() {
  const [text, setText] = useState("");

  useEffect(() => {
    let line = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = LINES[line];
      if (!deleting) {
        char++;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(tick, 2000);
          return;
        }
        timer = setTimeout(tick, 55 + Math.random() * 45);
      } else {
        char--;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          line = (line + 1) % LINES.length;
        }
        timer = setTimeout(tick, 28);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="text-amber">
      {text}
      <span className="cursor-block ml-1" aria-hidden />
    </span>
  );
}
