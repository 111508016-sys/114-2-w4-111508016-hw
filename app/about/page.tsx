import { HomePhotoTrail } from "@/components/HomePhotoTrail";

export default function Home() {
  return (
    <>
      {/* 其他區塊... */}

      <section id="about" className="relative overflow-hidden py-24">
        {/* 這行就是把 trail 限制在 about 區塊 */}
        <HomePhotoTrail />

        <div className="relative z-20 mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-black">關於我</h2>
          <p className="mt-4 text-lg text-zinc-700">
            ...
          </p>
        </div>
      </section>

      {/* 其他區塊... */}
    </>
  );
}