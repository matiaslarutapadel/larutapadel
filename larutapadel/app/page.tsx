import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import { images } from "./lib/images";
import { patrocinadores } from "./lib/patrocinadores";
import { logo, logoAlt, logoDark } from "./lib/logo";

export default function Home() {
  return (
    <div className="min-h-screen min-w-0 bg-zinc-100 dark:bg-zinc-900">
      <main className="min-w-0 overflow-x-hidden">
        <section className="relative grid min-h-[80dvh] grid-cols-1 md:min-h-[85vh] md:grid-cols-2">
          <div className="flex min-w-0 flex-col justify-center bg-zinc-200 px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16">
            <div className="relative mb-6 sm:mb-8">
              <Image
                src={logo}
                alt={logoAlt}
                width={300}
                height={90}
                className="h-20 w-auto max-w-[260px] object-contain dark:hidden sm:h-24 md:h-28 sm:max-w-none"
                priority
              />
              <Image
                src={logoDark}
                alt={logoAlt}
                width={300}
                height={90}
                className="hidden h-20 w-auto max-w-[260px] object-contain dark:block sm:h-24 md:h-28 sm:max-w-none"
              />
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-500 sm:mb-4 sm:text-sm">Bienvenidos</p>
            <p className="mb-3 max-w-md text-sm text-zinc-600 dark:text-zinc-400 sm:mb-4 sm:text-base">
              Club de pádel. Tres canchas full panorámicas, cafetería y amplio estacionamiento. Próximamente canchas techadas.
            </p>
            <p className="mb-6 flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 sm:mb-8 sm:text-sm">
              <span>📍</span>
              Pucalan Parcela 27, Nogales
            </p>
            <ul className="mb-6 flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-400 sm:mb-8 sm:gap-4 sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Cafetería
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Amplio estacionamiento
              </li>
              <li className="flex items-center gap-2">
                <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-xs font-medium text-red-600 dark:text-red-400">Próximo</span>
                Canchas techadas
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <Link href="/clases" className="text-zinc-600 transition-colors hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-500">
                  Clases de pádel
                </Link>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="/reservas"
                className="inline-flex min-h-[48px] min-w-[120px] items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:text-base"
              >
                RESERVAR
              </a>
              <a
                href="#el-club"
                className="inline-flex min-h-[48px] min-w-[120px] items-center justify-center rounded-lg border border-red-600/50 px-6 py-3 text-sm font-semibold text-red-500 transition-colors hover:bg-red-600/10 sm:text-base"
              >
                EL CLUB
              </a>
            </div>
          </div>
          <div className="relative min-w-0 h-[45vh] min-h-[260px] sm:h-[50vh] sm:min-h-[280px] md:h-auto md:min-h-[85vh]">
            <HeroCarousel images={images.slice(0, 6)} />
          </div>
        </section>

        <section id="el-club" className="border-t border-zinc-300 bg-zinc-200 py-10 dark:border-zinc-700 dark:bg-zinc-800 sm:py-16 md:py-20">
          <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center sm:mb-14">
              <h2 className="mb-2 text-2xl font-bold uppercase tracking-tight text-zinc-900 dark:text-zinc-100 sm:mb-3 sm:text-3xl md:text-4xl">
                EL CLUB
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-red-600" />
              <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-base">
                Club de pádel. Tres canchas full panorámicas, vestuarios, cafetería y amplio estacionamiento. Próximamente canchas techadas.
              </p>
              <p className="mx-auto mt-2 flex items-center justify-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 sm:mt-3 sm:text-sm">
                <span>📍</span>
                Pucalan Parcela 27, Nogales
              </p>
            </div>
            <div className="mb-6 flex min-w-0 flex-wrap justify-center gap-2 sm:mb-12 sm:gap-6 md:gap-10">
              <div className="flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-4 py-2.5 dark:border-zinc-600 dark:bg-zinc-700/50 sm:px-5 sm:py-3">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Cafetería</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-4 py-2.5 dark:border-zinc-600 dark:bg-zinc-700/50 sm:px-5 sm:py-3">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Amplio estacionamiento</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 dark:border-red-900/50 dark:bg-red-950/30 sm:px-5 sm:py-3">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Próximamente canchas techadas</span>
              </div>
            </div>
            <div className="grid min-w-0 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[images[1], images[2], images[3], images[4], images[5], images[6]].map((img, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={img}
                    alt={`Instalación ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-zinc-900/80" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-300 bg-zinc-200 py-10 dark:border-zinc-700 dark:bg-zinc-800 sm:py-16 md:py-20">
          <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center sm:mb-14">
              <h2 className="mb-2 text-2xl font-bold uppercase tracking-tight text-zinc-900 dark:text-zinc-100 sm:mb-3 sm:text-3xl md:text-4xl">
                GALERÍA
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-red-600" />
            </div>
            <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-4 lg:grid-cols-5">
              {images.map((img, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={img}
                    alt={`Galería ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 border-2 border-red-600/0 transition-colors group-hover:border-red-600/50" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="patrocinadores" className="border-t border-zinc-300 bg-zinc-200 py-10 dark:border-zinc-700 dark:bg-zinc-800 sm:py-16 md:py-20">
          <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-2 text-2xl font-bold uppercase tracking-tight text-zinc-900 dark:text-zinc-100 sm:mb-3 sm:text-3xl md:text-4xl">
                Patrocinadores
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-red-600" />
            </div>
            <div className="relative mx-auto max-w-4xl">
              <Image
                src={patrocinadores}
                alt="Patrocinadores La Ruta Padel"
                width={1200}
                height={400}
                className="h-auto w-full object-contain invert dark:invert-0"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-zinc-300 bg-zinc-100 py-10 dark:border-zinc-700 dark:bg-zinc-900 sm:py-16 md:py-20">
          <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid min-w-0 gap-4 sm:gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src={images[9]} alt="Contacto" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src={images[10]} alt="Instalaciones" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src={images[11]} alt="Club" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            </div>
            <div className="mt-8 flex min-w-0 flex-col items-center justify-center rounded-2xl border border-red-600/30 bg-zinc-200 px-4 py-8 text-center sm:mt-16 sm:px-6 sm:py-12">
              <h2 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-2xl">LA RUTA PÁDEL CLUB</h2>
              <p className="mb-1 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">Tres canchas full panorámicas</p>
              <p className="mb-4 flex items-center justify-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 sm:mb-6 sm:text-sm">
                <span>📍</span>
                Pucalan Parcela 27, Nogales
              </p>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400 sm:mb-6">Reservas y consultas por WhatsApp o seguinos en Instagram</p>
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="https://wa.me/56963223271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700 sm:px-8"
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/larutapadel_club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-zinc-400 bg-transparent px-6 py-3 font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-500 dark:text-zinc-300 dark:hover:bg-zinc-700 sm:px-8"
                  aria-label="Instagram La Ruta Padel"
                >
                  <svg className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
