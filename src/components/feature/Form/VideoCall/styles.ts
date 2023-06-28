import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    typography: "bodyLayout",
    "& video": {
      borderRadius: "0",
    },
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
  callIcons: {
    color: "#BFBFBF",
    background: "#fff",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    typography: "flexCenter",
    cursor: "pointer",
    "& .icon": {
      fontSize: "44px",
    },
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
