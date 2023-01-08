import { SlRocket } from "react-icons/sl";
import { FiFigma } from "react-icons/fi";
import { BsTerminalFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";

export const buildSolutionsMenu = (size: number, color?: string) => [
  {
    title: "Design.",
    description: "Create the website of your dreams",
    actions: [
      "Create website mock-up",
      "Responsive Web Design",
      "Best user interface and experience (UI / UX) practices",
      "Dark mode",
    ],
    id: "design",
    icon: <FiFigma size={size} color={color} />,
  },
  {
    title: "Develop.",
    description: "Code the product you need",
    actions: [
      "Building incredibly blazing fast websites",
      "Using latest frameworks and tools",
      "Best code practices",
      "Code well documented easy to maintain",
    ],
    id: "develop",
    icon: <BsTerminalFill size={size} color={color} />,
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
    icon: <SlRocket size={size} color={color} />,
  },
  {
    title: "Boost.",
    description: "Increase your audience",
    actions: [
      "Search Engine Optimization",
      "Optimize referencement",
      "Boost your trafic",
      "Convert up to 60% more",
    ],
    id: "boost",
    icon: <BsGraphUp size={size} color={color} />,
  },
];
