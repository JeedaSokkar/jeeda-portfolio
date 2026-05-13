import React from "react";
import { Box, Container, Typography, Stack, Card } from "@mui/material";
import { motion } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BrushIcon from "@mui/icons-material/Brush";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const About = () => {
  const cards = [
    {
      icon: <EngineeringIcon sx={{ fontSize: 30, color: "#8B5CF6" }} />,
      title: "Engineering Mindset",
      desc: "Computer Systems Engineering background with system thinking skills.",
      color: "#8B5CF6",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 30, color: "#06B6D4" }} />,
      title: "Frontend Development",
      desc: "Building responsive web applications using React.js and modern frontend technologies.",
      color: "#06B6D4",
    },
    {
      icon: <BrushIcon sx={{ fontSize: 30, color: "#A78BFA" }} />,
      title: "UI / UX Focus",
      desc: "Designing intuitive and user-focused interfaces with modern UI principles.",
      color: "#A78BFA",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 14,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND GLOW */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(139,92,246,0.15)",
          filter: "blur(140px)",
          top: 0,
          left: -120,
        }}
      />

      <Container maxWidth="lg">

        {/* HEADER */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            textAlign: "center",
            maxWidth: "750px",
            mx: "auto",
            mb: 8,
          }}
        >
          <Typography
            sx={{
              color: "#8B5CF6",
              letterSpacing: "3px",
              fontSize: "0.9rem",
              mb: 1,
            }}
          >
            INTRODUCTION
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(135deg,#fff,#A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: "1.1rem",
              lineHeight: 1.9,
            }}
          >
            I am a Computer Systems Engineer and Frontend Developer who bridges
            the gap between engineering logic and modern UI development.
            I specialize in building scalable, responsive, and user-focused
            web applications using React.js and modern frontend technologies.
          </Typography>
        </MotionBox>

        {/* CARDS */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
        >
          {cards.map((item, i) => (
            <MotionCard
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              sx={{
                flex: 1,
                p: 4,
                borderRadius: 4,
                position: "relative",
                background: "rgba(15,23,42,0.65)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                },
              }}
            >
              <Box sx={{ mb: 2 }}>
                {item.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </Typography>
            </MotionCard>
          ))}
        </Stack>

      </Container>
    </Box>
  );
};

export default About;