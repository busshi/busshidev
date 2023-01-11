import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";

const SystemIcons = () => {
  const isMobile = useIsMobile();
  return (
    <IconBox style={{ left: isMobile ? "1rem" : "2rem" }}>
      <Icon color="red" />
      <Icon color="orange" />
      <Icon color="green" />
    </IconBox>
  );
};

const IconBox = styled.div`
  padding: 1rem;
  display: flex;
  gap: 0.3rem;
`;

const Icon = styled.div<{ color: string }>`
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 99999px;
  background: ${(props) => props.color};
`;

export default SystemIcons;
