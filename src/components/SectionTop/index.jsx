import React from "react";

import { Container } from "./styles";
import ProfileImg from "../../img/profile.png";
const SectionTop = () => {
  return (
    <Container>
      <img src={ProfileImg} alt="Foto de Celso" />
    </Container>
  );
};

export default SectionTop;
