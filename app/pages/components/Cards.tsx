import styled from "styled-components";

export const Cards = ({ highlighted }: { highlighted: number }) => (
  <Container>
    <Card
      id="design"
      start="#030cfa"
      stop="#01f1ff"
      isShiny={highlighted === 0 ? true : false}
    >
      <Icon>Icon</Icon>
      <div>Design your website / app with your wishes</div>
    </Card>
    <Card
      id="develop"
      start="#520979"
      stop="#ff00f1"
      isShiny={highlighted === 1 ? true : false}
    >
      Develop and code the best product according to your needs
    </Card>
    <Card
      id="deploy"
      start="#ff4d4d"
      stop="#f9cb28"
      isShiny={highlighted === 2 ? true : false}
    >
      Deploy instantly on the cloud
    </Card>
    <Card
      id="boost"
      start="#02ff01"
      stop="#03faf3"
      isShiny={highlighted === 3 ? true : false}
    >
      Boost your audience
      <br /> Search Engine Optimization (SEO)
    </Card>
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 12px;
  justify-content: center;
`;

const Card = styled.div<{ start: string; stop: string; isShiny?: boolean }>`
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
    props.isShiny ? `0px 0px 30px 0px ${props.start}` : "none"};

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 14px;
    background: ${(props) =>
      `linear-gradient(180deg, ${props.start}, ${props.stop})`};
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
