import styled from "styled-components";
import { useHighlightedColorState } from "../providers/HighlightedColor";
import { Color } from "../types/interfaces";

export const GetADemo = () => {
  const { highlightedColor } = useHighlightedColorState();

  return <Button highlightedColor={highlightedColor}>Get a Demo</Button>;
};

const Button = styled.div<{ highlightedColor: Color }>`
  cursor: pointer;
  min-width: 15rem;
  min-height: 3rem;
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
    color: var(--main-light-color);

    @media (prefers-color-scheme: dark) {
      color: var(--main-dark-color);
    }
  }

  color: var(--main-dark-color);
  @media (prefers-color-scheme: dark) {
    color: var(--secondary-light-color);
  }
`;
