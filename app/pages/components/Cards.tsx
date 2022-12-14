import styled from "styled-components";
import { Color } from "../lib/constants";
import { useHighlightedColorState } from "../providers/HighlightedColor";

export const Cards = () => {
  const { highlighted, highlightedColor } = useHighlightedColorState();

  return (
    <Container>
      <Card
        id="design"
        isShiny={highlighted === 0 ? true : false}
        highlightedColor={highlightedColor}
      >
        <Icon>Icon</Icon>
        <div>Design your website / app with your wishes</div>
      </Card>
      <Card
        id="develop"
        isShiny={highlighted === 1 ? true : false}
        highlightedColor={highlightedColor}
      >
        Develop and code the best product according to your needs
      </Card>
      <Card
        id="deploy"
        isShiny={highlighted === 2 ? true : false}
        highlightedColor={highlightedColor}
      >
        Deploy instantly on the cloud
      </Card>
      <Card
        id="boost"
        isShiny={highlighted === 3 ? true : false}
        highlightedColor={highlightedColor}
      >
        Boost your audience
        <br /> Search Engine Optimization (SEO)
      </Card>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 12px;
  margin-top: 300px;
  justify-content: center;
`;

const Card = styled.div<{ highlightedColor: Color; isShiny?: boolean }>`
  width: 200px;
  height: 200px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  z-index: 0;
  border-radius: 14px;
  box-shadow: ${(props) =>
    props.isShiny
      ? `0px 0px 30px 0px ${props.highlightedColor.start}`
      : "none"};
  transition: box-shadow 1s ease;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 14px;
    background: ${(props) =>
      props.isShiny
        ? `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`
        : "#888"};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0px;
`;
