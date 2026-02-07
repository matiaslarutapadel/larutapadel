"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

const INTERVAL_MS = 5000;

type Props = {
  images: StaticImageData[];
};

export default function HeroCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), INTERVAL_MS);
    return () => clearInterval(id);
  }, [total]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-zinc-900 via-transparent to-transparent" />
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === index ? 1 : 0, zIndex: 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={img}
            alt={`La Ruta Padel ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
      {total > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent ${
                i === index ? "scale-125 bg-red-600" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
