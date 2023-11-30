import { useRef, useState } from "react";

import { DataToEdit } from "../../types";
import { useCurrenciesStore } from "../../store/currencies/useCurrenciesStore";
import { setUpdateCurrencySelector } from "../../store/currencies/selectors";
import { checkIsDataValid } from "../../utils/helperFunctions";

type UseCellFormProps = {
  content: string;
  dataToEdit: DataToEdit;
};

export default function useCellForm({ content, dataToEdit }: UseCellFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDisabled, setIsDisabled] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [finalContent, setFinalContent] = useState(content);

  const updateCurrency = useCurrenciesStore(setUpdateCurrencySelector);

  const handleEdit = async () => {
    await new Promise<void>((resolve) => {
      setIsDisabled(false);
      setIsValid(true);
      resolve();
    });

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCancel = () => {
    if (inputRef.current) {
      inputRef.current.value = finalContent;
    }

    setIsDisabled(true);
    setFinalContent(finalContent);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (event.relatedTarget === null) {
      event.target.focus();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (checkIsDataValid({ initialNumber: finalContent, newNumber: value })) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleConfirm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const { value } = formElement.currency;

    if (checkIsDataValid({ initialNumber: finalContent, newNumber: value })) {
      setIsDisabled(true);
      setFinalContent(value);

      updateCurrency({ ...dataToEdit, newData: value });
    }
  };

  return {
    handleConfirm,
    handleChange,
    handleBlur,
    handleCancel,
    handleEdit,
    isValid,
    isDisabled,
    inputRef,
    finalContent,
  };
}
