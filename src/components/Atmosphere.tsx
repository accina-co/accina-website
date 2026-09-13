/**
 * Atmosphere — decorative orb layer behind all content.
 * Style ported from the 2026-05-20 liquid-scroll concept. No content, no interaction.
 */
export default function Atmosphere() {
  return (
    <div className="atmo-layer" aria-hidden="true">
      <div className="atmo-shell atmo-a">
        <div className="atmo-orb orb-purple" />
      </div>
      <div className="atmo-shell atmo-b">
        <div className="atmo-orb orb-honey" />
      </div>
      <div className="atmo-shell atmo-c">
        <div className="atmo-orb orb-rose" />
      </div>
    </div>
  );
}
