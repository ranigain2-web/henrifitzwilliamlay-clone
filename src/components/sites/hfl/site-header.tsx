"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HflLogo } from "./hfl-logo";
import { InstagramIcon } from "./icons";

const NAV_ITEMS = [
  { label: "Interiors", href: "/interiors" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Products", href: "/products" },
  { label: "Announcements", href: "/announcements" },
  { label: "Enquire", href: "/enquire" },
];

export function SiteHeader({ variant = "light" }: { variant?: "light" | "overlay" }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On the home page the header sits over the hero (cream logo/links);
  // once the user scrolls past the hero it switches to the light treatment.
  const isHome = pathname === "/";
  const overlayActive = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const dark = variant === "overlay" && overlayActive;

  return (
    <>
      <header
        className={cn(
          "absolute inset-x-0 top-0 z-40 transition-colors duration-500",
          dark ? "text-cream" : "text-maroon",
        )}
      >
        <div className="flex items-start justify-between px-6 py-6 md:px-14 md:py-8">
          <Link href="/" aria-label="Henri Fitzwilliam-Lay — home" className="shrink-0">
            <HflLogo className="h-12 w-auto md:h-16" />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Menu"
            className="hidden items-center gap-10 pt-4 lg:flex xl:gap-12"
          >
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/who-we-are"
                  ? pathname === "/who-we-are"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "label-tracked text-[13px] xl:text-sm hover:opacity-70 transition-opacity",
                    active && "underline underline-offset-8 decoration-1",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://www.instagram.com/henrifitz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "mt-3 flex h-8 w-9 flex-col items-end justify-center gap-[9px] lg:hidden",
              dark ? "text-cream" : "text-maroon",
            )}
          >
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-maroon text-cream transition-opacity duration-400 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-start justify-between px-6 py-6">
          <Link href="/" aria-label="Henri Fitzwilliam-Lay — home">
            <HflLogo className="h-12 w-auto" />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="relative mt-2 h-7 w-7"
          >
            <span className="absolute top-1/2 left-0 block h-px w-7 rotate-45 bg-current" />
            <span className="absolute top-1/2 left-0 block h-px w-7 -rotate-45 bg-current" />
          </button>
        </div>

        <nav
          aria-label="Menu"
          className="flex flex-1 flex-col items-center justify-center gap-9"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="label-tracked text-lg tracking-[0.15em] hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center pb-14">
          <a
            href="https://www.instagram.com/henrifitz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70 transition-opacity"
          >
            <InstagramIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </>
  );
}
