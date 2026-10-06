import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { HeroSlider } from "@/components/sites/hfl/hero-slider";
import { Reveal } from "@/components/sites/hfl/reveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <SiteHeader variant="overlay" />
      <main className="flex-1">
        <HeroSlider />

        {/* Intro statement */}
        <section className="px-6 py-32 md:py-44">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[17px] leading-8 text-maroon md:text-lg md:leading-9">
              Henri Fitzwilliam-Lay Ltd is a boutique interior design studio
              known for creating unique, timeless spaces that reflect the
              personalities of those who live in them. With a focus on depth,
              texture and emotional resonance, the studio blends new and
              vintage elements to create spaces that evolve over time, never
              feeling staged.
            </p>
          </Reveal>
        </section>

        {/* Staggered image grid */}
        <section className="px-6 md:px-14">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sites/hfl/images/sussex13.jpg"
                alt="Sussex Home staircase with hand-painted mural ceiling"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={140} className="md:mt-40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sites/hfl/images/tor06.jpg"
                alt="Bathroom with polished plaster walls and vintage fittings"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </Reveal>
          </div>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sites/hfl/images/ladgrove02.jpg"
                alt="Corner detail with sculptural lamp and framed art"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* Press quote */}
        <section className="px-6 py-32 md:px-14 md:py-44">
          <div className="flex justify-end">
            <Reveal className="max-w-md">
              <div
                aria-hidden="true"
                className="font-flare text-6xl leading-none text-maroon"
              >
                &ldquo;
              </div>
              <blockquote className="mt-6 text-[26px] font-light leading-9 text-maroon md:text-3xl md:leading-10">
                Henri applies her keen eye for design to creating quietly
                joyful and glamorous yet welcoming interiors
              </blockquote>
              <p className="label-tracked mt-8 text-[13px]">
                House and Garden
              </p>
            </Reveal>
          </div>
        </section>

        {/* Interiors — maroon band */}
        <section className="bg-maroon text-cream">
          <div className="grid grid-cols-1 items-center gap-12 py-20 md:py-0 lg:grid-cols-2 lg:gap-0">
            <Reveal className="lg:py-24">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sites/hfl/images/interiors-kitchen.webp"
                alt="Green kitchen with arched windows and brass pendants"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </Reveal>
            <div className="px-6 pb-20 lg:px-20 lg:py-24">
              <Reveal delay={100}>
                <h2 className="label-tracked text-[15px]">Interiors</h2>
                <p className="mt-8 max-w-md text-[17px] leading-8 text-cream/95">
                  At HFL, every project begins with a consultation. We take the
                  time to understand not just your space, but your story. We
                  explore your lifestyle, your collections, your passions and
                  how these can be reflected in your home.
                </p>
                <Link
                  href="/interiors"
                  className="link-underline mt-8 inline-block text-sm text-cream"
                >
                  Discover
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Who we are — cream band */}
        <section className="grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-0">
          <div className="order-2 px-6 pb-20 lg:order-1 lg:px-14 lg:py-28">
            <Reveal>
              <h2 className="label-tracked text-[15px]">Who We Are</h2>
              <p className="mt-8 max-w-md text-[17px] leading-8 text-maroon">
                Henri Fitzwilliam-Lay&rsquo;s career has always been rooted in
                creativity, beginning in New York City as a fashion stylist for
                top department stores and magazines. In 2004, Henri brought her
                expertise in visual styling and design to interior design,
                founding her studio to craft bespoke interiors for residential
                homes.
              </p>
              <Link
                href="/who-we-are"
                className="link-underline mt-8 inline-block text-sm"
              >
                About the Studio
              </Link>
            </Reveal>
          </div>
          <Reveal delay={120} className="order-1 lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sites/hfl/images/still4-door.webp"
              alt="The studio storefront at 4 Portland Road, Holland Park"
              loading="lazy"
              className="aspect-[3/2] w-full object-cover lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
