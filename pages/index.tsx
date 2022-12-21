import { NextPage } from "next";
import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";
import { scrollIntoView } from "../lib/scroll";
import GetADemo from "./components/GetADemo";
import Layout from "./components/hoc/Layout";
import MobileSolutions from "./components/solutions/MobileSolutions";
import Solutions from "./components/solutions/Solutions";
import Technos from "./components/Technos";
import Testimonials from "./components/Testimonials";
import Titles from "./components/Titles";

// const pages = ["top", "solutions", "testi", "technos"];

const Home: NextPage = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const isScrolling = useIsScrolling();
  // //r  console.log(currentPage);
  // // const [isScrolling, setIsScrolling] = useState(false);
  // const scrollHeight = useGetScrollHeight("__next");
  // const currentPosition = useGetCurrentPosition("__next");
  //   const [isElement1Visible, ref1] = useIsElementVisible<HTMLDivElement>(0);
  //   const [isElement2Visible, ref2] = useIsElementVisible<HTMLDivElement>(0);
  //   const [isElement3Visible, ref3] = useIsElementVisible<HTMLDivElement>(0);

  // console.log(isScrolling, currentPosition, isElement1Visible,);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (isScrolling === "up")
  //       setCurrentPage(!currentPage ? 0 : currentPage - 1);
  //     if (isScrolling === "down")
  //       setCurrentPage(
  //         currentPage === pages.length - 1 ? currentPage : currentPage + 1
  //       );
  //   }, 300);

  //   return () => clearTimeout(timer);
  // }, [isScrolling]);

  const isMobile = useIsMobile();

  return (
    <Layout>
      <Container>
        <FirstPage>
          <Titles />
          <Intro>
            You have dreams. I have skills. We can build the future together...
          </Intro>
          <GetADemo />
          <Guidance onClick={() => scrollIntoView("solutions")}>
            <div>STEP BY STEP GUIDANCE</div>
          </Guidance>
        </FirstPage>
        {isMobile ? <MobileSolutions /> : <Solutions />}
        <Testimonials />
        <Technos />
      </Container>
    </Layout>
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
  padding: 0 1rem 0 1rem;
  font-size: 1.5rem;

  font-weight: var(--font-weight);

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
  color: var(--secondary-dark-color);
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default Home;
