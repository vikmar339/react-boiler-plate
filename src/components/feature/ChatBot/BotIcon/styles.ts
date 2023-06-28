import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    position: "fixed",
    right: "30px",
    bottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "20px",
  },

  widgetBox: {
    position: "relative",
    "& .icon_wrap": {
      //   borderRadius: "50%",
      //   background: "blue",
      //   padding: "15px",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      cursor: "pointer",
      //   "& .icon": {
      //     color: "white",
      //   },
      height: "100px",
      width: "100px",
      "& video": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
        border: "1px solid",
      },
    },
  },
};

export default styles;
