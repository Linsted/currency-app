type ButtonProps = {
  content: string;
  onClick?: () => void;
  classes: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  content,
  onClick,
  classes,
  type = "button",
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
