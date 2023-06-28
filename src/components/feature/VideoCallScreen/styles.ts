import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    width:"100%",
    "& .video_align_bottom": {
      bottom: "50px",
      right: "10px",
      height: "26%",
      width: "25%",
      left: "inherit",
      top: "inherit",
      zIndex: "2",
      "& video": {
        borderRadius: "5px",
      },
    },
  },
  localVideo: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& video": {
      borderRadius: "0",
    },
  },
  callIcon: {
    background: templateJson.themeColorCodes.palette.primary.main,
    color: "white",
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "50px",
    cursor: "pointer",
    zIndex: "3",
  },
  peerId̦: {
    background: templateJson.themeColorCodes.palette.primary.main,
    color: "white",
    borderRadius:"4px",
    padding:"3px",
    position: "absolute",
    bottom: "15px",
    zIndex:"3",
  },
  overlay: {
    position: "absolute",
    bottom: "18%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  cutIcon: {
    color: "#ffffff",
    background: "linear-gradient(180deg, #FF3535 0%, #ED1C1C 100%)",
    height: "78px",
    width: "78px",
    borderRadius: "50%",
    typography: "flexCenter",
    cursor: "pointer",
    "& .icon": {
      fontSize: "44px",
    },
  },
};

export default styles;
