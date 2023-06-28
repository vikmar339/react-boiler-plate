import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import Input from "src/components/common/FormComponents/Input";
import Phone from "src/components/common/Phone";
import errorMessage from "src/constants/errorMessage";
import regex from "src/utils/regex";
import styles from "./styles";

type FormDataType = {
  fullName: string;
  email: string;
  contact: {
    number: string;
    countryCode: string;
  };
};

type formProps = {
  updateUserDetails: Function;
};

const WidgetForm = ({ updateUserDetails }: formProps) => {
  const { control, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      contact: {
        number: "",
        countryCode: "+91",
      },
    },
  });

  const { errors, isValid } = formState;

  const { contactNumber: contactRegex, email: emailRegex } = regex;

  const onFormSubmit = (data: FormDataType) => {
    const { fullName, email, contact } = data;
    updateUserDetails({
      name: fullName,
      email: email,
      contactNumber: contact,
      formFilled: true,
    });
  };

  return (
    <Box sx={styles.wrapper}>
      <Box
        component="form"
        onSubmit={handleSubmit(onFormSubmit)}
        sx={styles.formWrapper}
      >
        <Box sx={styles.title}>Please fill in your details.</Box>
        <Input
          name="fullName"
          placeholder="Your Full Name"
          type="text"
          control={control}
          errors={errors}
          rules={{
            required: errorMessage.required,
          }}
        />
        <Input
          name="email"
          placeholder="Your Email"
          type="text"
          control={control}
          errors={errors}
          rules={{
            required: errorMessage.required,
            pattern: {
              value: emailRegex,
              message: "Please enter valid email address",
            },
          }}
        />
        <Phone
          name="contact"
          control={control}
          placeholder="Your Contact"
          inputPlaceholder="Your Contact"
          errors={errors}
          rules={{
            required: errorMessage.required,
            pattern: {
              value: contactRegex,
              message: "Please enter valid phone number",
            },
          }}
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

export default WidgetForm;
