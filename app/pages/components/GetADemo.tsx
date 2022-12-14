import styled from "styled-components";
import { Color } from "../lib/constants";
import { useHighlightedColorState } from "../providers/HighlightedColor";

export const GetADemo = () => {
  const { highlightedColor } = useHighlightedColorState();

  return <Container highlightedColor={highlightedColor}>Get a Demo</Container>;
};

const Container = styled.div<{ highlightedColor: Color }>`
  cursor: pointer;
  width: 200px;
  height: 50px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  position: relative;
  transition: box-shadow 1s ease;

  font-weight: 800;

  box-shadow: ${(props) => `0px 0px 30px 0px ${props.highlightedColor.start}`};

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 14px;
    background: ${(props) =>
      `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    transition: background 1s ease;
  }

  &:hover {
    background: ${(props) =>
      `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`};
    color: white;

    @media (prefers-color-scheme: dark) {
      color: black;
    }
  }

  color: black;
  @media (prefers-color-scheme: dark) {
    color: #f5f5f5;
  }
`;
