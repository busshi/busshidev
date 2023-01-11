import { NextPage } from "next";
import styled from "styled-components";
import Testimonials from "../components/Testimonials";
import { useThemeState } from "../providers/Theme.provider";
import { Products } from "../components/Products";
import Technos from "../components/Technos";
import FirstPage from "../components/FirstPage";
import { useIsMobile } from "../hooks/useIsMobile";

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
        introStyle={{ fontSize: isMobile ? "1rem" : "1.5rem" }}
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
        // replicated={false}
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

export default Home;
