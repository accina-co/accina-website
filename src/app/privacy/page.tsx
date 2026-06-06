import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ACCINA",
  description:
    "How ACCINA Co., Ltd. handles personal data. The plain-language explanation paired with our PDPA Privacy Notice.",
  openGraph: {
    title: "Privacy Policy — ACCINA",
    description: "How ACCINA handles personal data.",
    url: "https://accina.co/privacy",
    siteName: "ACCINA",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How ACCINA Co., Ltd. handles your personal data. Plain language. Paired with our Thai-law PDPA notice."
      status="DRAFT · awaiting counsel review"
      lastUpdated="2026-06-06"
    >
      <blockquote>
        This Privacy Policy is paired with our{" "}
        <a href="/pdpa">PDPA Privacy Notice</a> (Thai law) and{" "}
        <a href="/terms">Terms of Service</a>. The PDPA notice satisfies the
        Thai legal disclosure under PDPA Section 23. This policy is the
        general plain-language explanation of how ACCINA handles user data.
      </blockquote>

      <h2>1. Who we are</h2>
      <p>
        <strong>ACCINA Co., Ltd.</strong> (the &quot;Company&quot;,
        &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a private limited
        company registered in Thailand.
      </p>
      <ul>
        <li>Registration number: 0505569010977</li>
        <li>
          Registered office: 189 หมู่ 5 ซอย ไชยเรืองศรี 1, ต.แม่เหียะ, อ.เมืองเชียงใหม่,
          จ.เชียงใหม่ 50100
        </li>
        <li>Website: https://accina.co</li>
        <li>Contact: hello@accina.co</li>
      </ul>
      <p>
        We operate <code>accina.co</code> and the sub-brand Instagram accounts{" "}
        <code>@accina.co</code>, <code>@accina.gifts</code>,{" "}
        <code>@accina.packing</code>, <code>@accina.paper</code> (and future).
        This policy applies to all of them.
      </p>

      <h2>2. Data we collect</h2>
      <p>We try to collect as little personal data as possible.</p>
      <table>
        <thead>
          <tr>
            <th>Data type</th>
            <th>When collected</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email address</td>
            <td>Newsletter signup · contact · order</td>
            <td>Reply · confirm · marketing if consented</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Order · contact</td>
            <td>Address shipments · personalize replies</td>
          </tr>
          <tr>
            <td>Shipping address</td>
            <td>Order placement</td>
            <td>Deliver physical products</td>
          </tr>
          <tr>
            <td>Phone (optional)</td>
            <td>Order placement</td>
            <td>Courier delivery · order issues</td>
          </tr>
          <tr>
            <td>Payment information</td>
            <td>Order placement</td>
            <td>
              <strong>Never stored by us.</strong> Payment processor only.
            </td>
          </tr>
          <tr>
            <td>Analytics (anonymous)</td>
            <td>Every page visit</td>
            <td>Understand which pages are used</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do <strong>not</strong> collect ID card numbers (except for tax
        invoices, handled separately), biometric data, children&apos;s data
        (service not directed to anyone under 20), or sensitive data (race,
        religion, health).
      </p>

      <h2>3. How we use your data</h2>
      <ul>
        <li>
          <strong>Operating the service</strong> — sending you the thing you
          ordered, replying to your email
        </li>
        <li>
          <strong>Improving the service</strong> — measuring which pages get
          attention
        </li>
        <li>
          <strong>Marketing (only with consent)</strong> — newsletters if you
          opt in. One-click unsubscribe.
        </li>
        <li>
          <strong>Legal obligations</strong> — keeping invoices for 5 years
          (Thai Revenue Department)
        </li>
      </ul>
      <p>
        We do <strong>not</strong> sell to third parties, profile you for
        advertising, or cross-track you across sites beyond anonymized GA4.
      </p>

      <h2>4. Sharing your data</h2>
      <p>We share data only with parties that help us run the business:</p>
      <ul>
        <li>
          <strong>Vercel</strong> — website hosting (IP + request metadata)
        </li>
        <li>
          <strong>Cloudflare</strong> — DNS + email routing (IP + email data)
        </li>
        <li>
          <strong>Google Analytics 4</strong> — anonymized usage events
        </li>
        <li>
          <strong>Payment processor</strong> (Stripe / Omise — TBD) — order
          and payment details
        </li>
        <li>
          <strong>Courier</strong> (Kerry Express, Thailand Post, Flash —
          TBD) — name, address, phone
        </li>
        <li>
          <strong>Thai government</strong> (Revenue, DBD) — invoices, tax
          records as legally required
        </li>
      </ul>
      <p>
        We do <strong>not</strong> sell, rent, or trade your data with anyone.
        Ever.
      </p>

      <h2>5. Cookies</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Purpose</th>
            <th>Consent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Essential</td>
            <td>Session, cart state</td>
            <td>No (required)</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Google Analytics 4 (anonymized)</td>
            <td>Yes — opt-in banner on first visit</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do <strong>not</strong> use marketing/advertising cookies or
        third-party tracking pixels.
      </p>

      <h2>6. Tax-invoice data (Thai businesses)</h2>
      <p>
        If you ask for a tax invoice we collect your company tax ID, company
        name, and registered address. We use this solely for issuing the
        invoice and the Revenue Department record. Retention: 5 years.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Under Thai PDPA (Personal Data Protection Act, B.E. 2562) and most
        international standards, you can:
      </p>
      <ul>
        <li>
          <strong>Access</strong> — get a copy of your data
        </li>
        <li>
          <strong>Correct</strong> — fix data that&apos;s wrong
        </li>
        <li>
          <strong>Delete</strong> — ask us to erase your data (except tax
          records we&apos;re legally required to keep)
        </li>
        <li>
          <strong>Restrict</strong> — tell us to stop using your data for
          marketing while keeping it for orders
        </li>
        <li>
          <strong>Object</strong> — object to specific uses
        </li>
        <li>
          <strong>Portability</strong> — get your data in CSV/JSON
        </li>
        <li>
          <strong>Withdraw consent</strong> — take back any consent you gave
        </li>
        <li>
          <strong>Complain</strong> — to the PDPA committee (
          <a href="https://www.pdpc.or.th" target="_blank" rel="noreferrer">
            pdpc.or.th
          </a>
          )
        </li>
      </ul>
      <p>
        Email <code>privacy@accina.co</code> · we reply within 30 days. Never
        charged.
      </p>

      <h2>8. Data retention</h2>
      <ul>
        <li>Order records (legal req): 5 years</li>
        <li>Newsletter list: until unsubscribe or 2 years inactivity</li>
        <li>Contact form: 2 years</li>
        <li>Analytics: 14 months (GA4 default)</li>
        <li>Email correspondence: 3 years</li>
      </ul>

      <h2>9. Security</h2>
      <ul>
        <li>HTTPS on all pages (Cloudflare SSL)</li>
        <li>Encrypted database storage (Postgres at rest)</li>
        <li>Limited access (sole director currently)</li>
        <li>1Password for credentials</li>
        <li>Two-factor authentication on all admin accounts</li>
      </ul>
      <p>
        We have not experienced a data breach. If we ever do, we will notify
        affected users within 72 hours and notify the PDPA committee where
        Thai law requires.
      </p>

      <h2>10. International transfers</h2>
      <p>
        ACCINA is based in Thailand. Some service providers (Vercel,
        Cloudflare, Google) process data in the EU and US. We pick processors
        with strong privacy commitments (GDPR-compliant, SCCs in place where
        required).
      </p>

      <h2>11. Children</h2>
      <p>
        This service is not directed to anyone under 20 (Thai legal age of
        majority). We do not knowingly collect data from minors. If you
        believe a minor has provided data to us, email{" "}
        <code>privacy@accina.co</code> and we will delete it.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this policy. Material changes will be announced via
        newsletter, a banner on <code>accina.co</code> for 30 days, and an
        updated &quot;Last updated&quot; date at the top.
      </p>

      <h2>13. Contact</h2>
      <ul>
        <li>
          Privacy questions / rights requests:{" "}
          <code>privacy@accina.co</code>
        </li>
        <li>
          General contact: <code>hello@accina.co</code>
        </li>
        <li>
          Postal: ACCINA Co., Ltd., 189 หมู่ 5 ซอย ไชยเรืองศรี 1, ต.แม่เหียะ, อ.เมืองเชียงใหม่,
          จ.เชียงใหม่ 50100
        </li>
      </ul>

      <h2>14. Governing law</h2>
      <p>
        This Privacy Policy is governed by the laws of Thailand. The PDPA
        (Personal Data Protection Act, B.E. 2562) is the primary statute.
      </p>
    </PolicyPage>
  );
}
