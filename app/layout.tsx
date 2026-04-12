import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import { PiAddressBookLight } from "react-icons/pi";
import AsciiTextClient from "../components/AsciiTextClient";
import { SideLegoNav } from "../components/SideLegoNav";
import HomeFab from "../components/home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "曾柔綺的個人履歷",
  description: "曾柔綺數位名片",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 手機：讓 body 自然捲動；桌面：做 app shell */}
      <body className="min-h-full bg-lego-canvas lg:h-screen lg:overflow-hidden">
        <div className="min-h-screen lg:h-screen">
          {/* 手機直向堆疊；桌面左右兩欄 */}
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col lg:h-screen lg:flex-row">
            {/* 手機：變頂部區塊；桌面：左側固定欄 */}
            <aside
              className="w-full border-b border-black/10 bg-white/70 p-6 backdrop-blur
                lg:sticky lg:top-0 lg:h-screen lg:w-[320px] lg:overflow-y-auto lg:border-b-0 lg:border-r"
            >
              <div className="flex justify-center lg:justify-center">
                <Image
                  src="/her.jpg"
                  alt="profile"
                  width={128}
                  height={128}
                  priority
                  className="h-32 w-32 rounded-full border-[2px] border-gray object-cover"
                />
              </div>

              <div className="mt-4 flex justify-center">
                <div className="relative h-14 w-full overflow-hidden bg-transparent">
                  <AsciiTextClient
                    text="曾柔綺"
                    className="h-full w-full opacity-60"
                  />

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl font-black text-black drop-shadow-[0_2px_0_rgba(255,255,255,.9)]">
                      曾柔綺
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-1 text-center text-sm text-black/70">
                NCCU DCT ∴ TURK
                <br /> 完完全全的狗派
              </div>

              <div className="mt-4 flex justify-center gap-3 text-sm font-black text-black/70">
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  className="rounded-full border border-black/15 bg-white/60 px-3 py-1 transition-[filter,transform,background-color] hover:bg-white hover:brightness-125 active:translate-y-[1px] active:brightness-150"
                >
                  IG
                </Link>
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  className="rounded-full border border-black/15 bg-white/60 px-3 py-1 transition-[filter,transform,background-color] hover:bg-white hover:brightness-125 active:translate-y-[1px] active:brightness-150"
                >
                  FB
                </Link>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  className="rounded-full border border-black/15 bg-white/60 px-3 py-1 transition-[filter,transform,background-color] hover:bg-white hover:brightness-125 active:translate-y-[1px] active:brightness-150"
                >
                  GH
                </Link>
              </div>

              {/* 導覽：手機也顯示在頂部區塊的下方；桌面照常 */}
              <div className="mt-6">
                <SideLegoNav />
              </div>
            </aside>

            {/* 右側內容：手機正常捲動；桌面內部捲動 */}
            <main className="relative flex-1 p-6 lg:h-screen lg:overflow-y-auto lg:p-8">
              <HomeFab />
              {children}
              <div className="h-10" />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}