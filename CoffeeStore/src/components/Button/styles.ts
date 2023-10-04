import styled from "styled-components";

export type ButtonVariant = "icon" | "primary" | "secondary";
interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 2.875rem;
  background-color: ${(props) => props.theme["yellow"]};
  border-radius: 6px;
  border: 0;
  padding: 0.75rem 0.5rem;
  height: 2.875rem;
  min-width: 8.25rem;
  &:hover {
    background-color: ${(props) => props.theme["yellowDark"]};
  }
`;
