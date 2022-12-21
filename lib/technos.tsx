import {
  FaReact,
  FaNodeJs,
  FaGoogle,
  FaDocker,
  FaNpm,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiKalilinux,
  SiVim,
  SiVisualstudio,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";

export const getTechnos = (size: number) => [
  <FaReact size={size} key="react" />,
  <TbBrandNextjs size={size} key="nextjs" />,
  <SiNestjs size={size} key="nestjs" />,
  <SiJavascript size={size} key="javascript" />,
  <SiTypescript size={size} key="javascript" />,
  <FaNodeJs size={size} key="node" />,
  <SiExpress size={size} key="express" />,
  <SiPostgresql size={size} key="postgres" />,
  <SiMongodb size={size} key="mongo" />,
  <FaPython size={size} key="python" />,
  <FaDocker size={size} key="docker" />,
  <FaNpm size={size} key="npm" />,
  <GoMarkGithub size={size} key="github" />,
  <FaGoogle size={size} key="google" />,
  <FaLinux size={size} key="linux" />,
  <SiKalilinux size={size} key="kali" />,
  <SiVim size={size} key="vim" />,
  <SiVisualstudio size={size} key="vscode" />,
];
