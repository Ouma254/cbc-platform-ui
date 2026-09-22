import Link from "next/link";

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
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[680px] items-center py-24 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                Digital learning platform
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-stone-950 md:text-7xl lg:text-[82px]">
                A better
                <br />
                foundation
                <br />
                for learning.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
                Msingi brings learning materials, activities and resources
                together in one structured environment for learners and the
                people supporting them.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/learning-areas"
                  className="bg-stone-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
                >
                  Explore learning areas
                </Link>

                <Link
                  href="/resources"
                  className="border border-stone-300 px-6 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:border-stone-950"
                >
                  Browse resources
                </Link>
              </div>
            </div>

            <div className="mt-16 lg:col-span-4 lg:mt-0">
              <div className="border-l border-stone-300 pl-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                  The platform
                </p>

                <p className="mt-6 text-2xl font-medium leading-9 tracking-[-0.025em] text-stone-900">
                  Learning should make knowledge useful.
                </p>

                <p className="mt-6 text-sm leading-7 text-stone-600">
                  Study concepts, practise skills and apply what you know in
                  ways that support continued growth.
                </p>

                <div className="mt-10 border-t border-stone-200 pt-5">
                  <span className="text-xs text-stone-400">
                    Learning through knowledge, practice and application.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                Learning areas
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-stone-950">
                Explore what
                <br />
                you want to learn.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-stone-600">
                Learning content is organised around meaningful areas of
                knowledge, helping learners move from understanding to
                practical application.
              </p>

              <Link
                href="/learning-areas"
                className="mt-8 inline-block border-b border-stone-900 pb-1 text-sm font-semibold text-stone-900"
              >
                View all learning areas
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-stone-300">
                {learningAreas.map((area) => (
                  <Link
                    key={area.title}
                    href={area.href}
                    className="group grid gap-6 border-b border-stone-300 py-9 transition-colors md:grid-cols-12 md:items-center"
                  >
                    <div className="md:col-span-2">
                      <span className="text-xs font-medium text-stone-400">
                        {area.category}
                      </span>
                    </div>

                    <div className="md:col-span-7">
                      <h3 className="text-3xl font-semibold tracking-[-0.035em] text-stone-950 transition-colors group-hover:text-stone-600">
                        {area.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600">
                        {area.description}
                      </p>
                    </div>

                    <div className="flex justify-start md:col-span-3 md:justify-end">
                      <span className="text-sm font-semibold text-stone-400 transition-colors group-hover:text-stone-950">
                        Explore →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                Stories & insights
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-stone-950">
                Education, technology and stories worth following.
              </h2>

              <p className="mt-5 text-base leading-7 text-stone-600">
                Explore ideas and stories connecting learning with education,
                technology and the wider world.
              </p>
            </div>

            <Link
              href="/stories"
              className="border-b border-stone-900 pb-1 text-sm font-semibold text-stone-900"
            >
              View all stories
            </Link>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-12">
            <Link
              href="/stories/education"
              className="group bg-stone-950 p-10 text-white lg:col-span-7 lg:p-14"
            >
              <div className="flex min-h-[480px] flex-col justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Education
                  </p>

                  <h3 className="mt-24 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
                    Learning beyond
                    <br />
                    memorisation.
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-stone-300">
                    Explore how practical learning, problem solving and
                    application can help learners develop knowledge they can
                    use.
                  </p>
                </div>

                <div className="border-t border-stone-800 pt-6 text-sm font-semibold">
                  Read story →
                </div>
              </div>
            </Link>

            <div className="grid gap-px bg-stone-300 lg:col-span-5">
              <Link
                href="/stories/technology"
                className="group bg-white p-9 transition-colors hover:bg-stone-100"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                  Technology
                </p>

                <h3 className="mt-12 text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-950">
                  Technology shaping the next generation.
                </h3>

                <p className="mt-5 text-sm leading-7 text-stone-600">
                  Developments and innovations changing how people learn, work
                  and solve problems.
                </p>

                <div className="mt-10 border-t border-stone-200 pt-5 text-sm font-semibold text-stone-400 group-hover:text-stone-950">
                  Read story →
                </div>
              </Link>

              <Link
                href="/stories/success"
                className="group bg-stone-100 p-9 transition-colors hover:bg-white"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                  Success stories
                </p>

                <h3 className="mt-12 text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-950">
                  Young people building with technology.
                </h3>

                <p className="mt-5 text-sm leading-7 text-stone-600">
                  Stories of learners turning curiosity into projects,
                  experiments and practical solutions.
                </p>

                <div className="mt-10 border-t border-stone-300 pt-5 text-sm font-semibold text-stone-400 group-hover:text-stone-950">
                  Read story →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Learning approach
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-stone-950">
              Understand it. Work with it. Use it.
            </h2>

            <p className="mt-5 text-base leading-7 text-stone-600">
              Good learning is more than reading information. Msingi gives
              learners room to understand ideas, practise them and use them.
            </p>
          </div>

          <div className="mt-14 border-t border-stone-300">
            {learningProcess.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-6 border-b border-stone-300 py-10 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-2">
                  <span className="text-xs text-stone-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-3xl font-semibold tracking-[-0.035em] text-stone-950">
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

      {/* Closing */}
      <section className="bg-stone-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                Start learning
              </p>

              <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Give learning a stronger foundation.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm leading-7 text-stone-400">
                Explore learning areas and discover resources designed to
                support understanding, practice and application.
              </p>

              <Link
                href="/learning-areas"
                className="mt-7 inline-block border border-stone-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Explore learning areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}