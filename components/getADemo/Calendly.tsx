import { RxCrossCircled } from "react-icons/rx";
import styled from "styled-components";
import { useCalendlyVisibleState } from "../../providers/CalendlyVisible.provider";

export const Calendly = () => {
  const { setIsCalendlyVisible } = useCalendlyVisibleState();

  return (
    <Container>
      <Calendar>
        <Cross onClick={() => setIsCalendlyVisible(false)}>
          <RxCrossCircled size={26} color={"var(--middle-font-color)"} />
        </Cross>
        <iframe
          width="100%"
          height="100%"
          title={"Schedule an interview"}
          src="https://calendly.com/busshidev/30min"
        ></iframe>
      </Calendar>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Calendar = styled.div`
  width: 620px;
  height: 920px;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    width: 420px;
    height: 900px;
  }
`;

const Cross = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  cursor: pointer;
`;

export default Calendly;
