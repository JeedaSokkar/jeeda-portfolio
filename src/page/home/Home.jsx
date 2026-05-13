import React from "react";
import { Box, Container } from "@mui/material";
import SecHeader from "../../component/secHeader/SecHeader";
import About from "../../component/about/About";
import Skills from "../../component/skills/Skills";
import Projects from "../../component/projects/Project";
import Education from "../../component/education/Education";
import Contact from "../../component/contact/Contact";
export default function Home() {
  return (
    <Box id="home">
      <Container>
        <SecHeader />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </Container>
    </Box>
  );
}
