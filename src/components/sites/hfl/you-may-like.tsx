import Link from "next/link";
import { projects, type Project } from "./data";
import { Reveal } from "./reveal";

export function YouMayLike({
  slugs,
  viewHref = "/interiors",
  viewLabel = "View Interiors",
}: {
  slugs: string[];
  viewHref?: string;
  viewLabel?: string;
}) {
  const picks: Project[] = slugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is Project => Boolean(p));

  return (
    <section className="px-6 pb-24 pt-8 md:px-14">
      <div className="flex items-baseline justify-between">
        <Reveal>
          <h2 className="label-tracked text-[15px]">You May Like</h2>
        </Reveal>
        <Reveal delay={100}>
          <Link href={viewHref} className="link-underline text-sm">
            {viewLabel}
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-3">
        {picks.map((p, i) => (
          <Reveal key={p.slug} delay={i * 120}>
            <Link href={`/interior/${p.slug}`} className="group block">
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.cardImage}
                  alt={p.cardAlt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="label-tracked mt-5 text-[13px]">{p.name}</h3>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
