import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { TESTIMONIALS } from "../../lib/testimonials";
import useIsElementVisible from "../../hooks/useIsElementVisible";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Testimonials = () => {
  const [isElementVisible, ref] = useIsElementVisible<HTMLDivElement>(400);
  const isMobile = useIsMobile();

  return (
    <Container>
      <SectionTitle>TRUSTED BY STARTUPS</SectionTitle>
      <TestiBox ref={ref}>
        {TESTIMONIALS.map((testimonial) => (
          <Testimonial key={testimonial.id}>
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
        ))}
      </TestiBox>
      {isMobile && (
        <Scroller isElementVisible={isElementVisible}>
          {TESTIMONIALS.map(({ id }) => (
            <Dot
              isSelected={isElementVisible}
              key={id}
              isElementVisible={isElementVisible}
            />
          ))}
        </Scroller>
      )}
    </Container>
  );
};

const Scroller = styled.div<{ isElementVisible: boolean }>`
  margin: 1rem;
  display: flex;
  justify-content: center;
`;

const Dot = styled.div<{ isSelected: boolean; isElementVisible: boolean }>`
  width: 0.7rem;
  height: 0.7rem;
  margin: 0.2rem;
  background: ${(props) =>
    props.isSelected ? "var(--secondary-dark-color)" : ""};
  border: ${(props) =>
    props.isElementVisible ? "1px solid var(--secondary-dark-color)" : "none"};
  border-radius: 99999px;
  transition: all 0.6s ease;
`;

const Container = styled.div`
  margin: 5rem;
  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    // gap: 0;
    width: 100%;
    justify-content: flex-start;
    overflow-x: scroll;
  }
`;

const Testimonial = styled.div`
  background-color: var(--light-background);
  padding: 2rem;
  min-width: 25%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2rem;
  border-radius: var(--border-radius);

  a {
    color: var(--secondary-dark-color);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    min-width: 80%;
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

export default Testimonials;
