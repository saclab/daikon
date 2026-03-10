import { useEffect, useRef, useCallback } from "react";
import "@/components/DocuStoreAnimation.css";

const CYCLE = 7000;

const DocuStoreAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const reset = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.querySelectorAll(".docustore-w[data-e]").forEach((w) => w.classList.remove("lit"));
    ["sweep", "bbox", "link", "lbl", "x1", "x2", "x3", "smi"].forEach((id) => {
      el.querySelector(`[data-id="${id}"]`)?.classList.remove("on");
    });
  }, []);

  const run = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    reset();

    const ents = el.querySelectorAll(".docustore-w[data-e]");
    const get = (id: string) => el.querySelector(`[data-id="${id}"]`);

    ents.forEach((e, i) => setTimeout(() => e.classList.add("lit"), 200 + i * 400));
    setTimeout(() => get("sweep")?.classList.add("on"), 500);
    setTimeout(() => get("bbox")?.classList.add("on"), 1700);
    setTimeout(() => get("x1")?.classList.add("on"), 2000);
    setTimeout(() => get("lbl")?.classList.add("on"), 2500);
    setTimeout(() => get("x2")?.classList.add("on"), 2800);
    setTimeout(() => get("link")?.classList.add("on"), 3200);
    setTimeout(() => get("x3")?.classList.add("on"), 3500);
    setTimeout(() => get("smi")?.classList.add("on"), 4100);
  }, [reset]);

  useEffect(() => {
    const t1 = setTimeout(run, 400);
    timerRef.current = setInterval(() => {
      reset();
      setTimeout(run, 300);
    }, CYCLE);
    return () => {
      clearTimeout(t1);
      clearInterval(timerRef.current);
    };
  }, [run, reset]);

  return (
    <div className="docustore-anim" ref={containerRef}>
      {/* NER */}
      <div className="docustore-ner">
        <span className="docustore-w compound" data-e="1">
          <span className="docustore-tag">compound</span>
          Gefitinib
          <span className="docustore-underbar" />
        </span>
        <span className="docustore-w">is</span>
        <span className="docustore-w">an</span>
        <span className="docustore-w target" data-e="1">
          <span className="docustore-tag">target</span>
          EGFR
          <span className="docustore-underbar" />
        </span>
        <span className="docustore-w">inhibitor,</span>
        <span className="docustore-w bio" data-e="1">
          <span className="docustore-tag">bioactivity</span>
          IC50=0.033µM
          <span className="docustore-underbar" />
        </span>
        <span className="docustore-w">for</span>
        <span className="docustore-w disease" data-e="1">
          <span className="docustore-tag">disease</span>
          NSCLC.
          <span className="docustore-underbar" />
        </span>
      </div>

      <div className="docustore-sep" />

      {/* CSER */}
      <div className="docustore-cser">
        <div className="docustore-mol-wrap">
          <div className="docustore-sweep" data-id="sweep" />
          <div className="docustore-bbox" data-id="bbox">
            <div className="docustore-corner docustore-c1" />
            <div className="docustore-corner docustore-c2" />
          </div>
          <div className="docustore-link" data-id="link">↕</div>
          <div className="docustore-lbl" data-id="lbl">ZD1839</div>
          <svg viewBox="0 0 72 66">
            <polygon points="36,5 63,18 63,44 36,57 9,44 9,18" className="docustore-ml" />
            <line x1="16" y1="22" x2="16" y2="40" className="docustore-ml" />
            <line x1="36" y1="9" x2="56" y2="20" className="docustore-ml" />
            <line x1="56" y1="41" x2="36" y2="52" className="docustore-ml" />
            <circle cx="36" cy="5" r="2.5" className="docustore-mn" />
            <circle cx="63" cy="18" r="2.5" className="docustore-mn" />
            <circle cx="63" cy="44" r="2.5" className="docustore-mn" />
            <circle cx="36" cy="57" r="2.5" className="docustore-mn" />
            <circle cx="9" cy="44" r="2.5" className="docustore-mn" />
            <circle cx="9" cy="18" r="2.5" className="docustore-mn" />
            <line x1="63" y1="18" x2="70" y2="12" className="docustore-ml" />
            <circle cx="70" cy="12" r="1.8" fill="#ff7882" opacity="0.7" />
            <line x1="36" y1="57" x2="36" y2="64" className="docustore-ml" />
            <circle cx="36" cy="64" r="1.8" fill="#82c8ff" opacity="0.6" />
          </svg>
        </div>

        <div className="docustore-extract">
          <div className="docustore-ex-row" data-id="x1"><div className="docustore-pip green" />detected</div>
          <div className="docustore-ex-row" data-id="x2"><div className="docustore-pip blue" />label: ZD1839</div>
          <div className="docustore-ex-row" data-id="x3"><div className="docustore-pip purple" />paired ✓</div>
          <div className="docustore-smiles" data-id="smi">COc1cc2ncnc(Nc3ccc(F)c(Cl)c3)c2cc1OC</div>
        </div>
      </div>
    </div>
  );
};

export default DocuStoreAnimation;
