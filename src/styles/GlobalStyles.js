import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
  }
  body{
      background-color: #1F1F1F;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    border-radius: 9px;
    width: 6px;
    background-color: #1f1f1f;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 9px;
    background-color: gray;
  }

  @media screen and (max-width: 768px) {
    *::-webkit-scrollbar-thumb {
      background-color: #1f1f1f;
      display: hidden;
  }
  *::-webkit-scrollbar {
    border-radius: 9px;
    width: 6px;
    background-color: #1f1f1f;
    display: hidden;
  }
}
@media screen and (min-width: 1440px) {
    body{
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1600px) {
    body{
      width: 80%;
      height: 100vh;
      margin: 0 auto;
    }
  }
`;
