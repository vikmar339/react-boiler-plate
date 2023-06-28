import ChatWithUs from "./ChatWithUs";

const FormTypeMapping = {
  ChatWithUs,
} as const;

type FormTypes = keyof typeof FormTypeMapping;

type FormOwnProps<T extends FormTypes> = {
  as?: T;
};

type FormProps<T extends FormTypes> = FormOwnProps<T> &
  React.ComponentProps<(typeof FormTypeMapping)[T]>;

const defaultFormType = "ChatWithUs";

const Form = <T extends FormTypes = typeof defaultFormType>({
  as,
  ...rest
}: FormProps<T>) => {
  const FormType: any =
    (as && FormTypeMapping[as]) ?? FormTypeMapping[defaultFormType];
  return <FormType {...rest} />;
};

export default Form;
