import React from "react";

import { Container } from "./styles";
import CVCelsoRicardoMilleo from "../../download/CVCelsoRicardoMilleo.pdf";
const Apresentation = () => {
  return (
    <Container>
      <h2>Bem vindo</h2>
      <h1>Eu sou Celso</h1>
      <h3>Front-end Developer</h3>
      <a href={CVCelsoRicardoMilleo}>
        <button data-aos="fade-right">Download CV</button>
      </a>
    </Container>
  );
};

export default Apresentation;
