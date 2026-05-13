import React from "react";
import { Container } from "@mui/material";
import SecHeader from "../../component/secHeader/SecHeader"
import About from "../../component/about/About";
export default function Home() {
  return (
    <>
      <Container>
        <SecHeader/>
 <About/>
      </Container>
    </>
  );
}