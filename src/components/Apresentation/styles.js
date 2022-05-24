import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  color: white;
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-weight: 600;
    font-size: 3rem;
    line-height: 50px;
    animation: fadeIn 0.3s ease-in-out backwards;
    animation-delay: 1.5s;
  }

  h2 {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 26px;
    letter-spacing: 0.36em;
    text-transform: uppercase;
    animation: fadeIn 0.3s ease-in-out backwards;
    animation-delay: 1.2s;
  }
  h3 {
    font-weight: 300;
    font-size: 13.6701px;
    line-height: 21px;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    animation: fadeIn 0.3s ease-in-out backwards;
    animation-delay: 1.8s;
  }
  button {
    background: rgb(6, 77, 136);
    background: linear-gradient(
      0deg,
      rgba(6, 77, 136, 1) 0%,
      rgba(35, 122, 207, 1) 100%
    );
    border: 2px solid rgb(6, 77, 136);
    width: 50%;
    margin: 0 auto;
    border-radius: 9px;
    font-weight: 300;
    color: white;
    padding: 12px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.4rem;
  }
  button:hover {
    cursor: pointer;
    background: linear-gradient(
      0deg,
      rgba(6, 77, 136, 1) 0%,
      rgba(39, 122, 207, 1) 60%
    );
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-40%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
