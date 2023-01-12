import styled, { CSSProperties } from "styled-components";

const SystemIcons = ({ style }: { style?: CSSProperties }) => {
  return (
    <IconBox style={style}>
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
