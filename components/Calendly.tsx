import { RxCrossCircled } from "react-icons/rx";
import styled from "styled-components";
import { useCalendlyVisibleState } from "../providers/CalendlyVisible";

export const Calendly = () => {
  const { setIsCalendlyVisible } = useCalendlyVisibleState();

  return (
    <Calendar>
      <Cross onClick={() => setIsCalendlyVisible(false)}>
        <RxCrossCircled size={26} />
      </Cross>
      <iframe
        width="100%"
        height="100%"
        title={"Schedule an interview"}
        src="https://calendly.com/busshidev/30min"
      ></iframe>
    </Calendar>
  );
};

const Calendar = styled.div`
  width: 620px;
  height: 920px;
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