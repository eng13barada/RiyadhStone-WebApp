import React from "react";
import SiteLayout from "../layout/SiteLayout";
import Reveal from "../components/motion/Reveal";
import ParallaxBg from "../components/motion/ParallaxBg";
import { Button, Card, Badge } from "../components/ui";
import MG1TraceabilityShuffler from "../components/mg/MG1TraceabilityShuffler";
import MG2TelemetryTypewriter from "../components/mg/MG2TelemetryTypewriter";
import MG3CursorProtocol from "../components/mg/MG3CursorProtocol";
import MG4LaserScan from "../components/mg/MG4LaserScan";
import MG5WaveformAssurance from "../components/mg/MG5WaveformAssurance";
import MG6SpecComparator from "../components/mg/MG6SpecComparator";
import MG7MaterialLayer from "../components/mg/MG7MaterialLayer";
import MG8ApprovalPack from "../components/mg/MG8ApprovalPack";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Download,
  Eye,
  Flag,
  Compass,
  Maximize,
  Minimize,
} from "lucide-react";
import SelectionTool from "../components/tools/SelectionTool";
import ProcessMethodologySection from "../sections/ProcessMethodologySection";
import ManifestoCompareSection from "../components/sections/ManifestoCompareSection";
import RS1UnifiedSection from "../sections/RS1UnifiedSection";
import RiskMitigationEngine from "../sections/RiskMitigationEngine";
import ClosingSustainabilityHSESection from "../sections/ClosingSustainabilityHSESection";
import LightFooterWithMap from "../sections/LightFooterWithMap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../assets/generated/RiyadhStone-Home-HERO.png";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    // Fade out scroll indicator on scroll
    const fadeAnimation = gsap.to(".hero-scroll-indicator", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#top",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });

    return () => {
      fadeAnimation.kill();
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <SiteLayout>
      <div className="rs-noise-overlay" /> {/* Global fixed noise overlay */}
      {/* HERO & PHILOSOPHY FIXED BACKGROUND WRAPPER */}
      <div
        className="relative border-b border-[#4E3E2F]/10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FCFBEE]/40 to-[#FCFBEE]/95 z-0 pointer-events-none" />
        <div className="absolute inset-0 rs-noise-overlay opacity-40 z-0 mix-blend-overlay" />

        {/* SECTION 01a — Engineering Hero */}
        <section
          id="top"
          className="relative z-10 flex flex-col justify-center min-h-screen px-6 overflow-hidden"
          data-section-name="Initialize"
          data-theme="light"
        >
          {/* Engineering grid background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-[0.06]"
            >
              <defs>
                <pattern
                  id="hero-grid-sm"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#CEAA6A"
                    strokeWidth="0.5"
                  />
                </pattern>
                <pattern
                  id="hero-grid-lg"
                  width="120"
                  height="120"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 120 0 L 0 0 0 120"
                    fill="none"
                    stroke="#CEAA6A"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid-sm)" />
              <rect width="100%" height="100%" fill="url(#hero-grid-lg)" />
              {/* Node points */}
              {[
                [120, 120],
                [240, 240],
                [360, 120],
                [480, 240],
                [600, 120],
                [720, 240],
                [840, 120],
                [960, 240],
                [180, 360],
                [300, 360],
                [420, 360],
                [540, 360],
                [660, 360],
                [780, 360],
                [900, 360],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="2"
                  fill="#CEAA6A"
                  opacity="0.5"
                />
              ))}
              {/* Thin connection lines between some nodes */}
              <line
                x1="120"
                y1="120"
                x2="240"
                y2="240"
                stroke="#CEAA6A"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="240"
                y1="240"
                x2="360"
                y2="120"
                stroke="#CEAA6A"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="360"
                y1="120"
                x2="480"
                y2="240"
                stroke="#CEAA6A"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="480"
                y1="240"
                x2="600"
                y2="120"
                stroke="#CEAA6A"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="600"
                y1="120"
                x2="720"
                y2="240"
                stroke="#CEAA6A"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="720"
                y1="240"
                x2="840"
                y2="120"
                stroke="#CEAA6A"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </svg>
            {/* Radial vignette to focus center */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#FCFBEE_100%)]" />
          </div>

          <div className="container mx-auto max-w-[90rem] relative z-10 px-4 md:px-8">
            <div className="flex flex-col min-h-[calc(100vh-6rem)] justify-center py-20 lg:py-0">
              {/* ── Brand name with dividers (centered) ── */}
              <div
                className="flex items-center justify-center gap-4 mb-32"
                style={{ animation: "heroFadeUp 0.45s ease-out both" }}
              >
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background:
                      "linear-gradient(to right, transparent, rgba(78,62,47,0.35))",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
                    fontWeight: 900,
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "#4E3E2F",
                  }}
                >
                  Riyadh<span style={{ color: "#CEAA6A" }}>Stone</span>®
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background:
                      "linear-gradient(to left, transparent, rgba(78,62,47,0.35))",
                  }}
                />
              </div>

              {/* ── Main equation headline (centered) ── */}
              <h1
                className="flex flex-col items-center justify-center text-center w-full font-manrope"
                style={{
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  textTransform: "lowercase",
                  margin: 0,
                  animation: "heroFadeUp 0.55s 0.06s ease-out both",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(1.6rem, 5vw, 4.5rem)",
                    background:
                      "linear-gradient(135deg, #2C2319 0%, #4E3E2F 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    whiteSpace: "nowrap",
                  }}
                >
                  engineered stone = trusted result's
                </span>
              </h1>

              {/* ── Centered content below headline ── */}
              <div className="flex flex-col items-center text-center mt-10">
                {/* Subheadline */}
                <p
                  className="text-[clamp(1rem,1.4vw,1.15rem)] text-[#625C55] font-[500] leading-relaxed mb-8 max-w-xl"
                  style={{ animation: "heroFadeUp 0.6s 0.14s ease-out both" }}
                >
                  We translate architectural intent into measurable stone
                  systems—interfaces, tolerances, validation packs, and
                  disciplined delivery records.
                </p>

                {/* Proof Pills */}
                <div
                  className="flex flex-wrap justify-center gap-3 mb-8"
                  style={{ animation: "heroFadeUp 0.5s 0.2s ease-out both" }}
                >
                  {["Interfaces", "Tolerances", "Validation Records"].map(
                    (pill) => (
                      <span
                        key={pill}
                        className="text-[11px] font-[900] uppercase tracking-[0.28em] px-5 py-2.5 rounded-none border border-[#4E3E2F]/20 text-[#4E3E2F]/70 hover:-translate-y-0.5 transition-transform duration-200 cursor-default select-none"
                      >
                        {pill}
                      </span>
                    ),
                  )}
                </div>

                {/* CTAs */}
                <div
                  className="flex flex-col sm:flex-row justify-center gap-3 mb-8"
                  style={{ animation: "heroFadeUp 0.5s 0.25s ease-out both" }}
                >
                  <a
                    href="/contact-us#rfq"
                    className="flex items-center justify-center gap-2 bg-[#2C2319] text-[#FCFBEE] px-10 py-4 rounded-none font-[800] text-sm uppercase tracking-widest hover:bg-[#CEAA6A] hover:text-[#12100E] transition-colors shadow-xl"
                  >
                    <ArrowRight size={15} />
                    Start an RFQ
                  </a>
                  <a
                    href="#method"
                    className="flex items-center justify-center gap-2 border border-[#4E3E2F]/25 bg-white/60 backdrop-blur-md text-[#24201C] px-10 py-4 rounded-none font-[700] text-sm uppercase tracking-widest hover:border-[#CEAA6A] hover:text-[#CEAA6A] transition-colors"
                  >
                    Explore the 9-Step Protocol
                  </a>
                </div>

                {/* Micro note — glowing italic */}
                <div
                  style={{ animation: "heroFadeUp 0.5s 0.3s ease-out both" }}
                >
                  <p
                    style={{
                      fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
                      fontWeight: 600,
                      fontStyle: "italic",
                      letterSpacing: "0.01em",
                      color: "rgba(78,62,47,0.7)",
                      animation: "glowPulse 4s ease-in-out infinite alternate",
                      padding: "0.5rem 1.4rem",
                      border: "1px solid rgba(206,170,106,0.22)",
                      borderRadius: "0",
                      background: "rgba(252,251,238,0.55)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Natural material isn't the risk — undocumented expectations
                    are.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity hero-scroll-indicator">
            <span className="text-[#4E3E2F]/50 text-[10px] uppercase tracking-[0.38em] font-[800]">
              Scroll to initiate
            </span>
            <ArrowRight
              size={14}
              className="text-[#CEAA6A] rotate-90 animate-bounce"
            />
          </div>

          <style>{`
            @keyframes heroFadeUp {
              from { opacity: 0; transform: translateY(22px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes equalsGlow {
              from { filter: drop-shadow(0 0 8px rgba(206,170,106,0.3)); }
              to   { filter: drop-shadow(0 0 22px rgba(206,170,106,0.7)); }
            }
            @keyframes glowPulse {
              from { box-shadow: 0 0 8px rgba(206,170,106,0.08); }
              to   { box-shadow: 0 0 22px rgba(206,170,106,0.22); }
            }
          `}</style>
        </section>

        {/* SECTION 01b — Core Values / Philosophy */}
        <section
          id="philosophy"
          className="relative z-10 pb-32 pt-16 px-6"
          data-section-name="Philosophy"
          data-theme="dark"
        >
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center mb-16">
              <Reveal>
                <span className="text-[#CEAA6A] font-[800] tracking-[0.2em] text-sm uppercase block mb-4">
                  Core Values
                </span>
                <h2 className="text-H2 font-[800] tracking-tight text-[#4E3E2F]">
                  Our Philosophy
                </h2>
              </Reveal>
              <Reveal className="max-w-xl outline-none mt-4">
                <p className="text-[#24201C] font-[500] text-xl leading-relaxed">
                  We are guided by principles that prioritize longevity,
                  aesthetic purity, and engineering validation.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Vision Card */}
              <Reveal delay={0.1}>
                <div className="glass-panel-ivory p-10 h-full border border-[#CEAA6A]/20 hover:border-[#CEAA6A] transition-colors group relative overflow-hidden">
                  <div className="w-12 h-12 rounded-none bg-[#CEAA6A]/10 text-[#CEAA6A] flex items-center justify-center mb-8 border border-[#CEAA6A]/20 group-hover:scale-110 transition-transform">
                    <Eye size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-[800] text-[#4E3E2F] mb-4">
                    Vision
                  </h3>
                  <p className="text-[#24201C] leading-relaxed font-[500] text-base">
                    To be the global benchmark for stone engineering,
                    transforming how architects perceive and utilize natural
                    materials in modern skylines.
                  </p>
                  <Eye
                    size={120}
                    className="absolute -bottom-8 -right-8 text-[#CEAA6A] opacity-[0.08] group-hover:scale-125 transition-transform duration-700 pointer-events-none"
                  />
                </div>
              </Reveal>

              {/* Mission Card */}
              <Reveal delay={0.2}>
                <div className="glass-panel-ivory p-10 h-full border border-[#CEAA6A]/20 hover:border-[#CEAA6A] transition-colors group relative overflow-hidden">
                  <div className="w-12 h-12 rounded-none bg-[#CEAA6A]/10 text-[#CEAA6A] flex items-center justify-center mb-8 border border-[#CEAA6A]/20 group-hover:scale-110 transition-transform">
                    <Flag size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-[800] text-[#4E3E2F] mb-4">
                    Mission
                  </h3>
                  <p className="text-[#24201C] leading-relaxed font-[500] text-base">
                    Delivering uncompromising quality through a hybrid model of
                    owned engineering and partnered manufacturing, ensuring
                    scalability without sacrificing precision.
                  </p>
                  <Flag
                    size={120}
                    className="absolute -bottom-8 -right-8 text-[#CEAA6A] opacity-[0.08] group-hover:scale-125 transition-transform duration-700 pointer-events-none"
                  />
                </div>
              </Reveal>

              {/* Integrity Card */}
              <Reveal delay={0.3}>
                <div className="glass-panel-ivory p-10 h-full border border-[#CEAA6A]/20 hover:border-[#CEAA6A] transition-colors group relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-[#CEAA6A]/10 text-[#CEAA6A] flex items-center justify-center mb-8 border border-[#CEAA6A]/20 group-hover:scale-110 transition-transform">
                    <Compass size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-[800] text-[#4E3E2F] mb-4">
                    Integrity
                  </h3>
                  <p className="text-[#24201C] leading-relaxed font-[500] text-base">
                    We believe in the truth of materials. No composites
                    disguised as stone. No compromises on structural safety.
                    Authentic materials, authentically engineered.
                  </p>
                  <Compass
                    size={120}
                    className="absolute -bottom-8 -right-8 text-[#CEAA6A] opacity-[0.08] group-hover:scale-125 transition-transform duration-700 pointer-events-none"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
      {/* SECTION 07 — Engineering Methodology */}
      <ProcessMethodologySection />
      {/* SECTION 05 & 06 MERGED — Manifesto and Comparison */}
      <ManifestoCompareSection />
      {/* SECTION 08, 09, 10, 12 MERGED — RS1 Unified Light Section */}
      <RS1UnifiedSection />
      {/* NEW DARK MEGA-SECTION: Methodology & Risk Mitigation Engine */}
      <RiskMitigationEngine />
      {/* (Sections 03 & 04 consolidated into RiskMitigationEngine) */}
      {/* (Sections 14 & 16 removed as requested) */}
      {/* (Section 18 Engineering consolidated into RiskMitigationEngine) */}
      {/* (Section 21 Reality Capture consolidated into RiskMitigationEngine) */}
      {/* (Section 24 Quality Gate Chain consolidated into RiskMitigationEngine) */}
      {/* (Section 25 Lifecycle Support consolidated into RiskMitigationEngine) */}
      {/* (Section 32 removed as requested) */}
      {/* (Section 36 Library Preview consolidated into RiskMitigationEngine) */}
      <ClosingSustainabilityHSESection />
      <LightFooterWithMap />
    </SiteLayout>
  );
};

export default Home;
