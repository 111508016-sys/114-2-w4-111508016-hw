"use client";

type Field = { label: string; value: string; span?: "full" };

const FIELDS: Field[] = [
  { label: "生日", value: "2003.11.10" },
  { label: "MBTI", value: "INFP" },
  { label: "星座", value: "天蠍" },
  { label: "喜歡的團體", value: "THE 1975 / TWICE" },
  { label: "興趣", value: "電影 / 樂高 / 音樂" },
  { label: "正在學習", value: "Next.js " },
  { label: "想說的話", value: "#不想延畢 #不想考延 #不想實習 ", span: "full" },
];

export default function AboutCard() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* 外卡：樂高藍陰影 + 淡藍外光 */}
      <div
        className="relative overflow-hidden rounded-[28px] border-2 border-black/10 bg-[#F3F4F6]
        shadow-[0_18px_60px_rgba(37,99,235,0.22)]
        ring-1 ring-blue-500/20"
      >
        {/* 塑膠高光（讓它比較像積木表面） */}
        <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.85),transparent_55%)]" />

        {/* 紙張紋理 + 淡格線 */}
        <div className="pointer-events-none absolute inset-0 opacity-35 [background:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:100%_28px]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,.06)_1px,transparent_0)] [background-size:18px_18px]" />

        {/* 左側洞洞邊（改灰色系，更好搭右側彩色格） */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-zinc-200" />
        <div className="pointer-events-none absolute left-3 top-8 h-[calc(100%-64px)] w-[22px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="mb-6 h-5 w-5 rounded-full bg-zinc-50 shadow-[inset_0_2px_0_rgba(0,0,0,0.10)]"
            />
          ))}
        </div>

        {/* 上方膠帶（樂高色：黃/紅） */}
        <div className="pointer-events-none absolute left-16 top-4 h-8 w-40 rotate-[-3deg] rounded-xl bg-yellow-300/85 shadow-[0_6px_18px_rgba(0,0,0,0.08)] backdrop-blur" />
        <div className="pointer-events-none absolute right-8 top-6 h-7 w-28 rotate-[4deg] rounded-xl bg-red-300/75 shadow-[0_6px_18px_rgba(0,0,0,0.08)] backdrop-blur" />

        <div className="relative grid gap-6 p-6 pl-16 md:grid-cols-[280px,1fr]">
          {/* 左：照片貼紙 */}
          <div className="relative">
            <div className="absolute -left-2 -top-2 rotate-[-6deg] rounded-full bg-white px-3 py-1 text-xs font-black text-zinc-700 shadow-sm">
              about me
            </div>

            <div
              className="cursor-target rounded-[22px] border-2 border-black/10 bg-white/80 p-4
              shadow-[0_12px_26px_-18px_rgba(37,99,235,0.45)]"
            >
              <div className="cursor-target h-[200px] w-[200px] overflow-hidden rounded-[18px] border-2 border-black/10 bg-zinc-200">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(/IMG_4472.JPG)` }}
                />
              </div>

              <div className="mt-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-black shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  我是誰
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 text-zinc-700">
                  政治大學四年級土耳其語文學系
                  <br />
                  登山隊隊員(消聲匿跡中)
                </p>
              </div>
            </div>
          </div>

          {/* 右：資料格（彩色貼紙） */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="col-span-2 mb-1 flex items-center gap-2 sm:col-span-3">
            <div className="col-span-2 mb-1 flex items-center gap-2 sm:col-span-3">
  <div className="rounded-full border-2 border-black/10 bg-white-200 px-4 py-2 text-sm font-black text-zinc-900
    shadow-[0_2px_0_0_rgba(0,0,0,0.35)]"
  >
    個人小檔案
  </div>
</div>
              <div className="text-xs font-semibold text-zinc-600"></div>
            </div>

            {FIELDS.map((f, i) => (
              <div
                key={i}
                className={[
                  "cursor-target relative rounded-[20px] border-2 border-black/10 p-3 transition",
                  i % 3 === 0
                    ? "bg-yellow-100"
                    : i % 3 === 1
                      ? "bg-red-100"
                      : "bg-sky-100",
                  "shadow-[0_10px_22px_-18px_rgba(37,99,235,0.35)] hover:-translate-y-[2px]",
                  f.span === "full" ? "col-span-2 sm:col-span-3" : "",
                ].join(" ")}
              >
                <div className="cursor-target text-[11px] font-black text-zinc-600">
                  {f.label}
                </div>

                <div className="mt-2 h-[2px] w-full rounded-full bg-zinc-900/10" />

                <div className="mt-2 text-sm font-black text-zinc-900">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}