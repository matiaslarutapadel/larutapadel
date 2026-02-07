import Link from "next/link";

const NAV = [
  { label: "INICIO", href: "/" },
  { label: "RESERVAS", href: "#reservas" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-red-950/30 bg-zinc-900 shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 font-bold text-white">
            R
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            LA RUTA <span className="text-red-500">PADEL</span>
          </span>
        </Link>
        <nav className="flex gap-8">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium uppercase tracking-wide text-zinc-300 transition-colors hover:text-red-500"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
