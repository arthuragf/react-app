interface buttonProps {
  alertType?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  btnText: string;
  onClick: () => void;
}

const Button = ({ alertType = "primary", btnText, onClick }: buttonProps) => {
  const class_name = "btn btn-" + alertType;
  return (
    <button type="button" className={class_name} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
