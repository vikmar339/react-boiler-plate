import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    typography: "defaultBodyLayout",
  },

  title: {
    marginTop: "100px",
    marginBottom: "10px",
    fontSize: "18px",
    typography: "montserrat.medium",
    color: templateJson.themeColorCodes.waitingScreen.text,
    position: "relative",
    zIndex: "3",
  },

  experts: {
    position: "absolute",
    height: "100%",
    width: "100%",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },

  time: {
    width: "70%",
    gap: "4px",
    background:
      "linear-gradient(142.99deg, rgba(255, 255, 255, 0.37) -1.36%, rgba(255, 255, 255, 0.37) 106.01%)",
    backdropFilter: "blur(3.5px)",
    borderRadius: "4px",
    color: templateJson.themeColorCodes.waitingScreen.text,
    padding: "7px",
    marginBottom: "10px",
  },
  timeZone: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "5px",
  },

  timeValue: {
    display: "flex",
    fontSize: "22px",
    typography: "montserrat.semiBold",
  },

  to: {
    fontSize: "22px",
    typography: "montserrat.semiBold",
  },

  exploreText: {
    fontSize: "16px",
    typography: "montserrat.medium",
    marginBottom: "10px",
    color: templateJson.themeColorCodes.waitingScreen.text,
    position: "relative",
    zIndex: "3",
  },

  exploreLink: {
    textDecoration: "underline",
    cursor: "pointer",
    "&:active": {
      color: templateJson.themeColorCodes.waitingScreen.exploreLink,
    },
  },

  localTime: {
    position: "absolute",
    left: "10px",
    top: "10px",
    color: "white",
  },
};

export default styles;
