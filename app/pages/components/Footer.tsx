import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <Container>
      <TextBox>
        Powered by
        <Image src="/logo.svg" alt="busshiDev" width={100} height={100} />
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--footer-light-color);

  @media (prefers-color-scheme: dark) {
    background: var(--footer-dark-color);
  }
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  color: var(--main-dark-color);
`;
