import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { COLORS, PAGE_SPEED_URL } from "../../lib/constants";
import { useThemeState } from "../../providers/Theme.provider";

const CHART_TIMEOUT = 3;

const PieChart = ({
  maxValue,
  color,
  isElementVisible,
}: {
  maxValue: number;
  color: string;
  isElementVisible: boolean;
}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const increment = () => {
      setPercentage(percentage === maxValue ? percentage : percentage + 1);
    };

    const timeout = setTimeout(increment, CHART_TIMEOUT);

    return () => {
      clearTimeout(timeout);
      !isElementVisible && setPercentage(0);
    };
  }, [percentage, isElementVisible]);

  return (
    <Pie p={percentage} color={color}>
      {percentage}%
    </Pie>
  );
};

const PieBox = ({
  text,
  maxValue,
  isElementVisible,
}: {
  text: string;
  maxValue: number;
  isElementVisible: boolean;
}) => {
  return (
    <PieContainer>
      <PieChart
        maxValue={maxValue}
        color={COLORS[1].start}
        isElementVisible={isElementVisible}
      />
      <Text>
        {text} <StyledLink href={PAGE_SPEED_URL}>*</StyledLink>
      </Text>
    </PieContainer>
  );
};

const ExampleDevelop = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const { theme } = useThemeState();

  return (
    <Container ref={ref} id="example-developn" className="slideIntoViewRight">
      <Wrapper style={{ background: theme.backgroundColor }}>
        <PieBox
          maxValue={100}
          text="Performances"
          isElementVisible={isElementVisible}
        />
        <PieBox
          maxValue={100}
          text="Best Practices"
          isElementVisible={isElementVisible}
        />
        <PieBox
          maxValue={100}
          text="Accessibility"
          isElementVisible={isElementVisible}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60%;
  width: 100%;
`;

const PieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Pie = styled.div<{ p: number; color: string }>`
  width: 150px;
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  place-content: center;
  margin: 5px;
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;

  :before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - 20px),#000 calc(100% - 20px)));
          mask:radial-gradient(farthest-side,#0000 calc(99% - 20px),#000 calc(100% - 20px));
    background: ${(
      props
    ) => `radial-gradient(farthest-side,${props.color} 98%,#0000) top/20px 20px no-repeat,
      conic-gradient(${props.color} calc(${props.p}*1%),#0000 0)`};
  }
  
  // to round second border
  :after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: calc(50% - 20px/2);
    background: ${(props) => props.color};
    transform: ${(props) =>
      `rotate(calc(${props.p}*3.6deg)) translateY(calc(50% - 150px/2))`};
  }

  @media(max-width: 768px) {
    width: 80px;
  font-size: 20px;

    :before {
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: 0;
      -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - 5px),#000 calc(100% - 5px)));
          mask:radial-gradient(farthest-side,#0000 calc(99% - 5px),#000 calc(100% - 5px));
      background: ${(
        props
      ) => `radial-gradient(farthest-side,${props.color} 98%,#0000) top/5px 5px no-repeat,
        conic-gradient(${props.color} calc(${props.p}*1%),#0000 0)`};
    }
  
    :after {
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: calc(50% - 5px/2);
      background: ${(props) => props.color};
      transform: ${(props) =>
        `rotate(calc(${props.p}*3.6deg)) translateY(calc(50% - 80px/2))`};
    }
  }
}`;

const Text = styled.div`
  position: relative;
  a {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;

    a {
      font-size: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: -20px;
  top: -10px;

  @media (max-width: 768px) {
    right: -10px;
    top: -5px;
  }
`;

export default ExampleDevelop;
