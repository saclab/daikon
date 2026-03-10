import React, { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import "./ai-animations.css";

// ── Data ─────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  {
    num: "01", name: "Screens", badge: null, badgeType: "grey",
    desc: "Biochemical, phenotypic, fragment, and virtual screens organized by stage and type. Swim-lane view separates target-based from phenotypic programs.",
    tech: "Method tagging · Organisation tracking · Date provenance",
  },
  {
    num: "02", name: "Targets", badge: "Parsnip", badgeType: "teal",
    desc: "3D scatter scoring across feasibility, genetic inactivation, and chemical inactivation evidence. Priority zone identification across the full target portfolio.",
    tech: "Multi-axis prioritization · 3D visualization · Target questionnaires",
  },
  {
    num: "03", name: "Hit Assessment", badge: "Nuisance Detection", badgeType: "amber",
    desc: "Active HA projects with embedded compound structures, property data, and lifecycle stage tracking across Ready → Active → Inactive → Complete.",
    tech: "SmilesDrawer · Fuse AI · Stage lifecycle",
  },
  {
    num: "04", name: "Compound Evolution", badge: null, badgeType: "grey",
    desc: "Structure-to-structure optimization history. IC₅₀, MIC, MW, and TPSA tracked across every compound version with timestamped attribution.",
    tech: "ADMET AI · Delta tracking · Structural comparison",
  },
  {
    num: "05", name: "Horizon View", badge: null, badgeType: "grey",
    desc: "A tree from gene to portfolio for any target. Every screen, hit collection, assessment, and outcome — both successful and failed branches preserved.",
    tech: "Full lineage · Both outcomes · Cross-program traceability",
  },
  {
    num: "06", name: "Portfolio", badge: null, badgeType: "grey",
    desc: "FHA, H2L, and LO stage tracking with milestone dates, probability scoring, and priority classification. Full timeline from first hit to lead optimization.",
    tech: "Milestone tracking · P/P scoring · Multi-org attribution",
  },
  {
    num: "07", name: "DocuStore", badge: "AI", badgeType: "teal",
    desc: "LLM-based extraction from research documents. Semantic search over archived reports, presentations, and experimental findings.",
    tech: "LangExtract · NER · Vector embeddings · RAG",
  },
];

const AI_CAPS = [
  {
    id: "docustore", label: "DocuStore AI",
    color: "#5d9ca6", colorDark: "#497e87", titleColor: "#ffc350",
    live: true,
    desc: "Extracting knowledge from unstructured research documents to accelerate insight discovery.",
  },
  {
    id: "fuse", label: "Nuisance Detection AI",
    color: "#8a759a", colorDark: "#6b5a7e", titleColor: "#ff6b6b",
    live: true,
    desc: "Flagging compounds that produce misleading assay signals to eliminate false positives early.",
  },
  {
    id: "admet", label: "ADMET Prediction AI",
    color: "#a98d7e", colorDark: "#8a7264", titleColor: "#ffc857",
    live: false,
    desc: "ADMET estimates surfaced at any pipeline stage to de-risk candidates before costly trials.",
  },
  {
    id: "protein", label: "Protein Assessment AI",
    color: "#5a72a5", colorDark: "#455a88", titleColor: "#50e3c2",
    live: false,
    desc: "Target scoring informed by prior work and literature to prioritize the most druggable proteins.",
  },
];


const FUSE_BULLETS = [
  "Gated co-attention fuses molecular graph and SMILES representations for chemically coherent predictions",
  "Macro-averaged ROC-AUC of 0.94 across aggregators, reactive species, luciferase inhibitors and promiscuous binders",
  "Atom-level attention maps explain every prediction, highlighting reactive warheads and aggregation-prone motifs",
  "4.5× fewer false positives than combined PAINS/Brenk filters across FDA-approved compounds",
];

const TRUST = [
  {
    n: "01 · Open source",
    h: "Modular architecture.",
    p: "Built on a microservices architecture — each module deploys and scales independently. Adaptable to any disease program. Includes target-based & phenotypic discovery stages.",
  },
  {
    n: "02 · Explainability",
    h: "Human-in-the-loop.",
    p: "AI suggestions are advisory, not automated. Researchers always approve, reject, or override before anything advances to the next stage.",
  },
  {
    n: "03 · Provenance",
    h: "Traceable lineage.",
    p: "Attribution, notes, milestone dates, and version histories at every stage. Failed experiments and abandoned compounds are preserved — not deleted.",
  },
];

const CONSORTIUM_ROWS = [
  ["Currently deployed at",  "Tuberculosis Drug Accelerator (TBDA)"],
  ["Consortium size",        "25+ industry & academic organizations"],
  ["Program funder",         "Gates Foundation"],
  ["License",                "Open source · MIT"],
  ["Architecture",           "Modular — adaptable to any disease program"],
  ["Pipeline coverage",      "Gene → Target → Screen → Hit → Portfolio → Post-portfolio"],
];


// ── Scroll Pipeline Data ───────────────────────────────────────────────────────

const PIPE_STAGES = [
  {
    n: "01", name: "Gene Pool",
    color: "#527aa3",
    sub: "Target identification from genomic & literature sources",
    desc: "Curate disease-relevant genes from genomic databases, literature mining, and experimental data. DAIKON aggregates heterogeneous sources into a unified, versioned target catalogue.",
    ai: null, aiVariant: null,
    tags: ["Genomics", "Literature Mining", "Target ID"],
  },
  {
    n: "02", name: "Target Prioritization",
    color: "#5d9ca6",
    sub: "Druggability scoring and biological validation",
    desc: "Score and rank targets using structural biology, pathway essentiality, genetic evidence, and historical precedent. DocuStore AI surfaces relevant publications and patents automatically.",
    ai: "DocuStore AI", aiVariant: "coral",
    tags: ["Druggability", "Pathway Analysis", "Parsnip Scoring"],
  },
  {
    n: "03", name: "Screening",
    color: "#5a72a5",
    sub: "High-throughput biochemical and phenotypic screening",
    desc: "Run target-based and phenotypic screens across diverse compound libraries. Early assay-interference flagging ensures only genuine actives advance. Compound structures tracked from first dose.",
    ai: "ADMET AI", aiVariant: "teal",
    tags: ["HTS", "Phenotypic", "Target-based", "Assay QC"],
  },
  {
    n: "04", name: "Hit Assessment",
    color: "#a98d7e",
    sub: "Validate hits — remove nuisance, confirm genuine activity",
    desc: "Apply ML-based nuisance detection to filter PAINS, aggregators, and promiscuous compounds. Confirm genuine hits through orthogonal assays and compound quality metrics.",
    ai: "Nuisance Detection AI", aiVariant: "teal",
    tags: ["Hit Validation", "SAR", "PAINS Filter", "Compound QC"],
  },
  {
    n: "05", name: "Portfolio & Post-Portfolio",
    color: "#8a759a",
    sub: "Lead optimization through candidate selection and IND preparation",
    desc: "Track compound progression from hit to lead to clinical candidate. Manage SAR campaigns, IC₅₀ series, and multi-team optimization — then advance to pre-clinical data packages, regulatory milestones, and IND submission.",
    ai: null, aiVariant: null,
    tags: ["Lead Opt", "SAR Tracking", "Pre-clinical", "IND Prep"],
  },
];


// ── Molecule SVG ──────────────────────────────────────────────────────────────
// Bicyclic drug-like scaffold: benzene fused with pyrimidine-type ring
// ViewBox 300×260 — three concentric rings encode molecule → space → system

function MolSVG() {
  // Ring A (benzene) center (128, 130), r=24, pointy-top hexagon
  // s = r * √3/2 ≈ 20.8
  const a = [
    [128.0, 106.0],   // 0 top
    [148.8, 118.0],   // 1 top-right  ← shared with Ring B
    [148.8, 142.0],   // 2 bot-right  ← shared with Ring B
    [128.0, 154.0],   // 3 bottom
    [107.2, 142.0],   // 4 bot-left
    [107.2, 118.0],   // 5 top-left
  ];
  // Ring B (6-membered heteroaromatic) center (169.6, 130)
  const b = [
    [169.6, 106.0],   // 0 top
    [190.4, 118.0],   // 1 top-right
    [190.4, 142.0],   // 2 bot-right  ← N atom
    [169.6, 154.0],   // 3 bottom
    a[2],             // 4 shared
    a[1],             // 5 shared
  ];

  const ln = ([x1,y1], [x2,y2], k) => (
    <line key={k} x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="#B86060" strokeWidth="1.5" strokeLinecap="round" />
  );

  const atom = (x, y, fill, label, rr = 5) => (
    <g key={`at${x}${y}`}>
      <circle cx={x} cy={y} r={rr} fill={fill} />
      {label && (
        <text x={x} y={y + 3.5} textAnchor="middle"
          fontSize="7" fill="white"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontWeight="600">
          {label}
        </text>
      )}
    </g>
  );

  return (
    <svg viewBox="0 0 300 260" width="180" height="156" fill="none">

      <defs>
        <radialGradient id="molHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C86B6B" stopOpacity="0.18" />
          <stop offset="60%"  stopColor="#C86B6B" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#C86B6B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Radial halo behind molecule ── */}
      <circle cx="149" cy="130" r="88" fill="url(#molHalo)" />

      {/* ── Concentric rings: molecule → chemical space → discovery system ── */}
      <circle cx="149" cy="130" r="126" stroke="rgba(200,107,107,0.05)" strokeWidth="1" />
      <circle cx="149" cy="130" r="100" stroke="rgba(200,107,107,0.10)" strokeWidth="1" />
      <circle cx="149" cy="130" r="74"  stroke="rgba(200,107,107,0.18)" strokeWidth="1" />

      {/* ── Ring A bonds ── */}
      {[0,1,2,3,4,5].map(i => ln(a[i], a[(i+1)%6], `ra${i}`))}

      {/* ── Ring B bonds (skip shared a1-a2 already drawn) ── */}
      {ln(b[5], b[0], 'rb0')}
      {ln(b[0], b[1], 'rb1')}
      {ln(b[1], b[2], 'rb2')}
      {ln(b[2], b[3], 'rb3')}
      {ln(b[3], b[4], 'rb4')}

      {/* ── Aromatic inner circles ── */}
      <circle cx="128" cy="130" r="13" stroke="rgba(200,107,107,0.45)" strokeWidth="1.1" />
      <circle cx="169.6" cy="130" r="13" stroke="rgba(200,107,107,0.45)" strokeWidth="1.1" />

      {/* ── Substituent bonds ── */}
      {/* NH₂ at a[0] */}
      <line x1="128" y1="106" x2="128" y2="82" stroke="#B86060" strokeWidth="1.5" strokeLinecap="round" />
      {/* F at b[0] */}
      <line x1="169.6" y1="106" x2="169.6" y2="82" stroke="#B86060" strokeWidth="1.5" strokeLinecap="round" />
      {/* OH at a[4] */}
      <line x1="107.2" y1="142" x2="85" y2="156" stroke="#B86060" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Carbon atoms ── */}
      {a.map(([x, y], i) => <circle key={`ac${i}`} cx={x} cy={y} r="3.2" fill="#8B4A4A" />)}
      {[0,1,3].map(i => <circle key={`bc${i}`} cx={b[i][0]} cy={b[i][1]} r="3.2" fill="#8B4A4A" />)}

      {/* ── Highlighted heteroatoms ── */}
      {/* N in ring at b[2] */}
      {atom(190.4, 142.0, '#C86B6B', 'N', 6)}
      {/* NH₂ substituent */}
      {atom(128.0, 76.0, '#D47A7A', 'N', 6)}
      {/* F substituent */}
      {atom(169.6, 76.0, '#D48888', 'F', 5.5)}
      {/* O (OH) substituent */}
      {atom(82.0, 162.0, '#D48888', 'O', 5.5)}

    </svg>
  );
}

// ── Molecule Section ──────────────────────────────────────────────────────────

function MoleculeSection() {
  const caps = [
    { id: 'top',    label: 'Assay activity',        desc: 'IC₅₀, MIC, and assay results linked to each compound.',          color: '#7C6BB3' },
    { id: 'right',  label: 'Molecular properties',  desc: 'MW, TPSA, LogP, and key descriptors at every stage.',            color: '#5C6FAE' },
    { id: 'bottom', label: 'Compound evolution',    desc: 'Track optimization history across analog and series changes.',    color: '#6FA48C' },
    { id: 'left',   label: 'Structure-based search', desc: 'Substructure, similarity, and exact match across the registry.', color: '#3C8FA8' },
  ];

  // Label brightening synced to SMIL pulse timing:
  // motTop fires at 0.8s → arrives 2.0s | cycle = 10s
  // motBottom 3.3s → 4.5s | motLeft 5.8s → 7.0s | motRight 8.3s → 9.5s
  const [activeLabel, setActiveLabel] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const CYCLE = 10000;
    const DWELL = 900;
    const timers = [];
    const schedule = (delay, node) => {
      const fire = () => {
        setActiveLabel(node);
        timers.push(setTimeout(() => setActiveLabel(p => p === node ? null : p), DWELL));
        timers.push(setTimeout(fire, CYCLE));
      };
      timers.push(setTimeout(fire, delay));
    };
    schedule(2000, 'top');
    schedule(4500, 'bottom');
    schedule(7000, 'left');
    schedule(9500, 'right');
    return () => timers.forEach(clearTimeout);
  }, []);


  return (
    <section className={styles.molSec}>
      <div className={styles.molInner}>
        <div className={styles.molHdr}>
          <div className={styles.sEye}>MolecuLogix</div>
          <h2 className={styles.sH}>
            The <span className={styles.molWord}>molecular</span><br /><em>intelligence layer.</em>
          </h2>
          <p className={styles.molSubline}>
            Register compounds, search chemical space, analyze activity,
            and trace compound evolution from screening to portfolio.
          </p>
        </div>

        <div className={styles.molDiagram}>
          {/* SVG cross lines */}
          <svg
            className={styles.molLines}
            viewBox="0 0 800 460"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {/*
              Container 800×460, center (400,230).
              MolSVG outer ring → junction dots at ±76 from center.
              Endpoint dots ~25px gap from cap text on all sides.
                junction: (400,154),(400,306),(324,230),(476,230)
                endpoint: (400,90),(400,370),(210,230),(590,230)
              Concentric rings at r=95,145,190. Micro-labels on connector midpoints.
            */}

            {/* ── Scientific system rings ── */}
            <circle cx="400" cy="230" r="95"  stroke="rgba(200,107,107,0.08)" strokeWidth="0.6" fill="none" />
            <circle cx="400" cy="230" r="145" stroke="rgba(200,107,107,0.05)" strokeWidth="0.6" fill="none" />
            <circle cx="400" cy="230" r="190" stroke="rgba(200,107,107,0.03)" strokeWidth="0.6" fill="none" />

            {/* ── Crosshair connectors — per-node accent colors ── */}
            <line x1="400" y1="154" x2="400" y2="90"  stroke="rgba(168,90,143,0.40)" strokeWidth="1" />
            <line x1="400" y1="306" x2="400" y2="370" stroke="rgba(168,90,143,0.40)" strokeWidth="1" />
            <line x1="324" y1="230" x2="210" y2="230" stroke="rgba(168,90,143,0.40)" strokeWidth="1" />
            <line x1="476" y1="230" x2="590" y2="230" stroke="rgba(168,90,143,0.40)" strokeWidth="1" />

            {/* ── Endpoint dots (pulse on arrival) ── */}
            <circle cx="400" cy="90"  r="3.5" fill="#A85A8F" fillOpacity="0.55">
              <animate attributeName="fillOpacity" values="0.55;0.90;0.55" dur="0.9s" begin="motTop.end"    calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.35;1" />
              <animate attributeName="r"           values="3.5;5;3.5"       dur="0.9s" begin="motTop.end"    calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.35;1" />
            </circle>
            <circle cx="400" cy="370" r="3.5" fill="#A85A8F" fillOpacity="0.55">
              <animate attributeName="fillOpacity" values="0.55;0.90;0.55" dur="0.9s" begin="motBottom.end" calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.35;1" />
              <animate attributeName="r"           values="3.5;5;3.5"       dur="0.9s" begin="motBottom.end" calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.35;1" />
            </circle>
            <circle cx="210" cy="230" r="3.5" fill="#A85A8F" fillOpacity="0.55">
              <animate attributeName="fillOpacity" values="0.55;0.90;0.55" dur="0.9s" begin="motLeft.end"   calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.35;1" />
              <animate attributeName="r"           values="3.5;5;3.5"       dur="0.9s" begin="motLeft.end"   calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.35;1" />
            </circle>
            <circle cx="590" cy="230" r="3.5" fill="#A85A8F" fillOpacity="0.55">
              <animate attributeName="fillOpacity" values="0.55;0.90;0.55" dur="0.9s" begin="motRight.end"  calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.35;1" />
              <animate attributeName="r"           values="3.5;5;3.5"       dur="0.9s" begin="motRight.end"  calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.35;1" />
            </circle>

            {/* ── Junction dots at molecule outer ring ── */}
            {[
              { x: 400, y: 154, c: '#A85A8F' },
              { x: 400, y: 306, c: '#A85A8F' },
              { x: 324, y: 230, c: '#A85A8F' },
              { x: 476, y: 230, c: '#A85A8F' },
            ].map(({ x, y, c }, i) => (
              <circle key={i} cx={x} cy={y} r="2" fill={c} fillOpacity="0.45" />
            ))}

            {/* ── Traveling pulse dots (SMIL animateMotion chain) ──
                Cycle: top(0.8s) → +1.3s gap → bottom → +1.3s → left → +1.3s → right → +1.3s → top ...
                Travel dur=1.2s, gap=1.3s → 4×(1.2+1.3)=10s cycle.
                Paths are relative offsets from each junction position.       ── */}
            <circle cx="400" cy="154" r="2.5" fill="#A85A8F" fillOpacity="0">
              <animateMotion id="motTop"    path="M0,0 L0,-64"   dur="1.2s" begin="0.8s; motRight.end+1.3s"  calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;1" />
              <animate attributeName="fillOpacity" values="0;0.55;0.45;0" keyTimes="0;0.12;0.85;1" dur="1.2s" begin="0.8s; motRight.end+1.3s" />
            </circle>
            <circle cx="400" cy="306" r="2.5" fill="#A85A8F" fillOpacity="0">
              <animateMotion id="motBottom" path="M0,0 L0,64"    dur="1.2s" begin="motTop.end+1.3s"          calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;1" />
              <animate attributeName="fillOpacity" values="0;0.55;0.45;0" keyTimes="0;0.12;0.85;1" dur="1.2s" begin="motTop.end+1.3s" />
            </circle>
            <circle cx="324" cy="230" r="2.5" fill="#A85A8F" fillOpacity="0">
              <animateMotion id="motLeft"   path="M0,0 L-114,0"  dur="1.2s" begin="motBottom.end+1.3s"       calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;1" />
              <animate attributeName="fillOpacity" values="0;0.55;0.45;0" keyTimes="0;0.12;0.85;1" dur="1.2s" begin="motBottom.end+1.3s" />
            </circle>
            <circle cx="476" cy="230" r="2.5" fill="#A85A8F" fillOpacity="0">
              <animateMotion id="motRight"  path="M0,0 L114,0"   dur="1.2s" begin="motLeft.end+1.3s"         calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;1" />
              <animate attributeName="fillOpacity" values="0;0.55;0.45;0" keyTimes="0;0.12;0.85;1" dur="1.2s" begin="motLeft.end+1.3s" />
            </circle>

          </svg>

          {/* Central molecule */}
          <div className={styles.molCenter}>
            <MolSVG />
          </div>

          {/* Caps */}
          {caps.map(cap => (
            <div
              key={cap.id}
              className={`${styles.molCap} ${styles['molCap' + cap.id.charAt(0).toUpperCase() + cap.id.slice(1)]}`}
            >
              <div
                className={styles.molCapLabel}
                style={{
                  color: cap.color,
                  filter: activeLabel === cap.id ? 'brightness(1.5)' : 'brightness(1)',
                  transition: 'filter 0.5s ease-out',
                }}
              >{cap.label}</div>
              <div className={styles.molCapDesc}>{cap.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section Components ─────────────────────────────────────────────────────────

function Hero() {
  const heroRightRef               = useRef(null);
  const pipeStageRef               = useRef(null);
  const isOverRight                = useRef(false);
  const isOverDark                 = useRef(false);
  const wheelAcc                   = useRef(0);
  const autoTimer                  = useRef(null);
  const [activeStage, setActiveStage]   = useState(0);
  const [hoveredStage, setHoveredStage] = useState(null);

  const startAuto = () => {
    if (autoTimer.current) return;
    autoTimer.current = setInterval(() => {
      setActiveStage(prev => (prev + 1) % PIPE_STAGES.length);
    }, 1600);
  };

  const stopAuto = () => {
    clearInterval(autoTimer.current);
    autoTimer.current = null;
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  useEffect(() => {
    const el = heroRightRef.current;
    if (!el) return;
    const THRESHOLD = 80;
    const onWheel = (e) => {
      if (!isOverDark.current) return;
      e.preventDefault();
      wheelAcc.current += e.deltaY;
      if (wheelAcc.current >= THRESHOLD) {
        setActiveStage(prev => Math.min(PIPE_STAGES.length - 1, prev + 1));
        wheelAcc.current = 0;
      } else if (wheelAcc.current <= -THRESHOLD) {
        setActiveStage(prev => Math.max(0, prev - 1));
        wheelAcc.current = 0;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const fillPct    = (activeStage / (PIPE_STAGES.length - 1)) * 100;
  const displayIdx = hoveredStage !== null ? hoveredStage : activeStage;
  const stage      = PIPE_STAGES[displayIdx];

  return (
    <section className={styles.heroWrap}>
      <div className={styles.heroInner}>

        {/* Left — copy */}
        <div className={styles.heroLeft}>
          <div>
            <div className={styles.heroEyebrow}>Research platform · Open source</div>
            <h1 className={styles.heroH1}>
              AI-integrated<br /><em>drug discovery platform</em>
            </h1>
            <p className={styles.heroBody}>
              Centralizes target identification, experimental data, compound information,
              and project workflows across the drug discovery pipeline, with embedded AI
              modules at each stage.
            </p>
            <div className={styles.heroBtns}>
              <Link to="/docs/category/deployment-manual" className={styles.btnPrimary}>
                Deploy for free
              </Link>
              <Link to="/docs/intro" className={styles.btnGhost}>
                Read the docs
              </Link>
            </div>
          </div>
          <div className={styles.heroStats}>
            {[
              ["25+", "Organizations"],
              ["Gates", "Foundation Funded"],
              ["TBDA", "Tuberculosis Drug Accelerator Consortium"],
            ].map(([n, l], i) => (
              <div key={i} className={styles.heroStat}>
                <div className={styles.statN}>{n}</div>
                <div className={styles.statL}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — two-column: rail + stable detail card */}
        <div
          className={styles.heroRight}
          ref={heroRightRef}
          onMouseEnter={() => { isOverRight.current = true; stopAuto(); }}
          onMouseLeave={() => { isOverRight.current = false; startAuto(); }}
        >

          {/* Inner stage — framed canvas */}
          <div
            className={styles.pipeStage}
            ref={pipeStageRef}
            onMouseEnter={() => { isOverDark.current = true; }}
            onMouseLeave={() => { isOverDark.current = false; wheelAcc.current = 0; }}
          >

          {/* Left: pipeline rail */}
          <div className={styles.pipeRail}>
            <div className={styles.pipeRows}>
              {/* Spine scoped to the rows container so it matches content height */}
              <div className={styles.pipeSpine}>
                <div className={styles.pipeSpineLine} />
                <div className={styles.pipeSpineFill} style={{ height: `${fillPct}%` }} />
              </div>
              {PIPE_STAGES.map((s, i) => {
                const reached = i <= activeStage;
                const focused = i === displayIdx;
                return (
                  <div
                    key={i}
                    className={[
                      styles.pipeRow,
                      reached  ? styles.pipeRowReached  : '',
                      focused  ? styles.pipeRowFocused  : '',
                    ].filter(Boolean).join(' ')}
                    onMouseEnter={() => setHoveredStage(i)}
                    onMouseLeave={() => setHoveredStage(null)}
                    onClick={() => { setActiveStage(i); stopAuto(); }}
                  >
                    <div className={styles.pipeRowDotCol}>
                      <div className={styles.pipeRowDot} />
                    </div>
                    <div className={styles.pipeRowLabel}>
                      <span className={styles.pipeRowNum}>{s.n}</span>
                      <span className={styles.pipeRowName}>{s.name}</span>
                      {s.ai && reached && (
                        <span className={`${styles.pipeRowBadge} ${s.aiVariant === 'coral' ? styles.pipeRowBadgeCoral : styles.pipeRowBadgeTeal}`}>
                          {s.ai}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: stationary detail card — only content updates */}
          <div
            className={styles.pipeDetail}
            style={{
              '--card-bg':     stage.color,
              '--card-border': stage.color,
              '--card-accent': '#ffffff',
            }}
          >
            {stage && (
              <div className={styles.pipeDetailCard}>
                <div className={styles.pipeDetailInner}>
                  <div className={styles.pipeDetailEye}>Stage {stage.n}</div>
                  <h3 className={styles.pipeDetailName}>{stage.name}</h3>
                  <p className={styles.pipeDetailSub}>{stage.sub}</p>
                  <div
                    className={`${styles.pipeDetailAi} ${stage.aiVariant === 'coral' ? styles.pipeDetailAiCoral : styles.pipeDetailAiTeal}`}
                    style={{ visibility: stage.ai ? 'visible' : 'hidden' }}
                  >
                    <span className={styles.pipeDetailAiName}>{stage.ai || ''}</span>
                  </div>
                  <div className={styles.pipeDetailTags}>
                    {stage.tags.map(t => <span key={t} className={styles.pipeDetailTag}>{t}</span>)}
                  </div>
                </div>
              </div>
            )}
          </div>

          </div>{/* /pipeStage */}
        </div>
      </div>
    </section>
  );
}


function CapabilitiesSection() {
  return (
    <section className={styles.capabilities} id="platform">
      <div className={styles.capHead}>
        <div>
          <div className={styles.sEye}>Platform</div>
          <h2 className={styles.sH}>What DAIKON<br /><em>tracks.</em></h2>
        </div>
        <p className={styles.sSub} style={{ paddingTop: 8 }}>
          Seven connected stages. Every decision is traceable forward to portfolio outcomes
          and backward to the evidence that justified it.
        </p>
      </div>
      {CAPABILITIES.map((cap, i) => (
        <div key={i} className={styles.capRow}>
          <div className={styles.capNum}>{cap.num}</div>
          <div className={styles.capName}>
            {cap.name}
            {cap.badge && (
              <span className={clsx(styles.capBadge, styles["cb" + cap.badgeType])}>
                {cap.badge}
              </span>
            )}
          </div>
          <div className={styles.capDesc}>{cap.desc}</div>
          <div className={styles.capTech}>{cap.tech}</div>
        </div>
      ))}
    </section>
  );
}

// ── AI Module Visualizations ──────────────────────────────────────────────────

function DocuStoreAnimation() {
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  const reset = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.querySelectorAll('.docustore-w[data-e]').forEach(w => w.classList.remove('lit'));
    ['sweep', 'bbox', 'link', 'lbl', 'x1', 'x2', 'x3', 'smi'].forEach(id => {
      const node = el.querySelector(`[data-id="${id}"]`);
      if (node) node.classList.remove('on');
    });
  }, []);

  const run = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    reset();
    const ents = el.querySelectorAll('.docustore-w[data-e]');
    const get = id => el.querySelector(`[data-id="${id}"]`);
    ents.forEach((e, i) => setTimeout(() => e.classList.add('lit'), 200 + i * 400));
    setTimeout(() => { const n = get('sweep'); if (n) n.classList.add('on'); }, 500);
    setTimeout(() => { const n = get('bbox');  if (n) n.classList.add('on'); }, 1700);
    setTimeout(() => { const n = get('x1');    if (n) n.classList.add('on'); }, 2000);
    setTimeout(() => { const n = get('lbl');   if (n) n.classList.add('on'); }, 2500);
    setTimeout(() => { const n = get('x2');    if (n) n.classList.add('on'); }, 2800);
    setTimeout(() => { const n = get('link');  if (n) n.classList.add('on'); }, 3200);
    setTimeout(() => { const n = get('x3');    if (n) n.classList.add('on'); }, 3500);
    setTimeout(() => { const n = get('smi');   if (n) n.classList.add('on'); }, 4100);
  }, [reset]);

  useEffect(() => {
    const t1 = setTimeout(run, 400);
    timerRef.current = setInterval(() => { reset(); setTimeout(run, 300); }, 5000);
    return () => { clearTimeout(t1); clearInterval(timerRef.current); };
  }, [run, reset]);

  return (
    <div className="docustore-anim" ref={containerRef}>
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
            <circle cx="36" cy="5"  r="2.5" className="docustore-mn" />
            <circle cx="63" cy="18" r="2.5" className="docustore-mn" />
            <circle cx="63" cy="44" r="2.5" className="docustore-mn" />
            <circle cx="36" cy="57" r="2.5" className="docustore-mn" />
            <circle cx="9"  cy="44" r="2.5" className="docustore-mn" />
            <circle cx="9"  cy="18" r="2.5" className="docustore-mn" />
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
}

function NuisanceAnimation() {
  const [animKey, setAnimKey] = useState(0);
  useEffect(() => { setAnimKey(k => k + 1); }, []);
  const gauges = [
    { cls: 'nuisance-g0', value: '0.78', label: 'aggregator' },
    { cls: 'nuisance-g1', value: '0.45', label: 'luciferase' },
    { cls: 'nuisance-g2', value: '0.05', label: 'reactive' },
    { cls: 'nuisance-g3', value: '0.05', label: 'promiscuous' },
  ];
  return (
    <div className="nuisance-anim" key={animKey}>
      {gauges.map(g => (
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
}

function AdmetAnimation() {
  return (
    <div className="admet-anim" style={{ width: '85%', height: '85%' }}>
      <svg viewBox="0 -8 180 196">
        <polygon points="90,30 151.6,68.7 128,138.8 52,138.8 28.4,68.7" className="admet-grid" />
        <polygon points="90,50 130.4,75.8 114.7,119.2 65.3,119.2 49.6,75.8"  className="admet-grid" />
        <polygon points="90,70 109.2,82.9 101.3,99.6 78.7,99.6 70.8,82.9"    className="admet-grid" />
        <line x1="90" y1="90" x2="90"   y2="30"    className="admet-axis" />
        <line x1="90" y1="90" x2="151.6" y2="68.7" className="admet-axis" />
        <line x1="90" y1="90" x2="128"  y2="138.8" className="admet-axis" />
        <line x1="90" y1="90" x2="52"   y2="138.8" className="admet-axis" />
        <line x1="90" y1="90" x2="28.4" y2="68.7"  className="admet-axis" />
        <line x1="90" y1="90" x2="90"   y2="28"    className="admet-sweep" />
        <polygon className="admet-radar-fill" points="90,38 142,72 118,134 60,120 38,70" />
        <circle cx="90"  cy="38"  className="admet-vertex admet-v0" />
        <circle cx="142" cy="72"  className="admet-vertex admet-v1" />
        <circle cx="118" cy="134" className="admet-vertex admet-v2" />
        <circle cx="60"  cy="120" className="admet-vertex admet-v3" />
        <circle cx="38"  cy="70"  className="admet-vertex admet-v4" />
        <text x="90"  y="23"  className="admet-label admet-l0">Absorption</text>
        <text x="156" y="66"  className="admet-label admet-l1">Distribution</text>
        <text x="133" y="148" className="admet-label admet-l2">Metabolism</text>
        <text x="47"  y="148" className="admet-label admet-l3">Excretion</text>
        <text x="23"  y="66"  className="admet-label admet-l4">Toxicity</text>
        <text x="90"  y="10"  className="admet-score admet-s0">0.92</text>
        <text x="156" y="80"  className="admet-score admet-s1">0.87</text>
        <text x="133" y="162" className="admet-score admet-s2">0.64</text>
        <text x="47"  y="162" className="admet-score admet-s3">0.81</text>
        <text x="23"  y="80"  className="admet-score admet-s4">0.38</text>
      </svg>
    </div>
  );
}

function ProteinScatterViz() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = 280, H = 220;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const proteins = [
      { name: 'FtsZ',  x: 45, y: 88, z: 50 },
      { name: 'Pks13', x: 30, y: 78, z: 35 },
      { name: 'RibF',  x: 40, y: 76, z: 45 },
      { name: 'Mdh',   x: 55, y: 75, z: 50 },
      { name: 'SecY',  x: 42, y: 65, z: 40 },
      { name: 'GyrAB', x: 10, y: 73, z: 15 },
      { name: 'NadE',  x: 80, y: 62, z: 70 },
      { name: 'MenG',  x: 65, y: 48, z: 60 },
      { name: 'MmpL3', x: 68, y: 42, z: 65 },
      { name: 'RpoB',  x: 38, y: 38, z: 30 },
    ];

    const N = v => (v / 100) * 3 - 1.5;
    const norm = proteins.map(p => ({ ...p, nx: N(p.x), ny: N(p.y), nz: N(p.z) }));

    const CX = W / 2, CY = H / 2 + 10;
    const SCALE = 48;
    const ELEV  = 0.50;
    const sinE  = Math.sin(ELEV), cosE = Math.cos(ELEV);

    const LO = -1.5, HI = 1.5, DIVS = 6;
    const STEP = (HI - LO) / DIVS;

    let angle = Math.PI * 0.25;
    let rafId;

    const proj = (x, y, z, a) => {
      const cosA = Math.cos(a), sinA = Math.sin(a);
      const rx = x * cosA - z * sinA;
      const rz = x * sinA + z * cosA;
      return [CX + rx * SCALE, CY - y * SCALE * cosE + rz * SCALE * sinE, rz];
    };

    const ln = (x1, y1, x2, y2, color, width = 0.6) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const a = angle;

      // Floor grid
      for (let i = 0; i <= DIVS; i++) {
        const v = LO + i * STEP;
        const [x1,y1] = proj(v,  LO, LO, a); const [x2,y2] = proj(v,  LO, HI, a);
        ln(x1,y1,x2,y2, 'rgba(255,255,255,0.13)');
        const [x3,y3] = proj(LO, LO, v,  a); const [x4,y4] = proj(HI, LO, v,  a);
        ln(x3,y3,x4,y4, 'rgba(255,255,255,0.13)');
      }

      // Back wall (z = LO)
      for (let i = 0; i <= DIVS; i++) {
        const v = LO + i * STEP;
        const [x1,y1] = proj(LO, v,  LO, a); const [x2,y2] = proj(HI, v,  LO, a);
        ln(x1,y1,x2,y2, 'rgba(255,255,255,0.07)');
        const [x3,y3] = proj(v,  LO, LO, a); const [x4,y4] = proj(v,  HI, LO, a);
        ln(x3,y3,x4,y4, 'rgba(255,255,255,0.07)');
      }

      // Left wall (x = LO)
      for (let i = 0; i <= DIVS; i++) {
        const v = LO + i * STEP;
        const [x1,y1] = proj(LO, v,  LO, a); const [x2,y2] = proj(LO, v,  HI, a);
        ln(x1,y1,x2,y2, 'rgba(255,255,255,0.07)');
        const [x3,y3] = proj(LO, LO, v,  a); const [x4,y4] = proj(LO, HI, v,  a);
        ln(x3,y3,x4,y4, 'rgba(255,255,255,0.07)');
      }

      // Box outline
      const C = {
        A: proj(LO,LO,LO,a), B: proj(HI,LO,LO,a),
        C: proj(HI,LO,HI,a), D: proj(LO,LO,HI,a),
        E: proj(LO,HI,LO,a), F: proj(HI,HI,LO,a),
        G: proj(HI,HI,HI,a), H: proj(LO,HI,HI,a),
      };
      [['E','F'],['F','G'],['G','H'],['H','E'],
       ['A','B'],['B','C'],['C','D'],['D','A'],
       ['A','E'],['B','F'],['C','G'],['D','H']].forEach(([k1,k2]) =>
        ln(C[k1][0],C[k1][1],C[k2][0],C[k2][1], 'rgba(255,255,255,0.22)', 0.8)
      );

      // Project + depth-sort
      const pts = norm.map(p => {
        const [sx, sy, rz] = proj(p.nx, p.ny, p.nz, a);
        const [fx, fy]     = proj(p.nx, LO,   p.nz, a);
        return { ...p, sx, sy, fx, fy, rz };
      }).sort((a, b) => b.rz - a.rz);

      // Drop lines
      ctx.setLineDash([2, 3]);
      pts.forEach(p => ln(p.sx, p.sy, p.fx, p.fy, 'rgba(240,194,74,0.3)', 0.8));
      ctx.setLineDash([]);

      // Spheres + labels
      pts.forEach(p => {
        // Soft outer glow
        const glow = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, 9);
        glow.addColorStop(0,   'rgba(240,194,74,0.18)');
        glow.addColorStop(1,   'rgba(240,194,74,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 9, 0, Math.PI * 2);
        ctx.fill();

        // Sphere with specular highlight
        const r = 5.5;
        const grd = ctx.createRadialGradient(
          p.sx - r * 0.3, p.sy - r * 0.35, r * 0.08,
          p.sx, p.sy, r
        );
        grd.addColorStop(0,   'rgba(255,240,160,1)');
        grd.addColorStop(0.4, 'rgba(248,200,80,1)');
        grd.addColorStop(1,   'rgba(200,140,20,0.9)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fill();

        // Label with background pill
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        const tw = ctx.measureText(p.name).width;
        const lx = p.sx, ly = p.sy - r - 5;
        const pad = 3;
        ctx.fillStyle = 'rgba(0,0,0,0.45)';
        ctx.beginPath();
        ctx.roundRect(lx - tw / 2 - pad, ly - 9, tw + pad * 2, 11, 3);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.fillText(p.name, lx, ly);
      });

      // Axis labels
      ctx.font = '8px monospace';
      ctx.fillStyle = 'rgba(255,255,255,0.55)';
      ctx.textAlign = 'center';
      const [gx, gy]   = proj(0,         LO - 0.25, HI + 0.5, a);
      const [chx, chy] = proj(HI + 0.5,  LO - 0.25, 0,        a);
      ctx.fillText('Genetic Inactivation',  gx,  gy);
      ctx.fillText('Chemical Inactivation', chx, chy);

      const [fax, fay] = proj(LO - 0.5, 0, LO - 0.1, a);
      ctx.save();
      ctx.translate(fax, fay);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText('Feasibility', 0, 0);
      ctx.restore();

      angle += 0.004;
      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '280px', height: '220px', display: 'block' }}
    />
  );
}

function renderChart(id) {
  switch (id) {
    case 'docustore': return <DocuStoreAnimation />;
    case 'fuse':      return <NuisanceAnimation />;
    case 'admet':     return <AdmetAnimation />;
    case 'protein':   return <ProteinScatterViz />;
    default:          return null;
  }
}

// ── AI Section ────────────────────────────────────────────────────────────────

function AISection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = AI_CAPS.length;
  const cap = AI_CAPS[active];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % total), 5000);
    return () => clearInterval(t);
  }, [paused, total]);

  const prev = () => setActive(a => (a - 1 + total) % total);
  const next = () => setActive(a => (a + 1) % total);

  return (
    <section
      className={styles.aiSec}
      id="ai"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.sec}>

        {/* Section heading — top left */}
        <div className={styles.aiHead}>
          <div className={styles.sEye}>AI Capabilities</div>
          <h2 className={styles.sH}>AI modules for<br /><em>drug discovery bottlenecks.</em></h2>
        </div>

        {/* Two-column layout */}
        <div className={styles.aiLayout}>

          {/* Left — circle */}
          <div className={styles.aiLeft}>
            <div
              className={styles.aiCircleWrap}
              style={{
                background: `radial-gradient(circle at 45% 40%, ${cap.color}, ${cap.colorDark} 85%)`,
                boxShadow: `inset 0 -20px 40px -10px rgba(0,0,0,0.2), 0 25px 50px -15px rgba(0,0,0,0.4), 0 0 0 1px ${cap.colorDark}`,
              }}
            >
              <div key={active} className={styles.aiSlideContent}>
                <div className={styles.aiCircleViz}>
                  {renderChart(cap.id)}
                </div>
              </div>
            </div>
          </div>

          {/* Right — text + nav */}
          <div className={styles.aiRight}>
            <div key={active} className={styles.aiRightContent}>

              {/* Accent bar */}
              <div className={styles.aiTitleBar} style={{ backgroundColor: cap.titleColor }} />

              {/* Module title */}
              <div className={styles.aiCircleTitle}>{cap.label.toUpperCase()}</div>

              {/* Live / coming soon badge */}
              {cap.live
                ? <span className={styles.aiLiveBadge} style={{ color: cap.titleColor, borderColor: `${cap.titleColor}60` }}>● ACTIVE</span>
                : <span className={styles.aiComingSoon} style={{ color: cap.titleColor }}>coming soon</span>
              }

              {/* Description */}
              <p className={styles.aiDesc}>{cap.desc}</p>

            </div>

            {/* Nav row */}
            <div className={styles.aiNavRow}>
              <button className={styles.aiNavBtn} onClick={prev} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className={styles.aiDots}>
                {AI_CAPS.map((c, i) => (
                  <div
                    key={i}
                    className={styles.aiDot}
                    style={{
                      width: i === active ? 18 : 5,
                      backgroundColor: i === active ? c.titleColor : `${c.titleColor}50`,
                    }}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>

              <button className={styles.aiNavBtn} onClick={next} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className={styles.aiSlideCounter}>
                <span className={styles.aiSlideNum}>{active + 1}</span>
                <span className={styles.aiSlideOf}>/ {AI_CAPS.length}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FuseSection() {
  return (
    <section className={styles.fuseSec} id="fuse">
      <div className={styles.sec}>
        {/* 2-column header */}
        <div className={styles.fHdr}>
          <div>
            <div className={styles.sEye}>Live Feature · Fuse AI</div>
            <h2 className={styles.sH}>
              Nuisance Detection —<br /><em>caught before they cost you</em>
            </h2>
            <p className={styles.sSub} style={{ marginTop: "1rem" }}>
              Fuse deploys a multimodal deep learning model as a microservice inside
              DAIKON's screening pipeline. Before any compound reaches expensive structural
              modelling, Fuse flags it automatically across four interference mechanisms.
            </p>
            <a
              href="https://github.com/sidxz/cage_fusion"
              className={styles.sLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the Fuse source code →
            </a>
          </div>
          <ul className={styles.checkList}>
            {FUSE_BULLETS.map((b, i) => (
              <li key={i} className={styles.checkItem}>
                <div className={styles.checkIcon}>✓</div>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full-width screenshot */}
        <div className={styles.fuseFrame}>
          <div className={styles.fuseBar}>
            <div className={styles.fDot} style={{ background: "#ff5f57" }} />
            <div className={styles.fDot} style={{ background: "#febc2e" }} />
            <div className={styles.fDot} style={{ background: "#28c840" }} />
            <span className={styles.fTit}>DAIKON · FUSE · NUISANCE DETECTION</span>
          </div>
          <img
            src="/daikon/img/FuseAI/fuse-screen1.png"
            alt="Fuse nuisance detection — SMILES input with radar chart and per-class scores"
            className={styles.fuseImg}
          />
          <div className={styles.fMRow}>
            {[["0.94", "ROC-AUC"], ["0.66", "MCC"], ["4.5×", "vs PAINS"]].map(([v, l], i) => (
              <div key={i} className={styles.fMb}>
                <div className={styles.fMv}>{v}</div>
                <div className={styles.fMl}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className={styles.trust}>
      <div className={styles.sec}>
        <div className={styles.sEyeLight}>Why it matters</div>
        <div className={styles.trustGrid}>
          {TRUST.map((t, i) => (
            <div key={i} className={styles.trustItem}>
              <div className={styles.tiN}>{t.n}</div>
              <div className={styles.tiH}>{t.h}</div>
              <p className={styles.tiP}>{t.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsortiumSection() {
  return (
    <section className={styles.consortium}>
      <div className={styles.sec}>
        <div className={styles.cInner}>
          <div className={styles.cBig}>
            25+
            <span>Organizations{"\n"}in active use</span>
          </div>
          <div className={styles.cRows}>
            {CONSORTIUM_ROWS.map(([k, v], i) => (
              <div key={i} className={styles.cRow}>
                <span className={styles.cKey}>{k}</span>
                <span className={styles.cVal}>{v}</span>
              </div>
            ))}
          </div>
          <div className={styles.cCTA}>
            <a
              href="https://github.com/saclab/daikon-core-server"
              className={styles.cBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started on GitHub
            </a>
            <p className={styles.cNote}>
              Open source{"\n"}For academic and research programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <div className={styles.ctaBg}>
      <div className={styles.ctaI}>
        <h2>
          Start building your<br /><em>discovery platform</em> today
        </h2>
        <p>
          DAIKON is free, open source, and ready to deploy. Join research programs across
          academia and industry running their drug discovery portfolios on DAIKON.
        </p>
        <div className={styles.ctaBts}>
          <a
            href="https://github.com/saclab/daikon-core-server"
            className={styles.ctaBtnW}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started on GitHub
          </a>
          <Link className={styles.ctaBtnG} to="/docs/intro">
            Read the Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <Layout
      title="DAIKON — Open Platform for Drug Discovery"
      description="Open-source, AI-augmented platform for target-based drug discovery. Integrating molecular data, Fuse AI compound screening, and DocuStore document intelligence."
    >
      <Hero />
      <MoleculeSection />
      <AISection />
      {/* <CapabilitiesSection /> */}
      {/* <FuseSection /> */}
      <TrustSection />
      <ConsortiumSection />
      <CTASection />
    </Layout>
  );
}
