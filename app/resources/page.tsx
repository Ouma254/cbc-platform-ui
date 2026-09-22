import Link from "next/link";

const resources = [
  {
    title: "Learning Notes",
    description:
      "Structured notes that help learners understand concepts and revise important ideas clearly.",
    category: "Notes",
  },
  {
    title: "Learning Activities",
    description:
      "Practical activities that allow learners to apply ideas and develop useful, real-world skills.",
    category: "Activities",
  },
  {
    title: "Assessments",
    description:
      "Exercises and assessment materials for checking understanding, testing knowledge, and tracking progress.",
    category: "Assessment",
  },
  {
    title: "Reference Materials",
    description:
      "Additional material and handbooks for learners who want to explore topics further.",
    category: "Reference",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-stone-200/80 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Resources Hub
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-stone-950 md:text-7xl">
                <span className="block">Everything you need</span>
                <span className="block text-emerald-800">to keep learning.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-stone-600 font-normal">
                Find notes, activities, assessments, and supporting materials
                organised precisely for easier learning and revision.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl shadow-stone-950/5">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop"
                  alt="Student studying with digital resources"
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Curated Materials</p>
                  <p className="text-sm font-medium mt-0.5">Designed for deep mastery and practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resources Grid */}
      <section className="bg-stone-50/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {resources.map((resource, index) => {
              const isDark = index === 1;

              return (
                <Link
                  key={resource.title}
                  href="/learning-areas"
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isDark
                      ? "border-stone-900 bg-stone-950 text-white hover:border-emerald-500/50 shadow-stone-950/20"
                      : "border-stone-200/80 bg-white text-stone-950 hover:border-emerald-500/40 shadow-stone-900/5"
                  }`}
                >
                  <div className="flex h-full flex-col justify-between p-8 md:p-10">
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                          isDark
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                            : "border-emerald-500/30 bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {resource.category}
                      </span>

                      <h2 className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight">
                        {resource.title}
                      </h2>

                      <p
                        className={`mt-4 max-w-lg text-sm md:text-base leading-7 ${
                          isDark ? "text-stone-300" : "text-stone-600"
                        }`}
                      >
                        {resource.description}
                      </p>
                    </div>

                    <div className="mt-12 pt-6 border-t border-stone-200/10 flex items-center justify-between">
                      <span className={`text-sm font-semibold transition-colors ${
                        isDark ? "text-white group-hover:text-emerald-400" : "text-stone-950 group-hover:text-emerald-700"
                      }`}>
                        Browse resources
                      </span>
                      <span className={`transition-transform duration-300 group-hover:translate-x-1 ${
                        isDark ? "text-emerald-400" : "text-emerald-700"
                      }`}>
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="border-t border-stone-200/80 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center bg-stone-50/80 border border-stone-200/80 rounded-3xl p-8 md:p-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Continue learning
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
                Ready to dive into a specific learning area?
              </h2>
              <p className="mt-2 text-sm text-stone-600 max-w-xl">
                Explore our full catalogue of subjects tailored for complete curriculum comprehension and practical revision.
              </p>
            </div>

            <Link
              href="/learning-areas"
              className="group inline-flex items-center gap-3 rounded-full bg-emerald-700 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition-all duration-300 hover:bg-emerald-600 hover:translate-x-0.5 whitespace-nowrap"
            >
              <span>View learning areas</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}