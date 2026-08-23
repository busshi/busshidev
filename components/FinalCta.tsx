import styled from "styled-components";
import { useThemeState } from "../providers/Theme.provider";
import GetADemo from "./getADemo/GetADemo";
import { useTranslation } from "../hooks/useTranslation";

export const FinalCta = () => {
  const { theme } = useThemeState();
  const t = useTranslation();

  return (
    <Section>
      <Card>
        <TextGroup>
          <Title style={{ color: theme.fontColor }}>{t.finalCta.title}</Title>
          <Subtitle style={{ color: theme.secondaryFontColor }}>
            {t.finalCta.subtitle}
          </Subtitle>
        </TextGroup>
        <GetADemo
          style={{
            width: "16rem",
            height: "3.25rem",
            fontSize: "1.05rem",
            color: theme.fontColor,
          }}
        />
      </Card>
    </Section>
  );
};

const Section = styled.div`
  margin: 0 1.5rem var(--section-gap) 1.5rem;

  @media (max-width: 768px) {
    margin: 0 1rem var(--section-gap) 1rem;
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2.25rem;
  max-width: 42rem;
  margin: 0 auto;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const Title = styled.div`
  max-width: 40rem;
  font-size: 2.25rem;
  font-weight: var(--font-weight);
  line-height: 1.2;
  letter-spacing: var(--letter-spacing);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.div`
  max-width: 34rem;
  font-size: 1rem;
  line-height: var(--line-height);
`;

export default FinalCta;
