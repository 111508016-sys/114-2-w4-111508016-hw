"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type Key = "about" | "hobby" | "project";

const ITEMS: { key: Key; href: string; label: string; cls: string }[] = [
  { key: "about", href: "/about", label: "關於我", cls: "bg-blue-400" },
  { key: "hobby", href: "/hobby", label: "我的興趣", cls: "bg-yellow-200" },
  { key: "project", href: "/project", label: "我的專案", cls: "bg-red-400" },
];

export function SideLegoNav() {
  const pathname = usePathname();
  const initialActive = useMemo<Key | null>(() => {
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/hobby")) return "hobby";
    if (pathname.startsWith("/project")) return "project";
    return null;
  }, [pathname]);

  const [splitKey, setSplitKey] = useState<Key | null>(initialActive);

  return (
    <nav className="mt-8">
      {/* 外框：一整塊積木 */}
      <div className="rounded-xl border border-black/15 bg-white/40 p-2">
        {/* 拼在一起用 divide；分開就不要 divide（避免線條怪） */}
        <div className={splitKey === null ? "divide-y-2 divide-black/70" : ""}>
          {ITEMS.map((it) => {
            const isFocus = splitKey === it.key;
            const isSplit = splitKey !== null;

            return (
              <Link
                key={it.key}
                href={it.href}
                onClick={() => setSplitKey(it.key)}
                className={[
                  "block w-full px-4 py-3 font-black text-black/80",
                  "transition-[margin,box-shadow,outline,transform] duration-200",
                  it.cls,

                  // 拼在一起：沒有圓角、沒有縫
                  !isSplit ? "rounded-none my-0" : "rounded-xl my-2",

                  
                  isFocus
                    ? "outline outline-2 outline-black/70 shadow-[0_6px_0_rgba(0,0,0,.10)]"
                    : "outline outline-0 shadow-none",

                 
                  "active:translate-y-[2px]",
                ].join(" ")}
              >
                {it.label}
              </Link>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setSplitKey(null)}
        className="mt-3 text-xs font-black text-black/50 hover:text-black/70"
      >
        
      </button>
    </nav>
  );
}