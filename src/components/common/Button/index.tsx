import LinkButton from "./LinkButton";
import SimpleButton from "./SimpleButton";
import FormButton from "./FormButton";
import IconButton from "./IconButton";

const ButtonTypeMapping = {
  SimpleButton,
  LinkButton,
  FormButton,
  IconButton,
} as const;

type ButtonTypes = keyof typeof ButtonTypeMapping;

type ButtonOwnProps<T extends ButtonTypes> = {
  as?: T;
};

type ButtonProps<T extends ButtonTypes> = ButtonOwnProps<T> &
  React.ComponentProps<(typeof ButtonTypeMapping)[T]>;

const defaultButtonType = "SimpleButton";

const Button = <T extends ButtonTypes = typeof defaultButtonType>({
  as,
  ...rest
}: ButtonProps<T>) => {
  const ButtonType: any =
    (as && ButtonTypeMapping[as]) ?? ButtonTypeMapping[defaultButtonType];
  return <ButtonType {...rest} />;
};

export default Button;
