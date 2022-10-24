import { useState } from "react";

const UseInput = (initialValue) => {

  //features can be added to this custom hook for future implementations
  const [enteredValue, setEnteredValue] = useState(initialValue);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return {
    value: enteredValue,
    valueChangeHandler,
  };
};

export default UseInput;
