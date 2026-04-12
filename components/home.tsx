"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeFab() {
  const pathname = usePathname();

  // 在首頁就不顯示（避免重複按鈕）
  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      aria-label="返回首頁"
      className="fixed bottom-6 right-6 z-50 rounded-full border-2 border-black bg-blue-500 px-4 py-2 text-sm font-black text-zinc-900
        shadow-[0_2px_0_0_rgba(0,0,0,0.75)] transition
        hover:bg-yellow-400 active:translate-y-[1px] active:shadow-[0_1px_0_0_rgba(0,0,0,0.75)]"
    >
      返回首頁
    </Link>
  );
}