import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseControllerProps,
} from "react-hook-form";

export type AppUseControllerProps<T extends FieldValues> = {
  control: Control<T, any>;
  name: string | Path<T>;
  defaultValue?: string | number | PathValue<T, Path<T>>;
} & Omit<UseControllerProps<T>, "name" | "control" | "defaultValue">;

export type FormProps = {
  name: string;
};