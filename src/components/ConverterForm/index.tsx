import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";

import styles from "./ConverterForm.module.css";

import { CurrencyExchangeRate } from "../../types";
import CurrencySelect from "../CurrencySelect";
import { getExchangeRate, convertCurrency } from "../../utils/helperFunctions";

type ConverterFormProps = { currencies: CurrencyExchangeRate[] };

export default function ConverterForm({ currencies }: ConverterFormProps) {
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
      return toast.error("Please, enter valid data!");
    }

    setInputValue(finalValue);
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <div className={styles.wrapper}>
        <Form.Control
          name="input"
          type="number"
          placeholder="Enter digit"
          className={styles.input}
        />
        <CurrencySelect currencies={currencies} name="firstSelect" />
        <Button data-testid="submit-button" type="submit" variant="primary">
          ⇆
        </Button>
        <CurrencySelect currencies={currencies} name="secondSelect" />
        <Form.Control
          type="text"
          value={inputValue}
          placeholder="..."
          disabled
          readOnly
        />
      </div>
    </Form>
  );
}
