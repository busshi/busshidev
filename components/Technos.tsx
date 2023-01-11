import styled from "styled-components";
import { SectionTitle } from "./Testimonials";
import { useEffect } from "react";
import { useGetScrollWidth } from "../hooks/useGetScrollWidth";
import { useIsMobile } from "../hooks/useIsMobile";
import { getTechnos } from "../lib/technos";
import useIntersectionRatio from "../hooks/useIntersectionRatio";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useThemeState } from "../providers/Theme.provider";

export const Technos = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const scrollWidth = useGetScrollWidth("items");
  const isMobile = useIsMobile();
  const technos = getTechnos(isMobile ? 30 : 80);
  const [intersectionRatio, containerRef] =
    useIntersectionRatio<HTMLDivElement>(1.2);
  const { theme } = useThemeState();

  useEffect(() => {
    //  if (!isMobile) return;
    let i = 0;
    let reverse = false;
    const items = document.getElementById("items");
    if (isElementVisible && items) {
      setTimeout(
        () =>
          setInterval(() => {
            if (i === scrollWidth + 70) reverse = true;
            else if (!i) reverse = false;
            items.scrollBy({
              top: 0,
              left: reverse ? -1 : 1,
              behavior: "smooth",
            });
            i = reverse ? i - 1 : i + 1;
          }, 1),
        600
      );
    }
    () => items?.scrollTo(0, 0);
  }, [isElementVisible, scrollWidth, isMobile]);

  return (
    <Container
      id="technos"
      style={{ opacity: intersectionRatio, color: theme.middleFontColor }}
    >
      <SectionTitle margin="10rem 2rem 5rem 2rem">
        FAVORITES EDGE TECHNOLOGIES
      </SectionTitle>
      <SliderWrapper ref={containerRef} opacity={intersectionRatio}>
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

const SliderWrapper = styled.div<{ opacity: number }>`
  overflow: hidden;
  box-shadow: ${(props) =>
    `-10px 0px 10px rgba(255, 255, 255, ${props.opacity})`};
  opacity: ${(props) => props.opacity};
`;

const Items = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;

  &.hideScrollBar::-webkit-scrollbar {
    display: none; /* Hide scroll bar for Safari, Chrome, Opera */
  }

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
