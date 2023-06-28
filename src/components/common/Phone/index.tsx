import { ErrorMessage } from "@hookform/error-message";
import {
  Box,
  InputLabel,
  InputProps,
  MenuItem,
  SelectProps,
  SxProps,
  TextField,
  TextFieldProps,
} from "@mui/material/";
import get from "lodash/get";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useMemo,
  useState,
} from "react";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";
import countryCode from "src/utils/countryCode";
import styles from "./styles";
import Input from "../FormComponents/Input";

type PhoneProps = FieldValues &
  TextFieldProps &
  SelectProps &
  InputProps & {
    errors?: FieldErrors;
    label?: string;
    customStyles?: SxProps;
    options?: { srcImg: string; label: string; value: string }[];
    placeholder?: string;
    inputPlaceholder?: string;
  };

const options = countryCode.map(({ srcImg, countryName, value }) => ({
  srcImg,
  value,
  label: `${countryName} ${value}`,
}));

const containsText = (text: any, searchText: any) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const Phone = ({
  name,
  control,
  label,
  fullWidth = true,
  variant = "outlined",
  rules,
  autoFocus,
  placeholder = "",
  inputPlaceholder = "",
  countryRules = {},
  customStyles = {},
  errors,
  ...rest
}: PhoneProps) => {
  const [searchText, setSearchText] = useState("");

  const displayedOptions = useMemo(
    () =>
      options.filter((option) =>
        containsText(`${option.label}`, searchText.trim())
      ),
    [searchText]
  );

  const renderValue = (value: any) => {
    if (value) {
      const optionLabel = options?.find((option) => option.value === value);
      return (
        <Box sx={styles.imageWrapper}>
          <Box
            component="img"
            src={optionLabel?.srcImg as string}
            alt="flag"
            style={{ width: "40px" }}
          />
        </Box>
      );
    } else {
      return placeholder || "Select";
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    if (value.length > 10) {
      event.target.value = value.slice(0, 10);
    }
  };

  return (
    <Box sx={styles.labelWrapper}>
      <InputLabel sx={{ ...styles.label, ...customStyles } as SxProps}>
        {label}
      </InputLabel>
      <Box sx={styles.mainWrapper}>
        <Box sx={styles.codeWrapper}>
          <Controller
            render={({ field }) => (
              <Box sx={styles.selectInput}>
                <TextField
                  select
                  variant={variant}
                  value={field.value}
                  fullWidth
                  autoFocus={false}
                  onChange={(e) => {
                    return field.onChange(e);
                  }}
                  inputRef={field.ref}
                  SelectProps={{
                    renderValue,
                    MenuProps: {
                      autoFocus: false,
                      sx: { maxHeight: "600px" },
                    },
                    onClose: () => {
                      setSearchText("");
                    },
                  }}
                  {...rest}
                >
                  <Box
                    sx={styles.searchInput}
                    onKeyDown={(event: any) => {
                      event.stopPropagation();
                    }}
                  >
                    <Input
                      name="search"
                      control={control}
                      errors={errors}
                      autoFocus={true}
                      customStyles={{ input: styles?.input }}
                      onChange={handleSearch}
                    />
                  </Box>
                  {displayedOptions?.map((option, i) => (
                    <MenuItem
                      key={i}
                      value={option.value}
                      selected={option.value === field.value}
                      sx={styles.listItems}
                      autoFocus={
                        option.value === field.value && !searchText.length
                      }
                    >
                      <Box sx={styles.dropdownOptions}>
                        <Box sx={styles.imageWrapper}>
                          <Box
                            component="img"
                            src={option.srcImg}
                            alt="flag"
                            style={{ width: "20px" }}
                          />
                        </Box>
                        {option.label}
                      </Box>
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            )}
            name={`${name}.countryCode`}
            control={control}
            rules={countryRules}
            {...rest}
          />
        </Box>
        <Box sx={styles.phoneInput}>
          <Controller
            render={({ field }) => (
              <TextField
                placeholder={inputPlaceholder}
                type="number"
                fullWidth
                variant={variant}
                error={!!get(errors, `${name}.number`, false)}
                id={name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                onKeyDown={(e) => {
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
                }}
                inputRef={field.ref}
                inputProps={{ maxLength: 10, onInput: handleInputChange }}
                {...rest}
              />
            )}
            defaultValue={null}
            name={`${name}.number`}
            control={control}
            rules={rules}
            {...rest}
          />
        </Box>
      </Box>
      {errors && (
        <ErrorMessage
          name={`${name}.number`}
          errors={errors}
          render={(errorObj: {
            message:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => (
            <>
              {!!errorObj.message && (
                <Box sx={styles.errorMessage}>{errorObj.message}</Box>
              )}
            </>
          )}
        />
      )}
    </Box>
  );
};

export default Phone;
