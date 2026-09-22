import Link from "next/link";

const stories = [
  {
    category: "CBC & Education",
    title: "Learning beyond memorisation in Kenyan classrooms",
    description:
      "How competency-based approaches across Kenya are empowering learners to apply practical skills, critical thinking, and real-world problem solving.",
    style: "light",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "East African Tech",
    title: "Technology shaping the next generation in Silicon Savannah",
    description:
      "Exploring how digital infrastructure, mobile innovation, and local tech hubs are transforming education and career pathways from Nairobi to the world.",
    style: "dark",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Global Impact",
    title: "Young innovators building solutions for local communities",
    description:
      "Inspiring stories of students and educators turning curiosity into tangible projects, agricultural tech experiments, and community solutions.",
    style: "soft",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
];

export default function StoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-stone-200/80 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Stories &amp; Insights &bull; Kenya &amp; Global
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-stone-950 md:text-7xl">
                <span className="block">Local roots, global vision</span>
                <span className="block text-emerald-800">for modern education.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-stone-600 font-normal">
                Following developments in education, technology, and learning through
                groundbreaking stories from classrooms in Kenya, East Africa, and across the globe.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl shadow-stone-950/5">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  alt="Students and innovators collaborating"
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">East African Innovation</p>
                  <p className="text-sm font-medium mt-0.5">Empowering learners for tomorrow&apos;s economy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid Section */}
      <section className="bg-stone-50/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {stories.map((story) => {
              const isDark = story.style === "dark";
              const isSoft = story.style === "soft";

              return (
                <article
                  key={story.title}
                  className={`group relative overflow-hidden rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isDark
                      ? "border-stone-900 bg-stone-950 text-white hover:border-emerald-500/50 shadow-stone-950/20"
                      : isSoft
                        ? "border-stone-200/80 bg-stone-100/70 text-stone-950 hover:border-emerald-500/40 shadow-stone-900/5"
                        : "border-stone-200/80 bg-white text-stone-950 hover:border-emerald-500/40 shadow-stone-900/5"
                  }`}
                >
                  <div>
                    {/* Story Thumbnail */}
                    <div className="relative h-48 w-full overflow-hidden border-b border-stone-200/10">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                            isDark
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                              : "border-emerald-500/30 bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          {story.category}
                        </span>
                        <span className={`text-xs ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                          {story.readTime}
                        </span>
                      </div>

                      <h2 className="mt-6 text-2xl font-semibold leading-snug tracking-tight">
                        {story.title}
                      </h2>

                      <p
                        className={`mt-4 text-sm leading-7 ${
                          isDark ? "text-stone-300" : "text-stone-600"
                        }`}
                      >
                        {story.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 pt-0">
                    <Link
                      href="#"
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                        isDark ? "text-white group-hover:text-emerald-400" : "text-stone-950 group-hover:text-emerald-700"
                      }`}
                    >
                      <span>Read story</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* From Msingi Vision Note */}
      <section className="border-t border-stone-200/80 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-stone-50/80 border border-stone-200/80 rounded-3xl p-8 md:p-12 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              From Msingi
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
              Connecting Kenyan potential with global opportunities.
            </h2>

            <p className="mt-4 text-sm md:text-base leading-7 text-stone-600">
              Msingi brings together educational developments, technological breakthroughs, and authentic case studies from local and international ecosystems—turning learning into lifelong action.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}