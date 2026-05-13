import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  Card,
} from "@mui/material";


import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const SocialIcon = ({ icon, href, color }) => (
  <IconButton
    href={href}
    target="_blank"
    sx={{
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#CBD5E1",
      transition: "0.3s",
      "&:hover": {
        background: color,
        color: "#fff",
        transform: "translateY(-4px)",
        boxShadow: `0 10px 30px ${color}40`,
      },
    }}
  >
    {icon}
  </IconButton>
);
export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 15,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(139,92,246,0.15)",
          filter: "blur(140px)",
          top: -120,
          left: -120,
        }}
      />

      <Typography
        variant="overline"
        sx={{
          color: "#8B5CF6",
          letterSpacing: 4,
          fontWeight: 600,
        }}
      >
        GET IN TOUCH
      </Typography>

      <Typography
        variant="h3"
        fontWeight={900}
        sx={{ mt: 1, color: "#fff" }}
      >
        Let’s Work Together
      </Typography>

      <Typography
        sx={{
          maxWidth: 650,
          mx: "auto",
          mt: 2,
          mb: 4,
          color: "#94A3B8",
          lineHeight: 1.8,
        }}
      >
        Whether you have a project idea, collaboration, or opportunity —
        I’m always open to meaningful work and new challenges.
      </Typography>

      {/* Card */}
      <Card
        sx={{
          maxWidth: 850,
          mx: "auto",
          p: { xs: 4, md: 8 },
          borderRadius: 5,
          background: "rgba(15,23,42,0.7)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          transition: "0.4s",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 25px 60px rgba(139,92,246,0.15)",
          },
        }}
      >
        <Stack spacing={4} alignItems="center">

          {/* Email Button */}
          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            href="mailto:jeedasokkar2003@gmail.com"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 700,
              background: "linear-gradient(135deg,#8B5CF6,#06B6D4)",
            }}
          >
            Send Email
          </Button>

          <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem" }}>
            Or connect with me on social platforms
          </Typography>

          <Stack direction="row" spacing={2}>
            <SocialIcon
              icon={<LinkedInIcon />}
              href="https://linkedin.com/in/jeedasokkar"
              color="#0A66C2"
            />
            <SocialIcon
              icon={<GitHubIcon />}
              href="https://github.com/JeedaSokkar"
              color="#fff"
            />
            <SocialIcon
              icon={<WhatsAppIcon />}
              href="https://wa.me/970595205874"
              color="#25D366"
            />
          </Stack>

       
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnIcon sx={{ color: "#8B5CF6" }} />
            <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
               Qalqilya, Palestine
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

