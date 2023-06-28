import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputBase,
  SxProps,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { getError } from "src/utils/common";
import styles, { Period } from "./styles";
import { getHour, getMinutes, getPeriod } from "src/utils/time";

type TimeState = {
  hour: any;
  min: any;
  period: any;
};

type TimeProps<T extends FieldValues> = UseControllerProps<T> &
  FormControlProps & {
    setValue: UseFormSetValue<T>;
    getValues: UseFormGetValues<T>;
    clearErrors: UseFormClearErrors<T>;
    errors?: FieldErrors;
    readOnly?: boolean;
    disabled?: boolean;
    customStyles?: { [key: string]: SxProps };
  };

type FieldName = "hour" | "min";
const Time = <T extends FieldValues>({
  control,
  name,
  rules,
  setValue,
  getValues,
  clearErrors,
  disabled = false,
  readOnly,
  errors,
  customStyles,
}: TimeProps<T>) => {
  const error = getError(name, errors);
  const timeVal = getValues(name);
  const [time, setTime] = useState<TimeState>({
    hour: getHour(),
    min: getMinutes(),
    period: getPeriod(),
  });

  useEffect(() => {
    if (timeVal?.length) {
      setTime({
        hour: timeVal.split(":")[0],
        min: timeVal.split(":")[1].split(" ")[0],
        period: timeVal.split(":")[1].split(" ")[1],
      });
    }
  }, [timeVal]);

  const handleHour = (val: string, maxVal: string) => {
    if (Number(val) >= 0 && Number(val) <= Number(maxVal) && val.length <= 2) {
      setTime({ ...time, hour: val });
    }
  };

  const handleMin = (val: string, maxVal: string) => {
    if (Number(val) >= 0 && Number(val) <= Number(maxVal) && val.length <= 2) {
      setTime({ ...time, min: val });
    }
  };

  const handlePeriod = (val: string) => {
    setTime({ ...time, period: val });
  };

  const handleOnBlur = (val: any, fieldName: FieldName) => {
    if (val.toString().length < 2 && val >= 0) {
      setTime({ ...time, [fieldName]: `0${val}` });
    }
  };

  useEffect(() => {
    if (Object.values(time).every((val) => val !== "")) {
      clearErrors(name);
      setValue(name, `${time.hour}:${time.min} ${time.period}` as any, {
        shouldTouch: true,
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, [clearErrors, name, setValue, time]);

  return (
    <Box sx={{ ...styles.wrapper, ...customStyles?.wrapper } as SxProps}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ formState: { errors } }) => (
          <Box sx={styles.input}>
            <FormControl>
              <InputBase
                name="hour"
                placeholder="00"
                className="inputField"
                type="number"
                value={time.hour}
                sx={styles.input}
                onBlur={(e) => handleOnBlur(e.target.value, "hour")}
                error={!!errors[name]}
                onChange={(e) => {
                  handleHour(e.target.value, "12");
                }}
                autoComplete="off"
              />
            </FormControl>

            <Box sx={styles.separator}>:</Box>
            <FormControl>
              <InputBase
                name="min"
                className="inputField"
                placeholder="00"
                type="number"
                value={time.min}
                error={!!errors[name]}
                sx={styles.input}
                onBlur={(e) => handleOnBlur(e.target.value, "min")}
                onChange={(e) => handleMin(e.target.value, "59")}
                autoComplete="off"
              />
            </FormControl>

            {(timeVal?.split(" ")[1] === "AM" || !readOnly) && (
              <FormControl>
                <Period
                  name="period"
                  placeholder="AM"
                  value="AM"
                  disabled={disabled}
                  readOnly={true}
                  error={!!errors[name]}
                  timePeriod={
                    time.period === "AM" || timeVal?.split(" ")[1] === "AM"
                  }
                  onClick={() => {
                    !readOnly && handlePeriod("AM");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      !readOnly && handlePeriod("AM");
                    }
                  }}
                />
              </FormControl>
            )}
            {(timeVal?.split(" ")[1] === "PM" || !readOnly) && (
              <FormControl>
                <Period
                  name="period"
                  placeholder="PM"
                  value="PM"
                  disabled={disabled}
                  readOnly={true}
                  error={!!errors[name]}
                  timePeriod={
                    time.period === "PM" || timeVal?.split(" ")[1] === "PM"
                  }
                  onClick={() => {
                    !readOnly && handlePeriod("PM");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      !readOnly && handlePeriod("PM");
                    }
                  }}
                />
              </FormControl>
            )}
            {error && (
              <FormHelperText sx={styles.error}>{error.message}</FormHelperText>
            )}
          </Box>
        )}
      />
    </Box>
  );
};

export default Time;
