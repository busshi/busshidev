import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useIsMobile } from "@busshi/react-hooks";
import { TESTIMONIALS } from "../lib/testimonials";
import { PAGE_SPEED_RESULTS } from "../lib/constants";
import { useThemeState } from "../providers/Theme.provider";
import { useTranslation } from "../hooks/useTranslation";

interface TrustLogo {
  name: string;
  src: string;
  // Intrinsic file dimensions, required by next/image to reserve layout
  // space and compute the aspect ratio (actual display size is set via
  // CSS height below, width auto).
  width: number;
  height: number;
  // Which background the logo's native colors are designed for. "light"
  // logos (dark ink on a white/near-white file) get inverted in dark mode
  // so they read on a dark chip. "dark" logos (light/white wordmark) get
  // inverted in light mode instead. "neutral" logos carry their own
  // background or real alpha transparency and are never inverted.
  nativeOn: "light" | "dark" | "neutral";
  scale?: boolean;
  // True once the file's background has been keyed out to real alpha
  // transparency (see public/logos/README or the removeBg script used to
  // produce notice.png / la-poste.png) — no blend-mode trick needed then,
  // and applying one would actually break it: mix-blend-mode composites
  // against an isolated, initially-black backdrop as soon as the chip's
  // own `filter: grayscale(1)` creates a stacking context, so a "multiply"
  // blend (identity = white) turns the whole logo black instead of no-op.
  hasAlpha?: boolean;
  // Notice's file is just the bulb mark — on its own it's not recognizable
  // enough in the chip, so it gets the company name set alongside it.
  showLabel?: boolean;
  // "below" (default) stacks the name under the mark; "right" (used by
  // Notice and MCDS) sits it beside the mark instead.
  labelPosition?: "below" | "right";
  // Wraps the logo in a small solid-white card in dark mode only. For a
  // real photo (not a vector mark) whose own transparent-cut margin still
  // shows a bit of its natural white nearer the artwork, a plain white
  // backdrop is what makes it read as an intentional card on a dark chip.
  // In light mode the wrapper is transparent instead — the logo's real
  // alpha-cut edges already blend into the page's own background there,
  // so forcing white would fight it rather than match it.
  plate?: boolean;
}

const LOGOS: TrustLogo[] = [
  {
    name: "Price Bee",
    src: "/logos/pricebee.png",
    width: 210,
    height: 132,
    nativeOn: "neutral",
    scale: true,
    hasAlpha: true,
  },
  {
    name: "Notice",
    src: "/logos/notice.png",
    width: 100,
    height: 100,
    nativeOn: "light",
    scale: true,
    hasAlpha: true,
    showLabel: true,
    labelPosition: "right",
  },
  {
    name: "Octolo",
    src: "/logos/octolo.svg",
    width: 340,
    height: 147,
    nativeOn: "dark",
    hasAlpha: true,
  },
  {
    name: "La Poste",
    src: "/logos/la-poste.png",
    width: 900,
    height: 300,
    nativeOn: "neutral",
    scale: true,
    hasAlpha: true,
  },
  {
    name: "Ministère de l'Éducation nationale",
    src: "/logos/ministere-education-nationale.webp",
    width: 380,
    height: 184,
    nativeOn: "neutral",
    scale: true,
    hasAlpha: true,
    plate: true,
  },
  {
    name: "Station F",
    src: "/logos/station-f.webp",
    width: 300,
    height: 150,
    nativeOn: "light",
  },
  {
    name: "MCDS",
    src: "/logos/mcds.webp",
    width: 64,
    height: 70,
    nativeOn: "neutral",
    scale: true,
    hasAlpha: true,
    showLabel: true,
    labelPosition: "right",
  },
];

const LOGO_NAMES = new Set(LOGOS.map((l) => l.name.toLowerCase()));

// Testimonial clients without a logo asset yet fall back to a text chip.
const getUnlistedCompanies = () => {
  const seen = new Set<string>();
  return TESTIMONIALS.filter(({ company }) => {
    if (!company || seen.has(company)) return false;
    if (LOGO_NAMES.has(company.toLowerCase())) return false;
    seen.add(company);
    return true;
  });
};

type TrackItem =
  | { kind: "logo"; key: string; logo: TrustLogo }
  | { kind: "text"; key: string; label: string };

const LogoImage = ({
  logo,
  isDarkMode,
  height,
}: {
  logo: TrustLogo;
  isDarkMode: boolean;
  height: string;
}) => {
  const invert =
    (logo.nativeOn === "light" && isDarkMode) ||
    (logo.nativeOn === "dark" && !isDarkMode);

  // next/image blocks SVGs by default (dangerouslyAllowSVG is off) — a
  // plain <img> is the right tool for a small trusted local vector asset.
  if (logo.src.endsWith(".svg")) {
    return (
      <LogoSvg
        src={logo.src}
        alt={logo.name}
        $invert={invert}
        style={{ height }}
      />
    );
  }

  return (
    <LogoImg
      src={logo.src}
      alt={logo.name}
      width={logo.width}
      height={logo.height}
      $invert={invert}
      $blendMode={
        logo.hasAlpha || logo.nativeOn !== "light"
          ? "normal"
          : isDarkMode
            ? "screen"
            : "multiply"
      }
      style={{ height, width: "auto" }}
    />
  );
};

export const TrustBar = () => {
  const { theme, isDarkMode } = useThemeState();
  const isMobile = useIsMobile();
  const t = useTranslation();
  const unlistedCompanies = getUnlistedCompanies();
  const performance =
    PAGE_SPEED_RESULTS[isMobile ? "mobile" : "laptop"].performances;

  const items: TrackItem[] = [
    ...LOGOS.map((logo) => ({
      kind: "logo" as const,
      key: logo.name,
      logo,
    })),
    // ...unlistedCompanies.map(({ id, company }) => ({
    //   kind: "text" as const,
    //   key: id,
    //   label: company,
    // })),
  ];
  const track = [...items, ...items];

  return (
    <Section>
      <Label style={{ color: theme.middleFontColor }}>{t.trustBar.label}</Label>
      <Stats style={{ color: theme.middleFontColor }}>
        <span>★ {t.trustBar.rating}</span>
        <StatDot />
        <span>
          {performance}/100 {t.trustBar.pageSpeed}
        </span>
      </Stats>
      <Wrapper $shadowColor={theme.background}>
        <Track>
          {track.map((item, index) => (
            <Chip
              key={`${item.key}-${index}`}
              style={{ borderColor: theme.middleFontColor }}
            >
              {item.kind === "logo" ? (
                item.logo.showLabel ? (
                  item.logo.labelPosition === "right" ? (
                    <LogoRow>
                      <LogoImage
                        logo={item.logo}
                        isDarkMode={isDarkMode}
                        height="2.25rem"
                      />
                      <LogoLabel style={{ color: theme.fontColor }}>
                        {item.logo.name}
                      </LogoLabel>
                    </LogoRow>
                  ) : (
                    <LogoStack>
                      <LogoImage
                        logo={item.logo}
                        isDarkMode={isDarkMode}
                        height="2.25rem"
                      />
                      <LogoLabel style={{ color: theme.fontColor }}>
                        {item.logo.name}
                      </LogoLabel>
                    </LogoStack>
                  )
                ) : item.logo.plate ? (
                  <LogoPlate $isDarkMode={isDarkMode}>
                    <LogoImage
                      logo={item.logo}
                      isDarkMode={isDarkMode}
                      height={item.logo.scale ? "3.25rem" : "1.75rem"}
                    />
                  </LogoPlate>
                ) : (
                  <LogoImage
                    logo={item.logo}
                    isDarkMode={isDarkMode}
                    height={item.logo.scale ? "3.25rem" : "1.75rem"}
                  />
                )
              ) : (
                <TextItem style={{ color: theme.fontColor }}>
                  {item.label}
                </TextItem>
              )}
            </Chip>
          ))}
        </Track>
      </Wrapper>
    </Section>
  );
};

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Section = styled.div`
  margin: 0 0 var(--section-gap) 0;
`;

const Label = styled.div`
  text-align: center;
  font-size: 0.7rem;
  font-weight: var(--font-weight);
  letter-spacing: var(--middle-letter-spacing);
  margin-bottom: 0.6rem;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  margin-bottom: 2rem;
`;

const StatDot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 99999px;
  background: currentColor;
  opacity: 0.5;
`;

const Wrapper = styled.div<{ $shadowColor: string }>`
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 15vw;
    z-index: 1;
  }

  &::before {
    left: 0;
    background: ${(props) =>
      `linear-gradient(to right, ${props.$shadowColor}, transparent)`};
  }

  &::after {
    right: 0;
    background: ${(props) =>
      `linear-gradient(to left, ${props.$shadowColor}, transparent)`};
  }
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${scroll} 32s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// Purely decorative — no chip is a link, so none of them should look or
// behave like one: no pointer cursor, no color/hover surprises beyond the
// shared grayscale-to-color reveal applied identically to every chip.
const Chip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  min-width: 9rem;
  padding: 0 1.5rem;
  margin: 0 0.5rem;
  border: 1px solid;
  border-radius: 0.75rem;
  cursor: default;
  opacity: 0.6;
  filter: grayscale(1);
  transition:
    opacity var(--transition-delay) ease,
    filter var(--transition-delay) ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
`;

const LogoImg = styled(Image)<{
  $invert: boolean;
  $blendMode: "normal" | "screen" | "multiply";
}>`
  width: auto;
  max-width: 10rem;
  object-fit: contain;
  display: block;
  filter: ${(props) => (props.$invert ? "invert(1)" : "none")};
  /* Logo files with an opaque near-white background leave a visible square
     that never quite matches the chip: in dark mode, inverting turns that
     background solid black, and "screen" treats black as a no-op; in light
     mode the un-inverted near-white background is close but not identical
     to the theme's off-white, and "multiply" treats white as a no-op. Both
     let the background disappear into the chip instead of standing out. */
  mix-blend-mode: ${(props) => props.$blendMode};
`;

const LogoSvg = styled.img<{ $invert: boolean }>`
  width: auto;
  max-width: 10rem;
  object-fit: contain;
  display: block;
  filter: ${(props) => (props.$invert ? "invert(1)" : "none")};
`;

const TextItem = styled.div`
  font-size: 0.95rem;
  font-weight: var(--middle-font-weight);
  white-space: nowrap;
`;

const LogoStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

// See TrustLogo.plate — white only in dark mode, so a real-photo logo with
// its own baked-in whites reads as a clean card there; in light mode it's
// transparent and the logo just sits on the page's own background.
const LogoPlate = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: ${(props) => (props.$isDarkMode ? "#ffffff" : "transparent")};
`;

const LogoLabel = styled.div`
  font-size: 0.85rem;
  font-weight: var(--middle-font-weight);
  white-space: nowrap;
`;

export default TrustBar;
