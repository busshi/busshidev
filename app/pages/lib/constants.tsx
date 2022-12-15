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
      "Using online collaborative tools",
      "Create website maquette",
      "Personalization",
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
      "Code well organized and documented easy to maintain",
    ],
    id: "develop",
    icon: <BsTerminalFill size="2rem" />,
  },
  {
    title: "Deploy.",
    description: "Deploy instantly on the cloud",
    actions: [
      "Online deployment",
      "Instant worldwide access",
      "Continuatious Integration and Development",
    ],
    id: "deploy",
    icon: <SlRocket size="2rem" />,
  },
  {
    title: "Boost.",
    description: "Increase your audience",
    actions: [
      "Search Engine Optimization",
      "Increase referencement",
      "Better trafic",
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
