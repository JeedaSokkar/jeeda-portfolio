import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardMedia,
  Button,
  Chip,
  Dialog,
} from "@mui/material";

import { motion } from "framer-motion";
import shopverseImg from "../../img/shopverse.png";
import Math4Joy from "../../img/Math4Joy.png";
import LMSImage from "../../img/LMSImage.png";
import ShopOnlineMain from "../../img/ShopOnlineMain.png";
import Shop from "../../img/ShopMain.png"
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const MotionCard = motion(Card);

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  const projects = [
    {
      title: "ShopVerse",
      description:
        "E-commerce web application built with React and API integration for dynamic product management.",
      image: shopverseImg,
      tech: ["React.js", "Material UI", "React Query", "i18next", "REST API"],
      color: "#8B5CF6",
      github: "https://github.com/JeedaSokkar/Shop-Verse.git",
      live: "https://shop-verse-lled.onrender.com/",
    },
    {
      title: "Math4Joy",
      description:
        "Interactive educational platform for primary school students.",
      image: Math4Joy,
      tech: ["React.js", "Bootstrap", "i18next", "Socket.IO"],
      color: "#06B6D4",
      github: "#",
      live: "#",
    },
{
  title: "Library Management System (LMS)",
  description:
    "A web-based library management system designed to simplify book search, borrowing, and return processes. The platform helps students quickly check book availability while enabling librarians to efficiently manage books, categories, and user records through an organized and user-friendly interface.",
  image: LMSImage,
  tech: ["React.js", "MUI", "JavaScript", "API Integration"],
  color: "#8B5CF6",
  github: "#",
  live: "#",
},
{
  title: "Online-Shop",
  description:
  "A responsive e-commerce web application built with React and Bootstrap, featuring product browsing, category filtering, and API integration for dynamic data handling." , 
   image:ShopOnlineMain,
  tech: ["React.js", "Bootstrap", "CSS", "API Integration"],
  color: "#d7c5ff",
  github: "https://github.com/JeedaSokkar/Online-Shop",
  live: "#",
}
,{
  title: "Tech-Shop Hub", 
  description: "A multi-page electronics e-commerce interface designed with a focus on clean navigation and categorized product layouts. Built using Bootstrap 5 to ensure a fully responsive experience.",
  image: Shop,
  tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"], 
  color: "#451f97",
  github: "https://github.com/JeedaSokkar/Shop",
  live: "#",
}
  ];

  return (
    <Box id="projects" sx={{ py: 14 }}>
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            mb: 8,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "#8B5CF6" }}>PORTFOLIO</Typography>

          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 800 }}>
            Featured Projects
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {projects.map((project, i) => (
            <MotionCard
              key={i}
              whileHover={{ y: -6 }}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                background: "rgba(15,23,42,0.7)",
              }}
            >
              {/* IMAGE */}
              <Box
                sx={{
                  height: 220,
                  cursor: "pointer",
                  overflow: "hidden",
                }}
                onClick={() => {
                  setSelectedImage(project.image);
                  setOpen(true);
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "0.5s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
              </Box>

              {/* CONTENT */}
              <Box sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ color: "#fff", mb: 1 }}>
                  {project.title}
                </Typography>

                <Typography sx={{ color: "#94A3B8", mb: 2 }}>
                  {project.description}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.tech.map((t, i) => (
                    <Chip
                      key={i}
                      label={t}
                      size="small"
                      sx={{
                        background: "rgba(255,255,255,0.06)",
                        color: "#fff",
                      }}
                    />
                  ))}
                </Stack>

                {/* <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={project.live}
                  >
                    Live
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                  >
                    Code
                  </Button>
                </Stack>*/}
              </Box>
            </MotionCard>
          ))}
        </Box>

        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">
          <Box
            sx={{
              background: "#0f172a",
              p: 1,
            }}
          >
            <img
              src={selectedImage}
              alt="preview"
              style={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
