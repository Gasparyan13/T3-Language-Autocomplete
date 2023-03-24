import styled from "styled-components";
import { theme } from "../../providers/theme";

export const StyledCheckBox = styled.input`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.lightGrey};
  border-radius: 4px;
  appearance: none;
  &:checked {
    background-image: url("/img.png");
    background-repeat: no-repeat;
    background-color: ${theme.colors.white};
    background-position: 50%;
    background-size: 24px;
    border: none;
  }
`;
