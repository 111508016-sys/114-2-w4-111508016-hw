"use client";

import { useState } from "react";

type Key = "ig" | "fb" | "gh";

const LINKS: { key: Key; label: string; href: string }[] = [
  { key: "ig", label: "IG", href: "https://instagram.com/" },
  { key: "fb", label: "FB", href: "https://facebook.com/" },
  { key: "gh", label: "GH", href: "https://github.com/" },
];

export function SocialLinks() {
  const [flash, setFlash] = useState<Key | null>(null);

  const base =
    "rounded-full border border-black/15 bg-white/60 px-3 py-1 text-sm font-black text-black/70 " +
    "transition-[filter,transform,background-color] duration-150 " +
    "hover:bg-white hover:brightness-110 active:brightness-125 active:translate-y-[1px]";

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, k: Key, href: string) {
    e.preventDefault();

    setFlash(k);

    // 讓動畫先跑一下再開新分頁（保證看得到）
    window.setTimeout(() => {
      setFlash(null);
      window.open(href, "_blank", "noopener,noreferrer");
    }, 120);
  }

  return (
    <div className="mt-4 flex justify-center gap-3">
      {LINKS.map((l) => (
        <a
        key={l.key}
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => handleClick(e, l.key, l.href)}
        className={base}
        style={flash === l.key ? { animation: "flash .55s ease-in-out 1" } : undefined}
      >
        {l.label}
      </a>
      ))}

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