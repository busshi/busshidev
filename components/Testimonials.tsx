import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { TESTIMONIALS } from "../lib/testimonials";
import { COLORS } from "../lib/constants";
import { useEffect, useState } from "react";
import { useTestimonialVisibleState } from "../providers/TestimonialVisible.provider";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useIntersectionRatio from "../hooks/useIntersectionRatio";
import { useThemeState } from "../providers/Theme.provider";
import { useIsMobile } from "@busshi/react-hooks";
import { useTranslation } from "../hooks/useTranslation";
import { Color } from "../types/interfaces";

const SCROLL_TIMEOUT = 6000;
const DOT_WIDTH = 44;

type Testimonial = (typeof TESTIMONIALS)[number];

const TestimonialCard = ({
  testimonial,
  backgroundColor,
  accentColor,
}: {
  testimonial: Testimonial;
  backgroundColor: string;
  accentColor: Color;
}) => {
  const { theme } = useThemeState();

  return (
    <Card style={{ backgroundColor }}>
      <Header>
        <AvatarRing>
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            width={96}
            height={96}
          />
        </AvatarRing>
        <Names>
          <AuthorName style={{ color: theme.fontColor }}>
            {testimonial.author}
          </AuthorName>
          <JobLine style={{ color: theme.secondaryFontColor }}>
            {testimonial.job}
            {testimonial.company && (
              <>
                {" "}
                ·{" "}
                {testimonial.url ? (
                  <Link href={testimonial.url}>{testimonial.company}</Link>
                ) : (
                  testimonial.company
                )}
              </>
            )}
          </JobLine>
          {testimonial.location && (
            <Location style={{ color: theme.middleFontColor }}>
              {testimonial.location}
            </Location>
          )}
        </Names>
      </Header>
      <QuoteMark style={{ color: accentColor.start }}>&ldquo;</QuoteMark>
      <Quote style={{ color: theme.fontColor }}>{testimonial.quote}</Quote>
      <Footer>
        <Rating>{testimonial.rating}</Rating>
        <DateText style={{ color: theme.middleFontColor }}>
          {testimonial.date}
        </DateText>
      </Footer>
    </Card>
  );
};

export const Testimonials = () => {
  const [idVisible, setIdVisible] = useState(0);
  const isMobile = useIsMobile();

  const { refs, testimonialIdVisible } = useTestimonialVisibleState();
  // A lower threshold than the default (1 = fully visible) so the
  // auto-rotate timer reliably kicks in once the carousel is mostly in
  // view, instead of requiring the whole scrollable container to be
  // 100% on-screen at once (rarely true for a wide horizontal list).
  const [isTestimonialsVisible, ref] = useIntersectionObserver<HTMLDivElement>(
    0.4
  );
  const [reverse, setReverse] = useState(false);
  const [intersectionRatio, containerRef] =
    useIntersectionRatio<HTMLDivElement>(1.25);
  // const [width, setWidth] = useState(5);
  const { theme } = useThemeState();
  const t = useTranslation();
  const items = TESTIMONIALS.map((item) => item.id);
  const track = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    if (!isMobile || !isTestimonialsVisible) return;
    const interval = setInterval(() => {
      let nextIndex = reverse ? idVisible - 1 : idVisible + 1;
      if (nextIndex < 0) nextIndex = 0;
      else if (nextIndex === items.length) nextIndex = items.length - 1;

      if (reverse && !nextIndex) setReverse(false);
      else if (!reverse && nextIndex === items.length - 1) setReverse(true);

      setIdVisible(nextIndex);
      //  setWidth(5);
    }, SCROLL_TIMEOUT);
    return () => {
      clearInterval(interval);
    };
  }, [idVisible, isMobile, isTestimonialsVisible, items.length, reverse]);

  // auto scroll — scrolls only the horizontal carousel container, never
  // its ancestors. Element.scrollIntoView() walks every scrollable
  // ancestor (including the page itself), so calling it here caused the
  // whole page to jump vertically every time the carousel advanced.
  useEffect(() => {
    if (!isTestimonialsVisible || !isMobile) return;
    const container = document.getElementById("testi");
    const card = document.getElementById(items[idVisible]);
    if (!container || !card) return;
    const left =
      container.scrollLeft +
      (card.getBoundingClientRect().left -
        container.getBoundingClientRect().left);
    container.scrollTo({ left, behavior: "smooth" });
  }, [idVisible, isMobile, items, isTestimonialsVisible]);

  // IntersectionObserver
  useEffect(() => {
    if (isTestimonialsVisible && isMobile) {
      setIdVisible(testimonialIdVisible);
    }
  }, [testimonialIdVisible, isTestimonialsVisible, isMobile]);

  // Sliding Dot
  // useEffect(() => {
  //   let inter: string | number | NodeJS.Timer | undefined;
  //   if (isTestimonialsVisible && isMobile) {
  //     inter = setInterval(
  //       () => setWidth(width + 1),
  //       SCROLL_TIMEOUT / DOT_WIDTH
  //     );
  //   }
  //   return () => {
  //     inter && clearInterval(inter);
  //   };
  // }, [width]);
  return (
    <Container
      ref={containerRef}
      style={{
        opacity: intersectionRatio < 1 ? intersectionRatio : 1,
      }}
    >
      <SectionTitle
        id="testi-title"
        $margin="0 0.5rem var(--section-inner-gap) 0.5rem"
        style={{ color: theme.sectionTitleColor }}
      >
        {t.testimonials.sectionTitle}
      </SectionTitle>

      {/* Laptop: single-line marquee, pauses on hover */}
      <TrackWrapper className="laptop" $shadowColor={theme.background}>
        <Track>
          {track.map((testimonial, index) => (
            <TestimonialWrapper key={`${testimonial.id}-${index}`}>
              <TestimonialCard
                testimonial={testimonial}
                backgroundColor={theme.backgroundColor}
                accentColor={COLORS[index % COLORS.length]}
              />
            </TestimonialWrapper>
          ))}
        </Track>
      </TrackWrapper>

      {/* Mobile: swipeable, snap-to-card carousel */}
      <TestiBox id="testi" className="mobile hideScrollBar" ref={ref}>
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialWrapper
            key={testimonial.id}
            id={testimonial.id}
            ref={refs[index]}
          >
            <TestimonialCard
              testimonial={testimonial}
              backgroundColor={theme.backgroundColor}
              accentColor={COLORS[index % COLORS.length]}
            />
          </TestimonialWrapper>
        ))}
      </TestiBox>
      {isMobile && (
        <Scroller>
          {TESTIMONIALS.map(({ id }, index) => (
            <Dot
              key={id}
              $isSelected={index === idVisible}
              style={{
                background: isTestimonialsVisible
                  ? theme.middleFontColor
                  : "none",
                border: isTestimonialsVisible
                  ? `1px solid ${theme.middleFontColor}`
                  : "none",
              }}
            >
              {/* {index === idVisible && (
                <SlidingBar
                  isTestimonialsVisible={isTestimonialsVisible}
                  style={{ width: `${width}px` }}
                />
              )} */}
            </Dot>
          ))}
        </Scroller>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 1.5rem var(--section-gap) 1.5rem;
  @media (max-width: 1024px) {
    margin: 0 1rem var(--section-gap) 1rem;
  }
`;

export const SectionTitle = styled.div<{ $margin?: string }>`
  display: flex;
  justify-content: center;
  margin: ${(props) =>
    props.$margin ? props.$margin : "0 0.5rem var(--section-inner-gap) 0.5rem"};
  font-size: 2rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--big-letter-spacing);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const TrackWrapper = styled.div<{ $shadowColor: string }>`
  position: relative;
  overflow: hidden;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 8vw;
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
  gap: 2rem;
  width: max-content;
  padding: 0 1rem;
  animation: ${scroll} 50s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const TestiBox = styled.div`
  display: none;

  &.hideScrollBar::-webkit-scrollbar {
    display: none; /* Hide scroll bar for Safari, Chrome, Opera */
  }

  -ms-overflow-style: none; /* Hide scroll bar for IE and Edge */
  scrollbar-width: none; /* Hide scroll bar Firefox */

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

const TestimonialWrapper = styled.div`
  width: 300px;
  flex-shrink: 0;
  display: flex;

  @media (max-width: 768px) {
    min-width: 90vw;
  }
`;

const Card = styled.div`
  min-height: 380px;
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: var(--border-radius);

  a {
    color: inherit;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    min-height: 340px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* Fixed regardless of how many lines the name/job/location stack takes,
     so the quote mark below starts on the same line across every card. */
  min-height: 4.75rem;
`;

const AvatarRing = styled.div`
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 99999px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Names = styled.div`
  min-width: 0;
`;

const AuthorName = styled.div`
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
`;

const JobLine = styled.div`
  font-size: 0.8rem;
  line-height: 1.4;
  margin-top: 0.15rem;
`;

const Location = styled.div`
  font-size: 0.75rem;
  margin-top: 0.15rem;
`;

const QuoteMark = styled.div`
  font-family: Georgia, "Times New Roman", serif;
  font-size: 3rem;
  line-height: 1;
  opacity: 0.5;
  margin: 1.25rem 0 0 0;
`;

const Quote = styled.div`
  flex: 1;
  line-height: 1.7;
  font-size: 0.9rem;
  margin: 0.25rem 0 1.5rem 0;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--middle-font-color);
`;

const Rating = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
`;

const DateText = styled.div`
  font-size: 0.75rem;
  white-space: nowrap;
`;

const Scroller = styled.div`
  margin: 0.5rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Dot = styled.div<{
  $isSelected: boolean;
}>`
  width: ${(props) => (props.$isSelected ? `${DOT_WIDTH}px` : "0.7rem")};
  height: 0.7rem;
  margin: 0.2rem;
  border-radius: 99999px;
  transition: all 0.6s ease;
`;

export default Testimonials;
