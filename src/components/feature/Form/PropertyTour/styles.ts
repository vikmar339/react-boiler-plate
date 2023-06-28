import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    position: "absolute",
    height:"100%",
    width: "100%",
    "& .three60-wrapper": {
      height: "100%",
      "& .pnlm-container": {
        height: "100% !important",
      },
      "& .pnlm-controls-container":{
        display:"none"
      }
    },
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width:"100%",
    background: "linear-gradient(0deg, #000000 -7.6%, rgba(0, 0, 0, 0) 83.81%)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    zIndex:"3",
  },
};

export default styles;
