import Script from "next/script";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Globe = () => {
  return (
    <Container className="js-globe" id="globe">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.js" />
      <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/617753/ThreeOrbitControls.js" />
      <Script src="https://rawgit.com/spite/THREE.MeshLine/master/src/THREE.MeshLine.js" />
      <Script src="./scripts/globe.js" />

      <div className="svg-wrapper"></div>

      <ul className="globe-list"></ul>

      <canvas className="globe-canvas js-canvas"></canvas>
    </Container>
  );
};

const Container = styled.div`
  z-index: 0;
  top: 50%;

  @media (max-width: 768px) {
    top: 0;
  }

  transform: scale(1.8);
  position: absolute;

  @media (max-width: 768px) {
    transform: scale(1);
  }
`;

export default Globe;
