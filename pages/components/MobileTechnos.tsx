import styled from "styled-components";
import { SectionTitle } from "./Testimonials";
import { TECHNOS } from "../../lib/technos";
import { useGetElementWidth } from "../../hooks/useGetElementWidth";
// import { useEffect, useState } from "react";
// import useIsElementVisible from "../../hooks/useIsElementVisible";
// import { useGetScrollWidth } from "../../hooks/useGetScrollWidth";

export const MobileTechnos = () => {
  //  const [isScrolling, setIsScrolling] = useState(false);
  //const [isElementVisible, ref] = useIsElementVisible<HTMLDivElement>(-100);
  const elementWidth = useGetElementWidth("items");
  //const scrollWidth = useGetScrollWidth("items");

  // let i = 0;
  // let reverse = false;
  // useEffect(() => {
  //   const items = document.getElementById("items");
  //   items?.addEventListener("scroll", (e) => {
  //     if (e) setIsScrolling(true);
  //   });
  //   if (isElementVisible && !isScrolling) {
  //     setTimeout(
  //       () =>
  //         setInterval(() => {
  //           const items = document.getElementById("items");
  //           if (items) {
  //             if (i === scrollWidth + 70) reverse = true;
  //             else if (!i) reverse = false;
  //             items.scrollBy({
  //               top: 0,
  //               left: reverse ? -1 : 1,
  //               behavior: "smooth",
  //             });
  //             i = reverse ? i - 1 : i + 1;
  //           }
  //         }, 100),
  //       6000
  //     );
  //   }
  //   if (!isElementVisible) items?.scrollTo(0, 0);
  // }, [isElementVisible, isScrolling]);

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
  overflow: hidden;
  //   padding: 1.5rem;
  //   box-shadow: -10px 0px 10px rgba(255, 255, 255, 0.8);
`;

const Slider = styled.div<{ elementWidth: number }>`
  //  animation: slide 30s linear infinite alternate;

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
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hide;
`;

const Techno = styled.div`
  margin: 1rem;
  display: inline-block;
`;

export default MobileTechnos;
