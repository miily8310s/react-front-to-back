import styles from "./Button.module.scss";

type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  version: "primary" | "secondary";
};

export const Button = ({
  version,
  type,
  disabled,
  ...props
}: ButtonPropsType) => {
  const btnColor = `btn-${version}`;
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.btn} ${styles[btnColor]}`}
    >
      {props.children}
    </button>
  );
};
