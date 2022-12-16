import { SlRocket } from "react-icons/sl";
import { SiAdobeindesign } from "react-icons/si";
import { BsTerminalFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";

export const SITE_URL = "https://busshidev.fr";

export const SOLUTIONS = [
  {
    title: "Design.",
    description: "Create the website of your dreams",
    actions: [
      "Create website mock-up",
      "Using online collaborative tools",
      "Best UI / UX practices",
    ],
    id: "design",
    icon: <SiAdobeindesign size="2rem" />,
  },
  {
    title: "Develop.",
    description: "Code the product you need",
    actions: [
      "Building incredibly blazing fast websites",
      "Using latest frameworks and tools",
      "Best code practices easy to maintain",
    ],
    id: "develop",
    icon: <BsTerminalFill size="2rem" />,
  },
  {
    title: "Deploy.",
    description: "Release instantly on the cloud",
    actions: [
      "Online deployment",
      "Instant worldwide access",
      "Continuous integration and development",
    ],
    id: "deploy",
    icon: <SlRocket size="2rem" />,
  },
  {
    title: "Boost.",
    description: "Increase your audience",
    actions: [
      "Search Engine Optimization",
      "Optimize referencement",
      "Boost your trafic",
    ],
    id: "boost",
    icon: <BsGraphUp size="2rem" />,
  },
];

/**
 * Color constants
 *
 * @example
 * const Button = styled.div`
 *   color: ${COLORS[0].start};
 * `
 */

export const COLORS = [
  {
    start: "var(--gradient-design-start)",
    stop: "var(--gradient-design-stop)",
  },
  {
    start: "var(--gradient-develop-start)",
    stop: "var(--gradient-develop-stop)",
  },
  {
    start: "var(--gradient-deploy-start)",
    stop: "var(--gradient-deploy-stop)",
  },
  {
    start: "var(--gradient-boost-start)",
    stop: "var(--gradient-boost-stop)",
  },
];
