import { NextPage } from "next";
import styled from "styled-components";
import Testimonials from "../components/Testimonials";
import { useThemeState } from "../providers/Theme.provider";
import { Solutions } from "../components/solutions/Solutions";
import Technos from "../components/Technos";
import FirstPage from "../components/FirstPage";

export const Home: NextPage = () => {
  const { theme } = useThemeState();

  return (
    <Container>
      {/* Laptop Component */}
      <FirstPage
        replicated={false}
        className="laptop"
        titlesStyle={{
          fontSize: "6rem",
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
        // replicated={false}
      />
      {/* Mobile Component */}
      <FirstPage
        replicated={false}
        className="mobile"
        titlesStyle={{
          fontSize: "4rem",
          color: theme.fontColor,
          margin: "0 1rem 0 0",
        }}
        firstPageStyle={{ gap: "3.5rem", minHeight: "90vh", margin: "0rem" }}
        introStyle={{ fontSize: "1rem" }}
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
      <Solutions replicated={false} gradientColor={theme.mainColor} />
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
