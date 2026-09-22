import Link from "next/link";

const platformMetrics = [
  { label: "Supported Curriculums", value: "CBC & IGCSE" },
  { label: "Learning Areas", value: "Core & Electives" },
  { label: "Practice Modules", value: "Interactive" },
  { label: "Access", value: "24/7 Digital Portal" },
];

const learningAreas = [
  {
    title: "Languages",
    category: "Communication",
    description:
      "Reading, writing, listening, speaking and expression developed through meaningful language experiences.",
    href: "/learning-areas/languages",
  },
  {
    title: "Mathematics",
    category: "Reasoning",
    description:
      "Numerical understanding, patterns, logical thinking and practical problem solving.",
    href: "/learning-areas/mathematics",
  },
  {
    title: "Science & Technology",
    category: "Discovery",
    description:
      "Scientific investigation, technology and practical exploration of the world around us.",
    href: "/learning-areas/science-technology",
  },
  {
    title: "Social Studies",
    category: "Society",
    description:
      "People, communities, citizenship, environment and understanding the wider world.",
    href: "/learning-areas/social-studies",
  },
];

const learningProcess = [
  {
    title: "Learn",
    description:
      "Understand concepts through clear explanations, examples and structured learning material.",
  },
  {
    title: "Practise",
    description:
      "Strengthen understanding through activities, exercises and practical tasks.",
  },
  {
    title: "Apply",
    description:
      "Use knowledge in meaningful situations and demonstrate what you have learned.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative border-b border-stone-200 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[660px] items-center py-20 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Digital learning platform
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-stone-950 md:text-7xl lg:text-[80px]">
                A better
                <br />
                foundation
                <br />
                for <span className="text-emerald-800">learning.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
                Msingi brings learning materials, activities and curriculum-aligned
                resources together in one structured environment for learners and the
                people supporting them.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/learning-areas"
                  className="inline-flex items-center gap-2 bg-emerald-950 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-emerald-800 shadow-sm"
                >
                  <span>Explore learning areas</span>
                  <span>&rarr;</span>
                </Link>

                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 border border-stone-300 px-7 py-4 text-sm font-semibold text-stone-900 transition-colors hover:border-emerald-700 hover:text-emerald-800 bg-white"
                >
                  Browse resources
                </Link>
              </div>
            </div>

            <div className="mt-16 lg:col-span-4 lg:mt-0">
              <div className="border-l border-emerald-900/15 pl-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  The platform objective
                </p>

                <p className="mt-6 text-2xl font-medium leading-9 tracking-[-0.025em] text-stone-900">
                  Learning should make <span className="text-emerald-800">knowledge useful.</span>
                </p>

                <p className="mt-6 text-sm leading-7 text-stone-600">
                  Study concepts, practise skills and apply what you know in
                  ways that support academic excellence and long-term growth.
                </p>

                <div className="mt-10 border-t border-stone-200 pt-5">
                  <span className="text-xs font-medium text-emerald-800/90">
                    Knowledge / Practice / Application
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="border-t border-stone-200 bg-stone-50/60 py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {platformMetrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    {metric.label}
                  </span>
                  <span className="mt-1 text-lg font-semibold tracking-tight text-stone-950">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Areas Section */}
      <section className="bg-stone-50/40">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Learning areas
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-stone-950">
                Explore what
                <br />
                you want to learn.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-stone-600">
                Content is organised around core academic disciplines,
                empowering learners to move smoothly from foundational theory
                to practical real-world application.
              </p>

              <Link
                href="/learning-areas"
                className="mt-8 inline-flex items-center gap-2 border-b border-emerald-900 pb-1 text-sm font-semibold text-emerald-900 transition-colors hover:text-emerald-700"
              >
                <span>View all learning areas</span>
                <span>&rarr;</span>
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-stone-300">
                {learningAreas.map((area) => (
                  <Link
                    key={area.title}
                    href={area.href}
                    className="group grid gap-6 border-b border-stone-300 py-9 transition-colors hover:bg-white px-4 md:grid-cols-12 md:items-center"
                  >
                    <div className="md:col-span-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                        {area.category}
                      </span>
                    </div>

                    <div className="md:col-span-7">
                      <h3 className="text-3xl font-semibold tracking-[-0.035em] text-stone-950 transition-colors group-hover:text-emerald-800">
                        {area.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600">
                        {area.description}
                      </p>
                    </div>

                    <div className="flex justify-start md:col-span-3 md:justify-end">
                      <span className="text-sm font-semibold text-stone-400 transition-all group-hover:text-emerald-700 flex items-center gap-1">
                        Explore <span>&rarr;</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="border-y border-stone-200 bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Educator perspective
          </p>
          <blockquote className="mt-8 text-2xl font-medium leading-relaxed tracking-[-0.02em] text-stone-900 md:text-4xl">
            &ldquo;Msingi bridges the gap between classroom theory and actionable skill development. It gives learners the structure they need to truly grasp concepts instead of just memorising facts.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-emerald-900 flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-stone-950">Academic Board</div>
              <div className="text-xs text-stone-500">Curriculum & Pedagogy Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories & Insights */}
      <section className="bg-stone-50/40">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Stories & insights
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-stone-950">
                Education, technology and stories worth following.
              </h2>

              <p className="mt-5 text-base leading-7 text-stone-600">
                Explore ideas and stories connecting learning with modern education,
                technology and the wider world.
              </p>
            </div>

            <Link
              href="/stories"
              className="inline-flex items-center gap-2 border-b border-emerald-900 pb-1 text-sm font-semibold text-emerald-900 transition-colors hover:text-emerald-700"
            >
              <span>View all stories</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-12">
            <Link
              href="/stories/education"
              className="group bg-emerald-950 p-10 text-white lg:col-span-7 lg:p-14 relative overflow-hidden transition-colors hover:bg-emerald-900"
            >
              <div className="flex min-h-[480px] flex-col justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Education Strategy
                  </p>

                  <h3 className="mt-24 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
                    Learning beyond
                    <br />
                    memorisation.
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-stone-300">
                    Explore how practical learning, critical reasoning and core
                    competencies help learners build lifelong capabilities.
                  </p>
                </div>

                <div className="border-t border-emerald-900/60 pt-6 text-sm font-semibold text-emerald-300 group-hover:text-white transition-colors flex items-center gap-2">
                  <span>Read story</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>

            <div className="grid gap-px bg-stone-300 lg:col-span-5">
              <Link
                href="/stories/technology"
                className="group bg-white p-9 transition-colors hover:bg-stone-50"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Technology
                </p>

                <h3 className="mt-12 text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-950 group-hover:text-emerald-800 transition-colors">
                  Technology shaping the next generation.
                </h3>

                <p className="mt-5 text-sm leading-7 text-stone-600">
                  Developments and innovations changing how people learn, work
                  and solve problems.
                </p>

                <div className="mt-10 border-t border-stone-200 pt-5 text-sm font-semibold text-stone-400 group-hover:text-emerald-700 flex items-center gap-1">
                  <span>Read story</span> <span>&rarr;</span>
                </div>
              </Link>

              <Link
                href="/stories/success"
                className="group bg-stone-50/80 p-9 transition-colors hover:bg-white"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Success stories
                </p>

                <h3 className="mt-12 text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-950 group-hover:text-emerald-800 transition-colors">
                  Young people building with technology.
                </h3>

                <p className="mt-5 text-sm leading-7 text-stone-600">
                  Stories of learners turning curiosity into projects,
                  experiments and practical solutions.
                </p>

                <div className="mt-10 border-t border-stone-200 pt-5 text-sm font-semibold text-stone-400 group-hover:text-emerald-700 flex items-center gap-1">
                  <span>Read story</span> <span>&rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="bg-white border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Learning approach
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-stone-950">
              Understand it. Work with it. Use it.
            </h2>

            <p className="mt-5 text-base leading-7 text-stone-600">
              Good learning is more than reading information. Msingi gives
              learners room to understand ideas, practise them and apply them directly.
            </p>
          </div>

          <div className="mt-14 border-t border-stone-300">
            {learningProcess.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-6 border-b border-stone-300 py-10 md:grid-cols-12 md:items-start group transition-colors hover:bg-stone-50/50 px-4"
              >
                <div className="md:col-span-2">
                  <span className="text-xs font-semibold text-emerald-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-3xl font-semibold tracking-[-0.035em] text-stone-950 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-6">
                  <p className="max-w-xl text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Start learning today
              </p>

              <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Give learning a stronger foundation.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm leading-7 text-stone-300">
                Explore learning areas and discover resources designed to
                support understanding, structured practice and real-world application.
              </p>

              <Link
                href="/learning-areas"
                className="mt-7 inline-flex items-center gap-2 border border-emerald-700 bg-emerald-900 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-emerald-800 shadow-sm"
              >
                <span>Explore learning areas</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}