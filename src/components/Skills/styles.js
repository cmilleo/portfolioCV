import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  color: #fff;
  margin-top: 10px;
  width: 100%;
  margin: 0 auto;
  overflow-y: hidden;
  box-sizing: border-box;
  h1 {
    font-weight: 600;
    font-size: 41.9149px;
    line-height: 63px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-left: 10%;
  }
  .skill {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .allSkills {
    display: flex;
    overflow-y: auto;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #1f1f1f;
  }
  ::-webkit-scrollbar {
    background-color: #1f1f1f;
  }
  @media screen and (min-width: 768px) {
    .allSkills {
      width: 100%;
      margin: 0 auto;
      padding: 0 10%;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    justify-content: center;
    width: 550px;
    .allSkills {
      display: flex;
      align-items: center;
      justify-content: space-around;
      overflow: hidden;
      transform: scale(0.9);
      margin-left: 5%;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 750px;
    .allSkills {
      width: 750px;
      padding: 0;
    }
  }
`;
