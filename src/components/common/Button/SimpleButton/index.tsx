import { Box, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { ComponentProps } from "react";
import styles from "./styles";
import { useAppSelector } from "src/redux/store";

type SimpleButtonProps = ComponentProps<typeof Button> & {
  label?: string;
  customStyles?: SxProps;
  customBtnStyles?: SxProps;
  icon?: boolean;
  secondary?: boolean;
  children?: React.ReactNode;
  variant?: string;
};

const SimpleButton = ({
  label,
  variant = "contained",
  customStyles,
  customBtnStyles,
  icon = false,
  secondary = false,
  children,
  ...rest
}: SimpleButtonProps) => {
  const theme = useAppSelector((state: any) => state.site.theme);
  let buttonStyles = secondary
    ? {
        backgroundColor: "white",
        color: theme.primary,
        borderColor: theme.primary,
      }
    : {
        backgroundColor: theme.buttonBackground,
        color: theme.buttonText,
      };
  return (
    <Button
      sx={
        {
          ...styles[secondary ? "secondary" : "wrapper"],
          ...buttonStyles,
          "&:hover": {
            background: secondary ? "white" : theme?.primary,
          },
          "&.Mui-disabled": {
            backgroundColor: theme?.buttonBackground,
            color: theme?.buttonText,
            opacity: "0.6",
          },
          ...customStyles,
        } as SxProps
      }
      variant={variant}
      {...rest}
    >
      {icon ? (
        <Box sx={{ ...styles.btnStyles, ...customBtnStyles } as SxProps}>
          {children} {label}
        </Box>
      ) : (
        label
      )}
    </Button>
  );
};

export default SimpleButton;
