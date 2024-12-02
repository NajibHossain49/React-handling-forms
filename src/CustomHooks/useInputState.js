import { useState } from "react";

const useInputState = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return [value, handleInputChange];
};

export default useInputState;