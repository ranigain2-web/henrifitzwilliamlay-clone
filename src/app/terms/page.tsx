import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { Reveal } from "@/components/sites/hfl/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-6 pt-36 pb-24 md:px-14 md:pt-44">
        <Reveal className="max-w-2xl">
          <h1 className="label-tracked text-[15px]">Terms &amp; Conditions</h1>
          <div className="mt-10 space-y-6 text-[15px] leading-8 text-maroon">
            <p>
              Welcome to the Henri Fitzwilliam-Lay Ltd website. By accessing
              and using this website, you accept and agree to be bound by the
              terms and provisions of this agreement. If you do not agree to
              abide by the above, please do not use this site.
            </p>
            <p>
              All content included on this site — including text, graphics,
              images, photographs, and design — is the property of Henri
              Fitzwilliam-Lay Ltd or its content suppliers and is protected by
              applicable copyright and trademark law. The material may not be
              copied, reproduced, republished, or distributed without prior
              written consent.
            </p>
            <p>
              These terms are governed by the laws of England and Wales, and
              any disputes relating to these terms will be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
            <p>
              For any questions regarding these terms, please contact the
              studio at info@henrifitzwilliamlay.com or write to Henri
              Fitzwilliam-Lay Ltd, 4 Portland Rd, Holland Park, London, W11
              4LA.
            </p>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
