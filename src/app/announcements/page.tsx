import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { Reveal } from "@/components/sites/hfl/reveal";
import {
  announcements,
  featuredAnnouncement,
  type Announcement,
} from "@/components/sites/hfl/data";

export const metadata: Metadata = {
  title: "Announcements",
};

function AnnouncementCard({ item }: { item: Announcement }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="label-tracked mt-5 text-[13px] leading-6">{item.title}</h3>
    </a>
  );
}

export default function AnnouncementsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-6 pt-36 pb-24 md:px-14 md:pt-44">
        {/* Featured announcement */}
        <Reveal>
          <a
            href={featuredAnnouncement.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 items-end gap-10 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1">
              <h2 className="label-tracked max-w-md text-sm leading-7 md:text-[15px]">
                {featuredAnnouncement.title}
              </h2>
              <span className="link-underline mt-5 inline-block text-sm">
                Read Article
              </span>
            </div>
            <div className="order-1 overflow-hidden lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredAnnouncement.image}
                alt={featuredAnnouncement.title}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </a>
        </Reveal>

        {/* Grid */}
        <div className="mt-24 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {announcements.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 90}>
              <AnnouncementCard item={item} />
            </Reveal>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
