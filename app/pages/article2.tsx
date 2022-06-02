import type { NextPage } from "next";
import MetaTwo from "../components/MetaTwo";

const ArticleTwo: NextPage = () => {
  return (
    <div>
      <MetaTwo />
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
