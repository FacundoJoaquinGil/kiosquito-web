import { ChangeEvent, useState } from "react";

export const useForm = <T extends Record<string, unknown>>(initialForm: T) => {
  const [valuesForm, setValuesForm] = useState<T>(initialForm);

  const onInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = target;

    setValuesForm((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const onResetForm = () => {
    setValuesForm(initialForm);
  };

  return {
    ...valuesForm,
    valuesForm,
    onInputChange,
    onResetForm,
  };
};