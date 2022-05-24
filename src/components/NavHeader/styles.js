import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  width: 50%;
  height: 100px;
  background-color: gray;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  right: 15%;
  ul li {
    list-style: none;
    width: 100%;
    text-align: center;
  }
  ul {
    width: 100%;
  }
  ul li:hover {
    background-color: #494949;
  }
  a {
    text-decoration: none;
    color: white;
    font-family: "Poppins", sans-serif;
  }
  div {
    width: 8px;
    height: 8px;
    background-color: gray;
    position: absolute;
    top: 0;
    right: 0;
  }
  cursor: pointer;
  display: none;
  ${({ isVisible }) => {
    if (isVisible) {
      return css`
        display: flex;
        animation: menuIn 0.3s ease-in-out forwards;
      `;
    } else {
      return css`
        display: flex;
        animation: menuOut 0.3s ease-in-out forwards;
      `;
    }
  }}

  @keyframes menuIn {
    from {
      clip-path: circle(0% at 50% 50%);
      filter: blur(10px);
      opacity: 0;
    }
    to {
      clip-path: circle(100% at 50% 50%);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes menuOut {
    from {
      clip-path: circle(100% at 50% 50%);
      filter: blur(0px);
      opacity: 1;
    }
    to {
      clip-path: circle(0% at 50% 50%);
      filter: blur(10px);
      opacity: 0;
      display: none;
    }
  }
`;
