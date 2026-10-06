import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { Reveal } from "@/components/sites/hfl/reveal";
import { EnquiryForm } from "@/components/sites/hfl/enquiry-form";
import { YouMayLike } from "@/components/sites/hfl/you-may-like";
import { TimelineStep } from "@/components/sites/hfl/timeline-step";
import { timelineSteps } from "@/components/sites/hfl/data";

export const metadata: Metadata = {
  title: "Interior Design Studio London",
};

export default function WhoWeArePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Intro + studio image */}
        <section className="grid grid-cols-1 items-start gap-12 px-6 pt-36 md:px-14 md:pt-44 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h1 className="label-tracked text-[15px]">Who We Are</h1>
            <p className="mt-8 max-w-xl text-[17px] leading-8 text-maroon">
              Henri Fitzwilliam-Lay Ltd is a boutique Interior Design studio
              known for creating layered, timeless spaces that are both
              liveable and exciting for their owners. Founded in 2004, the
              studio takes on only a limited number of projects each year,
              allowing Henri to be personally involved in every aspect of the
              design process.
            </p>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-maroon">
              With a focus on depth, texture and emotional resonance, the
              studio blends new and vintage elements to create spaces that
              evolve over time, never feeling staged. Collaborating with
              architects, landscape designers, and skilled craftspeople, Henri
              ensures every detail aligns with the broader creative vision. The
              result is a home that is distinctive, lived-in and deeply
              personal, showcasing the very best of its owner&rsquo;s
              collection and character.
            </p>
            <h2 className="label-tracked mt-12 text-[15px]">
              Awards &amp; Accolades
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-maroon">
              House and Garden Top 100 (2018-2026)
              <br />
              House and Garden Project of the Year (2023)
            </p>
          </Reveal>
          <Reveal delay={140} className="lg:pt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sites/hfl/images/still1.jpg"
              alt="The studio storefront"
              className="aspect-[16/9] w-full object-cover"
            />
          </Reveal>
        </section>

        {/* About Henri — maroon band */}
        <section className="mt-24 bg-maroon text-cream">
          <div className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:py-28">
            <Reveal className="px-6 lg:pl-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sites/hfl/images/henri-fitzwilliam-lay.jpg"
                alt="Henri Fitzwilliam-Lay seated in a red drawing room"
                className="aspect-[3/4] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120} className="px-6 lg:pr-20">
              <h2 className="label-tracked text-[15px]">About Henri</h2>
              <p className="mt-8 max-w-xl text-[15px] leading-7 text-cream/90">
                &ldquo;Henri&rsquo;s skill with daring combinations of pattern,
                colour, shape and material ensure that her work sings with
                personality.&rdquo; House and Garden Top 100, 2025
              </p>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-cream/90">
                Henri Fitzwilliam-Lay&rsquo;s career has always been rooted in
                creativity, beginning in New York City as a fashion stylist for
                top department stores and magazines. She then transitioned into
                art direction, working with renowned brands like Bergdorf
                Goodman, Brooks Brothers, and Bloomingdales. In 2004, Henri
                brought her expertise in visual styling and design to interior
                design, founding her studio to craft bespoke interiors for
                residential homes.
              </p>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-cream/90">
                Henri&rsquo;s work has been widely recognized, earning her a
                spot on House &amp; Garden&rsquo;s &lsquo;Top 100 Interior
                Designers&rsquo; list for the past eight years. In 2023, she
                was also invited to be a panellist for House &amp;
                Garden&rsquo;s talk, &ldquo;Rethinking Country House
                Style.&rdquo;
              </p>
              <h3 className="label-tracked mt-12 text-[15px]">Meet the Team</h3>
              <ul className="mt-6 space-y-1.5 text-[15px] leading-7 text-cream/90">
                <li>Henri Fitzwilliam-Lay &ndash; Director</li>
                <li>Flora Gibb &ndash; Senior Interior Designer</li>
                <li>Ingrid Murphy &ndash; Interior Designer</li>
                <li>Jack Finerty &ndash; Studio Manager</li>
                <li>Leon Flint &ndash; Press</li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* How we work — timeline */}
        <section className="px-6 pt-24 pb-8 md:px-14 md:pt-32">
          <Reveal>
            <h2 className="label-tracked text-[15px]">How We Work</h2>
          </Reveal>
          <div className="relative mt-16">
            {/* center line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-4 w-px bg-maroon/30 md:left-1/2 md:-translate-x-1/2"
            />
            <ol className="space-y-24 md:space-y-40">
              {timelineSteps.map((step, i) => (
                <TimelineStep key={step.number} step={step} index={i} />
              ))}
            </ol>
          </div>
        </section>

        {/* Get in touch */}
        <section className="grid grid-cols-1 items-start gap-14 px-6 py-24 md:px-14 md:py-32 lg:grid-cols-2">
          <Reveal>
            <h2 className="label-tracked text-[15px]">Get in Touch</h2>
            <div className="mt-12 max-w-xl">
              <EnquiryForm idPrefix="wwa" />
            </div>
          </Reveal>
          <Reveal delay={140} className="grid grid-cols-2 gap-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sites/hfl/images/get-in-touch-1.jpg"
              alt="Sitting room with patterned sofa"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sites/hfl/images/get-in-touch-2.jpg"
              alt="Curtained window with reading chair"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover mt-12"
            />
          </Reveal>
        </section>

        <YouMayLike slugs={["sussex-home", "lansdowne-road", "ferney-hall"]} />
      </main>
      <SiteFooter />
    </>
  );
}
