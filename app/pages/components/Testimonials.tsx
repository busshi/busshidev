import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { TESTIMONIALS } from "../lib/testimonials";

export const Testimonials = () => (
  <Container>
    <SectionTitle>TRUSTED BY STARTUPERS</SectionTitle>
    <TestiBox>
      {TESTIMONIALS.map((testimonial) => (
        <Testimonial key={testimonial.date}>
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
  </Container>
);

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
    flex-direction: column;
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
  }

  @media (max-width: 768px) {
    width: auto;
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
