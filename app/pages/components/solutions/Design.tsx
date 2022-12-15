import styled from "styled-components";

export const Design = () => {
  return (
    <SolutionContainer>
      <TextBox>Using online collaborative tools</TextBox>
      <TextBox>Create website maquette</TextBox>
      <TextBox>Personalization</TextBox>
    </SolutionContainer>
  );
};

export const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  gap: 1rem;
`;

export const TextBox = styled.div`
  color: var(--secondary-dark-color);
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
