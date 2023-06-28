import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    color: templateJson.themeColorCodes.calendarWidget.header,
    background:
      "linear-gradient(146.01deg, rgba(255, 255, 255, 0.921875) -30.01%, rgba(255, 255, 255, 0) 160.4%)",
    backdropFilter: "blur(6.5px)",
    borderRadius: "12px",
    padding: "15px",
  },

  contentWrapper: {
    typography: "flexSpaceBetween",
    paddingBottom: "10px",
    borderBottom: "1px solid",
    borderBottomColor: templateJson.themeColorCodes.calendarWidget.border,
    cursor: "pointer",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    typography: "montserrat.semiBold",
  },

  arrow: {
    color: templateJson.themeColorCodes.calendarWidget.values,
    width: "18px",
    cursor: "pointer",
  },

  title: {
    fontSize: "12px",
  },

  value: {
    typography: "flexAlignCenter",
    gap: "4px",
    color: templateJson.themeColorCodes.calendarWidget.values,
    fontSize: "13px",
  },

  popover: {
    position: "absolute",
    top: "20px",
    left: "-20px",

    "&>div": {
      borderRadius: "5px",
    },
  },

  divider: {
    border: "1px solid #e4eafc",
  },
};
export default styles;
