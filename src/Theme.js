import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#8B5CF6",
      light: "#A78BFA",
      dark: "#6D28D9",
    },

    secondary: {
      main: "#06B6D4",
      light: "#67E8F9",
      dark: "#0891B2",
    },

    background: {
      default: "#050816",
      paper: "rgba(15, 23, 42, 0.75)",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },

    divider: "rgba(255,255,255,0.08)",
  },

  typography: {
    fontFamily: "'Outfit', sans-serif",

    h1: {
      fontWeight: 800,
      fontSize: "5rem",
      lineHeight: 1.1,
      letterSpacing: "-2px",
    },

    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
    },

    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
      color: "#94A3B8",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem",
    },
  },

  shape: {
    borderRadius: 24,
  },

  shadows: [
    "none",
    "0px 4px 20px rgba(0,0,0,0.15)",
    "0px 8px 30px rgba(139,92,246,0.12)",
    "0px 12px 40px rgba(139,92,246,0.18)",
    "0px 16px 50px rgba(139,92,246,0.25)",
    ...Array(20).fill("0px 16px 60px rgba(139,92,246,0.18)"),
  ],

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top left, rgba(139,92,246,0.15), transparent 30%), radial-gradient(circle at bottom right, rgba(6,182,212,0.12), transparent 30%), #050816",
          minHeight: "100vh",
          overflowX: "hidden",
        },

        "*::-webkit-scrollbar": {
          width: "8px",
        },

        "*::-webkit-scrollbar-thumb": {
          background:
            "linear-gradient(180deg, #8B5CF6 0%, #06B6D4 100%)",
          borderRadius: "10px",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 40px rgba(139,92,246,0.12)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(15, 23, 42, 0.72)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 0 40px rgba(139,92,246,0.08)",
          backgroundImage: "none",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(15, 23, 42, 0.72)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.35s ease",

          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 0 50px rgba(139,92,246,0.22)",
            border: "1px solid rgba(139,92,246,0.25)",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          padding: "12px 28px",
          fontWeight: 600,
          transition: "all 0.3s ease",
        },

        containedPrimary: {
          background:
            "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
          boxShadow: "0 0 30px rgba(139,92,246,0.35)",

          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 0 45px rgba(139,92,246,0.55)",
          },
        },

        outlinedPrimary: {
          border: "1px solid rgba(139,92,246,0.5)",
          color: "#fff",

          "&:hover": {
            background: "rgba(139,92,246,0.08)",
            border: "1px solid #8B5CF6",
          },
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          position: "relative",
          zIndex: 2,
        },
      },
    },
  },
});

export default theme;