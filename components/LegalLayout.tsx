import { ReactNode } from "react";
import styled from "styled-components";
import { useThemeState } from "../providers/Theme.provider";

export const LegalLayout = ({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) => {
  const { theme } = useThemeState();

  return (
    <Container>
      <Title style={{ color: theme.fontColor }}>{title}</Title>
      <UpdatedAt style={{ color: theme.middleFontColor }}>
        {updatedAt}
      </UpdatedAt>
      <Content style={{ color: theme.secondaryFontColor }}>
        {children}
      </Content>
    </Container>
  );
};

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const { theme } = useThemeState();
  return (
    <SectionWrapper>
      <SectionTitle style={{ color: theme.fontColor }}>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

// Marks a value the site owner must fill in with real, verified information
// (SIRET, registered address, hosting provider...) — never invent these.
export const Placeholder = ({ children }: { children: ReactNode }) => (
  <PlaceholderSpan>{children}</PlaceholderSpan>
);

const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: var(--section-gap) 1.5rem var(--section-gap) 1.5rem;

  @media (max-width: 768px) {
    padding: var(--section-gap) 1rem var(--section-gap) 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const UpdatedAt = styled.div`
  font-size: 0.85rem;
  margin-bottom: var(--section-inner-gap);
`;

const Content = styled.div`
  text-align: left;
  line-height: 1.7;
  font-size: 0.95rem;

  a {
    color: inherit;
    text-decoration: underline;
  }

  ul {
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const SectionWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: var(--font-weight);
  margin: 0 0 1rem 0;
`;

const PlaceholderSpan = styled.span`
  border-bottom: 1px dashed var(--gradient-boost-start);
  color: var(--gradient-boost-start);
  font-weight: var(--middle-font-weight);
`;

export default LegalLayout;
