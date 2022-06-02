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
        "@type": "Movie",
        name: "Article 1",
        url: `${SITE_URL}/article1`,
        image: `${SITE_URL}/images/logo.svg`,
        dateCreated: "2022-06-01",
        director: {
          "@type": "Person",
          name: "busshiDev",
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
        url: `${SITE_URL}/article2`,
        image: `${SITE_URL}/images/logo.svg`,
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
        url: `${SITE_URL}/article3`,
        image: `${SITE_URL}/images/logo.svg`,
        dateCreated: "2022-05-29",
        director: {
          "@type": "Person",
          name: "busshiDev",
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
      },
    },
  ],
};

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
