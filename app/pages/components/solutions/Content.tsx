import { Fragment } from "react";
import styled from "styled-components";
import { COLORS } from "../../lib/constants";
import { Title } from "../Titles";

export const Content = ({
  title,
  index,
  description,
  component,
  titleSize,
  descriptionSize,
}: {
  title: string;
  index: number;
  description: string;
  component: JSX.Element;
  titleSize: string;
  descriptionSize: string;
}) => (
  <Fragment>
    <TitleBox>
      <Title
        key={title}
        isShiny={true}
        highlightedColor={COLORS[index]}
        fontSize={titleSize}
        margin="0"
      >
        {title.substring(0, title.length - 1)}
      </Title>
    </TitleBox>
    <Description fontSize={descriptionSize}>{description}</Description>
    {component}
  </Fragment>
);

const Description = styled.div<{ fontSize: string }>`
  color: var(--main-dark-color);
  font-size: ${(props) => (props.fontSize ? props.fontSize : "3rem")};

  @media (prefers-color-scheme: dark) {
      color: var(--secondary-light-color);
    }
  }
`;

export const TitleBox = styled.div`
  margin: 1rem;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;
