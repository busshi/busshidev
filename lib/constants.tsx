import { FaDocker, FaLinkedin, FaNpm } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://busshidev.fr"
    : "http://localhost:3000";

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

export const CONTACTS = [
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
    logo: <Image src="/icons/malt.png" width={25} height={25} alt="malt" />,
    logoDark: <Image src="/icons/malt.png" width={25} height={25} alt="malt" />,
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:busshidev@contact.me",
    logo: <HiOutlineMail color="var(--main-dark-color)" size={25} />,
    logoDark: <HiOutlineMail color="var(--secondary-dark-color)" size={25} />,
  },
];

/**
 * Open source links constants
 */

export const OPENSOURCES = [
  {
    id: "github",
    name: "Github",
    url: "https://github.com/busshi",
    logo: <ImGithub color="var(--main-dark-color)" size={25} />,
    logoDark: <ImGithub color="var(--main-light-color)" size={25} />,
  },
  {
    id: "npm",
    name: "NPM",
    url: "https://npmjs.com/~busshi",
    logo: <FaNpm color="var(--main-dark-color)" size={25} />,
    logoDark: <FaNpm color="var(--main-light-color)" size={25} />,
  },
  {
    id: "dockerhub",
    name: "DockerHub",
    url: "https://hub.docker.com/u/busshi",
    logo: <FaDocker color="var(--docker-color)" size={25} />,
    logoDark: <FaDocker color="var(--docker-color)" size={25} />,
  },
];
