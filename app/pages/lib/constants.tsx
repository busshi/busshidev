import { Boost } from "../components/solutions/Boost";
import { Deploy } from "../components/solutions/Deploy";
import { Design } from "../components/solutions/Design";
import { Develop } from "../components/solutions/Develop";

export const SOLUTIONS = [
  {
    title: "Design.",
    description: "Design your website / app with your wishes",
    id: "design",
    icon: "",
    component: <Design />,
  },
  {
    title: "Develop.",
    description: "Develop and code the best product according to your needs",
    id: "develop",
    icon: "",
    component: <Develop />,
  },
  {
    title: "Deploy.",
    description: "Deploy instantly on the cloud",
    id: "deploy",
    icon: "",
    component: <Deploy />,
  },
  {
    title: "Boost.",
    description: "Boost your audience",
    id: "boost",
    icon: "",
    component: <Boost />,
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
