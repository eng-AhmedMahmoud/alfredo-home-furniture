"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-coffee text-ivory">
      <div className="container-x mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze">
            Say hello
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Tell us about your <span className="italic">home.</span>
          </h2>
          <p className="mt-6 text-ivory/75 leading-relaxed max-w-md">
            Looking for something specific? A new sofa, a custom dining table, a full home?
            Send us a note — a designer from the studio will get back to you within one
            business day.
          </p>

          <div className="mt-10 space-y-5 text-ivory/85 text-sm">
            <div>
              <div className="text-bronze text-[11px] uppercase tracking-widest">
                Email
              </div>
              <div className="mt-1 font-display text-xl">
                hello@alfredohome.com
              </div>
            </div>
            <div>
              <div className="text-bronze text-[11px] uppercase tracking-widest">
                Phone / WhatsApp
              </div>
              <div className="mt-1 font-display text-xl">+20 100 000 0000</div>
            </div>
            <div>
              <div className="text-bronze text-[11px] uppercase tracking-widest">
                Studio
              </div>
              <div className="mt-1 font-display text-xl">Cairo, Egypt</div>
            </div>
          </div>
        </div>

        <form
          className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 bg-walnut-dark/40 backdrop-blur p-6 md:p-10 rounded-2xl border border-ivory/10"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Field label="Your name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone (optional)" name="phone" />
          <Field
            label="What are you looking for?"
            name="interest"
            placeholder="e.g. Sofa for a 4×5m living room"
          />
          <div className="md:col-span-2">
            <label className="block">
              <span className="text-[11px] uppercase tracking-widest text-bronze">
                Tell us more
              </span>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-ivory/30 focus:border-bronze outline-none py-2 text-ivory placeholder:text-ivory/40 resize-none"
                placeholder="Room dimensions, style direction, timeline…"
              />
            </label>
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-4 flex-wrap mt-2">
            <p className="text-xs text-ivory/55 max-w-sm">
              By submitting, you agree to be contacted by our studio about your enquiry.
              No spam, ever.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ivory text-coffee px-6 py-3 text-sm font-medium hover:bg-cream transition disabled:opacity-60"
              disabled={sent}
            >
              {sent ? "Thanks — we'll be in touch" : "Send enquiry"}
              {!sent && <span aria-hidden>→</span>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-widest text-bronze">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-ivory/30 focus:border-bronze outline-none py-2 text-ivory placeholder:text-ivory/40"
      />
    </label>
  );
}
