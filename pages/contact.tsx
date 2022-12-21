import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { RxCrossCircled } from "react-icons/rx";

const Contact: NextPage = () => {
  const [calendlyVisible, setCalendlyVisible] = useState(true);

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
            src="https://calendly.com/busshidev/30min?hide_gdpr_banner=1&background_color=0"
          ></iframe>
        </Calendar>
      ) : (
        <div
          onClick={() => setCalendlyVisible(true)}
          style={{ width: "1000px", height: "1000px", textAlign: "center" }}
        >
          CALENDAR
        </div>
      )}
    </Page>
  );
};

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Calendar = styled.div`
  width: 420px;
  height: 900px;
  display: flex;
  flexdirection: column;
  position: relative;
`;

const RedCross = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  cursor: pointer;
`;

export default Contact;
