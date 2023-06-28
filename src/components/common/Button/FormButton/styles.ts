import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    alignSelf: "center",
    margin: "-15px",
  },

  btnStyles: {
    minWidth: "150px",
    margin: "10px 0",
    height: "28px",
    color: templateJson.themeColorCodes.button.form.text,
    boxShadow: "none",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: templateJson.themeColorCodes.button.form.backgroundColor,
      textDecoration: "underline",
    },
  },

  icon: {
    marginRight: "4px",
  },
};

export default styles;
