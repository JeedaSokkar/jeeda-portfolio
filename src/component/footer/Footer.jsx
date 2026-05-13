import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        position: "relative",
        background: "rgba(15,23,42,0.4)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
    
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)",
        }}
      />

      <Divider sx={{ mb: 3, opacity: 0.1 }} />

      {/* Name */}
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 700,
          letterSpacing: 1,
          mb: 1,
        }}
      >
        © {new Date().getFullYear()} Jeeda Sokkar
      </Typography>

      <Stack direction="row" spacing={1} justifyContent="center" mt={1}>
        <Typography
          variant="caption"
          sx={{
            color: "#94A3B8",
            letterSpacing: 1,
          }}
        >
          Built with React • Material UI • Framer Motion
        </Typography>
      </Stack>
      <Typography
        variant="caption"
        sx={{
          display: "block",
          mt: 2,
          color: "#8B5CF6",
          fontSize: "0.75rem",
          letterSpacing: 2,
        }}
      >
        FRONTEND DEVELOPER PORTFOLIO
      </Typography>
    </Box>
  );
}