import { FaDocker, FaLinkedin, FaNpm } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://busshidev.fr"
    : "http://localhost:3000";

export const BLOG_URL = "https://busshi.fr";

export const EMAIL = "busshidev@icloud.com";

export const CALENDLY_URL = "https://calendly.com/busshidev/30min";

export const PAGE_SPEED_URL =
  "https://pagespeed.web.dev/report?url=https%3A%2F%2Fbusshidev.fr%2F&form_factor=desktop";

export const PAGE_SPEED_RESULTS = {
  mobile: {
    performances: 98,
    bestPractices: 100,
    accessibility: 97,
    seo: 100,
  },
  laptop: {
    performances: 100,
    bestPractices: 100,
    accessibility: 100,
    seo: 100,
  },
};

export const CRIPS_WEBSITE_ID = "e1e85931-34f5-415c-bc4b-f38fc7264ef6";

/**
 * Google analytics and other
 */
export const GTAG = "G-K4ERH99TW7";
export const GOOGLE_SITE_VERIFICATION =
  "9zfrcdtOL120_Di_ZUTyg-Tce-YNx4ZA5PYx9yK4aJo";

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
    url: `mailto:${EMAIL}`,
    logo: <HiOutlineMail color="var(--middle-font-color)" size={25} />,
    logoDark: <HiOutlineMail color="var(--middle-font-color)" size={25} />,
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
    logo: <ImGithub color="var(--main-light-color)" size={25} />,
    logoDark: <ImGithub color="var(--main-dark-color)" size={25} />,
  },
  {
    id: "npm",
    name: "NPM",
    url: "https://npmjs.com/~busshi",
    logo: <FaNpm color="var(--main-light-color)" size={25} />,
    logoDark: <FaNpm color="var(--main-dark-color)" size={25} />,
  },
  {
    id: "dockerhub",
    name: "DockerHub",
    url: "https://hub.docker.com/u/busshi",
    logo: <FaDocker color="var(--docker-color)" size={25} />,
    logoDark: <FaDocker color="var(--docker-color)" size={25} />,
  },
];
