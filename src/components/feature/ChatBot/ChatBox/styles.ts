import { Styles } from "src/types/common";
import { templateJson } from "../../../../template-config";

const styles: Styles = {
  wrapper: {
    position: "absolute",
    width: "0px",
    height: "0px",
    bottom: "47px",
    right: "86%",
    borderRadius: "10px",
    backgroundColor: "white",
    transition: "width .5s, height .7s !important",
    boxShadow:
      "rgba(0,0,0,.2) 0px 2px 4px -1px, rgba(0,0,0,.14) 0px 4px 5px 0px, rgba(0,0,0,.12) 0px 1px 10px 0px",
    "& video": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "10px",
    },
    "& .make_blur": {
      filter: "blur(2px)",
    },
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    padding: "10px",
    "& .header": {
      position: "absolute",
      top: "15px",
      right: "60px",
    },
    "& .play_toggle": {
      cursor: "pointer",
      position: "absolute",
      top: "50% ",
      left: "50%",
      transform: "translate(-50%, -50%) ",
      borderRadius: "50%",
      width: "79px",
      height: "79px",
      background: templateJson.themeColorCodes.playButton.backgroundColor,
      transition: ".5s",
      opacity: "0",
      typography: "flexCenter",
      padding: "10px",
      "& img": {
        height: "100%",
        width: "100%",
      },
    },
    "&:hover": {
      "& .play_toggle": {
        opacity: "1",
        zIndex: "3",
      },
    },
  },
  progressBar: {
    width: "100%",
    position: "absolute",
    height: "2px",
    bottom: "0",
    zIndex: "1000",
    backgroundColor: templateJson.themeColorCodes.progressBar.backgroundColor,
  },
  soundIcon: {
    background: templateJson.themeColorCodes.soundIcon.backgroundColor,
    color: templateJson.themeColorCodes.soundIcon.iconColor,
    fontSize: "20px",
    borderRadius: "50%",
    padding: "3px",
    cursor: "pointer",
    typography: "flexCenter",
  },
  footer: {
    position: "absolute",
    bottom: "0",
    right: 0,
    left: 0,
    paddingBottom: "30px",
  },
  iconList: {
    display: "flex",
    alignItems: "end",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "17px",
    paddingRight: "5px",
  },
  bidContainer: {
    width: "100%",
    background:
      "linear-gradient(142.99deg, rgba(255, 255, 255, 0.73) -1.36%, rgba(255, 255, 255, 0) 106.01%)",
    backdropFilter: "blur(6.5px)",
    padding: "17px 27px",
    borderRadius: "25px 25px 0 0",
    "& .buy_now": {
      typography: "flexSpaceBetween",
      padding: "7px 15px",
      borderRadius: "10px",
      "& .left": {
        typography: "flexAlignCenter",
        flexDirection: "column",
        "& .amount": {
          fontSize: "28px",
          color: "#fff",
          fontWeight: "600",
          fontFamily: "Montserrat",
        },
        "& .description": {
          fontSize: "15px",
          fontWeight: "400",
          color: "#fff",
        },
      },
    },
    "& .divider_text": {
      color: "#fff",
      fontSize: "15px",
      fontWeight: "500",
      margin: "8px 0",
      textAlign: "center",
    },
  },
  formBody: {
    typography: "bodyLayout",
    alignItems: "initial",
    overflow: "auto",
  },

  widgetWrapper: {
    position: "absolute",
    top: "60px",
    left: "5px",
    right: "5px",
  },
};

export default styles;
