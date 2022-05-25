import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;

  line-height: 25px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  width: 80%;
  margin: 0 auto;
  color: #ffffff;
  margin-top: 50px;
  h2 {
    width: 50%;
    font-size: 16.9892px;
    border-bottom: 2px solid #fff;
  }
  img {
    width: 70px;
    border-radius: 50%;
  }
  h3 {
    font-size: 14px;
  }
  span {
    font-size: 12px;
  }
  .course,
  .scholl {
    display: flex;
    line-height: initial;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
  }
  .scholl div .material-symbols-outlined {
    color: #fff;
    font-size: 50px;
  }
  .scholl .iconClass {
    min-width: 70px;
    min-height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000ff;
  }
  .content {
    display: flex;
    flex-direction: column;
    background-color: none;
  }
  @media screen and (min-width: 1024px) {
    max-width: 350px;
    margin-top: 70px;
  }
  @media screen and (min-width: 1200px) {
    h2 {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 70%;
  }
`;
