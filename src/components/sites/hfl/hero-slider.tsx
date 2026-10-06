"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { homeSlides } from "./data";

const AUTOPLAY_MS = 6000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setActive((a) => (a + dir + homeSlides.length) % homeSlides.length);
  }, []);

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => go(1), AUTOPLAY_MS);
  }, [go]);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  return (
    <section
      aria-label="Featured projects"
      className="relative h-screen min-h-[560px] w-full overflow-hidden bg-maroon"
    >
      {/* Slides */}
      {homeSlides.map((slide, i) => (
        <div
          key={slide.href}
          aria-hidden={i !== active}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt={slide.name}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "h-full w-full object-cover transition-transform duration-[7000ms] ease-out",
              i === active ? "scale-[1.06]" : "scale-100",
            )}
          />
          {/* subtle darken for legibility of nav + caption */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
        </div>
      ))}

      {/* Prev / Next */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => {
          go(-1);
          restart();
        }}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 p-2 text-cream/90 hover:text-cream transition-colors"
      >
        <span className="chevron chevron-left block" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => {
          go(1);
          restart();
        }}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 p-2 text-cream/90 hover:text-cream transition-colors"
      >
        <span className="chevron chevron-right block" />
      </button>

      {/* Caption */}
      <div className="absolute bottom-10 left-6 z-10 md:left-14 md:bottom-14">
        {homeSlides.map((slide, i) => (
          <h2
            key={slide.href}
            className={cn(
              "transition-opacity duration-700",
              i === active ? "block opacity-100" : "hidden opacity-0",
            )}
          >
            <Link
              href={slide.href}
              className="label-tracked text-sm text-cream tracking-[0.18em] hover:opacity-80"
            >
              {slide.name}
            </Link>
          </h2>
        ))}
      </div>
    </section>
  );
}
