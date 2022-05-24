import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  width: 160px;
  height: 160px;
  /* background-color: cornflowerblue; */
  position: relative;
  .outer {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 6px 6px 10px -1px rgba(255, 255, 255, 0.15),
      -6px -6px 10px -1px rgba(0, 0, 0, 0.7);
  }
  .inner {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 4px 4px 6px -1px rgba(255, 255, 255, 0.2),
      inset -4px -4px 6px -1px rgba(0, 0, 0, 0.7),
      -0.5px -0.5px 0px rgba(0, 0, 0, 1),
      0.5px 0.5px 0px rgba(255, 255, 255, 0.15),
      0px 12px 10px -10px rgba(255, 255, 255, 0.05);
  }
  .progress {
    font-weight: 600;
    font-size: 30px;
    font-family: "Poppins";
    color: #fff;
  }
  .circle2 {
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 472;
    stroke-dashoffset: 472;
    ${({ isVisiblity }) => {
      if (isVisiblity) {
        return css`
          animation: anim2 1s linear forwards;
        `;
      } else {
        return css`
          animation: animBack2 1s linear backwards;
        `;
      }
    }}
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  @keyframes anim2 {
    100% {
      stroke-dashoffset: ${({ progress2 }) => progress2};
    }
  }
  @keyframes animBack2 {
    0% {
      stroke-dashoffset: ${({ progress2 }) => progress2};
    }
  }
`;
