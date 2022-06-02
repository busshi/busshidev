import type { NextPage } from "next";
import { Head } from "next/document";
import Meta from "../components/Meta";
import { jsonldCarousel } from "../lib/jsonld";

const ArticleThree: NextPage = () => {
  return (
    <div>
      <Meta />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonldCarousel),
          }}
        />
      </Head>
      <div>
        <a href="/article1">
          <h1>Article 1</h1>
        </a>
        <img src="/images/logo.svg" />
        <p>Created at 2022-06-01</p>
        <p>Directed, authored by me</p>
        <p>First article #1</p>
      </div>
      <div>
        <a href="/article2">
          <h1>Article 2</h1>
        </a>
        <img src="/images/logo2.svg" />
        <p>Created at 2022-06-02</p>
        <p>Directed, authored by busshiDev</p>
        <p>Second article #2</p>
      </div>
      <div>
        <a href="/article3">
          <h1>Article 3</h1>
        </a>
        <img src="/images/logo3.svg" />
        <p>Created at 2022-05-29</p>
        <p>Directed, authored by busshi</p>
        <p>Third article #3</p>
      </div>
    </div>
  );
};

export default ArticleThree;
