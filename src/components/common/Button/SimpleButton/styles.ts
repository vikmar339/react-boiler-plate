import { SxProps } from "@mui/system";
import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const buttonStyles: SxProps = {
  fontSize: {
    xs: "13.6px",
    sm: "16px",
  },
  typography: "montserrat.medium",
  minHeight: "55px",
  boxShadow: "none",
  borderRadius: "10px",
 
  "&.Mui-disabled": {
    backgroundColor:
      templateJson.themeColorCodes.button.primary.gradient.combined,
    color: templateJson.themeColorCodes.button.primary.text,
    opacity: "0.5",
  },
};

const styles: Styles = {
  wrapper: {
    ...buttonStyles,
  },
  icon: {
    marginRight: "4px",
  },
  btnStyles: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  secondary: {
    ...buttonStyles,
    border: "1px solid",
    background: templateJson.themeColorCodes.button.secondary.backgroundColor,
  },
};

export default styles;
