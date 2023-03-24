import styled from "styled-components";
import { theme } from "../../providers/theme";

export const Root = styled.div`
  width: 368px;
  height: 56px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 368px;
  height: 40px;
  background-color: ${theme.colors.grey};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 16px;
  left: 16px;
  padding-left: 12px;
  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 36px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;
  &::placeholder {
    color: ${theme.colors.lightGrey};
  }
`;
