"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { logo, logoAlt, logoDark } from "../lib/logo";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "INICIO", href: "/" },
  { label: "RESERVAS", href: "/reservas" },
  { label: "CLASES", href: "/clases" },
  { label: "CONTACTO", href: "/contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full min-w-0 border-b border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-lg [padding-top:env(safe-area-inset-top)]">
      <div className="relative mx-auto flex h-14 min-w-0 max-w-7xl items-center justify-between gap-2 overflow-hidden px-3 sm:h-16 sm:gap-4 sm:px-4 md:px-6 lg:px-8">
        <Link href="/" className="relative flex h-10 w-[90px] shrink-0 items-center sm:w-[130px] md:w-[160px]" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt={logoAlt}
            height={48}
            width={160}
            className="absolute left-0 top-1/2 h-7 w-auto max-w-full -translate-y-1/2 object-contain object-left dark:opacity-0 sm:h-9 md:h-10"
            priority
          />
          <Image
            src={logoDark}
            alt={logoAlt}
            height={48}
            width={160}
            className="absolute left-0 top-1/2 h-7 w-auto max-w-full -translate-y-1/2 object-contain object-left opacity-0 dark:opacity-100 sm:h-9 md:h-10"
          />
        </Link>
        <nav className="hidden items-center justify-end gap-1 sm:flex md:gap-5">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex shrink-0 min-h-[44px] items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-red-500 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-red-500 md:text-sm"
            >
              {label}
            </Link>
          ))}
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-700"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-zinc-900/50 sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800 sm:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col p-2">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] items-center rounded-lg px-4 text-sm font-medium uppercase tracking-wide text-zinc-700 transition-colors active:bg-zinc-100 dark:text-zinc-300 dark:active:bg-zinc-700"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
