import { StyledButton } from "./styles";
import { IButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
}: IButtonProps) => (
  <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);