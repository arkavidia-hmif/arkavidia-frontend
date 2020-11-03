import * as React from "react";
import { useState } from "react";

export default (
  initialValue: string
): {
  value: string;
  setValue: (newValue: string) => void;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };
};
