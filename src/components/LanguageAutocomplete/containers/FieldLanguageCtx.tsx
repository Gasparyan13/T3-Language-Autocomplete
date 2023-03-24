import { createCtx } from "../../../common/helpers/CreateCtx";

export const [useFieldLanguageCtx, FieldLanguageProvider] = createCtx<{
  languages: any[];
  setLanguages: (languages: any) => void;
}>();
