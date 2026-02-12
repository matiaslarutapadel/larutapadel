"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";

const INTERVAL_MS = 5000;
const SWIPE_THRESHOLD = 50;
const PAUSE_AFTER_SWIPE_MS = 4000;

type Props = {
  images: StaticImageData[];
};

export default function HeroCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const startX = useRef(0);
  const isPaused = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex((i) => (i + next + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => {
      if (!isPaused.current) goTo(1);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [total, goTo]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      if (startX.current !== 0) e.preventDefault();
    };
    el.addEventListener("pointermove", onMove, { passive: false });
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      startX.current = e.clientX;
      isPaused.current = true;
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    },
    []
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      const endX = e.clientX;
      const delta = endX - startX.current;
      startX.current = 0;
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
      if (delta < -SWIPE_THRESHOLD) goTo(1);
      else if (delta > SWIPE_THRESHOLD) goTo(-1);
      setTimeout(() => {
        isPaused.current = false;
      }, PAUSE_AFTER_SWIPE_MS);
    },
    [goTo]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full touch-none overflow-hidden"
      style={{ touchAction: "none" }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-zinc-900 via-transparent to-transparent pointer-events-none" />
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out overflow-hidden"
          style={{ opacity: i === index ? 1 : 0, zIndex: 0 }}
          aria-hidden={i !== index}
        >
          <div className="absolute inset-0">
            <Image
              src={img}
              alt={`La Ruta Padel ${i + 1}`}
              fill
              className={`object-cover object-center min-w-full min-h-full select-none drag-none ${i === 0 ? "brightness-[1.2] contrast-[1.12] saturate-[1.15]" : ""}`}
              draggable={false}
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      ))}
      {total > 1 && (
        <div
          className="absolute left-1/2 z-20 flex -translate-x-1/2 gap-1 [bottom:max(1rem,env(safe-area-inset-bottom))]"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                isPaused.current = true;
                setIndex(i);
                setTimeout(() => {
                  isPaused.current = false;
                }, PAUSE_AFTER_SWIPE_MS);
              }}
              className={`flex h-2 w-2 items-center justify-center rounded-full p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1 sm:h-2.5 sm:w-2.5 ${
                i === index ? "scale-125 bg-red-600" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
