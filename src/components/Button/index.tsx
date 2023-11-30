import { BUTTON_TYPE } from "../../types";

type ButtonProps = {
  content: string;
  onClick?: () => void;
  classes: string;
  type?: BUTTON_TYPE.BUTTON | BUTTON_TYPE.SUBMIT | BUTTON_TYPE.RESET;
  disabled?: boolean;
};

export default function Button({
  content,
  onClick,
  classes,
  type = BUTTON_TYPE.BUTTON,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
