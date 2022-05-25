import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #1f1f1f;

  @media screen and (min-width: 1024px) {
    .section2 {
      display: flex;
      gap: 30px;
      justify-content: space-evenly;
    }
  }
`;
