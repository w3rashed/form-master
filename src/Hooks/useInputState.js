import { useState } from "react";

const useInputState = (defultValue = "") => {
  const [value, setValue] = useState(defultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleChange];
};
export default useInputState;
