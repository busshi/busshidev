import { NextPage } from "next";
import styled from "styled-components";
import Layout from "./components/hoc/Layout";

const Contact: NextPage = () => {
  return (
    <Layout>
      <Page></Page>;
    </Layout>
  );
};

const Page = styled.div`
  min-height: 100vh;
`;

export default Contact;
