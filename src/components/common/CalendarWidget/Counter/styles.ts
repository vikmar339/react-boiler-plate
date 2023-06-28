import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  counterWrapper: {
    typography: "flexSpaceBetween",
    width: "358px",
    padding: "10px",
  },

  iconWrapper: {
    typography: "flexAlignCenter",
  },

  removeIcon: {
    color: templateJson.themeColorCodes.calendarWidget.guestCounter.removeIcon,
    fontSize: "25px",
  },

  addIcon: {
    fontSize: "25px",
    color: templateJson.themeColorCodes.calendarWidget.guestCounter.addIcon,
  },

  countWrapper: {
    minWidth: "27px",
    textAlign: "center",
  },
};

export default styles;
