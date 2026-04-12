import Link from "next/link";
import StarBorder from "@/components/StarBorder";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  demo?: string;
  github?: string;
};

const PROJECTS: Project[] = [
  {
    title: "作品 01｜健康幣規劃",
    desc: "健習生UI及後台系統提案",
    tags: ["Figma"],
    demo: "https://docs.google.com/presentation/d/1UnIUtj80UZls90SjBZ2Q0E185yCWkG33/edit?slide=id.p1#slide=id.p1",
  },
  {
    title: "作品 02｜人機互動設計",
    desc: "消防防災E點通APP架構重繪",
    tags: ["UI/UX"],
    demo: "https://www.canva.com/design/DAG6hiA9Jl4/ZVdEQlyzYK3TWc-OfvbRAg/edit",
  },
  {
    title: "作品 03｜REELMATE",
    desc: "FOR 台灣人的影評網站",
    tags: ["Figma"],
    demo: "https://canva.link/4fcyyq8pnstgvzs",
  },
];

const formatTitle = (raw: string) => raw.replace(/\s*\|\s*/g, "｜");

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-black">作品集</h2>
    

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <StarBorder
              key={p.title}
              as="div"
              color="#2563eb"
              className="rounded-3xl transition
                ring-1 ring-blue-500/25 hover:ring-blue-500/40
                shadow-[0_12px_30px_-18px_rgba(37,99,235,0.60)]
                hover:shadow-[0_18px_44px_-20px_rgba(37,99,235,0.75)]"
            >
              <article
                className="relative rounded-3xl bg-white/70 p-6 backdrop-blur transition
                  hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="text-xl font-extrabold leading-tight tracking-tight text-zinc-900"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {formatTitle(p.title)}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {p.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border-2 border-black bg-yellow-300 px-4 py-2 text-sm font-black text-zinc-900
                        shadow-[0_2px_0_0_rgba(0,0,0,0.85)] transition
                        hover:bg-yellow-400 active:translate-y-[1px] active:shadow-[0_1px_0_0_rgba(0,0,0,0.85)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {p.demo && (
                    <Link
                      className="rounded-full border-2 border-black bg-red-600 px-5 py-2 text-sm font-black text-white
                        shadow-[0_2px_0_0_rgba(0,0,0,0.85)] transition
                        hover:bg-red-700 active:translate-y-[1px] active:shadow-[0_1px_0_0_rgba(0,0,0,0.85)]"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </Link>
                  )}

                  {p.github && (
                    <Link
                      className="rounded-full border-2 border-black bg-white px-5 py-2 text-sm font-black text-zinc-900
                        shadow-[0_2px_0_0_rgba(0,0,0,0.65)] transition
                        hover:bg-zinc-50 active:translate-y-[1px] active:shadow-[0_1px_0_0_rgba(0,0,0,0.65)]"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </article>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  );
}