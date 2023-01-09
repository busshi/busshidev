import { NextPage } from "next";
import styled from "styled-components";
import { scrollIntoView } from "../lib/scroll";
import GetADemo from "../components/GetADemo";
import Technos from "../components/Technos";
import Testimonials from "../components/Testimonials";
import Titles from "../components/Titles";
import { useThemeState } from "../providers/Theme.provider";
import { Products } from "../components/Products";
import { useIsMobile } from "../hooks/useIsMobile";

export const FirstPage = ({
  fontColor,
  titlesStyle,
  firstPageStyle,
  introStyle,
  getADemoStyle,
  implementationStyle,
}: {
  fontColor: string;
  titlesStyle: any;
  firstPageStyle: any;
  introStyle: any;
  getADemoStyle: any;
  implementationStyle: any;
}) => {
  return (
    <FirstPageWrapper style={{ ...firstPageStyle }}>
      <Titles
        style={{ ...titlesStyle }}
        //        margin={margin}
        //      fontSize={fontSize}
        // mobileFontSize={mobileFontSize}
        fontColor={fontColor}
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

export const Home: NextPage = () => {
  const { theme } = useThemeState();
  const isMobile = useIsMobile();

  return (
    <Container>
      <FirstPage
        titlesStyle={{
          fontSize: isMobile ? "4rem" : "6rem",
          color: theme.fontColor,
          margin: "0 1rem 0 0",
        }}
        firstPageStyle={{ gap: "4rem", minHeight: "90vh", margin: "0rem" }}
        introStyle={{ fontSize: "1.5rem" }}
        getADemoStyle={{
          width: "15rem",
          height: "3rem",
          fontSize: "1rem",
          color: theme.fontColor,
        }}
        implementationStyle={{
          fontSize: "0.7rem",
          color: theme.secondaryFontColor,
        }}
        fontColor={theme.fontColor}
      />
      <Products replicated={false} gradientColor={theme.mainColor} />
      <Testimonials
      // replicated={false}
      // style={{
      //   alignItems: "flex-start",
      //   justifyContent: "center",
      // }}
      />
      <Technos />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const FirstPageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  margin: 2rem;
  padding: 0 1rem 0 1rem;
  font-weight: var(--font-weight);

  @media (max-width: 768px) {
    font-size: 1.1rem;
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

export default Home;
