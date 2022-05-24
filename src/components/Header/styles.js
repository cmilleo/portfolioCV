import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap");
  font-family: "Alex Brush", cursive;

  font-size: 0.7rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  button {
    border: none;
    background-color: transparent;
    color: white;
    animation: fadeIn 0.5s ease-in backwards;
    animation-delay: 600ms;
    cursor: pointer;
  }
  button:hover {
    color: gray;
  }
  animation: fadeIn 0.5s ease-in forwards;
  @keyframes fadeIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
