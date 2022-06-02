import type { NextPage } from "next";
import Meta from "../components/Meta";
import MetaFaq from "../components/MetaFaq";

const Faq: NextPage = () => {
  return (
    <div>
      <Meta />
      <MetaFaq />
      <div>Who am I?</div>
      <div>I am busshidev</div>
      <div>Phone</div>
      <div>06 12 34 56 78</div>
    </div>
  );
};

export default Faq;
