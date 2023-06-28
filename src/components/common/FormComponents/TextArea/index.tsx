import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputBaseProps,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { SxProps } from "@mui/system";
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { CSSProperties } from "react";
import styles from "./styles";
import { getError } from "src/utils/common";

type InputProps<T extends FieldValues> = UseControllerProps<T> &
  FormControlProps &
  InputBaseProps & {
    label?: string;
    errors?: FieldErrors;
    maxLength?: number;
    customStyles?: SxProps;
    labelPos?: boolean;
    minRows: number;
    maxRows: number;
    readonly?: boolean;
    placeholder?: string;
  };

const TextArea = <T extends FieldValues>({
  name,
  control,
  label,
  fullWidth = true,
  labelPos = false,
  minRows = 5,
  maxRows = 5,
  errors,
  disabled = false,
  rules,
  placeholder,
  customStyles,
  readOnly = false,
  className,
  maxLength = 250,
  ...rest
}: InputProps<T>) => {
  const error = getError(name, errors);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      {...rest}
      render={({ field }) => (
        <FormControl
          sx={customStyles}
          fullWidth={fullWidth}
          variant="outlined"
          className={className}
          error={!!error}
        >
          <Box sx={styles.wrapper}>
            <Box>
              <InputLabel
                shrink
                className="label"
                disabled={disabled}
                required={!!rules?.required}
                htmlFor={`input-base-${name}`}
              >
                {label}
              </InputLabel>
              <TextareaAutosize
                id={`input-base-${name}`}
                style={{
                  ...(styles.txtAreaAuto as CSSProperties),
                  backgroundColor: readOnly ? "transparent" : "white",
                }}
                className="textarea"
                disabled={disabled}
                placeholder={placeholder}
                readOnly={readOnly}
                value={field.value}
                maxRows={maxRows}
                minRows={minRows}
                onChange={field.onChange}
                onBlur={field.onBlur}
                maxLength={maxLength}
              />
            </Box>
          </Box>
          {error && (
            <FormHelperText sx={styles.error}>{error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
export default TextArea;
