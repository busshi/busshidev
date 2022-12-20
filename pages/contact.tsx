import styled from "styled-components";
import { mainLayout } from "./components/hoc/mainLayout";
import { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return <Page></Page>;
};

const Page = styled.div`
  min-height: 100vh;
`;

Contact.getLayout = mainLayout;

export default Contact;
