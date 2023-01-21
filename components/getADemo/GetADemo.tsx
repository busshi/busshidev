import styled, { CSSProperties } from "styled-components";
import { useContactMenuOpenedState } from "../../providers/ContactMenu.provider";
import { useHighlightedColorState } from "../../providers/HighlightedColor.provider";
import { Color } from "../../types/interfaces";

export const GetADemo = ({ style }: { style: CSSProperties }) => {
  const { highlightedColor } = useHighlightedColorState();
  const { setIsContactMenuOpened } = useContactMenuOpenedState();

  return (
    <>
      <Button
        highlightedColor={highlightedColor}
        style={{ ...style }}
        onClick={() => setIsContactMenuOpened(true)}
      >
        Get a Demo
      </Button>
    </>
  );
};

const Button = styled.div<{ highlightedColor: Color }>`
  cursor: pointer;
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

export default GetADemo;
