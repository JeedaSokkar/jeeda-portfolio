import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#8B5CF6",
    },

    secondary: {
      main: "#06B6D4",
    },

    background: {
      default: "#050816",
      paper: "#0F172A",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#94A3B8",
    },
  },

  typography: {
    fontFamily: "'Outfit', sans-serif",

    h1: {
      fontWeight: 700,
      fontSize: "4rem",
    },

    h2: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 20,
  },
});

export default theme;