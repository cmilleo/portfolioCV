import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";

  font-size: 0.7rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 300;
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
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    button {
      font-size: 1.2rem;
    }
  }
`;
