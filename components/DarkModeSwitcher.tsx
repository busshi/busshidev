import styled from "styled-components";
import { useThemeState } from "../providers/Theme.provider";

const DarkModeSwitcher = ({ replicated }: { replicated: boolean }) => {
  const { isDarkMode, setIsDarkMode, theme } = useThemeState();

  return (
    <Button
      onClick={() => {
        setIsDarkMode(isDarkMode ? false : true);
      }}
      style={{
        background: theme.mainColor,
        border: `1px solid ${theme.mainColorInverted}`,
      }}
    >
      <Dot
        style={{
          background: theme.mainColorInverted,
          border: `1px solid ${theme.mainColor}`,
        }}
      />
    </Button>
  );
};

const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  border-radius: 99999px;
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 99999px;
`;

export default DarkModeSwitcher;
