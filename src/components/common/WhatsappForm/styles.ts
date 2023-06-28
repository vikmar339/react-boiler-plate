import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    typography: "bodyLayout",
  },
  formWrapper: {
    position: "relative",
    width: "90%",
    typography: "flexColumn",
    backgroundColor: "white",
    padding: "26px 21px 17px 21px",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.07)",
    borderRadius: "6px",
  },
  title: {
    typography: "montserrat.medium",
    fontSize: "16px",
    marginBottom: "20px",
  },
  btnStyles: {
    width: "100%",
  },
  input: {
    minHeight: "250px",
  },
};

export default styles;
