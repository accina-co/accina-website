import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "ประกาศความเป็นส่วนตัว (PDPA Notice) — ACCINA",
  description:
    "ประกาศความเป็นส่วนตัวของบริษัท แอคซิน่า จำกัด ตามมาตรา 23 แห่งพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562",
  openGraph: {
    title: "ประกาศความเป็นส่วนตัว — ACCINA",
    description: "ACCINA PDPA Privacy Notice (Thai law)",
    url: "https://accina.co/pdpa",
    siteName: "ACCINA",
    type: "website",
  },
};

export default function PDPAPage() {
  return (
    <PolicyPage
      eyebrow="ทางกฎหมาย · Legal"
      title="ประกาศความเป็นส่วนตัว"
      subtitle="ตามมาตรา 23 แห่งพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA). คู่กับ Privacy Policy ฉบับภาษาอังกฤษ"
      status="DRAFT · รอตรวจสอบโดยทนายความ"
      lastUpdated="2026-06-06"
    >
      <blockquote>
        เอกสารฉบับนี้ใช้คำตามที่กฎหมายไทยกำหนด. หากต้องการคำอธิบายทั่วไป
        ดู <a href="/privacy">Privacy Policy</a> ฉบับภาษาอังกฤษ
      </blockquote>

      <h2>1. ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)</h2>
      <table>
        <thead>
          <tr>
            <th>รายการ</th>
            <th>รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ชื่อบริษัท</td>
            <td>บริษัท แอคซิน่า จำกัด (ACCINA Co., Ltd.)</td>
          </tr>
          <tr>
            <td>เลขทะเบียน</td>
            <td>0505569010977</td>
          </tr>
          <tr>
            <td>ที่อยู่จดทะเบียน</td>
            <td>
              189 หมู่ 5 ซอย ไชยเรืองศรี 1, ต.แม่เหียะ, อ.เมืองเชียงใหม่, จ.เชียงใหม่ 50100
            </td>
          </tr>
          <tr>
            <td>ผู้บริหารที่รับผิดชอบ</td>
            <td>นางสาวนิชนันท์ วรรณยศ (กรรมการผู้มีอำนาจ)</td>
          </tr>
          <tr>
            <td>ติดต่อทั่วไป</td>
            <td>
              <code>hello@accina.co</code>
            </td>
          </tr>
          <tr>
            <td>ติดต่อเรื่องข้อมูลส่วนบุคคล</td>
            <td>
              <code>privacy@accina.co</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        ปัจจุบัน ACCINA ไม่ได้แต่งตั้ง Data Protection Officer (DPO) แยกต่างหาก
        เนื่องจากขนาดบริษัทไม่เข้าเงื่อนไขบังคับตามมาตรา 41 PDPA.
        กรรมการเป็นผู้รับผิดชอบเรื่องการคุ้มครองข้อมูลโดยตรง
      </p>

      <h2>2. ข้อมูลส่วนบุคคลที่เก็บรวบรวม</h2>
      <p>
        ACCINA เก็บรวบรวมข้อมูลส่วนบุคคลของท่านเฉพาะที่จำเป็นต่อการให้บริการ:
      </p>
      <table>
        <thead>
          <tr>
            <th>ประเภทข้อมูล</th>
            <th>เก็บเมื่อใด</th>
            <th>ฐานทางกฎหมาย</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>อีเมล</td>
            <td>สมัคร newsletter, ติดต่อ, สั่งซื้อ</td>
            <td>ความยินยอม + สัญญา</td>
          </tr>
          <tr>
            <td>ชื่อ-นามสกุล</td>
            <td>สั่งซื้อ, ติดต่อ</td>
            <td>สัญญา</td>
          </tr>
          <tr>
            <td>ที่อยู่จัดส่ง</td>
            <td>สั่งซื้อ</td>
            <td>สัญญา</td>
          </tr>
          <tr>
            <td>เบอร์โทรศัพท์ (ไม่บังคับ)</td>
            <td>สั่งซื้อ</td>
            <td>สัญญา</td>
          </tr>
          <tr>
            <td>ข้อมูลการชำระเงิน</td>
            <td>สั่งซื้อ — อยู่ที่ Payment Gateway, ไม่จัดเก็บที่ ACCINA</td>
            <td>สัญญา</td>
          </tr>
          <tr>
            <td>เลขประจำตัวผู้เสียภาษี + ที่อยู่จดทะเบียน</td>
            <td>ขอใบกำกับภาษี (นิติบุคคล)</td>
            <td>ประมวลรัษฎากร</td>
          </tr>
          <tr>
            <td>Analytics (anonymous)</td>
            <td>เข้าชมเว็บไซต์</td>
            <td>ประโยชน์อันชอบธรรม</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>ข้อมูลที่ ACCINA ไม่เก็บรวบรวม:</strong> ข้อมูลที่อ่อนไหว
        (sensitive personal data), ข้อมูลผู้เยาว์ (ต่ำกว่า 20 ปี),
        เลขบัตรประจำตัวประชาชน (ยกเว้นกรณีจำเป็นต่อภาษี)
      </p>

      <h2>3. วัตถุประสงค์ของการประมวลผล</h2>
      <ol>
        <li>
          <strong>ดำเนินการคำสั่งซื้อ</strong> —
          จัดส่งสินค้า, ออกใบเสร็จ, ติดต่อกรณีปัญหา
        </li>
        <li>
          <strong>ตอบกลับการติดต่อ</strong> — Email, DM, Contact Form
        </li>
        <li>
          <strong>ส่งข่าวสาร</strong> — Newsletter เฉพาะผู้ที่ยินยอม
        </li>
        <li>
          <strong>ปรับปรุงบริการ</strong> — วิเคราะห์การใช้งานเว็บไซต์แบบไม่ระบุตัวบุคคล
        </li>
        <li>
          <strong>ปฏิบัติตามกฎหมาย</strong> — เก็บใบกำกับภาษี 5 ปี
        </li>
        <li>
          <strong>ป้องกันการฉ้อโกง</strong> — ตรวจสอบความถูกต้องของคำสั่งซื้อ
        </li>
      </ol>
      <p>
        ACCINA <strong>ไม่</strong> ใช้ข้อมูลของท่านเพื่อขายข้อมูลให้บุคคลภายนอก,
        สร้าง profile โฆษณา, หรือติดตามข้ามเว็บไซต์
        (ยกเว้น Google Analytics 4 ที่ระบุตัวบุคคลไม่ได้)
      </p>

      <h2>4. การเปิดเผยข้อมูลแก่บุคคลภายนอก</h2>
      <ul>
        <li>
          <strong>Vercel</strong> — web hosting (IP + metadata)
        </li>
        <li>
          <strong>Cloudflare</strong> — DNS + Email Routing (IP + email data)
        </li>
        <li>
          <strong>Google Analytics 4</strong> — usage events (anonymized)
        </li>
        <li>
          <strong>Payment Gateway</strong> (Stripe / Omise — TBD) —
          ข้อมูลคำสั่งซื้อ + การชำระเงิน
        </li>
        <li>
          <strong>ผู้ให้บริการขนส่ง</strong> (Kerry, Thailand Post, Flash —
          TBD) — ชื่อ + ที่อยู่ + เบอร์โทร
        </li>
        <li>
          <strong>กรมสรรพากร + DBD</strong> — ตามกฎหมายภาษีและธุรกิจ
        </li>
      </ul>
      <p>
        ACCINA <strong>ไม่</strong> ขาย แลก
        หรือให้เช่าข้อมูลของท่านเพื่อวัตถุประสงค์ทางการตลาด
      </p>

      <h2>5. การถ่ายโอนข้อมูลไปต่างประเทศ (มาตรา 28-29)</h2>
      <p>
        ผู้ให้บริการบางรายของ ACCINA ประมวลผลข้อมูลในต่างประเทศ
        (Vercel · Cloudflare · Google Analytics ใน EU/US)
        มีมาตรการคุ้มครองตามมาตรฐาน GDPR + Standard Contractual Clauses
        (SCCs). การใช้บริการของ ACCINA
        ถือว่าท่านรับทราบและยินยอมให้มีการถ่ายโอนข้อมูลดังกล่าว
      </p>

      <h2>6. ระยะเวลาเก็บรักษาข้อมูล</h2>
      <ul>
        <li>บันทึกคำสั่งซื้อ + ใบกำกับภาษี: 5 ปี (ประมวลรัษฎากร)</li>
        <li>ข้อมูลลูกค้าทั่วไป: จนกว่าท่านขอลบ</li>
        <li>รายชื่อ newsletter: จนกว่ายกเลิก หรือไม่ใช้งาน 2 ปี</li>
        <li>Contact form: 2 ปี</li>
        <li>Analytics data: 14 เดือน (GA4 default)</li>
        <li>Email correspondence: 3 ปี</li>
      </ul>

      <h2>7. สิทธิของเจ้าของข้อมูล (มาตรา 30-36)</h2>
      <ul>
        <li>
          <strong>สิทธิเข้าถึง (มาตรา 30)</strong> —
          ขอสำเนาข้อมูลส่วนบุคคลทั้งหมด
        </li>
        <li>
          <strong>สิทธิแก้ไข (มาตรา 35)</strong> — ขอให้แก้ไขข้อมูลที่ไม่ถูกต้อง
        </li>
        <li>
          <strong>สิทธิให้ลบ (มาตรา 33)</strong> — ขอให้ลบข้อมูล
          (ยกเว้นที่กฎหมายบังคับให้เก็บ)
        </li>
        <li>
          <strong>สิทธิระงับการใช้ (มาตรา 34)</strong> — ระงับเฉพาะวัตถุประสงค์
        </li>
        <li>
          <strong>สิทธิคัดค้าน (มาตรา 32)</strong> — โดยเฉพาะการตลาด
        </li>
        <li>
          <strong>สิทธิโอนย้ายข้อมูล (มาตรา 31)</strong> — ข้อมูลในรูปแบบ
          portable (CSV/JSON)
        </li>
        <li>
          <strong>สิทธิเพิกถอนความยินยอม</strong> — ถอนความยินยอมได้ทุกเมื่อ
        </li>
        <li>
          <strong>สิทธิร้องเรียน (มาตรา 73)</strong> —
          ต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) —{" "}
          <a href="https://www.pdpc.or.th" target="_blank" rel="noreferrer">
            pdpc.or.th
          </a>
        </li>
      </ul>
      <p>
        การใช้สิทธิเหล่านี้ <strong>ไม่มีค่าใช้จ่าย</strong> ใด ๆ.
        ติดต่อ <code>privacy@accina.co</code> · ตอบกลับภายใน 30 วัน
      </p>

      <h2>8. ผลของการไม่ให้ข้อมูล</h2>
      <ul>
        <li>
          อีเมล + ชื่อ + ที่อยู่ + เบอร์โทร — ไม่สามารถดำเนินการคำสั่งซื้อ +
          จัดส่งสินค้าได้
        </li>
        <li>ข้อมูลการชำระเงิน — ไม่สามารถรับชำระค่าสินค้าได้</li>
        <li>
          เลขประจำตัวผู้เสียภาษี (นิติบุคคล) — ไม่สามารถออกใบกำกับภาษีได้
        </li>
        <li>Newsletter consent — ไม่ได้รับข่าวสาร (ไม่กระทบบริการอื่น)</li>
        <li>Analytics cookies — เว็บไซต์ทำงานปกติ (เพียงไม่นับสถิติ)</li>
      </ul>

      <h2>9. มาตรการรักษาความปลอดภัย</h2>
      <ul>
        <li>HTTPS บนทุกหน้า (Cloudflare SSL)</li>
        <li>เข้ารหัสฐานข้อมูล (Postgres encryption at rest)</li>
        <li>จำกัดสิทธิเข้าถึง — เฉพาะกรรมการ</li>
        <li>1Password สำหรับจัดเก็บ credential</li>
        <li>2FA ทุก admin account</li>
        <li>Audit log การเข้าถึงข้อมูล</li>
      </ul>
      <p>
        <strong>กรณีเกิดเหตุข้อมูลรั่วไหล:</strong> แจ้งผู้ใช้ที่ได้รับผลกระทบ
        + แจ้ง สคส. ภายใน 72 ชั่วโมง สำหรับกรณีที่มีความเสี่ยงสูง
      </p>

      <h2>10. การเปลี่ยนแปลงประกาศนี้</h2>
      <p>
        ACCINA อาจปรับปรุงประกาศนี้เป็นครั้งคราว.
        การเปลี่ยนแปลงสำคัญจะประกาศผ่าน Email + Banner บน accina.co
        เป็นเวลา 30 วัน + อัพเดต &quot;วันที่ปรับปรุงล่าสุด&quot;
        ที่ด้านบนของเอกสาร
      </p>

      <h2>11. การติดต่อ</h2>
      <ul>
        <li>
          คำถามเรื่องข้อมูลส่วนบุคคล / ใช้สิทธิตาม PDPA:{" "}
          <code>privacy@accina.co</code>
        </li>
        <li>
          คำถามทั่วไป: <code>hello@accina.co</code>
        </li>
        <li>
          จดหมาย: บริษัท แอคซิน่า จำกัด 189 หมู่ 5 ซอย ไชยเรืองศรี 1, ต.แม่เหียะ, อ.เมืองเชียงใหม่,
          จ.เชียงใหม่ 50100
        </li>
        <li>
          ร้องเรียนภายนอก: สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) —{" "}
          <a href="https://www.pdpc.or.th" target="_blank" rel="noreferrer">
            pdpc.or.th
          </a>
        </li>
      </ul>

      <h2>12. กฎหมายที่ใช้บังคับ</h2>
      <ul>
        <li>พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)</li>
        <li>
          พระราชบัญญัติว่าด้วยการกระทำผิดเกี่ยวกับคอมพิวเตอร์ พ.ศ. 2550
          และที่แก้ไขเพิ่มเติม
        </li>
        <li>ประมวลกฎหมายแพ่งและพาณิชย์</li>
      </ul>
    </PolicyPage>
  );
}
