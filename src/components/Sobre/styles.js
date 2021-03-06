import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  margin: 0 auto;
  margin-top: 80px;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow: hidden;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 45.8075px;
    line-height: 69px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.05em;
    overflow: hidden;
    width: 100%;
  }
  img {
    height: 280px;
    margin: 0 auto;
  }
  div {
    height: 2px;
    background-color: #fff;
    width: 40%;
    margin-top: 50px;
    overflow-y: hidden;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-top: 55%;
    img {
      height: 320px;
    }
    p {
      font-size: 14px;
    }
    div {
      margin-top: 25%;
    }
  }
  @media screen and (min-width: 1280px) {
    margin-top: 40%;
  }
  @media screen and (min-width: 1440px) {
    img {
      height: 400px;
    }
    width: 70%;
    div {
      margin-top: 40%;
    }
  }
`;
