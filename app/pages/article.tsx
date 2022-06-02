import type { NextPage } from "next";
import Link from "next/link";
import MetaArticle from "../components/MetaArticle";

const Article: NextPage = () => {
  return (
    <div>
      <MetaArticle />
      <div>
        <Link href="/article1">
          <a>
            <h1>Article 1</h1>
          </a>
        </Link>
        <img src="/images/logo.svg" />
        <p>Created at 2022-06-01</p>
        <p>Directed, authored by me</p>
        <p>First article #1</p>
      </div>
      <div>
        <Link href="/article2">
          <a>
            <h1>Article 2</h1>
          </a>
        </Link>
        <img src="/images/logo2.svg" />
        <p>Created at 2022-06-02</p>
        <p>Directed, authored by busshiDev</p>
        <p>Second article #2</p>
      </div>
      <div>
        <Link href="/article3">
          <a>
            <h1>Article 3</h1>
          </a>
        </Link>
        <img src="/images/logo3.svg" />
        <p>Created at 2022-05-29</p>
        <p>Directed, authored by busshi</p>
        <p>Third article #3</p>
      </div>
    </div>
  );
};

export default Article;
