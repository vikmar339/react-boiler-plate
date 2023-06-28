import { Box } from "@mui/material";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Button from "../../../common/Button";
import styles from "./styles";
import DatePicker from "../../../common/DatePicker";
import errorMessage from "src/constants/errorMessage";
import Time from "../../../common/Time";
import { getDate } from "src/utils/time";

type FormDataType = {
  bookingDate: any;
  bookingTime: string;
};

type VirtualTourProps = {
  submitDetails: Function;
};

const VirtualTour = ({ submitDetails }: VirtualTourProps) => {
  const [readOnly, setReadOnly] = useState<boolean>(false);

  const { control, formState, handleSubmit, setValue, getValues, clearErrors } =
    useForm<FormDataType>({
      defaultValues: {
        bookingDate: getDate(),
        bookingTime: "",
      },
    });

  const { isValid, errors } = formState;

  const onFormSubmit = (data: FormDataType) => {
    submitDetails();
  };

  return (
    <Box sx={styles.wrapper}>
      <Box
        component="form"
        onSubmit={handleSubmit(onFormSubmit)}
        sx={styles.formWrapper}
      >
        <Box sx={styles.title}>
          Get Guided Venue Tour of Venue on Video Call.
        </Box>
        <Box sx={styles.datePickerWrapper}>
          <Box sx={styles.input}>
            <DatePicker
              name="bookingDate"
              control={control}
              type="date"
              label="Start Date"
              labelPos
              className="date"
              errors={errors}
              fullWidth
              setValue={setValue}
              rules={{ required: errorMessage.required }}
            />
          </Box>
        </Box>
        <Box>
          <Box sx={styles.input}>
            <Time
              name="bookingTime"
              control={control}
              clearErrors={clearErrors}
              errors={errors}
              readOnly={readOnly}
              getValues={getValues}
              setValue={setValue}
              rules={{ required: errorMessage.required }}
            />
          </Box>
        </Box>

        <Button
          type="submit"
          label="Submit"
          icon={false}
          customStyles={styles.btnStyles}
          disabled={!isValid}
        />
      </Box>
    </Box>
  );
};

export default VirtualTour;
