import { ButtonContainer, ButtonVariant } from "./styles";

interface ButtonProps {
  children: string;
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", children }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
}
