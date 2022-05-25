import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Container } from "./styles";
import NavHeader from "../NavHeader";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleToggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    <>
      <Container>
        <h1>Celso Ricardo Milleo</h1>
        <button onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </Container>
      <NavHeader visible={isOpen} />
    </>
  );
}

export default Header;
