import Head from "next/head";
import { jsonldFaq } from "../lib/jsonld";

const MetaFaq = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonldFaq),
        }}
      />
    </Head>
  );
};

export default MetaFaq;
