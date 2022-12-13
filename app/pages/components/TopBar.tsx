import styled from "styled-components";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

export const TopBar = () => {
  //const isMobile = useIsMobile();

  return (
    <Container>
      <Logo src="/logo.svg" width={119} height={100} alt="busshiDev" />
      {/* {isMobile ? (
        <></>
      ) : ( */}
      <Buttons>
        <Button>SOLUTIONS</Button>
        <Button>ABOUT ME</Button>
        <Button>GET A DEMO</Button>
      </Buttons>
      {/* )} */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Logo = styled(Image)``;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const Button = styled.div`
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  color: grey;
  transition: color 0.3s ease;

  :hover {
    color: black;
  }
  @media (prefers-color-scheme: dark) {
    :hover {
      color: white;
    }
  }
`;
