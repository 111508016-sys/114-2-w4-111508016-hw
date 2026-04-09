import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-lego-canvas">
      <div className="mx-auto flex h-screen max-w-6xl">
        {/* 左側固定 */}
        <aside className="sticky top-0 h-screen w-[320px] overflow-y-auto border-r border-black/10 bg-white/70 p-6 backdrop-blur">
          <div className="text-xl font-black">曾柔綺</div>
          <div className="mt-1 text-sm text-black/70">政大數位內容與科技雙主修</div>
          <div className="mt-1 text-sm text-black/70"> </div>

          <div className="mt-6 text-sm font-extrabold">LEGO 區塊</div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="lego-mini-brick bg-lego-red" />
            <div className="lego-mini-brick bg-lego-yellow" />
            <div className="lego-mini-brick bg-lego-blue" />
            <div className="lego-mini-brick bg-lego-green" />
          </div>

          <div className="mt-8 space-y-2">
            <button className="w-full rounded-xl border-2 border-black bg-white px-4 py-3 font-black">
              我的興趣
            </button>
            <button className="w-full rounded-xl border-2 border-black bg-white px-4 py-3 font-black">
              設計專案
            </button>
            <button className="w-full rounded-xl border-2 border-black bg-white px-4 py-3 font-black">
              程式專案
            </button>
          </div>
        </aside>

        {/* 右側滾動 */}
        <section className="h-screen flex-1 overflow-y-auto p-8">
          <h1 className="text-3xl font-black">右側內容（可滾動）</h1>
          <p className="mt-2 text-black/70">
            右邊放作品、文章、時間軸都可以。往下滑會發現左側固定不動。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="rounded-2xl border-2 border-black bg-white/80 p-5">
                <div className="font-black">作品卡片 #{i + 1}</div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="lego-mini-brick bg-lego-yellow" />
                  <div className="lego-mini-brick bg-lego-blue" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}