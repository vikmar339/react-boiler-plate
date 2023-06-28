import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    typography: "defaultBodyLayout",
    backgroundColor:
      templateJson.themeColorCodes.thankYouScreen.backgroundColor,
    padding: "0 25px",
    justifyContent: "center",
  },

  title: {
    marginBottom: "10px",
    fontSize: "39px",
    typography: "montez.regular",
    color: templateJson.themeColorCodes.thankYouScreen.title,
  },

  imageWrapper: {
    width: "220px",
    marginBottom: "10px",
  },

  image: {
    width: "100%",
  },

  bookingText: {
    textAlign: "center",
    typography: "montserrat.semiBold",
    fontSize: "18px",
    color: templateJson.themeColorCodes.thankYouScreen.bookingText,
    marginBottom: "15px",
  },

  text: {
    textAlign: "center",
    typography: "montserrat.regular",
    lineHeight: "30px",
    fontSize: "16px",
    color: templateJson.themeColorCodes.thankYouScreen.text,
    wordBreak: "break-word",
  },
};

export default styles;
