import styled from "styled-components";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";
import Link from "next/link";

export const TopBar = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <Logo src="/logo.svg" width={119} height={100} alt="busshiDev" />
      {isMobile ? (
        <></>
      ) : (
        <Buttons>
          <Link href="#design">
            <Button>Solutions</Button>
          </Link>
          <Link href="https://busshi.fr">
            <Button>About me</Button>
          </Link>
          <Button>Contact</Button>
        </Buttons>
      )}
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
  display: flex;
  align-items: center;

  :hover {
    color: black;
  }

  @media (prefers-color-scheme: dark) {
    :hover {
      color: white;
    }
  }
`;
