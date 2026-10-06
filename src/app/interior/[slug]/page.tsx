import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { Reveal } from "@/components/sites/hfl/reveal";
import { YouMayLike } from "@/components/sites/hfl/you-may-like";
import { projects } from "@/components/sites/hfl/data";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => !p.comingSoon && p.slug !== slug).slice(0, 3);

  return (
    <>
      <SiteHeader variant="overlay" />
      <main className="flex-1">
        {/* Full-bleed hero */}
        <section className="relative h-[92vh] min-h-[520px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage}
            alt={project.cardAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
        </section>

        {/* Title + description */}
        <section className="px-6 pt-20 pb-10 md:px-14 md:pt-28">
          <Reveal>
            <h1 className="label-tracked text-[15px]">{project.name}</h1>
            <p className="mt-8 max-w-xl text-[17px] leading-8 text-maroon">
              {project.description}
            </p>
          </Reveal>
        </section>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section className="px-6 pt-12 pb-8 md:px-14">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {project.gallery.map((img, i) => (
                <Reveal
                  key={`${img.src}-${i}`}
                  delay={(i % 2) * 120}
                  className={cn(i % 2 === 1 && "md:mt-24")}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <div className="pt-16">
          <YouMayLike slugs={related.map((r) => r.slug)} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
