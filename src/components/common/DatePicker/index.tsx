import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputBase,
  InputBaseProps,
} from "@mui/material";
import { SxProps } from "@mui/system";
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
  UseFormSetValue,
} from "react-hook-form";
import { getError } from "src/utils/common";
import Calendar from "./Calendar";
import styles from "./styles";

type InputProps<T extends FieldValues> = UseControllerProps<T> &
  FormControlProps &
  InputBaseProps & {
    label: string;
    errors?: FieldErrors;
    maxDate?: string;
    minDate?: string;
    view?: boolean;
    loading?: boolean;
    setValue: UseFormSetValue<T>;
    labelPos?: boolean;
    readOnly?: boolean;
    customStyles?: { [key: string]: SxProps };
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
  maxDate,
  minDate,
  labelPos = false,
  inputProps,
  variant = "standard",
  className,
  setValue,
  view = false,
  readOnly = false,
  ...rest
}: InputProps<T>) => {
  const error = getError(name, errors);

  const viewInputValue = (value: string) =>
    type === "date" ? value : value?.split("T")[0];

  const setInputVal = (val: string) => {
    setValue(name, val as any, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <Controller
      render={({ field }) => (
        <FormControl
          sx={customStyles?.formControl}
          fullWidth={fullWidth}
          variant={variant}
          className={className}
        >
          <Box sx={{ ...styles.wrapper, ...customStyles?.wrapper } as SxProps}>
            <InputBase
              value={field.value}
              readOnly={true}
              placeholder="Select Date"
              disabled={readOnly}
              onChange={(e) => {
                field.onChange(e);
              }}
              inputProps={{
                ...inputProps,
              }}
              sx={{ ...styles.input, ...customStyles?.input } as SxProps}
              error={!!error}
              style={{
                background: readOnly ? "none" : "white",
              }}
              endAdornment={
                <Calendar
                  minDate={minDate}
                  maxDate={maxDate}
                  setDate={setInputVal}
                  readOnly={readOnly}
                />
              }
              {...rest}
            />
          </Box>
          {error && !view && (
            <FormHelperText sx={styles.error}>{error.message}</FormHelperText>
          )}
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
