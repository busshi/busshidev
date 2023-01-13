import styled, { CSSProperties } from "styled-components";
import { scrollIntoView } from "../lib/scroll";
import GetADemo from "./GetADemo";
import Titles from "./Titles";

export const FirstPage = ({
  className,
  fontColor,
  titlesStyle,
  firstPageStyle,
  introStyle,
  getADemoStyle,
  implementationStyle,
}: //  replicated
{
  className: string;
  fontColor: string;
  titlesStyle: CSSProperties;
  firstPageStyle: CSSProperties;
  introStyle: CSSProperties;
  getADemoStyle: CSSProperties;
  implementationStyle: CSSProperties;
  //replicated: boolean;
}) => {
  //console.log(replicated, titlesStyle);
  return (
    <FirstPageWrapper style={{ ...firstPageStyle }} className={className}>
      <Titles
        style={{ ...titlesStyle }}
        fontColor={fontColor}
        //       replicated={replicated}
      />
      <Intro style={{ ...introStyle }}>
        You have dreams. I have skills. We can build the future together...
      </Intro>
      <GetADemo style={{ ...getADemoStyle }} />
      <Implementation
        style={{ ...implementationStyle }}
        onClick={() => scrollIntoView("solutions")}
      >
        STEP-BY-STEP IMPLEMENTATION
      </Implementation>
    </FirstPageWrapper>
  );
};

const FirstPageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  &.mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  &.laptop {
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Intro = styled.div`
  margin: 2rem;
  padding: 0 1rem 0 1rem;
  font-weight: var(--font-weight);

  @media (max-width: 768px) {
    //   font-size: 1.1rem;
    margin: 0;
  }
`;

const Implementation = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.6em;
  font-weight: 300;
  letter-spacing: 0.1rem;
  margin: 3rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default FirstPage;
