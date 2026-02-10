import Image from "next/image";
import Link from "next/link";
import { logo, logoAlt, logoDark } from "../lib/logo";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "INICIO", href: "/" },
  { label: "RESERVAS", href: "/reservas" },
  { label: "CLASES", href: "/clases" },
  { label: "CONTACTO", href: "/contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full min-w-0 border-b border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-lg [padding-top:env(safe-area-inset-top)]">
      <div className="mx-auto flex min-h-14 min-w-0 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-4 md:px-6 lg:px-8">
        <Link href="/" className="relative flex shrink-0 items-center min-w-0 max-w-[50%] sm:max-w-none">
          <Image
            src={logo}
            alt={logoAlt}
            height={48}
            width={160}
            className="h-7 w-auto max-w-[100px] object-contain object-left dark:hidden sm:h-9 sm:max-w-[130px] md:h-10"
            priority
          />
          <Image
            src={logoDark}
            alt={logoAlt}
            height={48}
            width={160}
            className="hidden h-7 w-auto max-w-[100px] object-contain object-left dark:block sm:h-9 sm:max-w-[130px] md:h-10"
          />
        </Link>
        <nav className="flex shrink-0 items-center justify-end gap-0.5 overflow-x-auto scrollbar-hide sm:gap-3 sm:overflow-visible md:gap-5">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex shrink-0 min-h-[44px] min-w-[44px] items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 text-[11px] font-medium uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-red-500 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-red-500 sm:px-3 sm:text-xs md:text-sm"
            >
              {label}
            </Link>
          ))}
          <div className="ml-0.5 shrink-0 sm:ml-0">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
