import styled, { css } from "styled-components";

export type ButtonVariant = "icon" | "primary" | "secondary" | "location";
interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 2.875rem;

  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  border: 0;
  padding: 0.125rem 0.5rem;
  height: 2.875rem;
  min-width: 8.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: ease;

  ${(props) => props.variant === "primary" && css``}
  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: ${(props) => props.theme.baseButton};
      color: ${(props) => props.theme.baseText};

      padding: 0 0.5rem;
      height: 2rem;
      min-width: fit-content;
      font-size: 0.75rem;
      gap: 0.25rem;

      & svg {
        fill: ${(props) => props.theme.purple};
        height: 1rem;
        width: 1rem;
        }

        &:hover {
          background-color: ${(props) => props.theme.baseHover};
          color: ${(props) => props.theme.baseSubtitle}
          & svg {
            fill: ${(props) => props.theme.purpleDark};
          }
        }
      }
    `}
  ${(props) =>
    props.variant === "location" &&
    css`
      background-color: ${(props) => props.theme.purpleLight};
      color: ${(props) => props.theme.purpleDark};
      & svg {
        fill: ${(props) => props.theme.purple};
      }
    `}
  ${(props) =>
    props.variant === "icon" &&
    css`
      min-width: inherit;
      background-color: ${(props) => props.theme.purpleDark};
      & svg {
        fill: ${(props) => props.theme.white};
        width: 22px;
        height: 22px;
      }
      &:hover {
        background-color: ${(props) => props.theme.purple};
      }
    `}
`;
