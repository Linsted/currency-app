import { useState } from "react";
import toast from "react-hot-toast";

import { ERROR_TEXT } from "./constants";

import { getExchangeRate, convertCurrency } from "../../utils/helperFunctions";

export default function useConverterForm() {
  const [inputValue, setInputValue] = useState(" ");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const firstCurrencyRate = formElement.firstSelect.value;
    const secondCurrencyRate = formElement.secondSelect.value;
    const inputValue = formElement.input.value;

    const exchangeRate = getExchangeRate({
      firstCurrencyRate,
      secondCurrencyRate,
    });

    const finalValue = convertCurrency({
      amount: String(inputValue),
      exchangeRate,
    });

    if (!finalValue) {
      return toast.error(ERROR_TEXT);
    }

    setInputValue(finalValue);
  };

  return { inputValue, handleSubmit };
}
