import Link from "next/link";
import { ReactNode } from "react";
import Footer from "./Footer";

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  status?: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function PolicyPage({
  eyebrow,
  title,
  subtitle,
  status,
  lastUpdated,
  children,
}: PolicyPageProps) {
  return (
    <div className="flex flex-col flex-1 bg-paper text-body">
      <header className="px-6 sm:px-12 lg:px-24 pt-16 pb-10 border-b border-ink/5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-block text-xs uppercase tracking-[0.3em] text-body/60 hover:text-ink transition-colors"
          >
            ← accina.co
          </Link>
          <p className="rise rise-1 mt-6 text-xs uppercase tracking-[0.3em] text-body/70">
            {eyebrow}
          </p>
          <h1 className="rise rise-2 mt-3 font-display text-4xl sm:text-5xl text-ink leading-tight tracking-wide font-light">
            {title}
          </h1>
          {subtitle && (
            <p className="rise rise-3 mt-4 text-base sm:text-lg text-body/90 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="rise rise-4 mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-body/60">
            {status && (
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-lemon" />
                {status}
              </span>
            )}
            <span>Last updated · {lastUpdated}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-12 lg:px-24 py-16">
        <article className="max-w-3xl mx-auto prose-policy">{children}</article>
      </main>

      <Footer />
    </div>
  );
}
