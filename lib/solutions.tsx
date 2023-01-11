import { SlRocket } from "react-icons/sl";
import { FiFigma } from "react-icons/fi";
import { BsTerminalFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import ExampleDesign from "../components/products/ExampleDesign";
//import ExampleDeploy from "../components/products/ExampleDeploy";
import ExampleBoost from "../components/products/ExampleBoost";
import ExampleDevelop from "../components/products/ExampleDevelop";
import dynamic from "next/dynamic";

const ExampleDeploy = dynamic(
  () =>
    import("../components/products/ExampleDeploy").then((mod) => mod.default),
  { ssr: false }
);

export const buildSolutionsMenu = (size: number, color?: string) => [
  {
    title: "Design.",
    description: "Create the website of your dreams",
    actions: [
      "Create website mock-up",
      "Best UI practices for a better user experience",
      "Responsive Web Design, fit on all devices",
      "Dark mode",
    ],
    id: "design",
    icon: <FiFigma size={size} color={color} />,
    example: <ExampleDesign />,
  },
  {
    title: "Develop.",
    description: "Code the product you need",
    actions: [
      "Building incredibly blazing fast websites with latest frameworks and tools",
      "Best code practices:",
      "- Typescript privilegied to facilitate collaboration",
      "- Code well documented easy to maintain",
    ],
    id: "develop",
    icon: <BsTerminalFill size={size} color={color} />,
    example: <ExampleDevelop />,
  },
  {
    title: "Deploy.",
    description: "Release instantly on the cloud",
    actions: [
      "Online deployment",
      "Instant worldwide access",
      "Continuous integration and development",
      "Internationalization",
    ],
    id: "deploy",
    icon: <SlRocket size={size} color={color} />,
    example: <ExampleDeploy />,
  },
  {
    title: "Boost.",
    description: "Increase your audience",
    actions: [
      "Search Engine Optimization",
      "Optimize referencement",
      "Boost your trafic",
      "Convert more users",
    ],
    id: "boost",
    icon: <BsGraphUp size={size} color={color} />,
    example: <ExampleBoost />,
  },
];
