import "@/components/AdmetAnimation.css";

const AdmetAnimation = () => {
  return (
    <div className="admet-anim" style={{ width: "85%", height: "85%" }}>
      <svg viewBox="0 0 180 180">
        {/* Grid rings */}
        <polygon points="90,30 151.6,68.7 128,138.8 52,138.8 28.4,68.7" className="admet-grid" />
        <polygon points="90,50 130.4,75.8 114.7,119.2 65.3,119.2 49.6,75.8" className="admet-grid" />
        <polygon points="90,70 109.2,82.9 101.3,99.6 78.7,99.6 70.8,82.9" className="admet-grid" />

        {/* Axes */}
        <line x1="90" y1="90" x2="90" y2="30" className="admet-axis" />
        <line x1="90" y1="90" x2="151.6" y2="68.7" className="admet-axis" />
        <line x1="90" y1="90" x2="128" y2="138.8" className="admet-axis" />
        <line x1="90" y1="90" x2="52" y2="138.8" className="admet-axis" />
        <line x1="90" y1="90" x2="28.4" y2="68.7" className="admet-axis" />

        {/* Sweep */}
        <line x1="90" y1="90" x2="90" y2="28" className="admet-sweep" />

        {/* Radar shape */}
        <polygon className="admet-radar-fill" points="90,38 142,72 118,134 60,120 38,70" />

        {/* Vertices */}
        <circle cx="90" cy="38" className="admet-vertex admet-v0" />
        <circle cx="142" cy="72" className="admet-vertex admet-v1" />
        <circle cx="118" cy="134" className="admet-vertex admet-v2" />
        <circle cx="60" cy="120" className="admet-vertex admet-v3" />
        <circle cx="38" cy="70" className="admet-vertex admet-v4" />

        {/* Labels */}
        <text x="90" y="22" className="admet-label admet-l0">Absorption</text>
        <text x="156" y="68" className="admet-label admet-l1">Distribution</text>
        <text x="133" y="146" className="admet-label admet-l2">Metabolism</text>
        <text x="47" y="146" className="admet-label admet-l3">Excretion</text>
        <text x="23" y="68" className="admet-label admet-l4">Toxicity</text>

        {/* Scores */}
        <text x="90" y="14" className="admet-score admet-s0">0.92</text>
        <text x="156" y="76" className="admet-score admet-s1">0.87</text>
        <text x="133" y="154" className="admet-score admet-s2">0.64</text>
        <text x="47" y="154" className="admet-score admet-s3">0.81</text>
        <text x="23" y="76" className="admet-score admet-s4">0.38</text>
      </svg>
    </div>
  );
};

export default AdmetAnimation;
