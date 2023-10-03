import styled from "styled-components";

export type ButtonVariant = "icon" | "primary" | "secondary";
interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 100px;
`;
