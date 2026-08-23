import styled from "styled-components";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useThemeState } from "../providers/Theme.provider";

const DarkModeSwitcher = () => {
  const { isDarkMode, setIsDarkMode, theme } = useThemeState();

  return (
    <Button
      type="button"
      onClick={() => setIsDarkMode(!isDarkMode)}
      style={{ color: theme.mainColorInverted }}
      aria-label={
        isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"
      }
    >
      {isDarkMode ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  transition: opacity var(--transition-delay) ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default DarkModeSwitcher;
