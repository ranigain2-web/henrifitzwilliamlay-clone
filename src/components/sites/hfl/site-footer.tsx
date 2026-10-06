import Link from "next/link";
import { HflLogo } from "./hfl-logo";
import { FooterSubscribe } from "./footer-subscribe";

export function SiteFooter() {
  return (
    <footer className="bg-maroon text-cream">
      <div className="px-6 pt-16 pb-8 md:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[auto_1fr_1fr_1.4fr_auto] xl:gap-10">
          {/* Logo */}
          <div>
            <Link href="/" aria-label="Henri Fitzwilliam-Lay — home">
              <HflLogo className="h-20 w-auto" />
            </Link>
          </div>

          {/* Address + contact */}
          <div className="text-sm leading-7">
            <p>
              Henri Fitzwilliam-Lay Ltd
              <br />
              4 Portland Rd, Holland Park,
              <br />
              London, W11 4LA
            </p>
            <p className="mt-6">
              <a
                href="mailto:info@henrifitzwilliamlay.com"
                className="hover:opacity-80 transition-opacity"
              >
                info@henrifitzwilliamlay.com
              </a>
              <br />
              <a href="tel:+442072217100" className="hover:opacity-80 transition-opacity">
                0207 221 7100
              </a>
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="text-sm leading-7">
            <ul>
              <li>
                <Link href="/terms" className="hover:opacity-80 transition-opacity">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:opacity-80 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/henrifitz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link href="/enquire" className="hover:opacity-80 transition-opacity">
                  Enquire
                </Link>
              </li>
            </ul>
          </nav>

          {/* Subscribe */}
          <FooterSubscribe />

          {/* Badges */}
          <div className="flex items-start gap-5">
            <img
              src="/sites/hfl/images/email-white-scaled-rlcx06396g8el8t1hqruptrcud9k4i9sx3r95pau50.png"
              alt="House & Garden 101"
              className="h-14 w-auto"
            />
            <img
              src="/sites/hfl/images/logo-thelist3x.png"
              alt="We're on The List — House & Garden"
              className="h-14 w-auto"
            />
            <img
              src="/sites/hfl/images/logo-riid3x.png"
              alt="British Institute of Interior Design — Registered Interior Designer"
              className="h-14 w-auto"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-sm text-cream/85 md:flex-row md:items-center md:justify-between">
          <p>All content copyright © Henri Fitzwilliam-Lay Ltd. All rights reserved.</p>
          <p>
            Site crafted by{" "}
            <a
              href="https://march.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cream hover:opacity-80 transition-opacity"
            >
              March
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
