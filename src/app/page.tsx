import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-paper text-body">
      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="rise rise-1 text-xs uppercase tracking-[0.35em] text-body/70 mb-10">
            Est. 2026
          </p>

          <h1 className="rise rise-2 font-display text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[9rem] xl:text-[10rem] leading-[0.9] tracking-[0.05em] text-ink font-light">
            accina
          </h1>

          <p className="rise rise-3 mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-body max-w-xl">
            Made with the awareness that{" "}
            <span className="text-ink">everything changes.</span>
          </p>

          <div className="rise rise-4 mt-14 flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-lemon" />
            <p className="text-sm tracking-wide text-body/80">
              Rooted, not rigid.
            </p>
          </div>
          <p className="rise rise-5 mt-2 ml-[3.25rem] text-[10px] uppercase tracking-[0.3em] text-body/40">
            Move with what changes.
          </p>
        </div>
      </section>

      {/* What we make */}
      <section className="px-6 sm:px-12 lg:px-24 py-24 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <p className="rise text-xs uppercase tracking-[0.3em] text-body/70 mb-12">
            What we make
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <article className="rise rise-1">
              <h2 className="font-display text-2xl text-ink mb-3 tracking-wide flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/70"
                  aria-hidden="true"
                >
                  <rect x="3" y="8" width="18" height="4" rx="1" />
                  <path d="M12 8v13" />
                  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                  <path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 5 12 8c0-3 3-5 4.5-5a2.5 2.5 0 0 1 0 5" />
                </svg>
                Gifts
              </h2>
              <p className="text-body leading-relaxed text-base">
                Thoughtful objects for moments worth marking. Chosen with care,
                sent with intention.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-body/60">
                Coming soon
              </p>
            </article>

            <article className="rise rise-2">
              <h2 className="font-display text-2xl text-ink mb-3 tracking-wide flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/70"
                  aria-hidden="true"
                >
                  <path d="m12 3 9 4.5-9 4.5L3 7.5 12 3z" />
                  <path d="m3 12 9 4.5 9-4.5" />
                  <path d="m3 16.5 9 4.5 9-4.5" />
                </svg>
                Studio
              </h2>
              <p className="text-body leading-relaxed text-base">
                Digital assets, stock, and brand resources. Made by a maker,
                for other makers.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-body/60">
                In progress
              </p>
            </article>

            <article className="rise rise-3">
              <h2 className="font-display text-2xl text-ink mb-3 tracking-wide flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/70"
                  aria-hidden="true"
                >
                  <rect x="4" y="11" width="16" height="10" rx="1.5" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
                Locked
              </h2>
              <p className="text-body leading-relaxed text-base">
                Something quiet is being made.
                <br />
                Not ready to be named yet.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-body/60">
                Sealed
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 sm:px-12 lg:px-24 py-32">
        <div className="max-w-2xl mx-auto text-center">
          <p
            aria-hidden="true"
            className="rise text-xs text-paper mb-12 tracking-[0.35em]"
          >
            अनिच्च
          </p>
          <p className="rise rise-1 font-display text-2xl sm:text-3xl text-ink leading-relaxed tracking-wide">
            All that arises, passes away.
          </p>
          <p className="rise rise-2 mt-6 font-display text-2xl sm:text-3xl text-ink leading-relaxed tracking-wide">
            Nothing stays.
          </p>
          <p className="rise rise-3 mt-6 font-display text-2xl sm:text-3xl text-ink leading-relaxed tracking-wide">
            What remains is how we care.
          </p>
          <div className="rise rise-4 mt-14 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-ink/30" />
            <span className="text-xs uppercase tracking-[0.35em] text-body/60 breathe">
              The thread
            </span>
            <span className="inline-block w-8 h-px bg-ink/30" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
