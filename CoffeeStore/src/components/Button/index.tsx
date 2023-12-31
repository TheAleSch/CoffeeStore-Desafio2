import { ReactNode } from "react";
import { ButtonContainer, ButtonVariant } from "./styles";

interface ButtonProps {
  children: ReactNode | string;
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", children }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
}
