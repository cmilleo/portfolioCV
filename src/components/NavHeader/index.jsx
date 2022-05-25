import React from "react";

import { Container } from "./styles";
import CVCelsoRicardoMilleo from "../../download/CVCelsoRicardoMilleo.pdf";
const NavHeader = ({ visible }) => {
  return (
    <Container isVisible={visible}>
      <div></div>
      <ul>
        <li>
          <a href="https://github.com/cmilleo" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/celsoricardomilleo/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href={CVCelsoRicardoMilleo}
            download={CVCelsoRicardoMilleo}
            target="_blank"
            rel="noreferrer"
          >
            Curriculo
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default NavHeader;
