import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    "& .MuiInputBase-root": {
      marginTop: "0",
    },
  },

  input: {
    borderColor: "custom.border.main",
    "& .MuiInputBase-input.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.54)",
      opacity: "0.9",
      WebkitTextFillColor: "black",
    },
  },

  error: {
    marginLeft: "110px",
  },
};

export default styles;
