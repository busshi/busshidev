import { useRouter } from "next/router";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { buildOffers } from "../lib/offers";
import { COLORS } from "../lib/constants";
import { useThemeState } from "../providers/Theme.provider";
import { SectionTitle } from "./Testimonials";
import GetADemo from "./getADemo/GetADemo";
import { useTranslation } from "../hooks/useTranslation";
import { Lang } from "../lib/i18n";
import { linkifyAgenticFactory } from "../lib/linkify";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Color } from "../types/interfaces";

type OfferItem = ReturnType<typeof buildOffers>[number];

const OfferCard = ({
  offer,
  color,
  cardBackground,
  fontColor,
  secondaryFontColor,
}: {
  offer: OfferItem;
  color: Color;
  cardBackground: string;
  fontColor: string;
  secondaryFontColor: string;
}) => {
  // Desktop reveals the neon bar on hover (see Card/NeonBar below). Mobile
  // has no hover, so it's driven by scroll position instead: the bar
  // grows in once the card is prominently in view, and recedes the same
  // way once it isn't anymore.
  const [isVisible, ref] = useIntersectionObserver<HTMLDivElement>(0.5);

  return (
    <Card ref={ref} id={offer.id} style={{ background: cardBackground }}>
      <NeonBar
        $active={isVisible}
        style={{
          background: `linear-gradient(90deg, ${color.start}, ${color.stop})`,
          boxShadow: `0 0 0.75rem ${color.start}, 0 0 1.25rem ${color.stop}`,
        }}
      />
      <IconCircle
        style={{
          background: `linear-gradient(135deg, ${color.start}, ${color.stop})`,
        }}
      >
        {offer.icon}
      </IconCircle>
      <Title style={{ color: fontColor }}>{offer.title}</Title>
      <Tagline style={{ color: secondaryFontColor }}>{offer.tagline}</Tagline>
      <Bullets>
        {offer.bullets.map((bullet) => (
          <Bullet key={bullet} style={{ color: fontColor }}>
            <FaCheck size={12} color={color.start} />
            <span>{linkifyAgenticFactory(bullet)}</span>
          </Bullet>
        ))}
      </Bullets>
    </Card>
  );
};

export const Offer = () => {
  const { theme } = useThemeState();
  const { locale } = useRouter();
  const t = useTranslation();
  const offers = buildOffers((locale as Lang) || "fr", 32);

  return (
    <Section id="services">
      <SectionTitle
        $margin="0 0.5rem var(--section-inner-gap) 0.5rem"
        style={{ color: theme.sectionTitleColor }}
      >
        {t.offers.sectionTitle}
      </SectionTitle>
      <Grid>
        {offers.map((offer, index) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            color={COLORS[index % COLORS.length]}
            cardBackground={theme.cardBackground}
            fontColor={theme.fontColor}
            secondaryFontColor={theme.secondaryFontColor}
          />
        ))}
      </Grid>
      <Footer>
        <FooterText style={{ color: theme.secondaryFontColor }}>
          {t.offers.footerText}
        </FooterText>
        <GetADemo
          style={{
            width: "14rem",
            height: "3rem",
            fontSize: "1rem",
            color: theme.fontColor,
          }}
        />
      </Footer>
    </Section>
  );
};

const Section = styled.div`
  margin: 0 1.5rem var(--section-gap) 1.5rem;

  @media (max-width: 768px) {
    margin: 0 1rem var(--section-gap) 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr);
    max-width: 32rem;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border-radius: var(--border-radius);
  padding: 2.5rem 2rem;
  transition: transform var(--transition-delay) ease,
    box-shadow var(--transition-delay) ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  /* Touch browsers simulate :hover on tap and keep it stuck until the user
     taps elsewhere — on mobile this reads as a card randomly staying
     lifted, so the effect is dropped there entirely. */
  @media (max-width: 768px) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

// Neon accent strip along the top edge, in the card's own brand color.
// Hidden at rest (scaleX(0), anchored left); grows in left-to-right and
// recedes the same way — plain CSS transition, no extra JS needed for the
// reverse. Desktop triggers it on hover; mobile has no hover, so it's
// driven by the $active prop instead (scroll position — see OfferCard).
const NeonBar = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.2rem;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
  pointer-events: none;

  ${Card}:hover & {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    transform: ${(props) => (props.$active ? "scaleX(1)" : "scaleX(0)")};
  }
`;

const IconCircle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 99999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  margin-bottom: 0.75rem;
`;

const Tagline = styled.div`
  font-size: 0.95rem;
  line-height: var(--line-height);
  margin-bottom: 1.5rem;
`;

const Bullets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const Bullet = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: var(--middle-font-weight);
  line-height: 1.4;

  svg {
    margin-top: 0.3rem;
    flex-shrink: 0;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: var(--section-inner-gap);
`;

const FooterText = styled.div`
  font-size: 1rem;
  font-weight: var(--middle-font-weight);
`;

export default Offer;
