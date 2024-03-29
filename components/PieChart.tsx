import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PAGE_SPEED_URL } from "../lib/constants";

const CHART_TIMEOUT = 5;

const PieWrapper = ({
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

    const timeout = setTimeout(
      increment,
      percentage < 80
        ? CHART_TIMEOUT
        : percentage < 90
        ? percentage * 0.5
        : percentage < 95
        ? percentage
        : percentage < 98
        ? percentage * 3
        : percentage * 5
    );

    return () => {
      clearTimeout(timeout);
      if (!isElementVisible) {
        setPercentage(0);
      }
    };
  }, [percentage, isElementVisible, maxValue]);

  return (
    <Pie p={percentage} color={color}>
      {percentage}%
    </Pie>
  );
};

const PieChart = ({
  text,
  maxValue,
  isElementVisible,
  color,
  fontSize = "1rem",
  mobileFontSize = "0.7rem",
}: {
  text: string;
  maxValue: number;
  isElementVisible: boolean;
  color: string;
  fontSize?: string;
  mobileFontSize?: string;
}) => {
  return (
    <PieContainer>
      <PieWrapper
        maxValue={maxValue}
        color={color}
        isElementVisible={isElementVisible}
      />
      <Text fontSize={fontSize} mobileFontSize={mobileFontSize} color={color}>
        {text} <StyledLink href={PAGE_SPEED_URL}>*</StyledLink>
      </Text>
    </PieContainer>
  );
};

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

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - 20px),
      #000 calc(100% - 20px)
    );
    -moz-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - 20px),
      #000 calc(100% - 20px)
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - 20px),
      #000 calc(100% - 20px)
    );
    background: ${(props) =>
      `radial-gradient(farthest-side,${props.color} 98%,#0000) top/20px 20px no-repeat,
      conic-gradient(${props.color} calc(${props.p}*1%),#0000 0)`};
  }

  // to round second border
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: calc(50% - 20px / 2);
    background: ${(props) => props.color};
    transform: ${(props) =>
      `rotate(calc(${props.p} * 3.6deg)) translateY(calc(50% - 150px / 2))`};
  }

  @media (max-width: 768px) {
    width: 80px;
    font-size: 20px;

    &::before {
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: 0;
      -webkit-mask: radial-gradient(
        farthest-side,
        #0000 calc(99% - 5px),
        #000 calc(100% - 5px)
      );
      -moz-mask: radial-gradient(
        farthest-side,
        #0000 calc(99% - 5px),
        #000 calc(100% - 5px)
      );
      mask: radial-gradient(
        farthest-side,
        #0000 calc(99% - 5px),
        #000 calc(100% - 5px)
      );
      background: ${(props) =>
        `radial-gradient(farthest-side,${props.color} 98%,#0000) top/5px 5px no-repeat,
        conic-gradient(${props.color} calc(${props.p}*1%),#0000 0)`};
    }

    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: calc(50% - 5px / 2);
      background: ${(props) => props.color};
      transform: ${(props) =>
        `rotate(calc(${props.p}*3.6deg)) translateY(calc(50% - 80px/2))`};
    }
  }
`;

const Text = styled.div<{
  color: string;
  fontSize: string;
  mobileFontSize: string;
}>`
  position: relative;
  font-size: ${(props) => props.fontSize};

  a {
    font-size: 2rem;
    color: ${(props) => props.color};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.mobileFontSize};

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

export default PieChart;
