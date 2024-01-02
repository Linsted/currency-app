import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./ConverterForm.module.css";
import {
  SELECTOR,
  INPUT_TYPES,
  INPUT_NAME,
  INPUT_PLACEHOLDER,
  BUTTON_CONTENT,
} from "./constants";

import { BUTTON_TYPE } from "../../types";
import CurrencySelect from "../CurrencySelect";
import useConverterForm from "./useConverterForm";

export default function ConverterForm() {
  const { inputValue, handleSubmit, currencies } = useConverterForm();

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <div className={styles.wrapper}>
        <Form.Control
          name={INPUT_NAME}
          type={INPUT_TYPES.NUMBER}
          placeholder={INPUT_PLACEHOLDER}
          className={styles.input}
        />
        <CurrencySelect currencies={currencies} name={SELECTOR.FIRST_NAME} />
        <Button type={BUTTON_TYPE.SUBMIT} variant="primary">
          {BUTTON_CONTENT}
        </Button>
        <CurrencySelect currencies={currencies} name={SELECTOR.SECOND_NAME} />
        <Form.Control
          type={INPUT_TYPES.TEXT}
          value={inputValue}
          disabled
          readOnly
        />
      </div>
    </Form>
  );
}
