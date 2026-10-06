import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/hfl/site-header";
import { SiteFooter } from "@/components/sites/hfl/site-footer";
import { Reveal } from "@/components/sites/hfl/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-6 pt-36 pb-24 md:px-14 md:pt-44">
        <Reveal className="max-w-2xl">
          <h1 className="label-tracked text-[15px]">Privacy Policy</h1>
          <div className="mt-10 space-y-6 text-[15px] leading-8 text-maroon">
            <p>
              Henri Fitzwilliam-Lay Ltd is committed to protecting your
              privacy. This policy describes how we collect, use, and safeguard
              any personal information you provide when using this website or
              joining our mailing list.
            </p>
            <p>
              When you submit an enquiry or subscribe to announcements, we
              collect the details you provide — such as your name, email
              address, and telephone number — solely for the purpose of
              responding to your enquiry or sending occasional studio news. We
              will never sell, distribute, or lease your personal information
              to third parties unless required by law to do so.
            </p>
            <p>
              You may request details of personal information which we hold
              about you, or ask us to remove it, at any time by writing to
              info@henrifitzwilliamlay.com. If you believe that any information
              we hold about you is incorrect or incomplete, please contact us
              and we will promptly correct it.
            </p>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
