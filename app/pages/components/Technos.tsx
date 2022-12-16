import styled from "styled-components";
import { useGetElementWidth } from "../../hooks/useGetElementWidth";
import { SectionTitle } from "./Testimonials";
import { TECHNOS } from "../../lib/technos";

export const Technos = () => {
  const elementWidth = useGetElementWidth("items");

  return (
    <Container>
      <SectionTitle margin="10rem 2rem 5rem 2rem">
        FAVORITES EDGE TECHNOLOGIES
      </SectionTitle>
      <SliderWrapper>
        <Slider elementWidth={elementWidth}>
          <Items id="items">
            {TECHNOS.map((techno, i) => (
              <Techno key={i}>{techno}</Techno>
            ))}
          </Items>
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 10rem;
`;

const SliderWrapper = styled.div`
  //   padding: 1.5rem;
  //   box-shadow: -10px 0px 10px rgba(255, 255, 255, 0.8);
`;

const Slider = styled.div<{ elementWidth: number }>`
  min-width: 100%;
  animation: slide 30s linear infinite alternate;

  @keyframes slide {
    from {
      transform: ${(props) => `translateX(${-2 * props.elementWidth}px)`};
    }
    to {
      transform: translateX(100vw);
    }
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
`;

const Techno = styled.div`
  margin: 1rem;
`;

export default Technos;
