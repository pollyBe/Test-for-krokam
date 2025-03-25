import { Input } from "@/uiComponents/input";
import style from "./form.module.scss";

export const Form = () => {
  return (
    <form className={style.form}>
      <Input name="Name" type="text" />
      <Input name="Email" type="email" />
      <Input name="Message" type="text" className={style.message} />
      <Input name="I'm not a robot" type="checkbox" />
    </form>
  );
};
