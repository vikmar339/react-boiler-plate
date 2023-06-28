import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    typography: "montserrat.medium",
    fontSize: "12px",
    backgroundColor: templateJson.themeColorCodes.footer.backgroundColor,
    borderRadius: "0 0 10px 10px",
    padding: "0 28px 0 28px",
    color: templateJson.themeColorCodes.footer.text,
    cursor: "pointer",
    textDecoration: "none",
  },

  spanText: {
    height: "23px",
    "& img": {
      height: "100%",
    },
  },
};

export default styles;
