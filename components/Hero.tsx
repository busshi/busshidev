import styled from "styled-components";
import GetADemo from "./getADemo/GetADemo";
import { useThemeState } from "../providers/Theme.provider";
import { useHighlightedColorState } from "../providers/HighlightedColor.provider";
import { useTranslation } from "../hooks/useTranslation";

export const Hero = () => {
  const { theme } = useThemeState();
  const { highlightedColor } = useHighlightedColorState();
  const t = useTranslation();

  return (
    <Container>
      <TextGroup>
        <Eyebrow style={{ color: theme.middleFontColor }}>
          {t.hero.eyebrow}
        </Eyebrow>
        <Headline style={{ color: theme.fontColor }}>
          {t.hero.headlineBefore}{" "}
          <Accent
            $gradientStart={highlightedColor.start}
            $gradientStop={highlightedColor.stop}
          >
            {t.hero.headlineAccent}
          </Accent>
          .
        </Headline>
        <Subheadline style={{ color: theme.secondaryFontColor }}>
          {t.hero.subheadline}
        </Subheadline>
      </TextGroup>
      <ActionGroup>
        <GetADemo
          style={{
            width: "16rem",
            height: "3.25rem",
            fontSize: "1.05rem",
            color: theme.fontColor,
          }}
        />
        <Helper style={{ color: theme.middleFontColor }}>
          {t.hero.helper}
        </Helper>
      </ActionGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--section-gap) 1.5rem var(--section-gap) 1.5rem;
  gap: 2.5rem;

  @media (max-width: 768px) {
    padding: var(--section-gap) 1.25rem var(--section-gap) 1.25rem;
    gap: 2rem;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const Eyebrow = styled.div`
  font-size: 0.75rem;
  font-weight: var(--font-weight);
  letter-spacing: var(--big-letter-spacing);

  @media (max-width: 768px) {
    letter-spacing: var(--middle-letter-spacing);
  }
`;

const Headline = styled.h1`
  margin: 0;
  max-width: 56rem;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Accent = styled.span<{ $gradientStart: string; $gradientStop: string }>`
  background: ${(props) =>
    `-webkit-linear-gradient(180deg, ${props.$gradientStop}, ${props.$gradientStart})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background var(--long-transition-delay) ease;
`;

const Subheadline = styled.div`
  max-width: 38rem;
  font-size: 1.15rem;
  font-weight: var(--middle-font-weight);
  line-height: var(--line-height);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Helper = styled.div`
  font-size: 0.8rem;
`;

export default Hero;
