import Link from "next/link";

const platformLinks = [
  { name: "Learning Areas", href: "/learning-areas" },
  { name: "Resources", href: "/resources" },
  { name: "Stories & Insights", href: "/stories" },
];

const learningLinks = [
  { name: "Kenyan CBC", href: "/learning-areas" },
  { name: "IGCSE & Cambridge", href: "/learning-areas" },
  { name: "STEM & Technology", href: "/learning-areas" },
  { name: "Digital Literacy", href: "/learning-areas" },
];

const informationLinks = [
  { name: "About Msingi", href: "/about" },
];

const curriculumScope = [
  "Kenyan CBC",
  "IGCSE & Cambridge",
  "8-4-4 Transition Support",
  "STEM & Practical Application",
  "Digital Literacy",
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Curriculum scope */}
        <div className="border-b border-stone-200 py-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                Curriculum scope
              </p>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {curriculumScope.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium text-stone-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Identity statement */}
        <div className="border-b border-stone-200 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Link href="/" className="inline-block">
                <div className="text-2xl font-semibold tracking-[-0.04em] text-stone-950">
                  Msingi
                </div>

                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                  Learning Platform
                </div>
              </Link>

              <p className="mt-7 max-w-xl text-sm leading-7 text-stone-600">
                A structured digital learning platform supporting meaningful
                learning, practice and the development of useful competencies.
              </p>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-stone-200 lg:pl-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                Learning principle
              </p>

              <p className="mt-4 max-w-md text-xl font-medium leading-8 tracking-[-0.02em] text-stone-900">
                Understand knowledge. Practise skills. Apply what you know.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid gap-14 border-b border-stone-200 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
          {/* Platform */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Platform
            </h3>

            <nav className="mt-6 space-y-4">
              {platformLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-transparent pb-1 text-sm text-stone-600 transition-colors hover:border-stone-300 hover:text-stone-950"
                >
                  <span>{link.name}</span>

                  <span className="text-stone-300 transition-colors group-hover:text-stone-950">
                    →
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Learning */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Learning
            </h3>

            <nav className="mt-6 space-y-4">
              {learningLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-stone-600 transition-colors hover:text-stone-950"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Information */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Information
            </h3>

            <nav className="mt-6 space-y-4">
              {informationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-stone-600 transition-colors hover:text-stone-950"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Portal */}
          <div className="lg:col-span-4">
            <div className="border border-stone-200 bg-stone-50 p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                Learning portal
              </p>

              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-stone-950">
                Continue your learning.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-stone-600">
                Learners, teachers and authorised users can sign in to access
                their respective learning environments.
              </p>

              <Link
                href="/login"
                className="mt-7 inline-flex border border-stone-950 bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
              >
                Sign in to portal
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Msingi Learning Platform. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-400">
            <span>Knowledge</span>
            <span>Practice</span>
            <span>Application</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
