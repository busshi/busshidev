import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { TESTIMONIALS } from "../../lib/testimonials";
import { useIsMobile } from "../../hooks/useIsMobile";
import { scrollIntoView } from "../../lib/scroll";
import { useEffect, useState } from "react";
import { useTestimonialVisibleState } from "../../providers/TestimonialVisible";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SCROLL_TIMEOUT = 2000;

export const Testimonials = () => {
  const [idVisible, setIdVisible] = useState(0);
  //  const [isTestimonialsVisible, ref] = useIsElementVisible<HTMLDivElement>(0);
  const isMobile = useIsMobile();
  const { refs, testimonialIdVisible } = useTestimonialVisibleState();
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();

  const items = TESTIMONIALS.map((item) => item.id);

  useEffect(() => {
    if (!isMobile) return;
    let interval: NodeJS.Timeout;
    if (isElementVisible) {
      interval = setInterval(() => {
        const nextIndex =
          idVisible + 1 >= TESTIMONIALS.length ? 0 : idVisible + 1;
        setIdVisible(nextIndex);
      }, SCROLL_TIMEOUT);
    }
    return () => clearInterval(interval);
  }, [isElementVisible, idVisible, isMobile]);

  // auto scroll
  useEffect(() => {
    if (isElementVisible && isMobile) scrollIntoView(items[idVisible]);
  }, [idVisible, isMobile, items, isElementVisible]);

  // IntersectionObserver
  useEffect(() => {
    if (isElementVisible && isMobile) setIdVisible(testimonialIdVisible);
  }, [testimonialIdVisible, isElementVisible]);

  return (
    <Container>
      <SectionTitle>TRUSTED BY STARTUPS</SectionTitle>
      <TestiBox id="testi" className="hideScrollBar" ref={ref}>
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialWrapper
            key={testimonial.id}
            id={testimonial.id}
            ref={refs[index]}
          >
            <Testimonial>
              <Author>
                <ImageBox
                  src={testimonial.avatar}
                  width={50}
                  height={50}
                  alt={testimonial.author}
                />
                {testimonial.author}
                <br />
                {testimonial.company}
              </Author>
              <div>
                {testimonial.url && (
                  <Link href={testimonial.url}>{testimonial.company}</Link>
                )}{" "}
                {testimonial.job}
                <br />
                {testimonial.location && testimonial.location}
              </div>
              {testimonial.rating}
              <Quote>{testimonial.quote} </Quote>
              <div>{testimonial.date}</div>
            </Testimonial>
          </TestimonialWrapper>
        ))}
      </TestiBox>
      {isMobile && (
        <Scroller>
          {TESTIMONIALS.map(({ id }, index) => (
            <Dot
              isSelected={index === idVisible}
              key={id}
              onClick={() => {
                setIdVisible(index);
              }}
              isTestimonialsVisible={isElementVisible}
            />
          ))}
        </Scroller>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem;
  @media (max-width: 1024px) {
    margin: 5rem 1rem 5rem 1rem;
  }
`;

export const SectionTitle = styled.div<{ margin?: string }>`
  display: flex;
  justify-content: center;
  margin: ${(props) =>
    props.margin ? props.margin : "2rem 0.5rem 2rem 0.5rem"};
  font-size: 2rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--big-letter-spacing);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TestiBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;

    -ms-overflow-style: none; /* Hide scroll bar for IE and Edge */
    scrollbar-width: none; /* Hide scroll bar Firefox */
  }
`;

const TestimonialWrapper = styled.div`
  min-width: 300px;
  @media (max-width: 1024px) {
    min-height: 65vh;
    min-width: 280px;
    max-width: 350px;
  }
  @media (max-width: 768px) {
    min-height: 65vh;
    min-width: 90vw;
  }
`;

const Testimonial = styled.div`
  background-color: var(--light-background);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2rem;
  border-radius: var(--border-radius);

  a {
    color: var(--secondary-dark-color);
    text-decoration: underline;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--dark-background);
  }
`;

const ImageBox = styled(Image)`
  border-radius: 50%;
`;

const Author = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

const Quote = styled.div`
  line-height: 2;
`;

const Scroller = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;

  overflow: hidden;
`;

const Dot = styled.div<{ isSelected: boolean; isTestimonialsVisible: boolean }>`
  width: ${(props) => (props.isSelected ? "2rem" : "0.7rem")};
  height: 0.7rem;
  margin: 0.2rem;
  background: ${(props) =>
    props.isTestimonialsVisible ? "var(--secondary-dark-color)" : ""};
  border: ${(props) =>
    props.isTestimonialsVisible
      ? "1px solid var(--secondary-dark-color)"
      : "none"};
  border-radius: 99999px;
  transition: all 0.6s ease;
`;

export default Testimonials;
