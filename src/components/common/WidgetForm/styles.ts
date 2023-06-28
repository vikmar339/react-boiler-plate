import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    typography: "bodyLayout",
    position:"relative",
    height:"100%",
  },
  
  formWrapper: {
    position: "relative",
    width: "90%",
    typography: "flexColumn",
    backgroundColor: templateJson.themeColorCodes.form.backgroundColor,
    padding: "26px 21px 17px 21px",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.07)",
    borderRadius: "6px",
  },

  title: {
    typography: "montserrat.medium",
    fontSize: "16px",
    color: templateJson.themeColorCodes.form.text,
    marginBottom: "20px",
  },

  btnStyles: {
    width: "100%",
  },
};

export default styles;
