import { NextPage } from "next";
import styled from "styled-components";
import Layout from "./components/hoc/Layout";

const Contact: NextPage = () => {
  return (
    <Layout>
      <Page>
        <Calendar
          className="calendly-inline-widget"
          data-url="https://calendly.com/busshidev/30min?hide_gdpr_banner=1"
        ></Calendar>
      </Page>
    </Layout>
  );
};

const Page = styled.div`
  min-height: 100vh;
`;

const Calendar = styled.div`
  min-width: 320px;
  height: 630px;
`;

export default Contact;
