import { Box, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { ComponentProps } from "react";
import styles from "./styles";
import { useAppSelector } from "src/redux/store";

type IconButtonProps = ComponentProps<typeof Button> & {
  label?: string;
  customStyles?: SxProps;
  customBtnStyles?: SxProps;
  children?: React.ReactNode;
  animate?: boolean;
  variant?: string;
  labelClick?: Function;
};

const IconButton = ({
  variant = "contained",
  customStyles,
  customBtnStyles,
  label,
  animate = false,
  children,
  labelClick = () => {},
  ...rest
}: IconButtonProps) => {
  const theme = useAppSelector((state: any) => state.site.theme);
  return (
    <Box sx={styles[animate ? "animateLabelWrapper" : "wrapper"]}>
      {animate && label && (
        <Box
          sx={{
            backgroundColor: theme?.buttonBackground,
            color: theme?.buttonText,
          }}
          onClick={() => labelClick()}
          className="animatedLabel"
        >
          {label}
        </Box>
      )}
      <Button
        sx={
          {
            ...styles.btnWrapper,
            ...customStyles,
            backgroundColor: theme?.buttonBackground,
            "&:hover": {
              backgroundColor: theme?.buttonBackground,
            },
          } as SxProps
        }
        variant={variant}
        {...rest}
      >
        <Box sx={{ ...styles.btnStyles, ...customBtnStyles } as SxProps}>
          {children}
        </Box>
      </Button>
      {!animate && label && (
        <Box className="icon_label" sx={styles.label}>
          {label}
        </Box>
      )}
    </Box>
  );
};

export default IconButton;
