import { SlRocket } from "react-icons/sl";
import { FiFigma } from "react-icons/fi";
import { BsTerminalFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";

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
    icon: <FiFigma size="2rem" />,
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
