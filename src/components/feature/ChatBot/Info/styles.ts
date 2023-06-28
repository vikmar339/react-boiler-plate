import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "10px",
    position: "absolute",
    width: "30vh",
    right: 0,
    bottom: "110px",
  },

  iconBox: {
    typography: "flexSpaceBetween",
    gap: "10px",
    padding: "5px 10px",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    cursor: "pointer",
    position: "relative",
    background:"white",
  },

  infoBox: {
    position: "relative",
    fontFamily: "sans-serif",
    padding: "15px",
    paddingRight: "20px",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background:"white",
  },

  closeIcon: {
    position: "absolute",
    top: "1px",
    right: "1px",
    cursor: "pointer",
  },
  actionIcons: {
    "& .icon_label": {
      padding: "5px",
      borderRadius: "5px",
      position: "absolute",
      top: "-3rem",
      right: "0",
      background: "white",
      display: "none",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      whiteSpace: "nowrap",
    },
    "& img": {
      filter: templateJson.themeColorCodes.infoBox.icon,
    },
    "&:hover": {
      "& .icon_label": {
        display: "block",
      },
    },
  },
};

export default styles;
