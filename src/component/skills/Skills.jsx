import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  Chip,
} from "@mui/material";

import { motion } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const MotionCard = motion(Card);

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <CodeIcon sx={{ fontSize: 32, color: "#8B5CF6" }} />,
    color: "#8B5CF6",
    flex: { xs: "100%", md: "60%", lg: "65%" }, // أكبر لأن مهاراتها أكتر
    skills: [
      "React.js", "JavaScript", "HTML5", "CSS3", 
      "Tailwind CSS", "Material UI", "Bootstrap", "Responsive Design"
    ],
  },
  {
    title: "Programming",
    icon: <TerminalIcon sx={{ fontSize: 32, color: "#06B6D4" }} />,
    color: "#06B6D4",
    flex: { xs: "100%", md: "35%", lg: "30%" },
    skills: ["Java", "C++", "Data Structures"],
  },
  {
    title: "Database",
    icon: <StorageIcon sx={{ fontSize: 32, color: "#A78BFA" }} />,
    color: "#A78BFA",
    flex: { xs: "100%", md: "35%", lg: "30%" },
    skills: ["SQL Server"],
  },
  {
    title: "Tools & Design",
    icon: <DesignServicesIcon sx={{ fontSize: 32, color: "#67E8F9" }} />,
    color: "#67E8F9",
    flex: { xs: "100%", md: "60%", lg: "65%" },
    skills: ["GitHub", "VS Code", "Git"],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        position: "relative",
        background: "#050816",
      }}
    >
      <Container maxWidth="xl">
     <Stack
  spacing={2}
  alignItems="center"
  justifyContent="center"
  sx={{
    mb: 8,
    textAlign: "center",
    width: "100%",
  }}
>
  <Typography
    sx={{
      color: "#8B5CF6",
      letterSpacing: "4px",
      fontSize: "0.85rem",
      fontWeight: 600,
    }}
  >
    MY EXPERTISE
  </Typography>

  <Typography
    variant="h2"
    sx={{
      color: "#fff",
      fontWeight: 900,
      fontSize: { xs: "2.5rem", md: "3.5rem" },
    }}
  >
    Tech Stack
  </Typography>
</Stack>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {skillCategories.map((category, index) => (
            <MotionCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              sx={{
                flex: category.flex, 
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                background: "rgba(30, 41, 59, 0.4)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                transition: "all 0.3s ease",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
                },

                "&:hover": {
                  border: `1px solid ${category.color}44`,
                  boxShadow: `0 10px 40px ${category.color}15`,
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                {category.icon}
                <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700 }}>
                  {category.title}
                </Typography>
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                {category.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    sx={{
                      color: "#CBD5E1",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      px: 1,
                      py: 2.5,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      borderRadius: "12px",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#fff",
                        background: `${category.color}22`,
                        borderColor: category.color,
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                ))}
              </Box>
            </MotionCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;