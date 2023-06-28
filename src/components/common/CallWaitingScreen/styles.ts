import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    typography: "defaultBodyLayout",
    top: "0",
    bottom:"0",
    background:
      "linear-gradient(146.01deg, #EE670F -30.01%, rgba(255, 255, 255, 0) 160.4%)",
    backdropFilter: "blur(1px)",
  },

  heading: {
    marginTop: "100px",
    marginBottom: "15px",
    fontSize: "18px",
    typography: "montserrat.semiBold",
    color: "white",
  },

  subHeading: {
    gap: "4px",
    color: "white",
    marginBottom: "35px",
    typography: "montserrat.semiBold",
  },

  time: {
    marginLeft: "4px",
    fontSize: "22px",
    color: "white",
    typography: "montserrat.semiBold",
  },

  progressBar: {
    width: "100%",
    height: "4px",
    marginBottom: "20px",
    backgroundColor: "white",
  },

  thankingText: {
    textAlign: "center",
    fontSize: "12px",
    typography: "montserrat.semiBold",
    color: "white",
  },
};

export default styles;
