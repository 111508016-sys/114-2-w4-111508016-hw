"use client";

import { useState } from "react";

const COLORS = [
  { name: "red", cls: "bg-red-500" },
  { name: "yellow", cls: "bg-yellow-300" },
  { name: "blue", cls: "bg-blue-600" },
  { name: "green", cls: "bg-green-600" },
  { name: "gray", cls: "bg-zinc-300" },
];

export function ColorBar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mb-6 flex w-full items-center gap-3">
      {COLORS.map((c) => {
        const isActive = active === c.name;

        return (
          <button
            key={c.name}
            type="button"
            onClick={() => setActive(c.name)}
            className={[
              "h-10 w-10 rounded-md border-[3px] border-black",
              "transition-transform",
              c.cls,
              isActive
                ? "animate-[flash_.55s_ease-in-out_1] translate-y-1"
                : "hover:-translate-y-0.5 active:translate-y-1",
            ].join(" ")}
            aria-label={c.name}
          />
        );
      })}

      <style jsx>{`
        @keyframes flash {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.8);
          }
        }
      `}</style>
    </div>
  );
}