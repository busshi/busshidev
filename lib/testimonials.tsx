import JuliaAvatar from "../components/svg/JuliaAvatar";
import McAvatar from "../components/svg/McAvatar";
import QcAvatar from "../components/svg/QcAvatar";
import QcAvatar2 from "../components/svg/QcAvatar2";

export const TESTIMONIALS = [
  {
    id: "first",
    author: "Quentin Chantelot",
    url: "https://zest.email",
    company: "Zest",
    job: "Founder & CTO",
    location: "Station F Paris",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: `Alexandre Dubar is a committed and loyal developer
          that will always try his best for your product success.
          I recommend him!!`,
    date: "April, 28 2025",
    svg: <QcAvatar2 />,
  },
  {
    id: "second",
    author: "Julia Georgi",
    url: "https://price-bee.com",
    company: "Price Bee",
    job: "Founder & Product Owner",
    location: "La Baule",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: `J'ai fait appel à Alexandre pour nous aider à construire 
          une solution de tarification et de devis très complexe, 
          et je ne le regrette pas une seconde. 
          Alexandre est une personne compétente, agréable et fiable. 
          Ce fut un vrai plaisir de travailler avec lui.`,
    date: "March, 24 2025",
    svg: <JuliaAvatar />,
  },
  {
    id: "third",
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
    svg: <QcAvatar />,
  },
  {
    id: "fourth",
    author: "Quentin Chantelot",
    url: "https://notice.studio",
    company: "Notice",
    job: "Founder & CTO",
    location: "Station F Paris",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: `Je recommande à 100% Alex, compréhension de la mission, force de
          proposition et beaucoup de boulot sur une mission fullstack JS.`,
    date: "October, 10 2022",
    svg: <QcAvatar />,
  },
  {
    id: "fifth",
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
    svg: <McAvatar />,
  },
];
