import React from "react";
import { Container } from "@mui/material";
import SecHeader from "../../component/secHeader/SecHeader"
import About from "../../component/about/About";
import Skills from "../../component/skills/Skills";
import Projects from "../../component/projects/Project";
export default function Home() {
  return (
    <>
      <Container>
        <SecHeader/>
 <About/>
 <Skills/>
 <Projects/>
      </Container>
    </>
  );
}