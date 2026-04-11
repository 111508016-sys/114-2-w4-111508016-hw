"use client";

type Project = { title: string; cover: string };

const PROJECTS: Project[] = [
  { title: "作品 1", cover: "/IMG_1924.JPG" },
  { title: "作品 2", cover: "/IMG_4254.JPG" },
  { title: "作品 3", cover: "/IMG_7028.JPG" },
  { title: "作品 4", cover: "/IMG_8292.JPG" },
  { title: "作品 5", cover: "/her.jpg" },
  { title: "作品 6", cover: "/2.jpg" },
];

export default function GarageGrid() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-black">車庫作品集</h2>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="group relative h-56 overflow-hidden rounded-2xl border border-black/15 bg-center bg-cover"
            style={{ backgroundImage: `url(${p.cover})` }}
          >
            {/* 車庫門（hover 打開） */}
            <div className="absolute inset-0 origin-top transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-[72%]">
              <div className="h-full w-full bg-gradient-to-b from-zinc-200 to-zinc-300" />
              <div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(to_bottom,rgba(0,0,0,.25)_0,rgba(0,0,0,.25)_1px,transparent_10px,transparent_22px)]" />
              <div className="absolute bottom-6 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full bg-black/25" />
            </div>

            {/* 底部標題條 */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/45 backdrop-blur-sm">
              <div className="flex h-full items-center justify-center px-4 text-center text-white font-black">
                {p.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}