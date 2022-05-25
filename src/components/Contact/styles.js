import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  border-top: 2px solid #fff;
  font-family: "Poppins";
  color: #fff;
  width: 100%;
  padding: 5px 5px;
  box-sizing: border-box;
  overflow: hidden;
  h1 {
    margin-left: 20px;
    margin-top: 15px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 40%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    margin-left: 30px;
    margin-top: 15px;
  }
  small {
    font-size: 9px;
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    .allSkills {
      width: 100%;
      margin: 0 auto;
      padding: 0 10%;
    }
    h1 {
      margin-left: 10%;
    }
    p {
      margin-left: 13%;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      margin-left: 20%;
    }
    p {
      margin-left: 23%;
    }
  }
  @media screen and (min-width: 1440px) {
    h1 {
      margin-left: 15%;
    }
    p {
      margin-left: 18%;
    }
    div {
      transform: scale(1.4);
    }
  }
`;
