import style from "./input.module.scss";

interface IProps {
  type: "text" | "email" | "checkbox";
  name: string;
  className?: string;
}
export const Input = ({ name, type, className }: IProps) => {
  if (type === "checkbox") {
    return (
      <div className={`${style.checkBoxWrap} ${className}`}>
        <input id={name} type="checkbox" />
        <label htmlFor={name}>{name}</label>
      </div>
    );
  }

  return (
    <div className={`${style.textWrap} ${className}`}>
      <label htmlFor={name}>{name}</label>
      <input id={name} type={type} />
    </div>
  );
};
