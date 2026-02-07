import Image from "next/image";
import Link from "next/link";
import { logo, logoAlt, logoDark } from "../lib/logo";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "INICIO", href: "/" },
  { label: "RESERVAS", href: "#reservas" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white shadow dark:border-red-950/30 dark:bg-zinc-900 dark:shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative flex shrink-0 items-center">
          <Image
            src={logo}
            alt={logoAlt}
            height={48}
            width={160}
            className="h-10 w-auto object-contain dark:hidden sm:h-11"
            priority
          />
          <Image
            src={logoDark}
            alt={logoAlt}
            height={48}
            width={160}
            className="hidden h-10 w-auto object-contain dark:block sm:h-11"
          />
        </Link>
        <nav className="flex items-center gap-8">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium uppercase tracking-wide text-zinc-600 transition-colors hover:text-red-500 dark:text-zinc-300 dark:hover:text-red-500"
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
