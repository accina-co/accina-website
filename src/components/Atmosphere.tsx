/**
 * Atmosphere — พื้นหลังฟองเบลอ ยกมาจาก accina-liquid-scroll-concept.html แบบ 1:1
 * (concept ล็อก 2026-05-20) · อยู่นิ่งสนิท ไม่ขยับตาม scroll — เนื้อหาไหลผ่านข้างบนคือ parallax
 * มือถือ (≤600px) ซ่อน 3 ลูกรองเพื่อ performance ตามต้นฉบับ
 */
export default function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere-orb-shell atmo-purple-shell">
        <div className="atmosphere-orb atmo-purple" />
      </div>
      <div className="atmosphere-orb-shell atmo-rose-shell">
        <div className="atmosphere-orb atmo-rose" />
      </div>
      <div className="atmosphere-orb-shell atmo-honey-shell">
        <div className="atmosphere-orb atmo-honey" />
      </div>
      <div className="atmosphere-orb-shell atmo-purple-2-shell">
        <div className="atmosphere-orb atmo-purple-2" />
      </div>
      <div className="atmosphere-orb-shell atmo-rose-2-shell">
        <div className="atmosphere-orb atmo-rose-2" />
      </div>
      <div className="atmosphere-orb-shell atmo-honey-2-shell">
        <div className="atmosphere-orb atmo-honey-2" />
      </div>
    </div>
  );
}
