import styled from "styled-components";
import { COLORS } from "../../lib/constants";

export const Design = () => {
  return (
    <Container>
      <Line />
      <Circle>1</Circle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  height: 5rem;
  width: 1px;
  background: linear-gradient(360deg, ${COLORS[0].stop}, ${COLORS[0].start});
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-dark-color);
  width: 3rem;
  height: 3rem;
  border-radius: 99999px;
  position: relative;
  text-align: center;
  font-weight: var(--font-weight);
  z-index: 0;
  box-shadow: 0px 0px 3rem 0px ${COLORS[0].start};
  background: linear-gradient(360deg, ${COLORS[0].start}, ${COLORS[0].stop});

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 99999px;
    background: linear-gradient(360deg, ${COLORS[0].start}, ${COLORS[0].stop});
    -webkit-mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask-composite: exclude;
  }
`;
