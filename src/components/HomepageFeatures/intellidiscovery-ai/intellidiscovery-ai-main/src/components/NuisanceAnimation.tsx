import { useEffect, useState } from "react";
import "@/components/NuisanceAnimation.css";

const gauges = [
  { cls: "nuisance-g0", value: "0.78", label: "aggregator" },
  { cls: "nuisance-g1", value: "0.45", label: "luciferase" },
  { cls: "nuisance-g2", value: "0.05", label: "reactive" },
  { cls: "nuisance-g3", value: "0.05", label: "promiscuous" },
];

const NuisanceAnimation = () => {
  // Re-trigger animations on each mount by using a key
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((k) => k + 1);
  }, []);

  return (
    <div className="nuisance-anim" key={key}>
      {gauges.map((g) => (
        <div key={g.cls} className={`nuisance-gauge ${g.cls}`}>
          <div className="nuisance-ring-wrap">
            <svg viewBox="0 0 72 72">
              <circle cx="36" cy="36" r="30" className="nuisance-track" />
              <circle cx="36" cy="36" r="30" className="nuisance-fill" />
            </svg>
            <div className="nuisance-score">{g.value}</div>
          </div>
          <div className="nuisance-label">{g.label}</div>
        </div>
      ))}
    </div>
  );
};

export default NuisanceAnimation;
