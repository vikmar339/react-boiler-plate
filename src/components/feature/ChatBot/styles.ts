import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    position: "fixed",
    right: "30px",
    bottom: "30px",
    zIndex: "1200",
    "& .scale_up": {
      height: "70vh",
      width: "370px",
      overflow: "hidden",
    },
    "& .remove_animation": {
      transition: "none !important",
    },
  },
};

export default styles;
