"use client";

import { useState } from "react";

export function EnquiryForm({ idPrefix = "enq" }: { idPrefix?: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label htmlFor={`${idPrefix}-first`} className="sr-only">
          First name
        </label>
        <input
          id={`${idPrefix}-first`}
          name="firstName"
          required
          placeholder="First name"
          className="field-underline text-sm"
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-last`} className="sr-only">
          Last name
        </label>
        <input
          id={`${idPrefix}-last`}
          name="lastName"
          required
          placeholder="Last name"
          className="field-underline text-sm"
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className="sr-only">
          Your email address
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          placeholder="Your email address"
          className="field-underline text-sm"
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-tel`} className="sr-only">
          Telephone
        </label>
        <input
          id={`${idPrefix}-tel`}
          name="telephone"
          type="tel"
          placeholder="Telephone"
          className="field-underline text-sm"
        />
      </div>
      <div className="relative sm:col-span-2">
        <label htmlFor={`${idPrefix}-subject`} className="sr-only">
          Subject
        </label>
        <select
          id={`${idPrefix}-subject`}
          name="subject"
          required
          defaultValue=""
          className="field-underline appearance-none text-sm pr-8"
        >
          <option value="" disabled>
            Subject
          </option>
          <option value="project">Project enquiry</option>
          <option value="press">Press</option>
          <option value="other">Other</option>
        </select>
        <svg
          viewBox="0 0 16 9"
          aria-hidden="true"
          className="pointer-events-none absolute right-1 top-1/2 w-3.5 -translate-y-1/2 text-maroon"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M1 1l7 7 7-7" />
        </svg>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${idPrefix}-message`} className="sr-only">
          Your message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={3}
          placeholder="Your message"
          className="field-underline resize-none text-sm"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="mailingList"
            className="mt-1 h-4 w-4 shrink-0 appearance-none border border-maroon/70 bg-transparent checked:bg-maroon focus:outline-none"
          />
          <span>
            Mailing List — By joining the mailing list, I agree to the{" "}
            <a href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="label-tracked bg-maroon px-8 py-3.5 text-[13px] text-cream hover:bg-[#4a2324] transition-colors"
        >
          {sent ? "Thank you" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}
