import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";

const Contact: NextPage = () => {
  const [calendlyVisible, setCalendlyVisible] = useState(false);

  return (
    <Page>
      {calendlyVisible ? (
        <div
          style={{
            width: "420px",
            height: "900px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            title={"Schedule an interview"}
            src="https://calendly.com/busshidev/30min?hide_gdpr_banner=1&background_color=0"
          ></iframe>
        </div>
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

export default Contact;
