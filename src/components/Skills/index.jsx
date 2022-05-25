import React, { useEffect, useState } from "react";
import ProgressCircle from "./ProgressCircle";
import ProgressCircle2 from "./ProgressCircle2";
import ProgressCircle3 from "./ProgressCircle3";
import { Container } from "./styles";

import Aos from "aos";
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [isVisiblity, setIsVisiblity] = useState(false);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      return entries[0].isIntersecting
        ? setIsVisiblity(true)
        : setIsVisiblity(false);
    });
    intersectionObserver.observe(document.querySelector("#skillProgress"));
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);
  return (
    <Container>
      <h1 data-aos="fade-left">Hard Skills</h1>
      <div className="allSkills">
        <div className="skill">
          <ProgressCircle progress={80} isVisiblity={isVisiblity} />
          <h2>JavaScript</h2>
        </div>
        <div className="skill">
          <ProgressCircle2 progress2={65} isVisiblity={isVisiblity} />
          <h2>Css</h2>
        </div>
        <div className="skill">
          <ProgressCircle3 progress={40} isVisiblity={isVisiblity} />
          <h2>React</h2>
        </div>
      </div>
      <div id="skillProgress"></div>
    </Container>
  );
};

export default Skills;
