import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service — ACCINA",
  description:
    "Terms governing your use of accina.co, our Instagram accounts, and our future products and services.",
  openGraph: {
    title: "Terms of Service — ACCINA",
    description: "Terms of service for ACCINA Co., Ltd.",
    url: "https://accina.co/terms",
    siteName: "ACCINA",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="The rules for using accina.co, our Instagram, and the things we make. Written to be readable; binding all the same."
      status="DRAFT · awaiting counsel review"
      lastUpdated="2026-06-06"
    >
      <h2>1. Agreement</h2>
      <p>
        By accessing or using <code>accina.co</code>, our sub-brand Instagram
        accounts, or placing an order, you (&quot;you&quot;, &quot;the
        user&quot;, &quot;the customer&quot;) agree to these Terms of Service.
      </p>
      <p>If you don&apos;t agree, please don&apos;t use the service.</p>

      <h2>2. About us</h2>
      <ul>
        <li>
          <strong>Legal name:</strong> ACCINA Co., Ltd.
        </li>
        <li>
          <strong>Registration:</strong> 0505569010977 (registered with the
          Department of Business Development, Thailand, 2026-05-18)
        </li>
        <li>
          <strong>Registered address:</strong> 189 หมู่ 5 ซอย ไชยเรืองศรี 1, ต.แม่เหียะ,
          อ.เมืองเชียงใหม่, จ.เชียงใหม่ 50100
        </li>
        <li>
          <strong>Contact:</strong> hello@accina.co
        </li>
      </ul>

      <h2>3. What you can do</h2>
      <ul>
        <li>
          Browse <code>accina.co</code> and our Instagram accounts
        </li>
        <li>Sign up for our newsletter</li>
        <li>Place orders for products when they become available</li>
        <li>
          Engage us for creative software services through a written agreement
          (SOW)
        </li>
        <li>
          Share our content socially with attribution (<code>@accina.co</code>)
        </li>
        <li>
          Quote short excerpts (under 250 characters) in journalism or
          critique with attribution
        </li>
      </ul>

      <h2>4. What you can&apos;t do</h2>
      <ul>
        <li>Use the service for any illegal purpose</li>
        <li>
          Reproduce our brand assets (logo, palette, photography, copy)
          without written permission
        </li>
        <li>Resell our products outside our authorized channels</li>
        <li>
          Reverse-engineer our products (specifically the magnetic side-load
          frame mechanism) for the purpose of producing competitive copies
        </li>
        <li>Use automated systems (scrapers, bots) to access in volume</li>
        <li>Misrepresent yourself when contacting us</li>
        <li>Use the service to harass, threaten, or harm others</li>
        <li>
          Upload malicious code or attempt to compromise our systems
        </li>
      </ul>
      <p>We may suspend or terminate access for violations.</p>

      <h2>5. Intellectual property</h2>
      <h3>5.1 Our content</h3>
      <p>
        All content on <code>accina.co</code> — text, images, logo, brand
        palette (Rose Honey · Pure), typography, product designs,
        photography, video, audio — is owned by ACCINA Co., Ltd. or licensed
        to us. You may not copy, distribute, modify, or commercially exploit
        without our written permission.
      </p>

      <h3>5.2 Product designs</h3>
      <p>
        Our physical product designs (including the magnetic side-load
        picture frame mechanism, planned to be filed for design patent) are
        protected by Thai intellectual property law. Knock-offs sold for
        commercial gain may be subject to enforcement action.
      </p>

      <h3>5.3 Your content</h3>
      <p>
        If you submit content to us (testimonials, reviews, photos of our
        products, social tags), you grant us a non-exclusive, royalty-free,
        perpetual, worldwide license to use, display, modify, and distribute
        that content in our marketing, with attribution where reasonable.
      </p>
      <p>
        You retain ownership. We will remove your content on reasonable
        request to <code>privacy@accina.co</code>.
      </p>

      <h3>5.4 Third-party content</h3>
      <p>
        We use Google Fonts (Fraunces, Geist, Geist Mono) under their
        open-source licenses.
      </p>

      <h2>6. Purchases and orders</h2>
      <ul>
        <li>
          The order is an offer to purchase, not a contract. We confirm by
          email; the contract forms at confirmation.
        </li>
        <li>
          Prices are in Thai Baht (THB). VAT inclusion is shown at checkout
          once VAT-registered.
        </li>
        <li>
          Foreign customers may pay in USD or EUR via Wise (when set up).
        </li>
        <li>
          Payment is processed via Stripe / Omise / bank transfer / Wise. We
          never store payment card information.
        </li>
        <li>
          Order acceptance is at our discretion. We may decline for lawful
          reasons (fraud risk, address issue, stock unavailability) and
          refund any payment taken.
        </li>
      </ul>
      <p>
        Returns, refunds, and shipping are governed by{" "}
        <a href="/returns">accina.co/returns</a>.
      </p>

      <h2>7. Creative services</h2>
      <ul>
        <li>
          A signed Statement of Work (SOW) governs the engagement. These Terms
          are the umbrella; the SOW is the specific contract.
        </li>
        <li>
          Standard payment terms: 50% on signing, 50% on delivery. NET 15
          unless varied in SOW.
        </li>
        <li>
          Intellectual property: deliverables transfer to client on{" "}
          <strong>full payment</strong>. Until paid, ACCINA retains ownership.
        </li>
        <li>
          ACCINA retains rights to use the work in our portfolio with
          reasonable client attribution. Confidential engagements: NDA in
          addition to SOW.
        </li>
        <li>
          Standard scope-change process: written request → impact assessment
          → Change Order → signed → executed.
        </li>
      </ul>

      <h2>8. Disclaimers</h2>
      <p>
        The service is provided &quot;as is&quot; and &quot;as
        available&quot;. To the maximum extent permitted by Thai law, we
        disclaim warranties regarding continuous, uninterrupted operation;
        accuracy of content; and fitness for a particular purpose. For
        physical products, statutory consumer protections under the Thai
        Consumer Protection Act apply.
      </p>

      <h2>9. Limitation of liability</h2>
      <ul>
        <li>
          ACCINA&apos;s total liability arising from your use of the service
          or purchase of products is limited to the amount you paid us in the
          12 months preceding the claim (or ฿5,000, whichever is greater).
        </li>
        <li>
          We are not liable for indirect, consequential, incidental, or
          special damages (lost profits, lost data, business interruption).
        </li>
      </ul>
      <p>
        This does not limit liability for death or personal injury caused by
        our negligence, fraud, or statutory consumer rights under Thai law.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold ACCINA harmless from any
        claims, damages, or losses arising from your breach of these Terms,
        your violation of any law, or your infringement of any third
        party&apos;s rights.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or terminate your access if you breach these Terms.
        Sections that by nature survive termination (IP rights, liability,
        indemnification, governing law) continue.
      </p>

      <h2>12. Governing law and dispute resolution</h2>
      <p>
        These Terms are governed by the laws of Thailand. The Thai Consumer
        Protection Act applies where applicable.
      </p>
      <ol>
        <li>
          <strong>First step:</strong> email{" "}
          <code>hello@accina.co</code> — we try to resolve in good faith
        </li>
        <li>
          <strong>If unresolved:</strong> Thai courts of competent
          jurisdiction (Chiang Mai Provincial Court by default)
        </li>
        <li>
          <strong>Alternatively:</strong> mediation through a recognized Thai
          mediation body (mutual agreement)
        </li>
      </ol>

      <h2>13. Force majeure</h2>
      <p>
        Neither party is liable for failure to perform due to events beyond
        reasonable control: natural disaster, pandemic, government action,
        supplier collapse, internet outage of national scope. We will
        communicate any impact promptly.
      </p>

      <h2>14. Changes to these Terms</h2>
      <p>
        We may update these Terms. Material changes will be announced via
        newsletter, a banner on <code>accina.co</code> for 30 days, and an
        updated &quot;Last updated&quot; date.
      </p>

      <h2>15. Entire agreement</h2>
      <p>
        These Terms, together with the <a href="/privacy">Privacy Policy</a>,{" "}
        <a href="/pdpa">PDPA Privacy Notice</a>,{" "}
        <a href="/returns">Returns/Refunds/Shipping Policy</a>, and any SOW
        for engagement work, constitute the entire agreement between you and
        ACCINA.
      </p>

      <h2>16. Contact</h2>
      <ul>
        <li>
          General questions: <code>hello@accina.co</code>
        </li>
        <li>
          Legal / IP / takedown: <code>legal@accina.co</code>
        </li>
        <li>
          Privacy: <code>privacy@accina.co</code>
        </li>
        <li>
          Returns / refunds: <code>returns@accina.co</code>
        </li>
        <li>
          Postal: ACCINA Co., Ltd., 189 หมู่ 5 ซอย ไชยเรืองศรี 1, ต.แม่เหียะ,
          อ.เมืองเชียงใหม่, จ.เชียงใหม่ 50100
        </li>
      </ul>
    </PolicyPage>
  );
}
