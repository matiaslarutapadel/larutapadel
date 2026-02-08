import Image from "next/image";
import Link from "next/link";
import { images } from "../lib/images";

const WHATSAPP_NUMBER = "56963223271";

export default function ReservasPage() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <main>
        <section className="relative min-h-[65dvh] sm:min-h-[70vh]">
          <div className="absolute inset-0">
            <Image
              src={images[0]}
              alt="Canchas La Ruta Padel"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-zinc-900/80" />
          </div>
          <div className="relative mx-auto flex min-h-[65dvh] max-w-7xl flex-col justify-center px-4 py-16 text-center sm:min-h-[70vh] sm:px-6 sm:py-24 lg:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-500 sm:mb-3 sm:text-sm">
              Reservá tu cancha
            </p>
            <h1 className="mb-4 text-3xl font-bold uppercase tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              RESERVAS
            </h1>
            <p className="mx-auto max-w-2xl px-1 text-sm text-zinc-300 sm:text-base md:text-lg">
              Tres canchas full panorámicas. Escribinos por WhatsApp y te confirmamos horario al instante.
            </p>
          </div>
        </section>

        <section className="border-t border-zinc-300 bg-zinc-200 py-12 dark:border-zinc-700 dark:bg-zinc-800 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={images[2]}
                  alt="Canchas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6">
                  <p className="text-xs font-medium text-red-400 sm:text-sm">Canchas</p>
                  <p className="text-lg font-bold sm:text-xl">Full panorámicas</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="mb-3 text-xl font-bold uppercase tracking-tight text-zinc-900 dark:text-zinc-100 sm:mb-4 sm:text-2xl md:text-3xl">
                  Cómo reservar
                </h2>
                <ol className="space-y-3 text-zinc-600 dark:text-zinc-400 sm:space-y-4">
                  <li className="flex gap-3 sm:gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm">
                      1
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:text-base">Escribinos por WhatsApp</span>
                      <p className="text-xs sm:text-sm">Indicanos el día y horario que querés jugar.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 sm:gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm">
                      2
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:text-base">Te confirmamos al instante</span>
                      <p className="text-xs sm:text-sm">Te respondemos con la disponibilidad y el valor.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 sm:gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm">
                      3
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:text-base">¡A jugar!</span>
                      <p className="text-xs sm:text-sm">Venite a Pucalan Parcela 27, Nogales.</p>
                    </div>
                  </li>
                </ol>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Quiero reservar una cancha.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-700 sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Reservar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-300 bg-zinc-100 py-12 dark:border-zinc-700 dark:bg-zinc-900 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-xl font-bold uppercase tracking-tight text-zinc-900 dark:text-zinc-100 sm:mb-12 sm:text-2xl">
              Nuestras canchas
            </h2>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[images[3], images[4], images[5]].map((img, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={img}
                    alt={`Cancha ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-red-950/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center sm:mt-12">
              <Link
                href="/"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-700 dark:text-red-500 dark:hover:text-red-400"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
