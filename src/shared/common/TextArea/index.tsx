import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { IInputProps } from "../types";

const TextArea = ({ name, placeholder, onChange, t }: IInputProps) => (
  <StyledContainer>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledTextArea
      placeholder={t(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default withTranslation()(TextArea);