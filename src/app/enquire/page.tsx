import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { Reveal } from "@/components/sites/hfl/reveal";
import { EnquiryForm } from "@/components/sites/hfl/enquiry-form";
import { HflLogo } from "@/components/sites/hfl/hfl-logo";

export const metadata: Metadata = {
  title: "Enquire",
};

export default function EnquirePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="grid grid-cols-1 lg:min-h-[calc(100vh-320px)] lg:grid-cols-2">
          {/* Left: info + form */}
          <section className="px-6 pt-36 pb-20 md:px-14 md:pt-44">
            <Reveal>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <h1 className="label-tracked text-[15px]">Enquire</h1>
                  <p className="mt-6 text-[15px] leading-7 text-maroon">
                    We&rsquo;ve Moved! Please note our new address below.
                  </p>
                  <p className="mt-6 text-[15px] leading-7 text-maroon">
                    Henri Fitzwilliam-Lay Ltd
                    <br />
                    4 Portland Rd, Holland Park,
                    <br />
                    London, W11 4LA
                  </p>
                  <p className="mt-6 text-[15px] leading-7 text-maroon">
                    Office hours:
                    <br />
                    Monday &ndash; Friday, 09:00 &ndash; 17:30
                  </p>
                  <p className="mt-6 text-[15px] leading-7 text-maroon">
                    Registered office:
                    <br />
                    Ferney Hall, Onibury, Shropshire, SY7 9BJ
                  </p>
                </div>
                <div className="text-[15px] leading-7">
                  <h2 className="label-tracked text-[13px]">Telehone</h2>
                  <p className="mt-3">
                    <a href="tel:+442072217100" className="hover:opacity-70 transition-opacity">
                      0207 221 7100
                    </a>
                  </p>
                  <h2 className="label-tracked mt-7 text-[13px]">Email</h2>
                  <p className="mt-3">
                    <a
                      href="mailto:info@henrifitzwilliamlay.com"
                      className="hover:opacity-70 transition-opacity"
                    >
                      info@henrifitzwilliamlay.com
                    </a>
                  </p>
                  <h2 className="label-tracked mt-7 text-[13px]">Press</h2>
                  <p className="mt-3">
                    <a
                      href="mailto:press@henrifitzwilliamlay.com"
                      className="hover:opacity-70 transition-opacity"
                    >
                      press@henrifitzwilliamlay.com
                    </a>
                  </p>
                  <h2 className="label-tracked mt-7 text-[13px]">Instagram</h2>
                  <p className="mt-3">
                    <a
                      href="https://www.instagram.com/henrifitz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      @henrifitz
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-16 max-w-xl">
                <EnquiryForm idPrefix="enquire" />
              </div>
            </Reveal>
          </section>

          {/* Right: map */}
          <section aria-label="Map of the studio location" className="relative min-h-[420px] bg-[#e8e5df]">
            <iframe
              title="Map — 4 Portland Rd, Holland Park, London"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.210%2C51.505%2C-0.195%2C51.517&layer=mapnik&marker=51.511%2C-0.2025"
              className="absolute inset-0 h-full w-full grayscale contrast-[0.92] opacity-90"
              loading="lazy"
            />
            {/* Custom maroon pin overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-maroon text-cream shadow-lg"
            >
              <HflLogo className="h-8 w-auto" />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
