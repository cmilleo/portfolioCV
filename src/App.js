import React, { useEffect } from "react";
import Apresentation from "./components/Apresentation/index.jsx";
import Header from "./components/Header/index.jsx";
import SectionTop from "./components/SectionTop/index.jsx";
import Aos from "aos";
// import "aos/dist/aos.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import Sobre from "./components/Sobre/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Cursos from "./components/Cursos/index.jsx";
import Contact from "./components/Contact/index.jsx";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <SectionTop />
      <Apresentation />
      <Sobre />
      <Skills />
      <Cursos />
      <Contact />
      <GlobalStyles />
    </>
  );
}

export default App;
