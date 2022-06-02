import type { NextPage } from "next";
import Meta from "../components/Meta";

const ArticleThree: NextPage = () => {
  return (
    <div>
      <Meta />
      <div>
        <h1>Article 1</h1>
        <img src="/images/logo.svg" />
        <p>Created at 2022-06-01</p>
        <p>Directed, authored by busshiDev</p>
        <p>First article #1</p>
      </div>
      <div>
        <h1>Article 2</h1>
        <img src="/images/logo.svg" />
        <p>Created at 2022-06-02</p>
        <p>Directed, authored by busshiDev</p>
        <p>Second article #2</p>
      </div>
      <div>
        <h1>Article 3</h1>
        <img src="/images/logo.svg" />
        <p>Created at 2022-05-29</p>
        <p>Directed, authored by busshiDev</p>
        <p>Third article #3</p>
      </div>
    </div>
  );
};

export default ArticleThree;
