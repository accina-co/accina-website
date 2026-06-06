import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-24 pb-16 pt-12 border-t border-ink/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <Link href="/" className="inline-block">
              <p className="font-display text-lg text-ink tracking-[0.2em]">
                accina
              </p>
            </Link>
            <p className="mt-2 text-sm text-body/70">
              ACCINA Co., Ltd. · Chiang Mai · Founded 2026
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-body/50">
              Say hello
            </p>
            <a
              href="mailto:hello@accina.co"
              className="text-sm text-ink hover:text-sky transition-colors"
            >
              hello@accina.co
            </a>
            <p className="mt-2 text-xs text-body/50">
              © 2026 — for as long as it makes sense.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-ink/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-body/60"
          >
            <Link
              href="/privacy"
              className="hover:text-ink transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms
            </Link>
            <Link href="/pdpa" className="hover:text-ink transition-colors">
              PDPA · ความเป็นส่วนตัว
            </Link>
            <Link
              href="/returns"
              className="hover:text-ink transition-colors"
            >
              Returns &amp; shipping
            </Link>
          </nav>
          <p className="text-[10px] uppercase tracking-[0.3em] text-body/40">
            อนิจจัง · all that arises, passes away
          </p>
        </div>
      </div>
    </footer>
  );
}
