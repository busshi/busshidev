import styled from "styled-components";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useIntersectionRatio from "../../hooks/useIntersectionRatio";
import { COLORS } from "../../lib/constants";
import { useHighlightedColorState } from "../../providers/HighlightedColor.provider";
import { Color, Solution } from "../../types/interfaces";
import { Title } from "../Titles";
import { useThemeState } from "../../providers/Theme.provider";

export const Content = ({
  index,
  solution,
  titleSize,
  descriptionSize,
}: {
  index: number;
  solution: Solution;
  titleSize: string;
  descriptionSize: string;
}) => {
  const { highlightedColor } = useHighlightedColorState();
  const [isVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const [intersectionRatio, refContainer] =
    useIntersectionRatio<HTMLDivElement>();
  const { isDarkMode, setIsDarkMode, theme } = useThemeState();

  useSlideIntoView();

  if (!solution) return null;

  return (
    <Container
      className="slideIntoView"
      ref={refContainer}
      style={{ opacity: intersectionRatio }}
    >
      <TitleBox>
        <Title
          isShiny={true}
          highlightedColor={COLORS[index]}
          fontSize={titleSize}
          margin="0"
          mainColor={theme.mainColor}
        >
          {solution.title.substring(0, solution.title.length - 1)}
        </Title>
      </TitleBox>
      <Description fontSize={descriptionSize}>
        {solution.description}
      </Description>
      <ActionsBox
        index={index}
        highlightedColor={highlightedColor}
        isVisible={isVisible}
        ref={ref}
        style={{ background: theme.cardBackground }}
      >
        {/* <Icon
          isShiny={true}
          highlightedColor={highlightedColor}
          color={COLORS[index].stop}
        > */}
        {solution.icon}
        {/* </Icon> */}
        {solution.actions.map((item) => (
          <div
            key={item}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <TextBox style={{ color: theme.secondaryFontColor }}>
              {item}
            </TextBox>
            {item === "Dark mode" && (
              <div>
                <Button
                  type="radio"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  onChange={() => console.log("change", isDarkMode)}
                  checked={isDarkMode}
                />
              </div>
            )}
          </div>
        ))}
      </ActionsBox>
    </Container>
  );
};

const Button = styled.input``;

const Container = styled.div`
  @media (max-width: 768px) {
    &.slideIntoView {
      transition: all 0.3s ease;
    }

    &.slideIntoView[data-view="inview-top"],
    &.slideIntoView[data-view="inview-bottom"] {
      opacity: 1;
      transform: translateY(0);
    }

    &.slideIntoView[data-view="outview-top"] {
      opacity: 0;
      transform: translateY(-200px);
    }

    &.slideIntoView[data-view="outview-bottom"] {
      opacity: 0;
      transform: translateY(200px);
    }
  }
`;

const Description = styled.div<{ fontSize: string }>`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: 0rem;
  font-size: ${(props) => props.fontSize};
`;

const TitleBox = styled.div`
  margin: 1rem;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const ActionsBox = styled.div<{
  index: number;
  highlightedColor: Color;
  isVisible: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    margin: 3rem 0.5rem 2rem 0.5rem;
    padding: 2rem;
    border-radius: var(--border-radius);
    // background: var(--light-background-card);

    box-shadow: ${(props) =>
      props.isVisible
        ? `0px 0px 3rem 0px ${COLORS[props.index].start}`
        : "0px 0px 1px var(--middle-font-color)"};

    transition: box-shadow var(--middle-transition-delay) ease;

    // @media (prefers-color-scheme: dark) {
    // background: var(--dark-background-card);
    // }
  }
`;

// const Icon = styled.div<{
//   isShiny: boolean;
//   highlightedColor: Color;
//   color: string;
// }>`
//   background-color: ${(props) =>
//     props.isShiny
//       ? `-webkit-linear-gradient(180deg, ${props.highlightedColor.stop}, ${props.highlightedColor.start})`
//       : "var(--main-dark-color)"};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   position: relative;
//   z-index: 0;

//   &:before {
//     content: "";
//     position: absolute;
//     z-index: -1;
//     inset: 0;
//     padding: 0px;
//     border-radius: var(--border-radius);
//     background: ${(props) =>
//       props.isShiny
//         ? `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`
//         : "var(--middle-font-color)"};
//     -webkit-mask: linear-gradient(var(--main-light-color) 0 0) content-box,
//       linear-gradient(var(--main-light-color) 0 0);
//     mask: linear-gradient(var(--main-light-color) 0 0) content-box,
//       linear-gradient(var(--main-light-color) 0 0);
//     mask-composite: exclude;
//   }
// `;

const TextBox = styled.div`
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    margin: 0;
  }

  // color: var(--secondary-light-font-color);
  // @media (prefers-color-scheme: dark) {
  //   color: var(--secondary-dark-font-color);
  // }
`;

export default Content;
