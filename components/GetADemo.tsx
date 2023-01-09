import Link from "next/link";
import styled, { CSSProperties } from "styled-components";
import { useHighlightedColorState } from "../providers/HighlightedColor.provider";
import { Color } from "../types/interfaces";

export const GetADemo = ({ style }: { style: CSSProperties }) => {
  const { highlightedColor } = useHighlightedColorState();
  return (
    <LinkBox href="/contact">
      <Button highlightedColor={highlightedColor} style={{ ...style }}>
        Get a Demo
      </Button>
    </LinkBox>
  );
};

const Button = styled.div<{ highlightedColor: Color }>`
  width: 15rem;
  height: 3rem;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  position: relative;
  transition: box-shadow 1s ease;

  font-weight: var(--font-weight);

  box-shadow: ${(props) => `0px 0px 30px 0px ${props.highlightedColor.start}`};

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius);
    background: ${(props) =>
      `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`};
    -webkit-mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask-composite: exclude;
    transition: background 1s ease;
  }

  &:hover {
    background: ${(props) =>
      `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`};
  }
`;

const LinkBox = styled(Link)`
  cursor: pointer;
  //color: black;

  //  @media (prefers-color-scheme: dark) {
  //  color: white;
  //}

  &:hover {
    color: white;

    @media (prefers-color-scheme: dark) {
      color: black;
    }
  }
`;

export default GetADemo;
