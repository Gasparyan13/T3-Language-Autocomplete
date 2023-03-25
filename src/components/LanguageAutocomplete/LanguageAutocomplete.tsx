import React, { useCallback, useState } from "react";
import {
  Label,
  Root,
  LanguagesBox,
  Language,
  Icon,
  IconArrow,
} from "./LanguageAutocomplete.styled";
import { Props } from "./LanguageAutocomplete.types";
import { CloseIcon } from "../../common/IconComponents/CloseIcon";
import { ArrowIcon } from "../../common/IconComponents/ArrowIcon";
import { CountryMenu } from "./components/CountryMenu";
import { RusFlagIcon } from "../../common/IconComponents/RusFlagIcon";
import EngFlagIcon from "../../common/IconComponents/EngFlagIcon";
import { EspFlagIcon } from "../../common/IconComponents/EspFlagIcon";
import { GermFlagIcon } from "../../common/IconComponents/GermFlagIcon";
import { ItalyFlagIcon } from "../../common/IconComponents/ItalyFlagIcon";
import { PolandFlagIcon } from "../../common/IconComponents/PolandFlagIcon";
import { FieldLanguageProvider } from "./containers/FieldLanguageCtx";

export const LanguageAutocomplete: React.FC<Props> = ({ label }) => {
  const [isOptions, setHisOption] = useState<boolean>(false);
  const [languages, setLanguages] = useState([
    { id: 1, flag: <RusFlagIcon />, title: "Русский", checked: false },
    { id: 2, flag: <EngFlagIcon />, title: "Английский", checked: false },
    { id: 3, flag: <EspFlagIcon />, title: "Испанский", checked: false },
    { id: 4, flag: <GermFlagIcon />, title: "Немецкий", checked: false },
    { id: 5, flag: <ItalyFlagIcon />, title: "Итальянский", checked: false },
    { id: 6, flag: <PolandFlagIcon />, title: "Польский", checked: false },
  ]);

  const handleOpenMenu = useCallback(() => {
    setHisOption((prev) => !prev);
  }, []);

  const getCheckedLanguages = languages.filter((lang) => lang.checked);

  const handleDeleteLang = useCallback(
    (id: number) => {
      setLanguages(
        languages.map((lang) => {
          if (lang.id === id) {
            return { ...lang, checked: !lang.checked };
          }
          return lang;
        })
      );
    },
    [languages]
  );

  return (
    <FieldLanguageProvider value={{ languages, setLanguages }}>
      <Root>
        <Label>{label}</Label>
        <LanguagesBox>
          {getCheckedLanguages.map((lang, index) => {
            return (
              <Language key={lang.id}>
                {lang.title}
                <Icon onClick={() => handleDeleteLang(lang.id)}>
                  <CloseIcon />
                </Icon>
              </Language>
            );
          })}
          <IconArrow onClick={handleOpenMenu} isOpen={!isOptions}>
            <ArrowIcon />
          </IconArrow>
        </LanguagesBox>
        {isOptions && <CountryMenu />}
      </Root>
    </FieldLanguageProvider>
  );
};
