import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    typography: "montserrat.semiBold",
    fontSize: "24px",
    backgroundColor: templateJson.themeColorCodes.header.backgroundColor,
    borderRadius: "10px 10px 0 0",
    padding: "25px",
  },

  pointer: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    padding: "5px",
    backgroundColor: templateJson.themeColorCodes.header.iconBackground,
    cursor: "pointer",
  },

  labelWrapper: {
    textAlign: "center",
  },

  label: {
    typography: "montserrat.semiBold",
    color: templateJson.themeColorCodes.header.label,
    fontSize: "20px",
    fontWeight: "600",
    textTransform: "capitalize",
    marginBottom: "4px",
  },

  subLabel: {
    typography: "montserrat.regular",
    color: templateJson.themeColorCodes.header.subLabel,
    fontSize: "14px",
    fontWeight: "400",
  },
};

export default styles;
