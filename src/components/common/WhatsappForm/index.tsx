import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import Input from "src/components/common/FormComponents/Input";
import errorMessage from "src/constants/errorMessage";
import styles from "./styles";

type FormDataType = {
  message: string;
};

type formProps = {
  submitDetails: Function;
};

const WhatsappForm = ({ submitDetails }: formProps) => {
  const { control, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  const { errors, isValid } = formState;

  const onFormSubmit = (data: FormDataType) => {
    window.open("https://web.whatsapp.com", "_blank");
    submitDetails();
  };

  return (
    <Box sx={styles.wrapper}>
      <Box
        component="form"
        onSubmit={handleSubmit(onFormSubmit)}
        sx={styles.formWrapper}
      >
        <Box sx={styles.title}>Whatsapp Message</Box>
        <Input
          name="message"
          placeholder="Enter message here"
          type="text"
          control={control}
          errors={errors}
          sx={styles.input}
          rules={{
            required: errorMessage.required,
          }}
          multiline
          rows={11}
        />
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

export default WhatsappForm;
