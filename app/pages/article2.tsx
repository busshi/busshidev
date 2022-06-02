import type { NextPage } from "next";
import Meta from "../components/Meta";

const ArticleTwo: NextPage = () => {
  return (
    <div>
      <Meta />
      <div>
        <h1>Article 2</h1>
        <img src="/images/logo.svg" />
        <p>Created at 2022-06-02</p>
        <p>Directed, authored by busshiDev</p>
        <p>Second article #2</p>
      </div>
    </div>
  );
};

export default ArticleTwo;
