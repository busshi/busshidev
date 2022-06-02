import type { NextPage } from "next";
import MetaOne from "../components/MetaOne";

const ArticleOne: NextPage = () => {
  return (
    <div>
      <div>
        <h1>Article 1</h1>
        <img src="/images/logo.svg" />
        <p>Created at 2022-06-01</p>
        <p>Directed, authored by busshiDev</p>
        <p>First article #1</p>
      </div>
    </div>
  );
};

export default ArticleOne;
