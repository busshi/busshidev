import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const Testimonials = () => (
  <Container>
    <SectionTitle>TRUSTED BY STARTUPERS</SectionTitle>
    <TestiBox>
      <Testimonial>
        <div>Quentin Chantelot</div>
        <div>
          <Link href="https://notice.studio">Notice</Link> Founder & CTO
          <br />
          Station F Paris
        </div>
        <div>⭐️⭐️⭐️⭐️⭐️</div>
        <Quote>
          "Alexandre a été clé pendant sa mission de plusieurs mois chez Notice.
          Il a su s'intégrer à une stack complexe, communiquer et se rendre
          utile dès le premier jour. Avec plaisir pour retravailler ensemble dès
          que possible."
        </Quote>
        <div>November, 10 2022</div>
      </Testimonial>
      <Testimonial>
        <div>Quentin Chantelot</div>
        <div>
          <Link href="https://notice.studio">Notice</Link> Founder & CTO
          <br />
          Station F Paris
        </div>
        <div>⭐️⭐️⭐️⭐️⭐️</div>
        <Quote>
          "Je recommande à 100% Alex, compréhension de la mission, force de
          proposition et beaucoup de boulot sur une mission fullstack JS."
        </Quote>
        <div>October, 10 2022</div>
      </Testimonial>
      <Testimonial>
        <ImageBox src="/avatars/mc.png" width={50} height={50} alt="mc" />
        <div>Martial Carriere</div>
        <div>MCI</div>
        <div>⭐️⭐️⭐️⭐️⭐️</div>
        <Quote>
          "Très bonne expérience, Alexandre à su répondre à mes besoins en
          matière de sécurité , il a mit en lumière des failles et m'a permis de
          les sécuriser. Très bon relationnel également, au plaisir de
          retravailler ensemble."
        </Quote>
        <div>March, 21 2022</div>
      </Testimonial>
    </TestiBox>
  </Container>
);

const Container = styled.div`
  margin: 5rem;
  @media (max-width: 768px) {
    margin: 5rem 1rem 5rem 1rem;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0.5rem 2rem 0.5rem;
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
  background-color: var(--dark-background);
  padding: 2rem;
  width: 20%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2rem;
  position: relative;
  border-radius: var(--border-radius);

  a {
    color: var(--secondary-dark-color);
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

const ImageBox = styled(Image)`
  position: absolute;
  top: 30px;
  right: 30px;
  border: solid 1px var(--secondary-light-color);
  border-radius: 50%;
`;

const Quote = styled.div`
  line-height: 2;
`;
