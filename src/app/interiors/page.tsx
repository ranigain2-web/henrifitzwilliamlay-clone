import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { Reveal } from "@/components/sites/hfl/reveal";
import { projects } from "@/components/sites/hfl/data";

export const metadata: Metadata = {
  title: "Interiors by Henri Fitzwilliam-Lay",
};

export default function InteriorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-6 pt-36 pb-24 md:px-14 md:pt-40">
        <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const inner = (
              <>
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.cardImage}
                    alt={p.cardAlt}
                    loading={i < 6 ? "eager" : "lazy"}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="label-tracked mt-5 text-[13px]">{p.name}</h2>
              </>
            );
            return (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
                {p.comingSoon ? (
                  <div className="group cursor-default">{inner}</div>
                ) : (
                  <Link href={`/interior/${p.slug}`} className="group block">
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
