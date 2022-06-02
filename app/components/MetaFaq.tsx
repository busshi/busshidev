import Head from "next/head";
import { jsonldFaq } from "../lib/jsonld";

const Meta = () => {
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

export default Meta;
