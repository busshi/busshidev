import styled from "styled-components";
import { SectionTitle } from "./Testimonials";
import { TECHNOS } from "../../lib/technos";
import useIsElementVisible from "../../hooks/useIsElementVisible";
//import { useEffect } from "react";
import { useGetElementWidth } from "../../hooks/useGetElementWidth";

export const Technos = () => {
  const [isElementVisible, ref] = useIsElementVisible<HTMLDivElement>(-100);
  const elementWidth = useGetElementWidth("items");

  console.log(isElementVisible);

  // useEffect(() => {
  //   const items = document.getElementById("items");
  //   items?.addEventListener("scroll", (e) => {
  //     console.log(isElementVisible);
  //   });
  //   if (isElementVisible) {
  //     const items = document.getElementById("items");
  //     //      if (items) items.scrollIntoView(true, {behavior: 'smooth'});
  //   }
  // }, [isElementVisible]);

  return (
    <Container>
      <SectionTitle margin="10rem 2rem 5rem 2rem">
        FAVORITES EDGE TECHNOLOGIES
      </SectionTitle>
      <SliderWrapper>
        <Slider elementWidth={elementWidth}>
          <Items id="items" ref={ref}>
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
  flex-wrap: nowrap;
  overflow: scroll-x;
  flex-direction: row;
`;

const Techno = styled.div`
  margin: 1rem;
`;

export default Technos;
