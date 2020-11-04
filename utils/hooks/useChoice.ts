import { useState } from "react";

const useChoice = (
  initialValue: string
): {
  value: string;
  setValue: (newValue: string) => void;
} => {
  const [value, setValue] = useState<string>(initialValue);
  return {
    value,
    setValue,
  };
};

export default useChoice;
