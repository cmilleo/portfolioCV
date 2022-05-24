import React from "react";

import { Container } from "./styles";
import CVCelsoRicardoMilleo from "../../download/CVCelsoRicardoMilleo.pdf";
const NavHeader = ({ visible }) => {
  return (
    <Container isVisible={visible}>
      <div></div>
      <ul>
        <li>
          <a href="https://github.com/cmilleo">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/celsoricardomilleo/">Linkedin</a>
        </li>
        <li>
          <a href={CVCelsoRicardoMilleo} download={CVCelsoRicardoMilleo}>
            Curriculo
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default NavHeader;
