import styled from "styled-components";
import { SectionTitle } from "./Testimonials";
import { useEffect, useState } from "react";
import { getTechnos } from "../lib/technos";
import useIntersectionRatio from "../hooks/useIntersectionRatio";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useThemeState } from "../providers/Theme.provider";
import { useIsMobile } from "@busshi/react-hooks";

const AUTO_SCROLL_INTERVAL = 500;

export const Technos = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isMobile = useIsMobile();
  const technos = getTechnos(isMobile ? 50 : 80);
  const [intersectionRatio, containerRef] =
    useIntersectionRatio<HTMLDivElement>(1.2);
  const { theme } = useThemeState();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isElementVisible) {
      interval = setInterval(() => {
        if (
          (currentIndex ===
            (isMobile ? technos.length + 20 : technos.length + 2) &&
            direction === 1) ||
          (currentIndex === -2 && direction === -1)
        )
          setDirection(direction * -1);
        setCurrentIndex(currentIndex + direction);
      }, AUTO_SCROLL_INTERVAL);
    }
    return () => interval && clearInterval(interval);
  }, [isElementVisible, currentIndex, technos.length, direction, isMobile]);

  return (
    <Container
      id="technos"
      style={{ opacity: intersectionRatio, color: theme.middleFontColor }}
    >
      <SectionTitle margin="10rem 2rem 5rem 2rem">
        FAVORITES EDGE TECHNOLOGIES
      </SectionTitle>
      <SliderWrapper ref={containerRef} opacity={intersectionRatio}>
        <Items ref={ref} className="hideScrollBar">
          {technos.map((item, index) => (
            <Item
              key={`${index}-${index}`}
              index={index}
              currentIndex={currentIndex}
              space={isMobile ? 50 : 120}
            >
              {item}
            </Item>
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
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;

  &.hideScrollBar::-webkit-scrollbar {
    display: none; /* Hide scroll bar for Safari, Chrome, Opera */
  }

  -ms-overflow-style: none; /* Hide scroll bar for IE and Edge */
  scrollbar-width: none; /* Hide scroll bar Firefox */
`;

const Item = styled.div<{ index: number; currentIndex: number; space: number }>`
  flex-shrink: 0;
  margin: 1rem 0 1rem 0;
  transition: transform 2s linear;

  transform: ${(props) =>
    `translateX(${
      props.index < props.currentIndex
        ? -props.space * (props.currentIndex - props.index)
        : props.space * (props.index - props.currentIndex)
    }%)`};
`;

export default Technos;
