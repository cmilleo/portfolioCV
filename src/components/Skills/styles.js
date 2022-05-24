import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  color: #fff;
  margin-top: 10px;
  width: 100%;
  margin: 0 auto;
  overflow-y: hidden;
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
  .allSkills::-webkit-scrollbar {
    background-color: transparent;
    display: none;
  }
  .allSkills::-webkit-scrollbar-thumb {
    background-color: transparent;
    display: none;
  }
`;
