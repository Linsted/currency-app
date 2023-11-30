import { useRef, useState } from "react";

import styles from "./CellForm.module.css";

import Button from "../Button";
import { checkIsDataValid } from "../../utils/helperFunctions";
import { DataToEdit } from "../../types";
import { setUpdateCurrencySelector } from "../../store/currencies/selectors";
import { useCurrenciesStore } from "../../store/currencies/useCurrenciesStore";

type CellFormProps = {
  content: string;
  dataToEdit: DataToEdit;
};

export default function CellForm({ content, dataToEdit }: CellFormProps) {
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

  return (
    <form className={styles.form} onSubmit={(event) => handleConfirm(event)}>
      <input
        onChange={(event) => handleChange(event)}
        name="currency"
        autoComplete="off"
        onBlur={(event) => handleBlur(event)}
        ref={inputRef}
        className={styles.textarea}
        defaultValue={finalContent}
        disabled={isDisabled}
        maxLength={9}
      />
      {isDisabled && (
        <Button onClick={handleEdit} content="🖊" classes={styles.button} />
      )}
      {!isDisabled && (
        <div>
          <Button
            disabled={!isValid}
            content="✓"
            classes={styles.buttonGroup}
            type="submit"
          />
          <Button
            onClick={handleCancel}
            content="✗"
            classes={styles.buttonGroup}
          />
        </div>
      )}
    </form>
  );
}
