import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import { images } from "./lib/images";
import { logo, logoAlt, logoDark } from "./lib/logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950">
      <main>
        <section className="relative grid min-h-[85vh] grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-zinc-200 px-8 py-20 dark:bg-zinc-900 lg:px-16">
            <div className="relative mb-8">
              <Image
                src={logo}
                alt={logoAlt}
                width={300}
                height={90}
                className="h-24 w-auto object-contain dark:hidden md:h-28"
                priority
              />
              <Image
                src={logoDark}
                alt={logoAlt}
                width={300}
                height={90}
                className="hidden h-24 w-auto object-contain dark:block md:h-28"
              />
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-500">Bienvenidos</p>
            <p className="mb-6 max-w-md text-zinc-600 dark:text-zinc-400">
              Tu club de pádel. Canchas de primer nivel, cafetería y amplio estacionamiento. Próximamente canchas techadas.
            </p>
            <ul className="mb-8 flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
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
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="#reservas"
                className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
              >
                RESERVAR
              </a>
              <a
                href="#el-club"
                className="rounded-lg border border-red-600/50 px-6 py-3 font-semibold text-red-500 transition-colors hover:bg-red-600/10"
              >
                EL CLUB
              </a>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-auto md:min-h-[85vh]">
            <HeroCarousel images={images.slice(0, 6)} />
          </div>
        </section>

        <section id="el-club" className="border-t border-zinc-300 bg-zinc-200 py-20 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-bold uppercase tracking-tight text-zinc-900 md:text-4xl dark:text-white">
                EL CLUB
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-red-600" />
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                Canchas de primer nivel, vestuarios, cafetería y amplio estacionamiento. Próximamente canchas techadas.
              </p>
            </div>
            <div className="mb-12 flex flex-wrap justify-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-5 py-3 dark:border-zinc-700 dark:bg-zinc-800/60">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Cafetería</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-5 py-3 dark:border-zinc-700 dark:bg-zinc-800/60">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Amplio estacionamiento</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3 dark:border-red-900/50 dark:bg-red-950/30">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Próximamente canchas techadas</span>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        <section className="border-t border-zinc-300 bg-zinc-200 py-20 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-bold uppercase tracking-tight text-zinc-900 md:text-4xl dark:text-white">
                GALERÍA
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-red-600" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
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

        <section id="contacto" className="border-t border-zinc-300 bg-zinc-100 py-20 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src={images[9]} alt="Contacto" fill className="object-cover" sizes="33vw" />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src={images[10]} alt="Instalaciones" fill className="object-cover" sizes="33vw" />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src={images[11]} alt="Club" fill className="object-cover" sizes="33vw" />
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-red-600/30 bg-zinc-200 px-6 py-12 text-center dark:bg-zinc-900/50">
              <h2 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white">CONTACTO</h2>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">Reservas y consultas por WhatsApp</p>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
