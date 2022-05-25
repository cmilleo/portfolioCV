import React from "react";
import CVCelsoRicardoMilleo from "../../download/CVCelsoRicardoMilleo.pdf";
import { Container } from "./styles.js";
const Apresentation = () => {
  return (
    <Container>
      <h2>Bem vindo</h2>
      <h1>Eu sou Celso</h1>
      <h3>Front-end Developer</h3>
      <a href={CVCelsoRicardoMilleo} target="_blank" rel="noreferrer">
        <button data-aos="fade-right">Download CV</button>
      </a>
    </Container>
  );
};

export default Apresentation;
