import { FaDocker, FaLinkedin, FaNpm } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

export const SITE_URL = "https://busshidev.fr";

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

/**
 * Contacts links constants
 */

export const LINKS = [
  {
    id: "linkedin",
    name: "Linkedin",
    url: "https://www.linkedin.com/in/alexandre-dubar/",
    logo: <FaLinkedin color="var(--linkedin-color)" size={25} />,
    logoDark: <FaLinkedin color="var(--linkedin-color)" size={25} />,
  },
  {
    id: "malt",
    name: "Malt",
    url: "https://www.malt.fr/profile/alexandredubar",
    logo: <img src="/icons/malt.png" width={25} height={25} />,
    logoDark: <img src="/icons/malt.png" width={25} height={25} />,
  },
  {
    id: "github",
    name: "Github",
    url: "https://github.com/busshi",
    logo: <ImGithub color="black" size={25} />,
    logoDark: <ImGithub color="white" size={25} />,
  },
];

/**
 * Open source links constants
 */

export const OPENSOURCES = [
  {
    id: "npm",
    name: "NPM",
    url: "https://npmjs.com/~busshi",
    logo: <FaNpm color="black" size={25} />,
    logoDark: <FaNpm color="white" size={25} />,
  },
  {
    id: "dockerhub",
    name: "DockerHub",
    url: "https://hub.docker.com/u/busshi",
    logo: <FaDocker color="var(--docker-color)" size={25} />,
    logoDark: <FaDocker color="var(--docker-color)" size={25} />,
  },
];
