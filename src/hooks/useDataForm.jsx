import { validationForm } from "@/utils/validationFom";
import React, { useState } from "react";

const useDataForm = (initialState) => {
  const [dataForm, setDataForm] = useState(initialState);
  const [error, setError] = useState({});

  const handleChangeDataForm = (e) => {
    const { value, name } = e.target;
    setDataForm((prevData) => ({ ...prevData, [name]: value }));
    const errors = validationForm(name, value);
    setError((prev) => ({ ...prev, ...errors }));
  };

  return { dataForm, error, handleChangeDataForm };
};

export default useDataForm;
