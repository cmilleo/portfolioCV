import React from "react";

import { Container } from "./styles";

const ProgressCircle2 = ({ progress2, isVisiblity }) => {
  const ProgressDefine2 = () => {
    return 472 - 472 * (progress2 / 100);
  };
  return (
    <Container progress2={ProgressDefine2} isVisiblity={isVisiblity}>
      <div className="outer">
        <div className="inner">
          <div className="progress">{progress2}%</div>
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
          className="circle2"
          cx="80"
          cy="80"
          r="70"
          stroke-linecap="round"
        />
      </svg>
    </Container>
  );
};

export default ProgressCircle2;
