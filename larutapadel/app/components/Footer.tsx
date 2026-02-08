import Image from "next/image";
import Link from "next/link";
import { logo, logoAlt, logoDark } from "../lib/logo";

const NAV = [
  { label: "Inicio", href: "/" },
  { label: "El club", href: "/#el-club" },
  { label: "Reservas", href: "/reservas" },
  { label: "Tarifas", href: "/#tarifas" },
  { label: "Contacto", href: "/contacto" },
];

const WHATSAPP_NUMBER = "56963223271";
const INSTAGRAM_URL = "https://www.instagram.com/larutapadel_club/";

export default function Footer() {
  return (
    <footer className="overflow-x-hidden border-t border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 pb-[max(5rem,env(safe-area-inset-bottom))] sm:pb-4 sm:[padding-bottom:env(safe-area-inset-bottom)]">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="relative inline-flex items-center">
              <Image
                src={logo}
                alt={logoAlt}
                height={64}
                width={220}
                className="h-14 w-auto max-w-[180px] object-contain dark:hidden sm:h-16 sm:max-w-none"
              />
              <Image
                src={logoDark}
                alt={logoAlt}
                height={64}
                width={220}
                className="hidden h-14 w-auto max-w-[180px] object-contain dark:block sm:h-16 sm:max-w-none"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Club de pádel. Tres canchas full panorámicas, cafetería y amplio estacionamiento. Próximamente canchas techadas.
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span>📍</span>
              Pucalan Parcela 27, Nogales
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-400 bg-transparent px-5 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-500 dark:text-zinc-300 dark:hover:bg-zinc-700"
                aria-label="Instagram La Ruta Padel"
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-red-500">
              Navegación
            </h3>
            <ul className="space-y-1 sm:space-y-3">
              {NAV.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-flex min-h-[44px] items-center text-sm text-zinc-600 transition-colors hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-red-500">
              Contacto
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Reservas y consultas
            </p>
            <div className="mt-2 flex flex-col gap-1.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center text-sm font-medium text-red-500 transition-colors hover:text-red-600 dark:hover:text-red-400"
              >
                Escribinos por WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-red-500 transition-colors hover:text-red-600 dark:hover:text-red-400"
                aria-label="Instagram @larutapadel_club"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@larutapadel_club</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-300 pt-6 dark:border-zinc-700 sm:mt-12 sm:pt-8">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="min-w-0 text-sm leading-snug text-zinc-500">
              © {new Date().getFullYear()} La Ruta Padel. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link href="#" className="inline-flex items-center py-2 text-sm text-zinc-500 transition-colors hover:text-red-500 dark:hover:text-red-500">
                Aviso legal
              </Link>
              <Link href="#" className="inline-flex items-center py-2 text-sm text-zinc-500 transition-colors hover:text-red-500 dark:hover:text-red-500">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
