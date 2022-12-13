import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <Container>
      <LinkBox
        href="https://busshi.fr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TextBox>
          Powered by
          <Image src="/logo.svg" alt="busshiDev" width={100} height={100} />
        </TextBox>
      </LinkBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-top: 1px solid black;
  justify-content: center;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    border-top: 1px solid #f5f5f5;
  }
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
`;

const LinkBox = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
