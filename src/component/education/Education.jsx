import React from "react";
import { Box, Typography, Card, Stack, Divider } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Education() {
  const certifications = [
    {
      title: "Front-End Developer Course",
      institution: "Knowledge Academy",
      date: "Aug 2025",
    },
    {
      title: "Java & Data Structures Course",
      institution: "Arab Center for IT",
      date: "2023",
    },
  ];

  return (
    <Box
      id="education"
      sx={{
        py: 12,
        px: 3,
        color: "#fff",
        position: "relative",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          sx={{
            color: "#8B5CF6",
            letterSpacing: 3,
            fontSize: "0.85rem",
            mb: 1,
            fontWeight: 600,
          }}
        >
          ACADEMIC BACKGROUND & CERTIFICATIONS
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#fff",
          }}
        >
          Education
        </Typography>
      </Box>

      <Stack spacing={4} alignItems="center">
      
        <Card
          sx={{
            width: "100%",
            maxWidth: 850,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: "rgba(15,23,42,0.65)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.06)",
            transition: "0.4s",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 0 40px rgba(139,92,246,0.25)",
              border: "1px solid rgba(139,92,246,0.3)",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              height: "4px",
              width: "100%",
              background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)",
            },
          }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="flex-start" mb={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <SchoolIcon sx={{ color: "#8B5CF6", fontSize: 34 }} />
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff" }}>
                Bachelor of Computer Systems Engineering
              </Typography>
            </Stack>
          </Stack>

          <Typography sx={{ color: "#94A3B8", mb: 2, fontSize: "1.1rem", fontWeight: 500 }}>
            Palestine Technical University – Kadoorie
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 4 }} sx={{ mb: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon sx={{ fontSize: 18, color: "#8B5CF6" }} />
              <Typography sx={{ color: "#94A3B8" }}>Tulkarm, Palestine</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonthIcon sx={{ fontSize: 18, color: "#8B5CF6" }} />
              <Typography sx={{ color: "#94A3B8" }}>2021 – 2026</Typography>
            </Stack>
          </Stack>

          {/*<Typography sx={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1rem" }}>
            Computer Systems Engineering student focused on software engineering, web development, and modern technologies. 
            Gained expertise in <strong>Java, C++, and SQL Server</strong> alongside a deep specialization in 
            <strong> React.js and Material UI</strong> for building high-quality user interfaces.
          </Typography>
*/}
          <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

          {/* CERTIFICATIONS SUB-SECTION */}
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
            <VerifiedIcon sx={{ color: "#8B5CF6" }} /> Certifications
          </Typography>

          <Stack spacing={3}>
            {certifications.map((cert, index) => (
              <Box key={index} sx={{ position: "relative", pl: 2, borderLeft: "2px solid rgba(139,92,246,0.3)" }}>
                <Typography sx={{ fontWeight: 600, color: "#fff" }}>{cert.title}</Typography>
                <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
                  <Typography variant="body2" sx={{ color: "#94A3B8" }}>{cert.institution}</Typography>
                  <Typography variant="body2" sx={{ color: "#8B5CF6", fontWeight: 500 }}>{cert.date}</Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}