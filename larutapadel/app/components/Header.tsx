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
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-lg [padding-top:env(safe-area-inset-top)]">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-2 overflow-hidden px-3 sm:h-16 sm:gap-4 sm:px-6 md:gap-6 lg:px-8">
        <Link href="/" className="relative flex shrink-0 items-center min-w-0">
          <Image
            src={logo}
            alt={logoAlt}
            height={48}
            width={160}
            className="h-8 w-auto max-w-[120px] object-contain object-left dark:hidden sm:h-9 sm:max-w-none sm:h-11"
            priority
          />
          <Image
            src={logoDark}
            alt={logoAlt}
            height={48}
            width={160}
            className="hidden h-8 w-auto max-w-[120px] object-contain object-left dark:block sm:h-9 sm:max-w-none sm:h-11"
          />
        </Link>
        <nav className="flex min-w-0 flex-1 shrink-0 items-center justify-end gap-1 overflow-x-auto scrollbar-hide sm:flex-none sm:gap-4 sm:overflow-visible md:gap-6">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex shrink-0 min-h-[40px] min-w-[40px] items-center justify-center rounded-lg px-2 text-xs font-medium uppercase tracking-wide text-zinc-600 transition-colors hover:text-red-500 dark:text-zinc-300 dark:hover:text-red-500 sm:min-h-[44px] sm:min-w-[44px] sm:text-sm"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
