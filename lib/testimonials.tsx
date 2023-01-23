import styled from "styled-components";
import Image from "next/image";
import qcAvatar from "../public/avatars/qc.webp";
import mcAvatar from "../public/avatars/mc.png";

const ImageBox = styled(Image)`
  border-radius: 50%;
`;

export const TESTIMONIALS = [
  {
    id: "first",
    author: "Quentin Chantelot",
    url: "https://notice.studio",
    company: "Notice",
    job: "Founder & CTO",
    location: "Station F Paris",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: `Alexandre a été clé pendant sa mission de plusieurs mois chez Notice.
          Il a su s'intégrer à une stack complexe, communiquer et se rendre
          utile dès le premier jour. Avec plaisir pour retravailler ensemble dès
          que possible.`,
    date: "November, 10 2022",
    avatar: (
      <ImageBox src={qcAvatar} width={50} height={50} alt="Quentin Chantelot" />
    ),
  },
  {
    id: "second",
    author: "Quentin Chantelot",
    url: "https://notice.studio",
    company: "Notice",
    job: "Founder & CTO",
    location: "Station F Paris",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: `Je recommande à 100% Alex, compréhension de la mission, force de
          proposition et beaucoup de boulot sur une mission fullstack JS.`,
    date: "October, 10 2022",
    avatar: (
      <ImageBox src={qcAvatar} width={50} height={50} alt="Quentin Chantelot" />
    ),
  },
  {
    id: "third",
    author: "Martial Carriere",
    url: "",
    company: "MCI",
    job: "DevOps",
    location: "",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: `Très bonne expérience, Alexandre à su répondre à mes besoins en
          matière de sécurité, il a mis en lumière des failles et m'a permis de
          les sécuriser. Très bon relationnel également, au plaisir de
          retravailler ensemble.`,
    date: "March, 12 2022",
    avatar: (
      <ImageBox src={mcAvatar} width={50} height={50} alt="Martial Carriere" />
    ),
  },
];
