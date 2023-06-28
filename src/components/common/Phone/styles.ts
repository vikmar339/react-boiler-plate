import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  labelWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    typography: "montserrat.medium",
  },

  mainWrapper: {
    position: "relative",
    width: "100%",
    display: "flex",
    gap: "8px",
  },

  selectInput: {
    display: "flex",
    gap: "4px",
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      height: "56px",
      width: "100%",
    },
    "& .MuiInputBase-root": {
      "& fieldset": {
        border: "none",
        outline: "none",
      },
    },
  },

  phoneInput: {
    width: "100%",
    "& .MuiInputBase-root": {
      "& fieldset": {
        border: "none",
        outline: "none",
      },
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      height: "56px",
      borderRadius: "6px",
      typography: "montserrat.medium",
      fontSize: "14px",
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        border: "solid 0px #d9d9d9",
      },
    "& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
      { border: "solid 0px #d9d9d9" },
    "& .MuiInputBase-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        MozAppearance: "none",
        "&::-moz-focus-inner": {
          borderStyle: "none",
        },
      },
    },
  },

  searchInput: {
    position: "sticky",
    top: "0px",
    paddingTop: "8px",
    zIndex: "1200",
    alignSelf: "center",
    padding: "8px 10px",
    backgroundColor: "white",
  },

  input: {
    "& .MuiInputBase-root": {
      height: "30px",
      marginBottom: "10px",
    },
  },

  imageWrapper: {
    typography: "flexAlignCenter",
    gap: "5px",
    marginRight: "2px",
  },

  dropdownOptions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "11px",
    typography: "montserrat.regular",
  },

  listItems: {
    borderBottom: "0.1px solid",
    borderColor: "rgba(0, 0, 0, 0.15)",
    margin: "-1px 0px 0 0",
    minWidth: "420px",
  },

  label: {
    typography: "montserrat.medium",
    fontSize: "14px",
  },

  errorMessage: {
    position: "absolute",
    typography: "flexAlignCenter",
    color: templateJson.themeColorCodes.palette.error.main,
    fontSize: "11px",
    height: "13px",
    fontWeight: "bold",
    top: "58px",
  },
};
export default styles;
