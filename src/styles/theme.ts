/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { templateJson } from "src/template-config";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    [key: string]: any;
  }
  interface TypographyVariantsOptions {
    [key: string]: any;
  }
  interface Palette {
    [key: string]: any;
  }
  interface PaletteOptions {
    [key: string]: any;
  }
}

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: templateJson.themeColorCodes.palette.primary.main,
    },
    success: {
      main: templateJson.themeColorCodes.palette.success.main,
    },
    error: {
      main: templateJson.themeColorCodes.palette.error.main,
    },
    custom: {
      inputBackground:
        templateJson.themeColorCodes.palette.custom.inputBackground,
      text: templateJson.themeColorCodes.palette.custom.text,
      label: templateJson.themeColorCodes.palette.custom.label,
      disabledLabel: templateJson.themeColorCodes.palette.custom.disabledLabel,
      connector: templateJson.themeColorCodes.palette.custom.connector,
      scrollThumb: templateJson.themeColorCodes.palette.custom.scrollThumb,
      border: templateJson.themeColorCodes.palette.custom.border,
    },
  },

  typography: {
    montserrat: {
      light: {
        fontFamily: templateJson.themeColorCodes.fontFamily.primary,
        fontWeight: "300",
      },
      regular: {
        fontFamily: templateJson.themeColorCodes.fontFamily.primary,
        fontWeight: "400",
      },
      medium: {
        fontFamily: templateJson.themeColorCodes.fontFamily.primary,
        fontWeight: "500",
      },
      semiBold: {
        fontFamily: templateJson.themeColorCodes.fontFamily.primary,
        fontWeight: "600",
      },
      bold: {
        fontFamily: templateJson.themeColorCodes.fontFamily.primary,
        fontWeight: "700",
      },
    },
    montez: {
      regular: {
        fontFamily: templateJson.themeColorCodes.fontFamily.secondary,
        fontWeight: "400",
      },
    },
    fontFamily: templateJson.themeColorCodes.fontFamily.primary,
  },
});

// styles overrides
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "& *": {
            "&::-webkit-scrollbar ": {
              width: "8px",
            },

            "&::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.custom.connector,
              borderRadius: "4px",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.custom.scrollThumb,
              borderRadius: "4px",
            },

            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: theme.palette.custom.label,
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
          color: theme.palette.custom.label,
          "&.Mui-focused": {
            color: theme.palette.custom.label,
          },
          transform: "none",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          marginBottom: "20px",
          "label + &": {
            [theme.breakpoints.down("sm")]: {
              marginTop: "18px",
            },
          },
          height: "56px",
          boxSizing: "border-box",
          borderRadius: 5,
          position: "relative",
          backgroundColor: theme.palette.custom.inputBackground,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: theme.palette.custom.border,
          fontSize: "14px",
          padding: "10px 12px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
            height: "43px",
          },
          "&.Mui-error": {
            borderColor: theme.palette.error.main,
          },
          "& input": {
            margin: "0",
          },
          "&.Mui-focused": {},
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "10px",
          color: theme.palette.error.main,
          fontWeight: "bold",
          position: "absolute",
          bottom: "2px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "8px",
            bottom: "2px",
          },
        },
      },
    },
  },
});

const customTypography = {
  bodyLayout: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "0",
    right: "0",
    background: templateJson.themeColorCodes.palette.bodyLayout.backgroundColor,
  },

  defaultBodyLayout: {
    position: "absolute",
    top: "0",
    bottom: "30px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  flexAlignCenter: {
    display: "flex",
    alignItems: "center",
  },

  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  flexSpaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    ...customTypography,
  },
};

theme = responsiveFontSizes(theme);

export default theme;
