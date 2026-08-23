import { NextPage } from "next";
import styled from "styled-components";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Offer from "../components/Offer";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCta from "../components/FinalCta";

export const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
      <TrustBar />
      <Offer />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCta />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

export default Home;
