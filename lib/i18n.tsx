export type Lang = "fr" | "en";

export interface OfferCopy {
  title: string;
  tagline: string;
  bullets: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Translation {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    services: string;
    testimonials: string;
    faq: string;
    bookCall: string;
    home: string;
  };
  hero: {
    eyebrow: string;
    headlineBefore: string;
    headlineAccent: string;
    subheadline: string;
    helper: string;
  };
  trustBar: {
    label: string;
    rating: string;
    pageSpeed: string;
  };
  offers: {
    sectionTitle: string;
    footerText: string;
    items: OfferCopy[];
  };
  process: {
    sectionTitle: string;
    steps: ProcessStep[];
  };
  testimonials: {
    sectionTitle: string;
  };
  technos: {
    sectionTitle: string;
  };
  faq: {
    sectionTitle: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    subtitle: string;
  };
  footer: {
    navTitle: string;
    stayInTouch: string;
    rights: string;
    legalNotice: string;
    terms: string;
  };
  contact: {
    title: string;
    chat: string;
    meet: string;
    email: string;
    workTogether: string;
  };
}

export const translations: Record<Lang, Translation> = {
  fr: {
    meta: {
      title: "BusshiDev - Sites Web, Logiciels & Agents IA pour PME",
      description:
        "BusshiDev conçoit sites web, applications métier sur mesure et automatisations IA pour PME en croissance. Recommandé par des fondateurs de Station F.",
      keywords:
        "BusshiDev, agence web, logiciel sur mesure, application métier, agents IA, automatisation, site PME, ReactJS, NextJS, SEO",
    },
    nav: {
      services: "Services",
      testimonials: "Avis clients",
      faq: "FAQ",
      bookCall: "Réserver un appel",
      home: "Accueil",
    },
    hero: {
      eyebrow: "AGENCE WEB & LOGICIELS POUR ENTREPRISES EN CROISSANCE",
      headlineBefore: "Des sites et logiciels pensés pour",
      headlineAccent: "faire grandir votre entreprise",
      subheadline:
        "De votre première landing page à vos logiciels métier sur mesure et vos agents IA, conçus, développés et livrés pour faire vraiment la différence.",
      helper: "Appel gratuit de 30 minutes · Sans engagement",
    },
    trustBar: {
      label: "ILS ME FONT CONFIANCE",
      rating: "5.0 note moyenne",
      pageSpeed: "Google PageSpeed",
    },
    offers: {
      sectionTitle: "CONSTRUIT POUR VOUS",
      footerText: "Vous hésitez entre plusieurs options ?",
      items: [
        {
          title: "Sites Web",
          tagline:
            "Pour les entreprises qui doivent être aussi crédibles en ligne qu'en vrai.",
          bullets: [
            "Sites vitrine et e-commerce pour PME",
            "UI/UX et identité visuelle sur mesure",
            "Responsive, rapide, pensé pour convertir",
            "Optimisé SEO dès le départ",
          ],
        },
        {
          title: "Applications sur mesure",
          tagline:
            "Pour les entreprises qui ont dépassé les tableurs et les outils standards.",
          bullets: [
            "Outils métier et logiciels internes",
            "Portails clients, dashboards, prise de rendez-vous",
            "Code TypeScript robuste et maintenable",
            "Une architecture pensée pour grandir avec vous",
          ],
        },
        {
          title: "Agents IA & Automatisation",
          tagline:
            "Pour les entreprises prêtes à automatiser les tâches répétitives.",
          bullets: [
            "Des agents qui exécutent de vraies tâches, pas juste du chat",
            "Connectés à votre CRM, votre boîte mail, vos outils",
            "Développés avec agentic-factory.fr, studio IA dédié",
            "Sécurisés, supervisés, et monitorés",
          ],
        },
      ],
    },
    process: {
      sectionTitle: "COMMENT ON TRAVAILLE ENSEMBLE",
      steps: [
        {
          title: "Découverte",
          description:
            "On cadre ensemble votre activité, vos utilisateurs, et ce à quoi ressemble la réussite.",
        },
        {
          title: "Conception & Développement",
          description:
            "Des maquettes que vous validez, puis un vrai produit codé en React et TypeScript.",
        },
        {
          title: "Mise en ligne",
          description:
            "Déployé sur une infrastructure sécurisée et rapide — en ligne partout dans le monde dès le premier jour.",
        },
        {
          title: "Croissance",
          description:
            "SEO, optimisation des performances, et suivi continu pour que ça continue de fonctionner pour vous.",
        },
      ],
    },
    testimonials: {
      sectionTitle: "RECOMMANDÉ PAR DES FONDATEURS",
    },
    technos: {
      sectionTitle: "MES TECHNOLOGIES DE PRÉDILECTION",
    },
    faq: {
      sectionTitle: "QUESTIONS FRÉQUENTES",
      items: [
        {
          question:
            "Combien de temps faut-il pour lancer mon site ou mon application ?",
          answer:
            "Ça dépend du périmètre : un site vitrine peut être en ligne en 1 à 2 semaines, une application sur mesure prend généralement de quelques semaines à quelques mois. Vous avez un calendrier clair dès notre premier échange.",
        },
        {
          question: "Pas d'équipe technique en interne : est-ce un problème ?",
          answer:
            "Non, c'est même le cas le plus fréquent. Tout est pris en charge de bout en bout — conception, développement, hébergement et sécurité — vous n'avez besoin d'aucune compétence technique.",
        },
        {
          question:
            "Qu'est-ce qu'un agent IA concrètement, et est-ce fait pour mon entreprise ?",
          answer:
            "Un agent IA automatise de vraies tâches — répondre à des leads, traiter des documents, mettre à jour vos outils — plutôt que de simplement discuter. Si vous avez des tâches manuelles répétitives, ça vaut le coup d'en parler. Les projets d'agents IA plus poussés sont réalisés avec agentic-factory.fr, le studio IA dédié.",
        },
        {
          question: "Comment se passe la collaboration ?",
          answer:
            "On commence par un appel gratuit pour comprendre vos objectifs, puis vous recevez une proposition claire avec périmètre et calendrier. Vous avez des points d'avancement réguliers et des démos tout au long du projet, pas juste un rendu final.",
        },
        {
          question:
            "Que se passe-t-il une fois le site ou l'application en ligne ?",
          answer:
            "Un accompagnement continu est proposé : maintenance, support, et amélioration SEO/performance après la mise en ligne, pour que votre site continue de fonctionner pour vous.",
        },
        {
          question: "Quel est le tarif ?",
          answer:
            "Chaque projet est chiffré au cas par cas, il n'y a pas de grille tarifaire fixe. Réservez un appel gratuit de 30 minutes et vous recevrez un devis clair et sans engagement selon vos besoins réels.",
        },
      ],
    },
    finalCta: {
      title:
        "Construisons ensemble un outil sur lequel votre entreprise peut compter.",
      subtitle:
        "Réservez un appel gratuit de 30 minutes — sans pression, sans engagement. Juste une vision claire de ce qui est possible.",
    },
    footer: {
      navTitle: "NAVIGATION",
      stayInTouch: "RESTONS EN CONTACT",
      rights: "Tous droits réservés.",
      legalNotice: "Mentions légales",
      terms: "CGU",
    },
    contact: {
      title: "CONNECTÉ PARTOUT DANS LE MONDE",
      chat: "Discutons",
      meet: "Rendez-vous",
      email: "Envoyer un email",
      workTogether: "Collaborons",
    },
  },

  en: {
    meta: {
      title: "BusshiDev - Websites, Custom Software & AI Agents for SMEs",
      description:
        "BusshiDev builds websites, custom business applications and AI-powered automations for growing SMEs. Trusted by Station F founders.",
      keywords:
        "BusshiDev, web agency, custom software, business applications, AI agents, automation, SME websites, ReactJS, NextJS, SEO",
    },
    nav: {
      services: "Services",
      testimonials: "Testimonials",
      faq: "FAQ",
      bookCall: "Book a Call",
      home: "Home",
    },
    hero: {
      eyebrow: "WEBSITE & SOFTWARE STUDIO FOR GROWING BUSINESSES",
      headlineBefore: "Websites and software built to",
      headlineAccent: "grow your business",
      subheadline:
        "From your first landing page to custom business software and AI agents, designed, built and shipped to actually move the needle.",
      helper: "Free 30-minute call · No commitment",
    },
    trustBar: {
      label: "TRUSTED BY FOUNDERS AT",
      rating: "5.0 average rating",
      pageSpeed: "Google PageSpeed",
    },
    offers: {
      sectionTitle: "BUILT FOR YOU",
      footerText: "Not sure which one fits your project?",
      items: [
        {
          title: "Websites",
          tagline: "For businesses that need to look as good as they are.",
          bullets: [
            "Showcase & e-commerce sites for SMEs",
            "Custom UI/UX and visual identity",
            "Responsive, fast, and built to convert",
            "SEO-ready from day one",
          ],
        },
        {
          title: "Custom Applications",
          tagline:
            "For businesses that have outgrown spreadsheets and off-the-shelf tools.",
          bullets: [
            "Business tools and internal software",
            "Client portals, dashboards, booking systems",
            "Robust, maintainable TypeScript codebase",
            "Built to scale with your business",
          ],
        },
        {
          title: "AI Agents & Automation",
          tagline: "For businesses ready to automate the busywork.",
          bullets: [
            "Agents that handle real tasks, not just chat",
            "Connected to your CRM, inbox, and tools",
            "Built with agentic-factory.fr, dedicated AI studio",
            "Secure, monitored, and human-supervised",
          ],
        },
      ],
    },
    process: {
      sectionTitle: "HOW WE WORK TOGETHER",
      steps: [
        {
          title: "Discover",
          description:
            "We map out your business, your users, and what success actually looks like.",
        },
        {
          title: "Design & Build",
          description:
            "Mockups you approve, then a real product built in React and TypeScript.",
        },
        {
          title: "Launch",
          description:
            "Deployed on secure, fast infrastructure — live worldwide from day one.",
        },
        {
          title: "Grow",
          description:
            "SEO, performance tuning, and ongoing support to keep it working for you.",
        },
      ],
    },
    testimonials: {
      sectionTitle: "TRUSTED BY STARTUPS",
    },
    technos: {
      sectionTitle: "FAVORITES EDGE TECHNOLOGIES",
    },
    faq: {
      sectionTitle: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          question:
            "How long does it take to launch my website or application?",
          answer:
            "It depends on the scope: a showcase website can go live in 1 to 2 weeks, while a custom application usually takes a few weeks to a few months. You get a clear timeline after our first call.",
        },
        {
          question: "No in-house tech team — is that a problem?",
          answer:
            "No, that's the most common case. Everything is handled end-to-end — design, development, hosting, and security — so you don't need any technical knowledge to get a working product.",
        },
        {
          question: "What exactly is an AI agent, and is it for my business?",
          answer:
            "An AI agent automates real tasks — answering leads, processing documents, updating your tools — instead of just chatting. If you have repetitive manual work, it's worth a conversation. Deeper AI agent projects are built with agentic-factory.fr, the dedicated AI studio.",
        },
        {
          question: "How does the collaboration work?",
          answer:
            "We start with a free call to understand your goals, then you receive a clear proposal with scope and timeline. You get regular updates and demos throughout the project, not just a final reveal.",
        },
        {
          question: "What happens after the website or app is live?",
          answer:
            "Ongoing support, maintenance, and SEO/performance improvements are included after launch, so your site keeps working for you instead of going stale.",
        },
        {
          question: "What does it cost?",
          answer:
            "Every project is scoped differently, so there's no fixed price list. Book a free 30-minute call and you'll get a clear, no-obligation quote based on what you actually need.",
        },
      ],
    },
    finalCta: {
      title: "Let's build something your business can rely on.",
      subtitle:
        "Book a free 30-minute call — no pressure, no commitment. Just a clear picture of what's possible.",
    },
    footer: {
      navTitle: "NAVIGATION",
      stayInTouch: "STAY IN TOUCH",
      rights: "All rights reserved.",
      legalNotice: "Legal notice",
      terms: "Terms of use",
    },
    contact: {
      title: "CONNECT FROM EVERYWHERE",
      chat: "Let's chat",
      meet: "Book a call",
      email: "Send an email",
      workTogether: "Collaborate",
    },
  },
};

export function getT(lang: string | undefined): Translation {
  return translations[lang as Lang] || translations.fr;
}
