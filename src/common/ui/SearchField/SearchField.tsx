import React from "react";
import { Root, SearchContainer, SearchInput } from "./SearchField.styled";
import { SearchIcon } from "../../IconComponents/SearchIcon";
import { Props } from "./SearchField.types";

export const SearchField: React.FC<Props> = ({
  placeholder,
  onChange,
  value,
}) => {
  return (
    <Root>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </SearchContainer>
    </Root>
  );
};
