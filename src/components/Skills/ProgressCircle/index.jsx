import React from "react";

import { Container } from "./styles";

const ProgressCircle = ({ progress, isVisiblity }) => {
  const ProgressDefine = () => {
    return 472 - 472 * (progress / 100);
  };
  return (
    <Container progress={ProgressDefine} isVisiblity={isVisiblity}>
      <div className="outer">
        <div className="inner">
          <div className="progress">{progress}%</div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#1167e9" />
            <stop offset="100%" stop-color="#0d3a7e" />
          </linearGradient>
        </defs>
        <circle
          className="circle1"
          cx="80"
          cy="80"
          r="70"
          stroke-linecap="round"
        />
      </svg>
    </Container>
  );
};

export default ProgressCircle;
