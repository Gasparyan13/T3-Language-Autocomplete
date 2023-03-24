import React from "react";
import { Banner, Content, Root, TitleLang } from "./MenuItem.styled";
import { CheckBox } from "../../../../common/ui/Checkbox";
import { Props } from "./MenuItem.types";

export const MenuItem: React.FC<Props> = ({
  children,
  title,
  isChecked,
  itemId,
}) => {
  return (
    <Root>
      <Content>
        <Banner>{children}</Banner>
        <TitleLang>{title}</TitleLang>
      </Content>
      <CheckBox itemId={itemId} isChecked={isChecked} />
    </Root>
  );
};
