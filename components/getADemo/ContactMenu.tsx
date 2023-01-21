import { RxCrossCircled } from "react-icons/rx";
import styled from "styled-components";
import { useCalendlyVisibleState } from "../../providers/CalendlyVisible.provider";
import ContactItems from "./ContactItems";

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
          src="https://calendly.com/busshidev/30min"
        ></iframe>
      </Calendar>
    </Container>
  ) : (
    <Page>
      <ContactItems />
    </Page>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
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
