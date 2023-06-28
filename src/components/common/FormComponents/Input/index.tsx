import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputBase,
  InputBaseProps,
  InputLabel,
} from "@mui/material";
import { SxProps } from "@mui/system";
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { getError } from "src/utils/common";

type InputProps<T extends FieldValues> = UseControllerProps<T> &
  FormControlProps &
  InputBaseProps & {
    label?: string;
    errors?: FieldErrors;
    maxLength?: number;
    customStyles?: { [key: string]: SxProps };
    additionalInfo?: string;
    view?: boolean;
    loading?: boolean;
    placeholder?: string;
  };

const Input = <T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  fullWidth = true,
  errors,
  rules,
  customStyles,
  placeholder,
  maxLength,
  inputProps,
  variant = "standard",
  className,
  additionalInfo,
  view = false,
  loading = false,
  ...rest
}: InputProps<T>) => {
  const error = getError(name, errors);

  return (
    <Controller
      render={({ field }) => (
        <FormControl
          sx={{ ...customStyles?.input } as SxProps}
          fullWidth={fullWidth}
          variant={variant}
          className={className}
        >
          <InputLabel shrink className="label">
            {label}
          </InputLabel>
          <InputBase
            type={type}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
            inputRef={field.ref}
            onBlur={field.onBlur}
            inputProps={{ maxLength: maxLength, ...inputProps }}
            error={!!error}
            {...rest}
          />

          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
      name={name}
      control={control}
      rules={rules}
      {...rest}
    />
  );
};
export default Input;
