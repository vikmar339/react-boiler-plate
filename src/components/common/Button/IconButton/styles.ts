import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    typography: "flexColumn",
    gap: "5px",
    position: "relative",
  },
  animateLabelWrapper: {
    typography: "flexAlignCenter",
    position: "relative",
    "& .animatedLabel": {
      position: "absolute",
      boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.12)",
      borderRadius: "40px 0 0 40px",
      transition: "font-size .5s, width .4s",
      fontWeight: "400",
      width: 0,
      right: "0px",
      padding: "2px 20px",
      fontSize: "0px",
      opacity: "0",
      paddingRight: "42px",
      whiteSpace: "nowrap",
      textAlign: "center",
    },
    "&:hover": {
      "& .animatedLabel": {
        cursor: "pointer",
        opacity: "1",
        fontSize: "14px",
        right: "10px",
        width: "167px",
      },
    },
  },

  btnWrapper: {
    fontSize: {
      xs: "13.6px",
      sm: "16px",
    },
    typography: "montserrat.medium",
    minWidth: "47px",
    minHeight: "47px",
    boxShadow: "none",
    padding: "0 !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    "&.Mui-disabled": {
      backgroundColor: templateJson.themeColorCodes.button.icon.backgroundColor,
      color: templateJson.themeColorCodes.button.icon.text,
      opacity: "0.5",
    },
  },
  btnStyles: {
    lineHeight: "0",
    color: templateJson.themeColorCodes.button.icon.iconColor,
  },
  label: {
    typography: "montserrat.medium",
    color: templateJson.themeColorCodes.button.icon.text,
    fontSize: "13px",
  },
};

export default styles;
