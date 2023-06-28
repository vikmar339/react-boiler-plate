import { Styles } from "src/types/common";
import { styled } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import { templateJson } from "src/template-config";

const styles: Styles = {
  wrapper: {
    margin: "25px 0",
    position: "relative",
    "& .labelInline": {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
    },

    "& .label": {
      fontSize: "14px",
      fontWeight: "bold",
      minWidth: "110px",
      color: "custom.text.main",
    },
  },

  separator: {
    margin: "0 4px 0 0",
  },

  input: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    textAlign: "center",
    "& .inputField": {
      color: "custom.text.secondary",
      borderWidth: "1px",
      fontSize: "12px",
      borderRadius: "5px",
      borderStyle: "solid",
      borderColor: "custom.border.main",
      width: "60px",
      height: "28px",
      margin: "0 4px 0 0",
      padding: "12px 20px",
    },
    "& .MuiInputBase-input": {
      MozAppearance: "textfield",
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        "&::-moz-focus-inner": {
          borderStyle: "none",
        },
      },
    },
  },

  periodBtn: {
    borderWidth: "1px",
    borderRadius: "5px",
    borderStyle: "solid",
    width: "42px",
    fontSize: "12px",
    height: "28px",
    borderColor: "darkGray",
    padding: "4px 10px",
    marginRight: "4px",
    cursor: "pointer",
    "& input ": {
      cursor: "pointer",
    },
    "& input :focus": {
      outline: "none",
    },
  },

  error: {
    textTransform: "capitalize",
    color: "error.main",
    fontSize: "12px",
    padding: "0px",
    margin: "0px 4px",
    marginLeft: "113px",
  },
};

export default styles;

type PeriodProps = {
  timePeriod?: boolean;
};

export const Period = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "timePeriod",
})<PeriodProps>(({ timePeriod }) => ({
  borderWidth: "1px",
  borderRadius: "5px",
  borderStyle: "solid",
  width: "42px",
  fontSize: "12px",
  height: "28px",
  padding: "4px 10px",
  marginRight: "4px",
  marginBottom: "0px",
  cursor: "pointer",
  backgroundColor: timePeriod
    ? `${templateJson.themeColorCodes.button.icon.backgroundColor}`
    : "transparent",
  color: timePeriod ? "white" : "gray",
  "& input": {
    cursor: "pointer",
  },
  "& input:focus": {
    outline: "none",
  },
}));
