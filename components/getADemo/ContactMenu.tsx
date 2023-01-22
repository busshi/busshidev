import Script from "next/script";
import { useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import styled from "styled-components";
import { CALENDLY_URL } from "../../lib/constants";
import { useCalendlyVisibleState } from "../../providers/CalendlyVisible.provider";
import ContactItems from "./ContactItems";

const Globe = () => {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "./globe.js";
    // document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.js";
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/617753/ThreeOrbitControls.js";
    document.head.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src =
      "https://rawgit.com/spite/THREE.MeshLine/master/src/THREE.MeshLine.js";
    document.head.appendChild(script4);

    return () => {
      // clean up the script when the component in unmounted
      //  document.head.removeChild(script);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      document.head.removeChild(script4);
    };
  }, []);

  return (
    <GlobeContainer>
      <div className="globe js-globe">
        <div className="svg-wrapper"></div>

        <ul className="globe-list js-list"></ul>

        <canvas className="globe-canvas js-canvas"></canvas>
        <Script src="./scripts/globe.js"></Script>
      </div>
    </GlobeContainer>
  );
};

const ContactMenu = () => {
  const { isCalendlyVisible, setIsCalendlyVisible } = useCalendlyVisibleState();

  return isCalendlyVisible ? (
    <Container>
      <Calendar>
        <Cross onClick={() => setIsCalendlyVisible(false)}>
          <RxCrossCircled size={26} />
        </Cross>
        <iframe
          width="100%"
          height="100%"
          title={"Schedule an interview"}
          src={CALENDLY_URL}
        ></iframe>
      </Calendar>
    </Container>
  ) : (
    <Page>
      <Globe />
      <ContactItems />
    </Page>
  );
};

const GlobeContainer = styled.div`
  position: absolute;
  z-index: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Page = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Calendar = styled.div`
  width: 620px;
  height: 920px;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: 420px;
    height: 900px;
  }
`;

const Cross = styled.div`
  position: absolute;
  cursor: pointer;
  top: 12px;
  left: 12px;
  cursor: pointer;
  color: var(--middle-font-color);
`;

export default ContactMenu;
