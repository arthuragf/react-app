interface buttonProps {
  alertType: string;
  btnText: string;
}

const Button = ({ alertType, btnText }: buttonProps) => {
  const class_name = "btn btn-" + alertType;
  return (
    <button type="button" className={class_name}>
      {btnText}
    </button>
  );
};

export default Button;
