import styled from "styled-components";

/// any - потому что не настроил styled-components,
export const IconArrow: any = styled.div`
  height: 16px;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 35%;
  transform: ${(props: any) => props.isOpen && "rotate(180deg)"};
`;

export const Root = styled.div`
  width: 400px;
  min-height: 64px;
  box-sizing: border-box;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  margin-bottom: 4px;
`;

export const LanguagesBox = styled.div`
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  width: 100%;
  min-height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  position: relative;
`;

export const Language = styled.span`
  height: 24px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  margin-top: 7px;
  margin-bottom: 9px;
  margin-left: 4px;
  font-size: 12px;
  padding: 6px 12px 6px 12px;
  background: #f4f4f4;
  box-sizing: border-box;
`;

export const Icon = styled.div`
  height: 12px;
  cursor: pointer;
`;
