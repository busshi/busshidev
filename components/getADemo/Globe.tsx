import Script from "next/script";
import { useState } from "react";
import styled from "styled-components";

const Globe = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState(0);

  return (
    <GlobeContainer>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.js"
        onLoad={() => setScriptsLoaded((prev) => prev + 1)}
      />
      <Script
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/617753/ThreeOrbitControls.js"
        onLoad={() => setScriptsLoaded((prev) => prev + 1)}
      />
      <Script
        src="https://rawgit.com/spite/THREE.MeshLine/master/src/THREE.MeshLine.js"
        onLoad={() => setScriptsLoaded((prev) => prev + 1)}
      />
      {scriptsLoaded === 3 && <Script src="./scripts/globe.js" />}

      <div className="globe js-globe">
        <div className="svg-wrapper"></div>

        <ul className="globe-list js-list"></ul>

        <canvas className="globe-canvas js-canvas"></canvas>
      </div>
    </GlobeContainer>
  );
};

const GlobeContainer = styled.div`
  position: absolute;
  z-index: 0;
`;

export default Globe;
