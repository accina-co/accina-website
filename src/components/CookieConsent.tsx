"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "accina_cookie_consent_v1";
const CHANGE_EVENT = "accina:consent-change";

type Consent = "accepted" | "essential-only" | null;

function readStorage(): Consent {
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "essential-only" ? v : null;
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getServerSnapshot(): Consent {
  return null;
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribe,
    readStorage,
    getServerSnapshot,
  );

  if (consent !== null) return null;

  const accept = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    // Same-tab setItem doesn't trigger the `storage` event — dispatch our own.
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-card text-body border border-ink/10 rounded-2xl shadow-[0_8px_40px_-12px_rgba(42,24,48,0.25)] p-5 sm:p-6"
    >
      <p className="font-display text-base sm:text-lg text-ink tracking-wide mb-2">
        A small note about cookies
      </p>
      <p className="text-sm leading-relaxed text-body/90">
        We use essential cookies to make the site work. With your consent, we
        also measure anonymized traffic via Google Analytics — never anything
        identifying. You can change your mind anytime.
      </p>
      <p className="mt-2 text-xs text-body/60">
        See{" "}
        <a
          href="/privacy"
          className="underline decoration-ink/30 hover:decoration-ink underline-offset-2"
        >
          Privacy Policy
        </a>{" "}
        ·{" "}
        <a
          href="/pdpa"
          className="underline decoration-ink/30 hover:decoration-ink underline-offset-2"
        >
          PDPA
        </a>
        .
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => accept("accepted")}
          className="inline-flex items-center justify-center rounded-full bg-ink text-paper text-sm px-5 py-2 hover:bg-primary transition-colors"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => accept("essential-only")}
          className="inline-flex items-center justify-center rounded-full border border-ink/20 text-ink text-sm px-5 py-2 hover:bg-cream/40 transition-colors"
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
