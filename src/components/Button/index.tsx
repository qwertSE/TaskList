import style from "./Button.module.scss";

const Button = (props:any
) => {
  const tipo = props.type;

  return (
    <button type={tipo} className={style.botao} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
