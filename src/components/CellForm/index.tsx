import styles from "./CellForm.module.css";
import useCellForm from "./useCellForm";
import { BUTTON_CONTENT, INPUT_NAME } from "./constants";

import Button from "../Button";
import { BUTTON_TYPE, DataToEdit } from "../../types";

export type CellFormProps = {
  content: string;
  dataToEdit: DataToEdit;
};

export default function CellForm({ content, dataToEdit }: CellFormProps) {
  const {
    inputRef,
    handleConfirm,
    handleChange,
    handleBlur,
    handleCancel,
    handleEdit,
    isValid,
    isDisabled,
    finalContent,
  } = useCellForm({
    content,
    dataToEdit,
  });

  return (
    <form className={styles.form} onSubmit={(event) => handleConfirm(event)}>
      <input
        onChange={(event) => handleChange(event)}
        name={INPUT_NAME}
        autoComplete="off"
        onBlur={(event) => handleBlur(event)}
        ref={inputRef}
        className={styles.textarea}
        defaultValue={finalContent}
        disabled={isDisabled}
        maxLength={9}
      />
      {isDisabled && (
        <Button
          onClick={handleEdit}
          content={BUTTON_CONTENT.EDIT}
          classes={styles.button}
        />
      )}
      {!isDisabled && (
        <div>
          <Button
            disabled={!isValid}
            content={BUTTON_CONTENT.CONFIRM}
            classes={styles.buttonGroup}
            type={BUTTON_TYPE.SUBMIT}
          />
          <Button
            onClick={handleCancel}
            content={BUTTON_CONTENT.CANCEL}
            classes={styles.buttonGroup}
          />
        </div>
      )}
    </form>
  );
}
