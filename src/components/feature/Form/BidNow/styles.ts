import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {},
  roomImage: {
    width: "100%",
    lineHeight: "0",
    position: "relative",
    minHeight:"50px",
    "& img": {
      width: "100%",
      objectFit: "cover",
    },
  },
  contentBox: {
    background: templateJson.themeColorCodes.bidNow.contentBackground,
    padding: "15px",
    "& .upper": {
      typography: "flexSpaceBetween",
      backgroundColor: templateJson.themeColorCodes.bidNow.upperBoxBackground,
      border: "1px solid",
      borderColor: templateJson.themeColorCodes.bidNow.borderColor,
      borderRadius: "4px",
      padding: "15px",
      "& .image": {
        height: "32px",
        "& img": {
          height: "100%",
        },
      },
      "& .textWrapper": {
        "& .upperText": {
          fontSize: "14px",
          color: templateJson.themeColorCodes.bidNow.upperText,
        },
        "& .lowerText": {
          typography: "flexAlignCenter",
          gap: "3px",
          fontSize: "12px",
          color: templateJson.themeColorCodes.bidNow.lowerText,
          "& .info": {
            cursor: "pointer",
          },
        },
      },
      "& .buyNow": {
        cursor: "pointer",
        fontSize: "14px",
        textDecoration: "underline",
        "&:hover": {
          transform: "scale(1.04)",
        },
      },
    },
    "& .lower": {
      typography: "flexSpaceBetween",
      marginTop: "10px",
    },
  },
  recommendedBox: {
    textAlign: "center",
    backgroundColor:
      templateJson.themeColorCodes.bidNow.recommendedBoxBackground,
    color: templateJson.themeColorCodes.bidNow.recommendedBoxText,
    fontSize: "14px",
  },
  bidder: {
    background: templateJson.themeColorCodes.bidNow.bidderBackground,
    border: "1px solid",
    borderColor: templateJson.themeColorCodes.bidNow.borderColor,
    borderRadius: "4px",
    height: "56px",
    display: "flex",
    "& .currency": {
      borderRight: "1px solid",
      borderColor: templateJson.themeColorCodes.bidNow.borderColor,
      typography: "flexAlignCenter",
      padding: "0 14px",
      fontSize: "18px",
      color: templateJson.themeColorCodes.bidNow.currencyText,
    },
    "& .input_field": {
      borderRight: "1px solid",
      borderColor: templateJson.themeColorCodes.bidNow.borderColor,
      typography: "flexAlignCenter",
      padding: "0 15px",
      "& input": {
        outline: "none",
        border: "none",
        width: "75px",
        fontSize: "18px",
        color: templateJson.themeColorCodes.bidNow.inputText,
        typography: "montserrat.regular",
      },
    },
    "& .bidding_box": {
      typography: "montserrat.medium",
      color: templateJson.themeColorCodes.bidNow.biddingBoxText,
      "& .decrease": {
        padding: "3px 14px",
        cursor: "pointer",
        height: "27px",
        fontSize: "15px",
        opacity: "0.8",
        userSelect: "none",
        "&:hover": {
          opacity: "1",
          background: templateJson.themeColorCodes.bidNow.biddingBoxHover,
        },
        "&:active": {
          transform: "scale(1.2)",
        },
        "&:focus": {
          transform: "scale(1.2)",
        },
      },
      "& .divider": {
        borderBottom: "1px solid",
        borderColor: templateJson.themeColorCodes.bidNow.borderColor,
      },
      "& .increase": {
        padding: "2px 14px",
        cursor: "pointer",
        height: "28px",
        fontSize: "15px",
        userSelect: "none",
        "&:hover": {
          opacity: "1",
          background: templateJson.themeColorCodes.bidNow.biddingBoxHover,
        },
        "&:active": {
          transform: "scale(1.2)",
        },
      },
    },
  },
  biddingTooltip: {
    background: "rgba(0,0,0,0.6)",
    padding: "14px",
    position: "absolute",
    top: "0",
    bottom: "0",
    width: "100%",
    zIndex: "22",
    "& .container": {
      position: "relative",
      background: templateJson.themeColorCodes.bidNow.biddingPopupBackground,
      typography: "flexColumn",
      padding: "16px 14px 24px 14px",
      borderRadius: "12px",
      color: templateJson.themeColorCodes.bidNow.biddingPopupText,
      "& .text": {
        marginBottom: "10px",
        fontSize: "18px",
      },
      "& .price": {
        marginBottom: "17px",
        fontSize: "22px",
        fontWeight: "700",
      },
      "& .buttonWrapper": {
        typography: "flexSpaceBetween",
        gap: "9px",
      },
    },
  },
  button: {
    minWidth: "155px",
  },
  iconList: {
    position: "absolute",
    bottom: "20px",
    display: "flex",
    alignItems: "center",
    left: "0",
    right: "0",
    justifyContent: "center",
    gap: "15px",
    "& .icon_label": {
      fontSize: "11px",
      marginTop: "2px",
      lineHeight: "initial",
    },
  },
};

export default styles;
