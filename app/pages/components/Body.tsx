import styled from "styled-components";
import { useScrollIntoView } from "../hooks/useScrollIntoView";
import { GetADemo } from "./GetADemo";
import { Technos } from "./Technos";
import { Testimonials } from "./Testimonials";
import { Titles } from "./Titles";
import { useIsMobile } from "../hooks/useIsMobile";
import { LaptopSolutions } from "./solutions/LaptopSolutions";
import { MobileSolutions } from "./solutions/MobileSolutions";
//import { useEffect } from "react";

export const Body: React.FC = () => {
  // const isInViewport = (element: HTMLElement) => {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  // useEffect(() => {
  //   const element = document.getElementById("intro");
  //   if (element && isInViewport(element)) {
  //     console.log(isInViewport(element));
  //     window.addEventListener("scroll", () => useSscrollIntoView("solutions"), {
  //       passive: true,
  //     });
  //   }
  //   return () =>
  //     window.removeEventListener("scroll", () =>
  //       useSscrollIntoView("solutions")
  //     );
  // }, []);
  const isMobile = useIsMobile();

  return (
    <Container>
      <FirstPage>
        <Titles />
        <Intro>
          You have dreams. I have skills. We can build the future together...
        </Intro>
        <GetADemo />
        <Guidance onClick={() => useScrollIntoView("solutions")}>
          <div>STEP BY STEP GUIDANCE</div>
        </Guidance>
      </FirstPage>
      {isMobile ? <MobileSolutions /> : <LaptopSolutions />}
      <Testimonials />
      <Technos />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const FirstPage = styled.div`
  min-height: 90vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: var(--secondary-dark-color);
`;

const Intro = styled.div`
  margin: 2rem;
  font-size: 1.5rem;

  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0;
  }
`;

const Guidance = styled.div`
  cursor: pointer;
  margin: 3rem;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  line-height: 1.6em;
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
