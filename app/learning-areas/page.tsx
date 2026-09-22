import Link from "next/link";

const secondaryAreas = [
  {
    title: "Languages",
    category: "Communication",
    description:
      "Reading, writing, listening, speaking and expression developed through meaningful language experiences.",
    href: "/learning-areas/languages",
    style: "white",
  },
  {
    title: "Mathematics",
    category: "Reasoning",
    description:
      "Numerical understanding, patterns, logical thinking and practical problem solving.",
    href: "/learning-areas/mathematics",
    style: "stone",
  },
  {
    title: "Social Studies",
    category: "Society",
    description:
      "People, communities, citizenship, environment and understanding the wider world.",
    href: "/learning-areas/social-studies",
    style: "white",
  },
  {
    title: "Creative Arts",
    category: "Expression",
    description:
      "Creativity, artistic expression, design and appreciation.",
    href: "/learning-areas/creative-arts",
    style: "dark",
  },
];

export default function LearningAreasPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-stone-200/80 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 animate-[fadeIn_0.8s_ease-out]">
            Learning areas
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] text-stone-950 md:text-7xl">
            <span className="block animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
              Explore the foundations
            </span>
            <span className="block animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_both] text-emerald-800">
              of learning.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600 animate-[fadeIn_1s_ease-out_0.4s_both]">
            Discover structured learning areas designed to help learners
            understand ideas, practise skills and connect knowledge with the
            world around them.
          </p>
        </div>
      </section>

      {/* Featured areas */}
      <section className="bg-stone-50/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Featured */}
            <Link
              href="/learning-areas/science-technology"
              className="group relative overflow-hidden rounded-3xl bg-stone-950 p-10 text-white lg:col-span-7 lg:p-14 shadow-xl shadow-stone-950/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-950/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex min-h-[520px] flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Featured area
                  </div>

                  <h2 className="mt-20 max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                    Science &
                    <br />
                    Technology
                  </h2>

                  <p className="mt-7 max-w-md text-sm leading-7 text-stone-300/90 font-normal">
                    Investigate the world around you, understand scientific
                    ideas and explore how technology can be used to solve
                    problems.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-stone-800/80 pt-6">
                  <span className="text-sm font-semibold tracking-wide text-stone-300 transition-colors group-hover:text-emerald-400">
                    Explore area
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-800 bg-stone-900 transition-all duration-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </div>
            </Link>

            {/* Side areas */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <Link
                href="/learning-areas/languages"
                className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-stone-900/5"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Communication
                  </span>

                  <h2 className="mt-8 text-3xl font-semibold tracking-[-0.035em] text-stone-950 transition-colors group-hover:text-emerald-900">
                    Languages
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-7 text-stone-600">
                    Reading, writing, listening, speaking and expression.
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-stone-100 pt-5">
                  <span className="text-sm font-semibold text-stone-500 transition-colors group-hover:text-emerald-700">
                    Explore
                  </span>
                  <span className="font-medium text-stone-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-700">
                    →
                  </span>
                </div>
              </Link>

              <Link
                href="/learning-areas/mathematics"
                className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-stone-900/5"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Reasoning
                  </span>

                  <h2 className="mt-8 text-3xl font-semibold tracking-[-0.035em] text-stone-950 transition-colors group-hover:text-emerald-900">
                    Mathematics
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-7 text-stone-600">
                    Logic, patterns, numerical understanding and problem solving.
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-stone-100 pt-5">
                  <span className="text-sm font-semibold text-stone-500 transition-colors group-hover:text-emerald-700">
                    Explore
                  </span>
                  <span className="font-medium text-stone-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-700">
                    →
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Lower areas */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {secondaryAreas.slice(2).map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-9 md:p-10 transition-all duration-300 hover:-translate-y-1 shadow-sm ${
                  area.style === "dark"
                    ? "bg-stone-950 text-white shadow-xl shadow-stone-950/10 hover:shadow-2xl hover:shadow-stone-950/20"
                    : "border border-stone-200/80 bg-white hover:border-emerald-500/30 hover:shadow-xl hover:shadow-stone-900/5"
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      area.style === "dark"
                        ? "text-emerald-400"
                        : "text-emerald-700"
                    }`}
                  >
                    {area.category}
                  </span>

                  <h2
                    className={`mt-8 text-3xl font-semibold tracking-[-0.035em] transition-colors ${
                      area.style === "dark"
                        ? "text-white group-hover:text-emerald-300"
                        : "text-stone-950 group-hover:text-emerald-900"
                    }`}
                  >
                    {area.title}
                  </h2>

                  <p
                    className={`mt-3 max-w-lg text-sm leading-7 ${
                      area.style === "dark"
                        ? "text-stone-300/90"
                        : "text-stone-600"
                    }`}
                  >
                    {area.description}
                  </p>
                </div>

                <div
                  className={`mt-10 flex items-center justify-between border-t pt-5 ${
                    area.style === "dark"
                      ? "border-stone-800"
                      : "border-stone-100"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      area.style === "dark"
                        ? "text-stone-300 group-hover:text-emerald-400"
                        : "text-stone-500 group-hover:text-emerald-700"
                    }`}
                  >
                    Explore area
                  </span>
                  <span
                    className={`transition-all duration-300 group-hover:translate-x-1 ${
                      area.style === "dark"
                        ? "text-stone-400 group-hover:text-emerald-400"
                        : "text-stone-400 group-hover:text-emerald-700"
                    }`}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-stone-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Across every area
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-stone-950">
              Knowledge becomes stronger through use.
            </h2>

            <p className="mt-5 text-base leading-7 text-stone-600">
              Each learning area is designed to give learners opportunities to
              understand concepts, practise their skills and apply what they
              know.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}