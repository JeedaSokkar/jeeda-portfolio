import React from "react";
import { Box, Typography, Card, TextField, Button, Stack } from "@mui/material";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        px: 3,
        color: "#fff",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={6}
      >
        Contact Me
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {/* Left Info Card */}
        <Card
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 400,
            borderRadius: 4,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Get in Touch
          </Typography>

          <Stack spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon sx={{ color: "#8B5CF6" }} />
              <Typography>jeedasokkar2003@gmail.com</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon sx={{ color: "#8B5CF6" }} />
              <Typography>059-520-5874</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon sx={{ color: "#8B5CF6" }} />
              <Typography>Qalqilya, Palestine</Typography>
            </Stack>
          </Stack>
        </Card>

        {/* Right Form */}
        <Card
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 500,
            borderRadius: 4,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Send Message
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "#8B5CF6" },
                },
              }}
            />

            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "#8B5CF6" },
                },
              }}
            />

            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                textarea: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "#8B5CF6" },
                },
              }}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                background: "linear-gradient(135deg,#8B5CF6,#06B6D4)",
                borderRadius: 3,
                py: 1.5,
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  transform: "translateY(-3px)",
                },
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}