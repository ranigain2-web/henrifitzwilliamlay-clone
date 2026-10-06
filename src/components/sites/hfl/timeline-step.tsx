"use client";

import { useEffect, useRef, useState } from "react";
import type { timelineSteps } from "./data";
import { cn } from "@/lib/utils";

type Step = (typeof timelineSteps)[number];

export function TimelineStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setLit(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const imageFirst = step.imageSide === "left";

  return (
    <li
      ref={ref}
      className={cn(
        "relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-0",
        index > 0 && "mt-24 md:mt-40",
      )}
    >
      {/* Dot on the timeline */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1/2 left-4 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-700 md:block",
          lit ? "bg-maroon" : "bg-maroon/45",
          imageFirst
            ? "md:left-1/2 md:-translate-x-1/2"
            : "md:left-1/2 md:-translate-x-1/2",
        )}
      />
      {/* Mobile dot */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-8 left-4 z-10 h-5 w-5 -translate-x-1/2 rounded-full transition-colors duration-700 md:hidden",
          lit ? "bg-maroon" : "bg-maroon/45",
        )}
      />

      {/* Image */}
      <div
        className={cn(
          "pl-12 md:pl-0",
          imageFirst
            ? "order-1 md:pr-24 md:text-right"
            : "order-1 md:order-2 md:pl-24",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={step.image}
          alt={step.title}
          loading="lazy"
          className={cn(
            "aspect-[4/3] w-full object-cover md:aspect-[5/6]",
            imageFirst && "md:ml-auto md:max-w-[560px]",
          )}
        />
      </div>

      {/* Text */}
      <div
        className={cn(
          "pl-12 md:pl-0",
          imageFirst
            ? "order-2 md:pl-24"
            : "order-2 md:order-1 md:pr-24 md:text-right",
        )}
      >
        <div
          className={cn(
            "max-w-lg transition-colors duration-700",
            imageFirst ? "md:ml-auto" : "",
            lit ? "text-maroon" : "text-maroon/30",
          )}
        >
          <div className="font-flare text-4xl leading-none md:text-5xl">
            {step.number}
          </div>
          <h3 className="label-tracked mt-8 text-sm md:text-[15px]">
            {step.title}
          </h3>
          <p className="mt-6 text-[15px] leading-8">{step.text}</p>
        </div>
      </div>
    </li>
  );
}
