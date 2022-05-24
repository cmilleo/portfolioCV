import React, { useEffect } from "react";
import { Container } from "./styles";
import profile2 from "../../img/profile2.png";
import "aos/dist/aos.css";
import Aos from "aos";
const Sobre = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <img data-aos="fade-up" src={profile2} alt="Foto de Celso" />
      <h1 data-aos="fade-right">Sobre</h1>
      <p data-aos="fade-left">
        Sou um Desenvolvedor FrontEnd que se adapta facilmente às novas
        tecnologias e se aprimora constantemente.
        <br /> Atualmente estou estudando para me tornar um Full Stack
        Developer.
        <br /> Durante este curso, aprendi muitas novas tecnologias,
        especialmente na área de desenvolvimento FrontEnd.
      </p>
      <div data-aos="fade-right"></div>
    </Container>
  );
};

export default Sobre;
