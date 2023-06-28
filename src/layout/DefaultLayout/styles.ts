import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  closeIcon: {
    position: "absolute",
    right: "15px",
    top: "15px",
    background: templateJson.themeColorCodes.closeIcon.backgroundColor,
    color: templateJson.themeColorCodes.closeIcon.color,
    fontSize: "20px",
    borderRadius: "50%",
    padding: "3px",
    cursor: "pointer",
    typography: "flexCenter",
    zIndex: "2",
  },
};

export default styles;
