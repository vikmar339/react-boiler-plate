import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  progressBarWrapper: {
    position: "absolute",
    bottom: "7px",
    width: "92%",
  },

  progressBar: {
    height: "8px",
    borderRadius: "12px",
    backgroundColor: templateJson.themeColorCodes.progressBar.backgroundColor,
  },
};

export default styles;