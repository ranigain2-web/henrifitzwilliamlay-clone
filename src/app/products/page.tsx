import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { Reveal } from "@/components/sites/hfl/reveal";
import { EnquiryForm } from "@/components/sites/hfl/enquiry-form";
import { YouMayLike } from "@/components/sites/hfl/you-may-like";
import { products } from "@/components/sites/hfl/data";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Intro */}
        <section className="px-6 pt-36 md:px-14 md:pt-44">
          <Reveal>
            <h1 className="label-tracked text-[15px]">Products</h1>
            <div className="mt-8 max-w-lg space-y-6 text-[17px] leading-8 text-maroon">
              <p>
                As we begin a new chapter in our new studio, we&rsquo;re
                delighted to share a curated collection that reflects the
                evolution of our practice. Each piece, whether antique or newly
                made, has been considered with the same attention to material,
                proportion, and craft that defines our interiors. It&rsquo;s a
                natural extension of the world we create for our clients.
              </p>
              <p>
                The collection brings together timeless antiques, newly
                commissioned designs, and refined pieces from our archive, all
                united by a focus on beauty and longevity. Developed with
                specialist makers and sourced from trusted dealers, every
                object is intended to age gracefully and live comfortably in a
                home.
              </p>
              <p>
                This marks a continuation of the studio&rsquo;s growth and a
                renewed commitment to thoughtful, considered design that
                resonates in everyday life.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Product grid */}
        <section className="mt-20 px-0 md:mt-28">
          <div className="grid grid-cols-1 gap-x-2 gap-y-12 px-6 sm:grid-cols-2 md:px-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 110}>
                <figure>
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      loading={i < 3 ? "eager" : "lazy"}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="label-tracked mt-5 px-1 text-[13px] text-maroon">
                    {p.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Get in touch */}
        <section className="grid grid-cols-1 items-start gap-14 px-6 py-24 md:px-14 md:py-32 lg:grid-cols-2">
          <Reveal>
            <h2 className="label-tracked text-[15px]">Get in Touch</h2>
            <div className="mt-12 max-w-xl">
              <EnquiryForm idPrefix="prod" />
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
              className="aspect-[3/4] mt-12 w-full object-cover"
            />
          </Reveal>
        </section>

        <YouMayLike slugs={["wowhouse", "bradby-house", "ferney-hall"]} />
      </main>
      <SiteFooter />
    </>
  );
}
