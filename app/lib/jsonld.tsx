import { SITE_URL } from "./constants";

export const jsonldLogo = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: `${SITE_URL}`,
  logo: `${SITE_URL}/images/logo.svg`,
};

export const jsonldFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who am I?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I am busshidev",
      },
    },
    {
      "@type": "Question",
      name: "Phone",
      acceptedAnswer: {
        "@type": "Answer",
        text: "06 12 34 56 78",
      },
    },
  ],
};

/*
export const jsonldAriane = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "My portfolio",
      item: `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Last project",
      item: `${SITE_URL}/posts/ft_transcendance_EN`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Play online",
      item: `${PLAY_URL}`,
    },
  ],
};
*/
export const jsonldCarousel = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: "1",
      item: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Article 1",
        image: `${SITE_URL}/assets/logo.png`,
        publisher: {
          "@type": "Organization",
          name: "busshiDev",
          url: `${SITE_URL}`,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.svg`,
            width: "1200",
            height: "630",
          },
        },
        url: `${SITE_URL}/article1`,
        datePublished: "2020-01-06T00:00:00.000Z",
        dateCreated: "2020-01-06T00:00:00.000Z",
        dateModified: "2020-01-06T00:00:00.000Z",
        description: "Description of article 1",
        author: {
          "@type": "Person",
          name: "busshiDev",
          url: `${SITE_URL}`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}`,
        },
      },
    },
    {
      "@type": "ListItem",
      position: "2",
      item: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Article 2",
        image: `${SITE_URL}/assets/logo2.png`,
        publisher: {
          "@type": "Organization",
          name: "busshiDev",
          url: `${SITE_URL}`,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.svg`,
            width: "1200",
            height: "630",
          },
        },
        url: `${SITE_URL}/article2`,
        datePublished: "2020-01-06T00:00:00.000Z",
        dateCreated: "2020-01-06T00:00:00.000Z",
        dateModified: "2020-01-06T00:00:00.000Z",
        description: "Description of article 2",
        author: {
          "@type": "Person",
          name: "busshiDev",
          url: `${SITE_URL}`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}`,
        },
      },
    },
    {
      "@type": "ListItem",
      position: "3",
      item: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Article 3",
        image: `${SITE_URL}/assets/logo3.png`,
        publisher: {
          "@type": "Organization",
          name: "busshiDev",
          url: `${SITE_URL}`,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.svg`,
            width: "1200",
            height: "630",
          },
        },
        url: `${SITE_URL}/article3`,
        datePublished: "2020-01-06T00:00:00.000Z",
        dateCreated: "2020-01-06T00:00:00.000Z",
        dateModified: "2020-01-06T00:00:00.000Z",
        description: "Description of article 3",
        author: {
          "@type": "Person",
          name: "busshiDev",
          url: `${SITE_URL}`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}`,
        },
      },
    },
  ],
};

export const jsonldMovieCarousel = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: "1",
      item: {
        "@type": "Movie",
        name: "Article 1",
        title: "Article 1",
        url: `${SITE_URL}/article1`,
        image: `${SITE_URL}/images/logo.png`,
        dateCreated: "2022-06-01",
        director: {
          "@type": "Person",
          name: "me",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          author: {
            "@type": "Person",
            name: "me",
          },
          reviewBody: "First article #1",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "99",
          bestRating: "100",
          ratingCount: "83644",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "2",
      item: {
        "@type": "Movie",
        name: "Article 2",
        title: "Article 2",
        url: `${SITE_URL}/article2`,
        image: `${SITE_URL}/images/logo2.png`,
        dateCreated: "2022-06-02",
        director: {
          "@type": "Person",
          name: "busshiDev",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
          },
          author: {
            "@type": "Person",
            name: "busshiDev",
          },
          reviewBody: "Second article #2",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "81",
          bestRating: "100",
          ratingCount: "21985",
        },
      },
    },
    {
      "@type": "ListItem",
      position: "3",
      item: {
        "@type": "Movie",
        name: "Article 3",
        title: "Article 3",
        url: `${SITE_URL}/article3`,
        image: `${SITE_URL}/images/logo3.png`,
        dateCreated: "2022-05-29",
        director: {
          "@type": "Person",
          name: "busshi",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          author: {
            "@type": "Person",
            name: "busshi",
          },
          reviewBody: "Third article #3",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "96",
          bestRating: "100",
          ratingCount: "88211",
        },
      },
    },
  ],
};

export const jsonldCarouselOne = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Article 1",
  image: `${SITE_URL}/assets/logo.png`,
  publisher: {
    "@type": "Organization",
    name: "busshiDev",
    url: `${SITE_URL}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.svg`,
      width: "1200",
      height: "630",
    },
  },
  url: `${SITE_URL}/article1`,
  datePublished: "2020-01-06T00:00:00.000Z",
  dateCreated: "2020-01-06T00:00:00.000Z",
  dateModified: "2020-01-06T00:00:00.000Z",
  description: "Description of article 1",
  author: {
    "@type": "Person",
    name: "busshiDev",
    url: `${SITE_URL}`,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}`,
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    author: {
      "@type": "Person",
      name: "busshiDev",
    },
    reviewBody: "Third article #3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "96",
    bestRating: "100",
    ratingCount: "88211",
  },
};

export const jsonldCarouselTwo = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Article 2",
  image: `${SITE_URL}/assets/logo2.png`,
  publisher: {
    "@type": "Organization",
    name: "busshiDev",
    url: `${SITE_URL}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.svg`,
      width: "1200",
      height: "630",
    },
  },
  url: `${SITE_URL}/article2`,
  datePublished: "2020-01-06T00:00:00.000Z",
  dateCreated: "2020-01-06T00:00:00.000Z",
  dateModified: "2020-01-06T00:00:00.000Z",
  description: "Description of article 2",
  author: {
    "@type": "Person",
    name: "busshiDev",
    url: `${SITE_URL}`,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}`,
  },
};

export const jsonldCarouselThree = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Article 3",
  image: `${SITE_URL}/assets/logo3.png`,
  publisher: {
    "@type": "Organization",
    name: "busshiDev",
    url: `${SITE_URL}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.svg`,
      width: "1200",
      height: "630",
    },
  },
  url: `${SITE_URL}/article3`,
  datePublished: "2020-01-06T00:00:00.000Z",
  dateCreated: "2020-01-06T00:00:00.000Z",
  dateModified: "2020-01-06T00:00:00.000Z",
  description: "Description of article 3",
  author: {
    "@type": "Person",
    name: "busshiDev",
    url: `${SITE_URL}`,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}`,
  },
};

/*export const jsonldCarouselTwo = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Article headline",
  image: [`${SITE_URL}/images/logo.svg`],
  datePublished: "2022-06-01",
  dateModified: "2022-06-02",
  author: [
    {
      "@type": "Person",
      name: "busshiDev",
      url: `${SITE_URL}/article2`,
    },
  ],
  publisher: [
    {
      "@type": "Organization",
      name: "busshiDev",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo2.svg`,
      },
    },
    {
      "@type": "Organization",
      name: "busshiDev",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo2.svg`,
      },
    },
  ],
};

export const jsonldCarouselThree = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Article headline",
  image: [`${SITE_URL}/images/logo.svg`],
  datePublished: "2022-06-01",
  dateModified: "2022-06-02",
  author: [
    {
      "@type": "Person",
      name: "busshiDev",
      url: `${SITE_URL}/article3`,
    },
  ],
  publisher: [
    {
      "@type": "Organization",
      name: "busshiDev",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo3.svg`,
      },
    },
    {
      "@type": "Organization",
      name: "busshiDev",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo3.svg`,
      },
    },
  ],
};*/
/* Website */

/*<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org",
              "@type": "WebPage",
              "id": "${SITE_URL}",
              "name":"${SITE_TITLE[langId].content}",
              "breadcrumb":{
                "@type":"BreadcrumbList",
                "itemListElement":[
                {
                  "@type":"ListItem",
                  "position":"1",
                  "item":{
                    "@type":"WebSite",
                  "@id":"${SITE_URL}",
                  "name":"${SITE_TITLE[langId].content}"
                  }
                },
                {
                  "@type":"ListItem",
                  "position":"2",
                  "item":{
                    "@type":"WebPage",
                    "@id":"${SITE_URL}/posts/ft_transcendance_EN"",
                    "name":"Last project"
                  }
                },
                {
                  "@type":"ListItem",
                  "position":"3",
                  "item":{
                    "@type":"WebPage",
                    "@id":"${SITE_URL}/posts/yt2mp3_EN"",
                    "name":"My first React app"
                  }
                },
                {
                  "@type":"ListItem",
                  "position":"4",
                  "item":{
                    "@type":"WebPage",
                    "@id":"${SITE_URL}/posts/pentest_EN"",
                    "name":"Becoming a junior pentester"
                  }
                }
              ]
            }
          }`,
        }}
      />*/
