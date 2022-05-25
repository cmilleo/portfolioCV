import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 60px;
  border-bottom: 1px solid #e6e6e6;
  border-bottom-right-radius: 50%;

  img {
    height: 300px;
    animation: moveLeft 1s ease-out backwards;
    animation-delay: 1s;
  }

  @keyframes moveLeft {
    from {
      transform: translate3d(+100%, +20%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @media screen and (min-width: 768px) {
    width: 55%;
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
    img {
      height: 380px;
    }
    position: absolute;
    right: 10%;
  }
  @media screen and (min-width: 1440px) {
    width: 40%;
    img {
      height: 380px;
    }
    position: absolute;
    right: 15%;
  }
  @media screen and (min-width: 1920px) {
    width: 35%;
  }
`;
