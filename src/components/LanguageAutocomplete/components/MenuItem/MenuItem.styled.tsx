import styled from "styled-components";
import { theme } from "../../../../common/providers/theme";

export const Root = styled.div`
  width: 400px;
  height: 52px;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme.colors.grey};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export const Banner = styled.div``;
export const TitleLang = styled.div``;
