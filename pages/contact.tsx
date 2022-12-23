import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { RxCrossCircled } from "react-icons/rx";
import { Contacts } from "./components/Contacts";

const Contact: NextPage = () => {
  const [calendlyVisible, setCalendlyVisible] = useState(false);

  return (
    <Page>
      {calendlyVisible ? (
        <Calendar>
          <RedCross onClick={() => setCalendlyVisible(false)}>
            <RxCrossCircled size={26} />
          </RedCross>
          <iframe
            width="100%"
            height="100%"
            title={"Schedule an interview"}
            src="https://calendly.com/busshidev/30min"
          ></iframe>
        </Calendar>
      ) : (
        <Contacts setCalendlyVisible={setCalendlyVisible} />
      )}
    </Page>
  );
};

const Page = styled.div`
  min-height: 90vh;
  width: 100vw;
  margin: 1rem 0 1rem 0;
  display: flex;
  justify-content: center;
`;

const Calendar = styled.div`
  width: 620px;
  height: 920px;
  display: flex;
  flexdirection: column;
  position: relative;

  @media (max-width: 768px) {
    width: 420px;
    height: 900px;
  }
`;

const RedCross = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  cursor: pointer;
`;

export default Contact;
