import styled from "styled-components";

export const CardContainer = styled.div`
  width: 15vw;
  height: 20vh;
  background-color: white;
  color: black;
  margin: 10px 10px;
  padding: 10px 10px;
  border-radius: 10px;
  text-align: center;
  opacity: 70%;

  :hover {
    opacity: 100%;
    border: 1px solid black;
  }

  img {
    vertical-align: middle;
    width: 14.5vw;
    height: 13.5vh;
    border-radius: 5px;
  }

  p {
    margin-top: 3.5vh;
    font-size: 1vw;
    text-transform: uppercase;
  }

  @media (max-width: 800px) {
    height: 15vh;

    img {
      width: 15vw;
      height: 10vh;
    }

    p {
      font-size: 10px;
      margin-top: 1vh;
    }
  }
`;
