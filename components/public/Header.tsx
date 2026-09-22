"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Learning Areas", href: "/learning-areas" },
  { name: "Resources", href: "/resources" },
  { name: "Stories", href: "/stories" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
      {/* Main Header */}
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0"
        >
          <div className="text-[20px] font-semibold tracking-[-0.03em] text-stone-950">
            Msingi
          </div>

          <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
            Learning Platform
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Right Side */}
        <div className="flex items-center">
          {/* Desktop Sign In */}
          <Link
            href="/login"
            className="hidden border border-stone-300 px-5 py-2.5 text-[13px] font-semibold text-stone-900 transition-colors duration-200 hover:border-stone-950 hover:bg-stone-950 hover:text-white sm:inline-block"
          >
            Sign in
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative flex h-6 w-6 flex-col items-center justify-center">
              {/* Top line */}
              <span
                className={`absolute h-[2px] w-6 bg-stone-900 transition-all duration-200 ${
                  mobileMenuOpen
                    ? "rotate-45"
                    : "-translate-y-[5px]"
                }`}
              />

              {/* Middle line */}
              <span
                className={`absolute h-[2px] w-6 bg-stone-900 transition-all duration-200 ${
                  mobileMenuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              {/* Bottom line */}
              <span
                className={`absolute h-[2px] w-6 bg-stone-900 transition-all duration-200 ${
                  mobileMenuOpen
                    ? "-rotate-45"
                    : "translate-y-[5px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-stone-200 bg-white md:hidden"
        >
          <nav className="mx-auto max-w-7xl px-6 py-5">
            <div className="border-t border-stone-200">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-stone-200 py-4 text-[15px] font-medium text-stone-700 transition-colors hover:text-stone-950"
                >
                  <span>{item.name}</span>

                  <span className="text-stone-300">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/login"
              onClick={closeMenu}
              className="mt-5 block border border-stone-950 bg-stone-950 px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
