import React, { useEffect } from "react";
import Apresentation from "./components/Apresentation/index.jsx";
import Header from "./components/Header/index.jsx";
import SectionTop from "./components/SectionTop/index.jsx";
import Aos from "aos";
import { GlobalStyles } from "./styles/GlobalStyles";
import Sobre from "./components/Sobre/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Cursos from "./components/Cursos/index.jsx";
import Contact from "./components/Contact/index.jsx";
import { Container } from "./styles/styles";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Header />
      <SectionTop />
      <Apresentation />
      <Sobre />
      <section className="section2">
        <Skills />
        <Cursos />
      </section>
      <Contact />
      <GlobalStyles />
    </Container>
  );
}

export default App;
