import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-stone-200/80 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                About Msingi
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-stone-950 md:text-7xl">
                <span className="block">Building stronger</span>
                <span className="block text-emerald-800">foundations for learning.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-stone-600 font-normal">
                Msingi is a modern digital learning platform designed to make structured
                curriculum content, practical resources, and meaningful educational
                experiences accessible to every learner.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl shadow-stone-950/5">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                  alt="Students engaged in learning"
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Collaborative Growth</p>
                  <p className="text-sm font-medium mt-0.5">Empowering learners through active participation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact / Stats Ribbon */}
      <section className="border-b border-stone-200/80 bg-stone-950 text-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center md:text-left">
            <div>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-400">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">Curriculum Aligned</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-white">5+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">Core Learning Areas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-400">24/7</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">Accessible Anywhere</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Infinite</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">Growth & Discovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision / Why Msingi */}
      <section className="bg-stone-50/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-start relative">
            
            {/* Left Column: Title & Description (Sticky only on desktop lg+) */}
            <div className="w-full lg:col-span-5 lg:sticky lg:top-28 space-y-8 z-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Why Msingi Exists
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
                  Learning should be clear, practical, and deeply engaging.
                </h2>
                
                <p className="mt-6 text-sm text-stone-600 leading-relaxed">
                  We believe that modern education requires more than just digital textbooks. It requires an ecosystem built for active comprehension, real-world relevance, and long-term mastery.
                </p>
              </div>

              {/* Side Feature Image */}
              <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"
                  alt="Practical learning session"
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="w-full lg:col-span-7 space-y-8">
              <div className="rounded-3xl border border-stone-200/80 bg-white p-8 md:p-10 shadow-sm transition-all hover:border-emerald-500/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 font-semibold mb-6">
                  01
                </div>
                <h3 className="text-xl font-semibold text-stone-950">Complementing the Classroom</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Msingi is engineered to work alongside traditional schooling, giving students a reliable space at home or on-the-go to revisit core concepts, clarify complex ideas, and practice at their own pace.
                </p>
              </div>

              <div className="rounded-3xl border border-stone-200/80 bg-white p-8 md:p-10 shadow-sm transition-all hover:border-emerald-500/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 font-semibold mb-6">
                  02
                </div>
                <h3 className="text-xl font-semibold text-stone-950">Connecting Knowledge to the World</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Through curated stories, technological insights, and contextual case studies, we bridge abstract theory with tangible innovations happening across society and industry today.
                </p>
              </div>

              <div className="rounded-3xl border border-stone-200/80 bg-white p-8 md:p-10 shadow-sm transition-all hover:border-emerald-500/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 font-semibold mb-6">
                  03
                </div>
                <h3 className="text-xl font-semibold text-stone-950">Equipping Educators & Learners</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Our platform provides clean, distraction-free resources designed so teachers can seamlessly incorporate digital tools into their lesson planning and students can navigate subjects intuitively.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="border-y border-stone-200/80 bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Our principles
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              The pillars that guide our platform design.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-stone-200/80 bg-stone-50/50 p-9 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1">
              <span className="text-xs font-mono text-stone-400 group-hover:text-emerald-700 transition-colors">Principle A</span>
              <h3 className="mt-6 text-2xl font-semibold text-stone-950">
                Understanding
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Content should foster deep comprehension and critical insight rather than encouraging surface-level memorisation.
              </p>
            </div>

            <div className="group rounded-3xl bg-stone-950 p-9 text-white shadow-xl shadow-stone-950/10 transition-all duration-300 hover:-translate-y-1">
              <span className="text-xs font-mono text-stone-500 group-hover:text-emerald-400 transition-colors">Principle B</span>
              <h3 className="mt-6 text-2xl font-semibold text-emerald-400">
                Practice
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-300/90">
                True competence grows when learners actively test their understanding, make mistakes safely, and iterate.
              </p>
            </div>

            <div className="group rounded-3xl border border-stone-200/80 bg-stone-50/50 p-9 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1">
              <span className="text-xs font-mono text-stone-400 group-hover:text-emerald-700 transition-colors">Principle C</span>
              <h3 className="mt-6 text-2xl font-semibold text-stone-950">
                Application
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Knowledge gains permanent value the moment a learner applies it to solve authentic, real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Visionary Note with Portrait */}
      <section className="bg-stone-50/50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:items-center bg-white border border-stone-200/80 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="md:col-span-4">
              <div className="relative overflow-hidden rounded-2xl aspect-square shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                  alt="Educator profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white font-serif text-lg mb-4">
                “
              </div>
              <blockquote className="text-xl font-medium tracking-tight text-stone-950 md:text-2xl leading-snug">
                Education is not just about preparing for exams; it is about cultivating curiosity, critical thinking, and the confidence to shape tomorrow.
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-semibold text-stone-950">The Msingi Initiative</p>
                <p className="text-xs text-stone-500 mt-0.5">Committed to transformative learning outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Footer Banner */}
      <section className="bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Ready to begin?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Explore Msingi learning areas.
              </h2>
              <p className="mt-2 text-sm text-stone-400 max-w-lg">
                Dive into structured subjects, interactive modules, and comprehensive resources tailored for modern learners.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/learning-areas"
                className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:bg-emerald-500 hover:translate-x-0.5"
              >
                <span>Explore learning areas</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}