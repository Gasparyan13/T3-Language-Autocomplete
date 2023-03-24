import React from "react";

export type Props = {
  isChecked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  itemId: number;
};
