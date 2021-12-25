type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  version: string;
};

export const Button = ({
  version,
  type,
  disabled,
  ...props
}: ButtonPropsType) => {
  return (
    <button type={type} disabled={disabled} className={`btn btn-${version}`}>
      {props.children}
    </button>
  );
};
