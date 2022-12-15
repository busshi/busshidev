import { Fragment } from "react";
import styled from "styled-components";
import { COLORS } from "../../lib/constants";
import { Title } from "../Titles";

export const Content = ({
  title,
  index,
  description,
  actions,
  titleSize,
  descriptionSize,
}: {
  title: string;
  index: number;
  description: string;
  actions: string[];
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
    <ActionsBox>
      {actions.map((item) => (
        <TextBox key={item}>{item}</TextBox>
      ))}
    </ActionsBox>
  </Fragment>
);

const Description = styled.div<{ fontSize: string }>`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);

  color: var(--main-dark-color);
  font-size: ${(props) => props.fontSize};

  @media (prefers-color-scheme: dark) {
      color: var(--secondary-light-color);
    }
  }
`;

const TitleBox = styled.div`
  margin: 1rem;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  gap: 1rem;
`;

const TextBox = styled.div`
  color: var(--secondary-dark-color);
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
