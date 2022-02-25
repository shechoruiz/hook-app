import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInptutChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInptutChange];
};

export default useForm;
