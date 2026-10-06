"use client";

import Link from "next/link";

export function FooterSubscribe() {
  return (
    <div className="w-full max-w-md">
      <p className="label-tracked text-[15px] text-cream/90">
        Subscribe for announcements
      </p>
      <form
        className="mt-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="footer-email" className="sr-only">
          Email
        </label>
        <input
          id="footer-email"
          type="email"
          placeholder="Type email and press enter"
          className="w-full bg-white/25 px-4 py-3 text-sm text-cream placeholder:text-cream/80 focus:outline-none focus:bg-white/30 transition-colors"
        />
      </form>
      <p className="mt-4 text-sm text-cream/85">
        By joining the mailing list, I agree to the{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:opacity-80">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
