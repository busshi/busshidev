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
      url: `${SITE_URL}/article1`,
    },
    {
      "@type": "ListItem",
      position: "2",
      url: `${SITE_URL}/article2`,
    },
    {
      "@type": "ListItem",
      position: "3",
      url: `${SITE_URL}/article3`,
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
