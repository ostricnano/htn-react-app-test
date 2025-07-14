import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          
        },
        outlinedPrimary: {},
        textPrimary: {},
      },
    },
  },
  palette: {
    primary: {
      main: "#0F1014",
      light: "#2E2E2E",
    },
    secondary: {
      main: "#f44336",
    },
    warning: {
      main: "#FFCC0C",
    },
    success: {
      main: "#0CC20A",
    },
  },
  typography: {
    h1: {
      fontFamily: "N27, sans-serif",
      fontWeight: 700,
      color: "#fff",
      fontSize: "40px",
    },
    h2: {
      fontFamily: "N27, sans-serif",
      fontWeight: 400,
      color: "#fff",
      fontSize: "30px",
    },
    h3: {
      fontFamily: "N27, sans-serif",
      fontWeight: 500,
      color: "#fff",
      fontSize: "28px",
    },
    h4: {
      fontFamily: "N27, sans-serif",
      fontWeight: 400,
      color: "#fff",
      fontSize: "24px",
    },
    h5: {
      fontFamily: "N27, sans-serif",
      fontWeight: 500,
      color: "#fff",
      fontSize: "24px",
    },
    subtitle1: {
      fontFamily: "N27, sans-serif",
      fontWeight: 500,
      color: "#fff",
      fontSize: "18px",
    },
    subtitle2: {
      fontFamily: "N27, sans-serif",
      fontWeight: 500,
      color: "#fff",
      fontSize: "16px",
    },
    body2: {
      fontFamily: "N27, sans-serif",
      fontWeight: 400,
      color: "#fff",
      fontSize: "16px",
    },
  },
});
