import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import orbitalIcon from "@/assets/orbital-icon.png";
import NuisanceAnimation from "@/components/NuisanceAnimation";
import ProteinScatterChart from "@/components/ProteinScatterChart";
import DocuStoreAnimation from "@/components/DocuStoreAnimation";
import AdmetAnimation from "@/components/AdmetAnimation";

const agents = [
  {
    title: "NUISANCE DETECTION AI",
    description:
      "Flagging compounds that produce misleading assay signals to eliminate false positives early.",
    color: "#8a759a",
    colorDark: "#6b5a7e",
    titleColor: "#ff6b6b",
    customChart: "nuisance",
  },
  {
    title: "ADMET PREDICTION AI",
    description:
      "ADMET estimates surfaced at any pipeline stage to de-risk candidates before costly trials.",
    color: "#a98d7e",
    colorDark: "#8a7264",
    titleColor: "#ffc857",
    customChart: "admet",
    comingSoon: true,
  },
  {
    title: "PROTEIN ASSESSMENT AI",
    description:
      "Target scoring informed by prior work and literature to prioritize the most druggable proteins.",
    color: "#5a72a5",
    colorDark: "#455a88",
    titleColor: "#50e3c2",
    customChart: "protein",
    comingSoon: true,
  },
  {
    title: "DOCUSTORE AI",
    description:
      "Extracting knowledge from unstructured research documents to accelerate insight discovery.",
    color: "#5d9ca6",
    colorDark: "#497e87",
    titleColor: "#ffc350",
    customChart: "docustore",
  },
];

const AgentCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % agents.length);
  }, []);
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + agents.length) % agents.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
  };

  const agent = agents[current];

  return (
    <div className="relative w-[min(90vw,640px)] flex flex-col items-center">
      {/* Main circle */}
      <motion.div
        className="relative w-full aspect-square rounded-full overflow-hidden"
        animate={{
          background: `radial-gradient(circle at 45% 40%, ${agent.color}, ${agent.colorDark} 85%)`,
          boxShadow: `
            inset 0 -20px 40px -10px rgba(0,0,0,0.2),
            0 25px 50px -15px rgba(0,0,0,0.4),
            0 0 0 1px ${agent.colorDark}
          `,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* Chart only inside circle */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-10 sm:px-16">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col items-center text-center"
            >
              {/* Title */}
              <div className="flex flex-col items-center mb-3 sm:mb-4">
                <span className="inline-block font-mono text-base sm:text-xl font-bold tracking-[0.2em] uppercase text-white">
                  {agent.title}
                </span>
                <motion.div
                  key={`bar-${current}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                  className="h-[3px] w-full mt-1.5 rounded-full origin-left"
                  style={{ backgroundColor: agent.titleColor }}
                />
                {agent.comingSoon && (
                  <span className="font-mono text-[9px] tracking-[0.15em] uppercase mt-1.5 px-2 py-0.5" style={{ color: agent.titleColor }}>
                    coming soon
                  </span>
                )}
              </div>

              {/* Chart */}
              <div className={`${agent.customChart ? 'w-64 h-64 sm:w-80 sm:h-80' : 'w-24 h-24 sm:w-28 sm:h-28'} relative flex items-center justify-center`}>
                {agent.customChart === "nuisance" ? (
                  <NuisanceAnimation />
                ) : agent.customChart === "admet" ? (
                  <AdmetAnimation />
                ) : agent.customChart === "protein" ? (
                  <ProteinScatterChart />
                ) : agent.customChart === "docustore" ? (
                  <DocuStoreAnimation />
                ) : (
                  <>
                    <div className="absolute inset-0 rounded-full border border-dashed" style={{ borderColor: `${agent.color}40` }} />
                    <img src={orbitalIcon} alt="Agent icon" className="w-full h-full object-contain opacity-80" />
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-[7%] top-1/2 -translate-y-1/2 p-1.5 text-white/30 hover:text-white/60 transition-colors z-20"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          className="absolute right-[7%] top-1/2 -translate-y-1/2 p-1.5 text-white/30 hover:text-white/60 transition-colors z-20"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
        </button>
      </motion.div>

      {/* Slide indicator dots */}
      <div className="flex items-center gap-2 mt-8">
        {agents.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              backgroundColor: i === current ? agent.titleColor : `${agent.titleColor}30`,
              width: i === current ? 18 : 5,
              height: 5,
            }}
            layout
          />
        ))}
      </div>
    </div>
  );
};

export default AgentCarousel;
