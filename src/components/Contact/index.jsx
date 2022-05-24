import React, { useEffect } from "react";

import { Container } from "./styles";
import "aos/dist/aos.css";
import Aos from "aos";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container data-aos="fade-up">
      <h1>Contato</h1>
      <p>
        <strong>Email:</strong> celsomilleo@hotmail.com
      </p>
      <p>
        <strong>Telefone:</strong>(42)98885-7181
      </p>
      <div>
        <a href="https://github.com/cmilleo">
          <BsGithub size={30} color="#fff" />
        </a>
        <a href="https://www.linkedin.com/in/celsoricardomilleo/">
          <BsLinkedin size={30} color="#fff" />
        </a>
        <a href="https://contate.me/celso.milleo">
          <BsWhatsapp size={30} color="#fff" />
        </a>
      </div>
      <small>Feito por Celso Ricardo Milleo - usando React</small>
    </Container>
  );
};

export default Contact;
