import styled from "styled-components";
import { SectionTitle } from "./Testimonials";
import { useEffect, useState } from "react";
import useIsElementVisible from "../../hooks/useIsElementVisible";
import { useGetScrollWidth } from "../../hooks/useGetScrollWidth";
import { useIsMobile } from "../../hooks/useIsMobile";
import { getTechnos } from "../../lib/technos";

export const Technos = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isElementVisible, ref] = useIsElementVisible<HTMLDivElement>(-10);
  const scrollWidth = useGetScrollWidth("items");
  const isMobile = useIsMobile();
  const technos = getTechnos(isMobile ? 30 : 80);

  useEffect(() => {
    let i = 0;
    let reverse = false;
    if (isMobile) return;
    const items = document.getElementById("items");
    items?.addEventListener("scroll", (e) => {
      if (e) setIsScrolling(true);
    });
    if (isElementVisible && !isScrolling) {
      setTimeout(
        () =>
          setInterval(() => {
            const items = document.getElementById("items");
            if (items) {
              if (i === scrollWidth + 70) reverse = true;
              else if (!i) reverse = false;
              items.scrollBy({
                top: 0,
                left: reverse ? -1 : 1,
                behavior: "smooth",
              });
              i = reverse ? i - 1 : i + 1;
            }
          }, 1),
        600
      );
    }
    if (!isElementVisible) items?.scrollTo(0, 0);
  }, [isElementVisible, isScrolling, scrollWidth]);

  return (
    <Container id="technos">
      <SectionTitle margin="10rem 2rem 5rem 2rem">
        FAVORITES EDGE TECHNOLOGIES
      </SectionTitle>
      <SliderWrapper>
        <Items id="items" ref={ref} className="hideScrollBar">
          {technos.map((techno, i) => (
            <Techno key={i}>{techno}</Techno>
          ))}
        </Items>
      </SliderWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 10rem;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  box-shadow: -10px 0px 10px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    // box-shadow: none;
  }
`;

const Items = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;

  -ms-overflow-style: none; /* Hide scroll bar for IE and Edge */
  scrollbar-width: none; /* Hide scroll bar Firefox */

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Techno = styled.div`
  margin: 1rem;
  display: inline-block;
`;

export default Technos;
