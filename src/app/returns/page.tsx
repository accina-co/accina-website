import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Returns, Refunds & Shipping — ACCINA",
  description:
    "Shipping rates, returns conditions, and refund mechanics for ACCINA Gifts and future ACCINA products.",
  openGraph: {
    title: "Returns, Refunds & Shipping — ACCINA",
    description: "Order policy for ACCINA products.",
    url: "https://accina.co/returns",
    siteName: "ACCINA",
    type: "website",
  },
};

export default function ReturnsPage() {
  return (
    <PolicyPage
      eyebrow="Order policy"
      title="Returns, Refunds &amp; Shipping"
      subtitle="The rules for getting things to you, and back to us if they don't fit. Apply to all physical product purchases."
      status="DRAFT · awaiting counsel review"
      lastUpdated="2026-06-06"
    >
      <h2>1. Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Quick answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Domestic shipping</td>
            <td>฿80 standard · ฿150 express · <strong>FREE over ฿1,200</strong></td>
          </tr>
          <tr>
            <td>International shipping</td>
            <td>฿450-1,200 depending on zone (calculated at checkout)</td>
          </tr>
          <tr>
            <td>Processing time</td>
            <td>2-5 business days</td>
          </tr>
          <tr>
            <td>Returns window</td>
            <td>14 days (Thai customers) · 30 days (international)</td>
          </tr>
          <tr>
            <td>Returns condition</td>
            <td>Unused, original packaging, with proof of purchase</td>
          </tr>
          <tr>
            <td>Refund timeframe</td>
            <td>Within 14 days of return receipt</td>
          </tr>
          <tr>
            <td>Engraved / personalized</td>
            <td>Non-returnable except defects</td>
          </tr>
        </tbody>
      </table>
      <p>
        If you have a specific situation, email{" "}
        <code>returns@accina.co</code> — we work with you.
      </p>

      <h2>2. Shipping</h2>
      <h3>2.1 Domestic (Thailand)</h3>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Rate</th>
            <th>Estimated delivery</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard (Kerry / Flash)</td>
            <td>฿80 flat</td>
            <td>2-4 business days</td>
          </tr>
          <tr>
            <td>Express (Kerry ASAP)</td>
            <td>฿150 flat</td>
            <td>1-2 business days (BKK + selected provinces)</td>
          </tr>
          <tr>
            <td>
              <strong>Free standard</strong>
            </td>
            <td>฿0</td>
            <td>Orders ≥ ฿1,200 total</td>
          </tr>
          <tr>
            <td>Self-pickup (Chiang Mai)</td>
            <td>฿0</td>
            <td>Same day by appointment</td>
          </tr>
        </tbody>
      </table>
      <p>
        Domestic shipping is fully tracked. Tracking number sent within 24
        hours of dispatch.
      </p>

      <h3>2.2 International</h3>
      <table>
        <thead>
          <tr>
            <th>Zone</th>
            <th>Examples</th>
            <th>Rate (est.)</th>
            <th>Estimated delivery</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A — Southeast Asia</td>
            <td>Singapore, Malaysia, Indonesia</td>
            <td>฿450-650</td>
            <td>5-10 business days</td>
          </tr>
          <tr>
            <td>B — East Asia</td>
            <td>Japan, S.Korea, Taiwan, HK</td>
            <td>฿550-750</td>
            <td>7-14 business days</td>
          </tr>
          <tr>
            <td>C — Oceania</td>
            <td>Australia, NZ</td>
            <td>฿650-850</td>
            <td>10-15 business days</td>
          </tr>
          <tr>
            <td>D — Europe / North America</td>
            <td>UK, EU, US, Canada</td>
            <td>฿750-1,200</td>
            <td>10-20 business days</td>
          </tr>
          <tr>
            <td>E — Other</td>
            <td>Rest of world</td>
            <td>Calculated</td>
            <td>Calculated</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Customs and duties:</strong> the customer is responsible for
        any import duties, taxes, or customs fees in the destination country.
      </p>

      <h3>2.3 Processing time</h3>
      <p>
        Orders are processed and dispatched within{" "}
        <strong>2-5 business days</strong> of payment confirmation.
        Personalized/engraved items add 3-5 business days.
      </p>
      <p>
        If we expect a delay (out of stock, materials shortage), we notify
        you within 24 hours.
      </p>

      <h3>2.4 Cancellations</h3>
      <ul>
        <li>
          <strong>Before dispatch:</strong> yes — email{" "}
          <code>returns@accina.co</code>, full refund within 7 business days
        </li>
        <li>
          <strong>After dispatch:</strong> no — follow Returns process below
        </li>
        <li>
          <strong>Personalized/engraved (production started):</strong> no
          after production begins
        </li>
      </ul>

      <h2>3. Returns</h2>
      <h3>3.1 Returns window</h3>
      <ul>
        <li>
          <strong>Thailand:</strong> 14 calendar days from delivery (above
          the 7-day Thai Consumer Protection Act minimum)
        </li>
        <li>
          <strong>International:</strong> 30 calendar days from delivery
        </li>
      </ul>
      <p>The clock starts on the date the courier marks &quot;Delivered&quot;.</p>

      <h3>3.2 Conditions</h3>
      <ul>
        <li>Item is unused (no marks, scratches, soiling, scent)</li>
        <li>
          Item is in original packaging (kraft envelope, linen pouch, brand
          card all intact)
        </li>
        <li>You have proof of purchase (order number or receipt)</li>
        <li>Return is initiated within the window</li>
      </ul>

      <h3>3.3 How to return</h3>
      <ol>
        <li>
          Email <code>returns@accina.co</code> with order number, reason, and
          preferred refund method
        </li>
        <li>
          We reply within <strong>2 business days</strong> with return
          instructions and address
        </li>
        <li>
          You ship the item back at your cost (unless §5 applies)
        </li>
        <li>
          We inspect within <strong>3 business days</strong> of receipt
        </li>
        <li>
          We process the refund within <strong>14 days</strong> of inspection
          (typically much faster)
        </li>
      </ol>

      <h3>3.4 What can&apos;t be returned</h3>
      <ul>
        <li>
          Engraved / personalized items (except manufacturing defect or our
          error)
        </li>
        <li>Items damaged by customer</li>
        <li>Items returned outside the window</li>
        <li>
          Items without original packaging (partial refund possible at
          discretion)
        </li>
        <li>
          Sale / clearance items marked &quot;Final sale&quot; (except
          defects)
        </li>
        <li>
          Digital assets (ACCINA Assets — future) except download failure
        </li>
      </ul>

      <h2>4. Refunds</h2>
      <h3>4.1 Refund method</h3>
      <p>By default, refund is to the original payment method.</p>
      <table>
        <thead>
          <tr>
            <th>Payment method</th>
            <th>Estimated timing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Credit/debit card (Stripe/Omise)</td>
            <td>5-10 business days (bank-dependent)</td>
          </tr>
          <tr>
            <td>Thai bank transfer</td>
            <td>1-3 business days</td>
          </tr>
          <tr>
            <td>Wise / international transfer</td>
            <td>1-3 business days</td>
          </tr>
          <tr>
            <td>Promptpay</td>
            <td>Same day - 1 business day</td>
          </tr>
        </tbody>
      </table>

      <h3>4.2 Refund amount</h3>
      <ul>
        <li>
          <strong>Item price:</strong> fully refunded if returned per §3
        </li>
        <li>
          <strong>Original shipping:</strong> refunded if return is due to
          our error
        </li>
        <li>
          <strong>Original shipping:</strong> NOT refunded if return is
          customer preference
        </li>
        <li>
          <strong>Return shipping:</strong> customer-paid unless §5 applies
        </li>
      </ul>

      <h3>4.3 Partial refunds</h3>
      <p>We may offer a partial refund if:</p>
      <ul>
        <li>Item returned beyond window but within 7 days of expiry</li>
        <li>Packaging damaged but item intact</li>
        <li>Item shows minor signs of use</li>
      </ul>

      <h2>5. Damaged / defective items</h2>
      <p>If your item arrives damaged or has a manufacturing defect:</p>
      <ol>
        <li>
          Within 7 days of delivery, email{" "}
          <code>returns@accina.co</code> with order number + photos of the
          damage (and box if damaged in transit)
        </li>
        <li>
          We assess within <strong>2 business days</strong>
        </li>
        <li>
          If confirmed: your options are{" "}
          <strong>replacement</strong> (we cover all return + replacement
          shipping), <strong>full refund</strong> (item + original shipping
          + return shipping), or <strong>partial refund + keep item</strong>
        </li>
      </ol>

      <h2>6. International-specific notes</h2>
      <ul>
        <li>
          <strong>Currency:</strong> all prices in THB. International shoppers
          see equivalent in USD/EUR at checkout via Wise rate.
        </li>
        <li>
          <strong>Refunds in original currency:</strong> refunded amount is
          the THB amount received, converted back via the same processor. FX
          gain/loss is the customer&apos;s.
        </li>
        <li>
          <strong>Return shipping from overseas:</strong> the customer bears
          the cost. We work with you to find the cheapest method.
        </li>
        <li>
          <strong>Customs returns:</strong> if a package returns to us
          because of unpaid customs duties at destination, the customer bears
          original shipping. We refund product cost only.
        </li>
      </ul>

      <h2>7. Wholesale / B2B orders</h2>
      <ul>
        <li>Returns only for manufacturing defects</li>
        <li>Inspection window: 14 days from delivery</li>
        <li>Replacement-first policy</li>
        <li>Specific terms negotiated per PO</li>
      </ul>
      <p>
        For wholesale: <code>hello@accina.co</code>.
      </p>

      <h2>8. Sustainability note</h2>
      <p>
        Returns generate carbon. We&apos;d rather make the right thing once
        than ship-and-return three times.
      </p>
      <ul>
        <li>Detailed product specs on every listing — measure before you order</li>
        <li>Real photos under natural light — what you see is what you get</li>
        <li>
          Returned items in mint condition may be resold as B-stock at a
          discount (clearly marked); damaged returns are responsibly recycled
        </li>
      </ul>
      <p>
        If you&apos;re unsure whether a piece fits, email us before ordering.
      </p>

      <h2>9. Disputes</h2>
      <ol>
        <li>
          <strong>First:</strong> email <code>returns@accina.co</code> —
          escalate to the director directly
        </li>
        <li>
          <strong>Second:</strong> Thai Consumer Protection Board
          (สำนักงานคณะกรรมการคุ้มครองผู้บริโภค — สคบ.) —{" "}
          <a
            href="https://www.ocpb.go.th"
            target="_blank"
            rel="noreferrer"
          >
            ocpb.go.th
          </a>
        </li>
        <li>
          <strong>Third:</strong> mediation via the Chiang Mai Consumer
          Mediation Centre
        </li>
        <li>
          <strong>Last resort:</strong> Chiang Mai Provincial Court
        </li>
      </ol>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy. Material changes will be announced via
        newsletter, a banner on <code>accina.co</code> for 30 days, and an
        updated &quot;Last updated&quot; date.
      </p>

      <h2>11. Contact</h2>
      <ul>
        <li>
          Returns / refunds: <code>returns@accina.co</code>
        </li>
        <li>
          Damaged on arrival: <code>returns@accina.co</code> (within 7 days)
        </li>
        <li>
          Wholesale terms: <code>hello@accina.co</code>
        </li>
        <li>
          Postal: ACCINA Co., Ltd., 189 หมู่ 5 ซอย ไชยเรืองศรี 1, ต.แม่เหียะ, อ.เมืองเชียงใหม่,
          จ.เชียงใหม่ 50100
        </li>
      </ul>
    </PolicyPage>
  );
}
