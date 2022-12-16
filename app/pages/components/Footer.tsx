import Image from "next/image";
import styled from "styled-components";
import { scrollIntoView } from "../lib/useScrollIntoView";

export const Footer: React.FC = () => {
  return (
    <Container>
      <TextBox>
        Powered by
        <ImageBox
          onClick={() => scrollIntoView("solutions")}
          src="/logo.svg"
          alt="busshiDev"
          width={100}
          height={100}
        />
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

    img {
      filter: invert(1);
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  color: var(--secondary-dark-color);
`;

const ImageBox = styled(Image)`
  cursor: pointer;
`;
