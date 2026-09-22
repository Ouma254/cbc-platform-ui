import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Learning Areas", href: "/learning-areas" },
  { name: "Resources", href: "/resources" },
  { name: "Stories", href: "/stories" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="group">
          <div className="text-[20px] font-semibold tracking-[-0.03em] text-stone-950">
            Msingi
          </div>

          <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
            Learning Platform
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-stone-600 transition-colors duration-200 hover:text-stone-950"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Sign in */}
        <Link
          href="/login"
          className="border border-stone-300 px-5 py-2.5 text-[13px] font-semibold text-stone-900 transition-colors duration-200 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}