import React, { useCallback } from "react";
import { StyledCheckBox } from "./Checkbox.styled";
import { useFieldLanguageCtx } from "../../../components/LanguageAutocomplete/containers/FieldLanguageCtx";
import { Props } from "./Checkbox.types";

export const CheckBox: React.FC<Props> = ({ isChecked, itemId }) => {
  const { languages, setLanguages } = useFieldLanguageCtx();

  const handleChangeChecked = useCallback(() => {
    setLanguages(
      languages.map((lang) => {
        if (lang.id === itemId) {
          return { ...lang, checked: !lang.checked };
        }
        return lang;
      })
    );
  }, [itemId, languages, setLanguages]);

  return (
    <StyledCheckBox
      type="checkbox"
      defaultChecked
      checked={isChecked}
      onChange={handleChangeChecked}
    />
  );
};
