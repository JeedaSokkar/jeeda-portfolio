import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "#050816",
        fontFamily: "'Poppins', sans-serif",
        marginY: "15px",
        padding: "10px",
      }}
    >
      {/* BACKGROUND LIGHTS - الأمواج الضوئية الخلفية */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(139,92,246,0.18)",
          filter: "blur(120px)",
          top: -100,
          left: -100,
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "rgba(6,182,212,0.16)",
          filter: "blur(120px)",
          bottom: -100,
          right: -100,
          animation: "float2 10s ease-in-out infinite",
        }}
      />

      {/* GRID BACKGROUND - شبكة الخلفية */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center, black 35%, transparent 90%)",
        }}
      />

      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={8}
        >
          {/* LEFT SIDE - المحتوى النصي */}
          <MotionBox
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            sx={{ maxWidth: 650, zIndex: 2 }}
          >
            {/* BADGE */}
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.5,
                py: 1,
                borderRadius: "999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#06B6D4",
                  boxShadow: "0 0 12px #06B6D4",
                }}
              />
              <Typography
                sx={{ color: "#E2E8F0", fontSize: "0.9rem", fontWeight: 500 }}
              >
                Available For New Opportunities
              </Typography>
            </MotionBox>

            {/* TITLE */}
            <MotionTypography
              variant="h1"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              sx={{
                fontSize: { xs: "3rem", md: "5.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#fff",
                mb: 2,
              }}
            >
              Frontend
              <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg,#8B5CF6 0%,#06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Developer
              </Box>
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              sx={{
                mt: 1,
                mb: 3,
                fontSize: "1.1rem",
                letterSpacing: "4px",
                color: "#CBD5E1",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              JEEDA SOKKAR | Frontend Developer & Computer Systems Engineer{" "}
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              sx={{
                color: "#94A3B8",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                maxWidth: 550,
                mb: 5,
              }}
            >
              Frontend Developer focused on building modern and responsive web
              applications using React.js. Passionate about creating clean user
              interfaces and smooth user experiences with attention to detail
              and usability.
            </MotionTypography>

            {/* BUTTONS */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Stack direction="row" spacing={2} mb={4}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg,#8B5CF6,#06B6D4)",
                    px: 4,
                    py: 1.6,
                    borderRadius: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 10px 30px rgba(139,92,246,0.3)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 15px 40px rgba(139,92,246,0.4)",
                    },
                  }}
                  href="#projects"
                >
                  View My Work
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    px: 4,
                    py: 1.6,
                    borderRadius: "14px",
                    textTransform: "none",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      borderColor: "#8B5CF6",
                      background: "rgba(139,92,246,0.1)",
                      transform: "translateY(-4px)",
                    },
                  }}
                  href="/public/JeedaSokkar_CV.pdf"
                >
                  Download CV
                </Button>
              </Stack>
            </MotionBox>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            sx={{
              position: "relative",
              width: { xs: 260, md: 420 },
              height: { xs: 260, md: 420 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >

            <Box
              sx={{
                position: "absolute",
                width: "115%",
                height: "115%",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#8B5CF6,#06B6D4,#8B5CF6)",
                filter: "blur(55px)",
                opacity: 0.35,
                animation: "spinSlow 18s linear infinite",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                padding: "3px",
                background: "linear-gradient(135deg,#8B5CF6,#06B6D4,#8B5CF6)",
                animation: "spin 12s linear infinite",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#050816",
                }}
              />
            </Box>

            <Avatar
              src="../../../src/img/Jeeda.jpeg"
              sx={{
                width: "78%",
                height: "78%",
                zIndex: 2,
                border: "3px solid rgba(255,255,255,0.12)",
                boxShadow: "0 0 40px rgba(139,92,246,0.25)",
                animation: "float 6s ease-in-out infinite",
              }}
            />

            {[
              { name: "React.js", top: 25, left: 10 },
              { name: "MUI", top: 70, right: 5 },
              { name: "Frontend", bottom: 20, left: 10 },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  px: 1.5,
                  py: 0.7,
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  zIndex: 3,
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                  animation: `float ${5 + i}s ease-in-out infinite`,
                }}
              >
                {item.name}
              </Box>
            ))}
          </MotionBox>
        </Stack>
      </Container>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes spinSlow {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }

          @keyframes float2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(30px); }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
