import { NextPage } from "next";
import styled from "styled-components";
import Layout from "./components/hoc/Layout";

const Contact: NextPage = () => {
  return (
    <Layout>
      <Page>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/busshidev/30min?hide_gdpr_banner=1"
          style={{ minWidth: 320, height: 630 }}
        ></div>
      </Page>
    </Layout>
  );
};

const Page = styled.div`
  min-height: 100vh;
`;

export default Contact;
