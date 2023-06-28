import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    "& .labelPos": {
      display: "flex",
      justifyContent: "start",
      alignItems: "start",

      "& .label": {
        paddingTop: "8px",
        fontSize: "14px",
        fontWeight: "bold",
        minWidth: "110px",
        color: templateJson.themeColorCodes.palette.custom.text,
        position: "static",
      },
    },

    "& .textarea": {
      borderRadius: "5px",
      borderWidth: "2px",
      borderColor: templateJson.themeColorCodes.palette.custom.border,
      fontFamily: "inherit",
      width: "100%",
      padding: "8px ",
      outline: "none",
    },
    "& .MuiInputBase-root": {
      "& input": {
        margin: "0",
      },
      "& fieldset": {
        outline: "none",
        border: "none",
      },
    },
  },

  textarea: {
    padding: "12px",
    "& .MuiFormControl-root": {
      "&:before, :after, :focus:not(.Mui-disabled):before, ": {
        border: "none",
      },
    },
  },

  txtAreaAuto: {
    fontSize: "14px",
    padding: "8px",
  },

  error: {
    color: templateJson.themeColorCodes.palette.error.main,
    padding: "0px",
    marginLeft: "110px",
  },

  counterStyles: {
    position: "absolute",
    bottom: "5px",
    right: "10px",
    fontSize: "12px",
    color: "grey",
  },
};

export default styles;
