import React, { useCallback, useState } from "react";
import { Root } from "./CountryMenu.styled";
import { SearchField } from "../../../../common/ui/SearchField";
import { MenuItem } from "../MenuItem/MenuItem";
import { useFieldLanguageCtx } from "../../containers/FieldLanguageCtx";

export const CountryMenu: React.FC = () => {
  const { languages } = useFieldLanguageCtx();

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const filteredCountries = languages?.filter((value) => {
    return value?.title?.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Root>
      <SearchField
        placeholder="Поиск"
        onChange={handleSearchChange}
        value={searchValue}
      />
      {filteredCountries?.map((lang) => {
        return (
          <MenuItem
            key={lang.id}
            title={lang.title}
            isChecked={lang.checked}
            itemId={lang.id}
          >
            {lang.flag}
          </MenuItem>
        );
      })}
    </Root>
  );
};
