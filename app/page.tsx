export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-lego-canvas">
      <div className="mx-auto flex h-screen max-w-6xl">
        {/* 左側固定 */}
        <aside className="sticky top-0 h-screen w-[320px] overflow-y-auto border-r border-black/10 bg-white/70 p-6 backdrop-blur">
          <div className="text-xl font-black">曾柔綺</div>
          <div className="mt-1 text-sm text-black/70">數位內容與科技雙主修</div>

          
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="lego-mini-brick bg-red-500" />
            <div className="lego-mini-brick bg-yellow-400" />
            <div className="lego-mini-brick bg-blue-500" />
            <div className="lego-mini-brick bg-green-500" />
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full rounded-xl border-2 border-black bg-blue-500 px-4 py-3 font-black text-white shadow-[0_10px_0_rgba(0,0,0,.18)] active:translate-y-[6px] active:shadow-[0_4px_0_rgba(0,0,0,.18)]">
              關於我
            </button>

            <button className="w-full rounded-xl border-2 border-black bg-yellow-400 px-4 py-3 font-black text-black shadow-[0_10px_0_rgba(0,0,0,.18)] active:translate-y-[6px] active:shadow-[0_4px_0_rgba(0,0,0,.18)]">
              我的興趣
            </button>

            <button className="w-full rounded-xl border-2 border-black bg-red-500 px-4 py-3 font-black text-white shadow-[0_10px_0_rgba(0,0,0,.18)] active:translate-y-[6px] active:shadow-[0_4px_0_rgba(0,0,0,.18)]">
              我的專案
            </button>
          </div>
        </aside>


        {/* 右側可滾動 */}
        <section className="h-screen flex-1 overflow-y-auto p-8">
          <h1 className="text-3xl font-black">右側內容（可滾動）</h1>
          <p className="mt-2 text-black/70">
            往下滑右邊會滾動，但左側會固定不動。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <article
                key={i}
                className="rounded-2xl border-2 border-black bg-white/80 p-5 shadow-[0_10px_0_rgba(0,0,0,.18)]"
              >
                <div className="font-black">作品卡片 #{i + 1}</div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="lego-mini-brick bg-yellow-400" />
                  <div className="lego-mini-brick bg-blue-500" />
                </div>
              </article>
            ))}
          </div>

          <div className="h-10" />
        </section>
      </div>
    </main>
  );
}