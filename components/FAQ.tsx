import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useThemeState } from "../providers/Theme.provider";
import { SectionTitle } from "./Testimonials";
import { useTranslation } from "../hooks/useTranslation";
import { linkifyAgenticFactory } from "../lib/linkify";

export const FAQ = () => {
  const { theme } = useThemeState();
  const t = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionTitle
        $margin="0 0.5rem var(--section-inner-gap) 0.5rem"
        style={{ color: theme.sectionTitleColor }}
      >
        {t.faq.sectionTitle}
      </SectionTitle>
      <List>
        {t.faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <ItemWrapper
              key={item.question}
              style={{ borderColor: theme.middleFontColor }}
            >
              <Question
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{ color: theme.fontColor }}
              >
                {item.question}
                <IoIosArrowDown
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform var(--transition-delay) ease",
                    flexShrink: 0,
                  }}
                />
              </Question>
              <AnswerGrid $isOpen={isOpen}>
                <AnswerInner>
                  <Answer style={{ color: theme.secondaryFontColor }}>
                    {linkifyAgenticFactory(item.answer)}
                  </Answer>
                </AnswerInner>
              </AnswerGrid>
            </ItemWrapper>
          );
        })}
      </List>
    </Section>
  );
};

const Section = styled.div`
  margin: 0 1.5rem var(--section-gap) 1.5rem;

  @media (max-width: 768px) {
    margin: 0 1rem var(--section-gap) 1rem;
  }
`;

const List = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  border-bottom: 1px solid;
  padding: 1.5rem 0;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-align: left;
  font-size: 1.05rem;
  font-weight: var(--middle-font-weight);
  line-height: var(--line-height);
`;

const AnswerGrid = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.$isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows var(--middle-transition-delay) ease;
`;

const AnswerInner = styled.div`
  overflow: hidden;
`;

const Answer = styled.div`
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.6;
  padding-top: 1rem;
  opacity: 0.9;
`;

export default FAQ;
