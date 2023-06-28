import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
 
    "& #widget-close": {
      display: "none !important",
    },
    "& #widget-open": {
      display: "none !important",
    },
    "& #widget": {
      display: "block !important",
      position: "absolute !important",
      height: "auto !important",
      width: "auto !important",
      bottom: "0",
      top: "0",
      right: 0,
      left: 0,
    },
  },
};

export default styles;
