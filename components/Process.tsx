import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { FiCloud } from "react-icons/fi";
import { COLORS } from "../lib/constants";
import { useThemeState } from "../providers/Theme.provider";
import { SectionTitle } from "./Testimonials";
import { useTranslation } from "../hooks/useTranslation";
import { Color } from "../types/interfaces";

// A small looping visual per step — scanning, typing, launching, growing —
// so each point is illustrated, not just numbered. Purely CSS/SVG, no new
// dependency, and each respects prefers-reduced-motion via the shared rule
// on AnimatedShape below.

const RadarVisual = ({ color }: { color: Color }) => (
  <RadarBox>
    <RadarSweep
      style={{
        background: `conic-gradient(from 0deg, transparent 0deg, ${color.start} 60deg, transparent 110deg)`,
        animationDelay: "-1.1s",
      }}
    />
    <RadarDot
      style={{ top: "20%", left: "62%", background: color.stop, animationDelay: "-0.3s" }}
    />
    <RadarDot
      style={{ top: "58%", left: "28%", background: color.stop, animationDelay: "-1.6s" }}
    />
    <RadarDot
      style={{ top: "68%", left: "66%", background: color.start, animationDelay: "-0.9s" }}
    />
  </RadarBox>
);

// A real-looking terminal window: macOS traffic-light dots, and a color
// scheme that inverts against the page (light window on dark mode, dark
// window on light mode) so it reads as its own little app, not a tinted box.
const CodeVisual = (_props: { color: Color }) => {
  const { isDarkMode } = useThemeState();
  const textColor = isDarkMode ? "#111111" : "#f5f5f5";
  return (
    <TerminalBox
      style={{
        background: isDarkMode ? "#f5f5f5" : "#111111",
      }}
    >
      <TerminalDots>
        <TerminalDot style={{ background: "#ff5f57" }} />
        <TerminalDot style={{ background: "#febc2e" }} />
        <TerminalDot style={{ background: "#28c840" }} />
      </TerminalDots>
      <CodeRow>
        <CodeLine $width="5.6rem" style={{ color: textColor, animationDelay: "-1.4s" }}>
          $ npm run build
        </CodeLine>
      </CodeRow>
      <CodeRow>
        <CodeLine $width="4.2rem" style={{ color: textColor, animationDelay: "-2.3s" }}>
          ✓ Compiled
        </CodeLine>
        <Cursor style={{ background: textColor, animationDelay: "-0.4s" }} />
      </CodeRow>
    </TerminalBox>
  );
};

const CloudVisual = ({ color }: { color: Color }) => (
  <CloudStage>
    <CloudIconWrap style={{ color: color.start }}>
      <FiCloud size={26} />
    </CloudIconWrap>
    <PacketField>
      <Packet style={{ left: "22%", background: color.stop, animationDelay: "-0.9s" }} />
      <Packet style={{ left: "50%", background: color.start, animationDelay: "-1.7s" }} />
      <Packet style={{ left: "76%", background: color.stop, animationDelay: "-0.3s" }} />
    </PacketField>
  </CloudStage>
);

const GrowthVisual = ({ color }: { color: Color }) => (
  <ChartBox>
    {[38, 62, 50, 88].map((h, i) => (
      <Bar
        key={h}
        $h={h}
        style={{
          background: `linear-gradient(180deg, ${color.stop}, ${color.start})`,
          animationDelay: `${-(0.4 + i * 0.55)}s`,
        }}
      />
    ))}
  </ChartBox>
);

const STEP_VISUALS = [RadarVisual, CodeVisual, CloudVisual, GrowthVisual];

export const Process = () => {
  const { theme } = useThemeState();
  const t = useTranslation();
  const steps = t.process.steps;
  // Desktop: only one step's illustration plays at a time, cycling through
  // them automatically — no hover needed to notice they're there. Mobile
  // ignores this (see VisualWrapper) and just runs every animation.
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % steps.length);
    }, 3500);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <Section id="process">
      <SectionTitle
        $margin="0 0.5rem var(--section-inner-gap) 0.5rem"
        style={{ color: theme.sectionTitleColor }}
      >
        {t.process.sectionTitle}
      </SectionTitle>
      <Timeline>
        {steps.map((step, index) => {
          const color = COLORS[index % COLORS.length];
          const Visual = STEP_VISUALS[index % STEP_VISUALS.length];
          return (
            <Step key={step.title}>
              <StepHeader>
                <Circle
                  style={{
                    background: `linear-gradient(135deg, ${color.start}, ${color.stop})`,
                    boxShadow: `0px 0px 2rem 0px ${color.start}`,
                  }}
                >
                  {index + 1}
                </Circle>
                {index < steps.length - 1 && (
                  <Line style={{ background: theme.middleFontColor }} />
                )}
              </StepHeader>
              <StepTitle style={{ color: theme.fontColor }}>
                {step.title}
              </StepTitle>
              <StepDescription style={{ color: theme.secondaryFontColor }}>
                {step.description}
              </StepDescription>
              <VisualWrapper
                style={
                  {
                    color: theme.middleFontColor,
                    "--play-state": index === activeIndex ? "running" : "paused",
                  } as React.CSSProperties
                }
              >
                <Visual color={color} />
              </VisualWrapper>
            </Step>
          );
        })}
      </Timeline>
    </Section>
  );
};

const Section = styled.div`
  margin: 0 1.5rem var(--section-gap) 1.5rem;

  @media (max-width: 768px) {
    margin: 0 1rem var(--section-gap) 1rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 72rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    max-width: 24rem;
  }
`;

const VisualWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  width: 100%;
  /* Pinned to the bottom of the step instead of a fixed margin, so all 4
     illustrations line up on the same baseline even when one description
     is shorter than the others. */
  margin-top: auto;
  padding-top: 1.5rem;
  /* Idle by default on desktop — Process cycles one step's illustration at
     a time (see activeIndex) instead of running all 4 loops at once. */
  --play-state: paused;

  @media (max-width: 768px) {
    /* Mobile isn't driven by the cycling index, so just let every
       illustration run continuously. */
    --play-state: running !important;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
    }
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;

  &:hover ${VisualWrapper} {
    --play-state: running;
  }

  @media (max-width: 1024px) {
    align-items: flex-start;
    text-align: left;
    width: 100%;
  }
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    width: auto;
    margin-bottom: 1rem;
  }
`;

const Circle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  border-radius: 99999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight);
  color: white;
`;

const Line = styled.div`
  height: 1px;
  flex: 1;
  margin-left: 1rem;
  opacity: 0.3;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StepTitle = styled.div`
  font-size: 1.15rem;
  font-weight: var(--font-weight);
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.div`
  font-size: 0.9rem;
  line-height: var(--line-height);
  max-width: 16rem;

  @media (max-width: 1024px) {
    max-width: none;
  }
`;

// Découverte — a scanning radar with a couple of pings, like signals being
// picked up during discovery.
const RadarBox = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 99999px;
  border: 1px solid;
  overflow: hidden;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const RadarSweep = styled.div`
  position: absolute;
  inset: 0;
  animation: ${spin} 3s linear infinite;
  animation-play-state: var(--play-state, paused);
`;

const ping = keyframes`
  0% { opacity: 0; transform: scale(0.4); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: scale(1.2); }
`;

const RadarDot = styled.div`
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 99999px;
  animation: ${ping} 2.4s ease-in-out infinite;
  animation-play-state: var(--play-state, paused);
`;

// Conception & Développement — a tiny terminal window with lines that type
// in, colored like a real macOS window (inverted against the page).
const TerminalBox = styled.div`
  width: 100%;
  max-width: 9.5rem;
  padding: 0.6rem 0.7rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const TerminalDots = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.15rem;
`;

const TerminalDot = styled.div`
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 99999px;
`;

const CodeRow = styled.div`
  display: flex;
  align-items: center;
`;

const codeReveal = keyframes`
  0%, 8% { clip-path: inset(0 100% 0 0); }
  40%, 78% { clip-path: inset(0 0% 0 0); }
  95%, 100% { clip-path: inset(0 100% 0 0); }
`;

const CodeLine = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  overflow: hidden;
  white-space: nowrap;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.62rem;
  line-height: 1.4;
  animation: ${codeReveal} 3.2s ease-in-out infinite;
  animation-play-state: var(--play-state, paused);
`;

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const Cursor = styled.div`
  width: 0.28rem;
  height: 0.6rem;
  margin-left: 0.2rem;
  animation: ${blink} 0.9s step-end infinite;
  animation-play-state: var(--play-state, paused);
`;

// Mise en ligne — small data packets rising and fading into the cloud.
const CloudStage = styled.div`
  position: relative;
  width: 100%;
  max-width: 6rem;
  height: 3.75rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const CloudIconWrap = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
`;

const PacketField = styled.div`
  position: absolute;
  inset: 0;
`;

const flowUp = keyframes`
  0% { bottom: 0; opacity: 0; transform: translateX(-50%) scale(0.6); }
  25% { opacity: 1; transform: translateX(-50%) scale(1); }
  85% { opacity: 1; }
  100% { bottom: 82%; opacity: 0; transform: translateX(-50%) scale(0.6); }
`;

const Packet = styled.div`
  position: absolute;
  bottom: 0;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.15rem;
  animation: ${flowUp} 2.2s ease-in infinite;
  animation-play-state: var(--play-state, paused);
`;

// Croissance — bars growing at a slightly staggered pace.
const ChartBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  height: 3.5rem;
`;

const grow = keyframes`
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
`;

const Bar = styled.div<{ $h: number }>`
  width: 0.5rem;
  height: ${(props) => props.$h}%;
  border-radius: 99999px 99999px 0 0;
  transform-origin: bottom;
  animation: ${grow} 2.4s ease-in-out infinite;
  animation-play-state: var(--play-state, paused);
`;

export default Process;
