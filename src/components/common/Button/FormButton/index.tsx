import { Box, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { ComponentProps } from "react";
import styles from "./styles";

type FormButtonProps = ComponentProps<typeof Button> & {
  label: string;
  customStyles?: SxProps;
  icon?: boolean;
  children?: React.ReactNode;
};

const FormButton = ({
  label,
  variant = "text",
  customStyles,
  icon = false,
  children,
  ...rest
}: FormButtonProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Button
        sx={{ ...styles.btnStyles, ...customStyles } as SxProps}
        variant={variant}
        {...rest}
      >
        {icon ? (
          <Box sx={styles.childStyles}>
            {children} {label}
          </Box>
        ) : (
          label
        )}
      </Button>
    </Box>
  );
};

export default FormButton;
