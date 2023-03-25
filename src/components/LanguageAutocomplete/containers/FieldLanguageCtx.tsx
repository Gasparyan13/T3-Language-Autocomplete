import { createCtx } from "../../../common/helpers/CreateCtx";
import React from "react";

type Language = {
  id: number;
  title: string;
  flag: React.ReactElement;
  checked: boolean;
};

export const [useFieldLanguageCtx, FieldLanguageProvider] = createCtx<{
  languages: Language[];
  setLanguages: (languages: Language[]) => void;
}>();
