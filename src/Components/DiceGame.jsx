import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const DiceGame = ({ toggle }) => {
  return (
    <Container>
      <div className="img-container">
        <img src="./images/dices.png" alt="image of dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button className="game-btn" onClick={toggle}>
          Play Now
        </Button>
      </div>
    </Container>
  );
};

export default DiceGame;

const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  height: 100vh;

  max-width: 1180px;
  margin: 0 auto;
  overflow: auto;
  .content {
    h1 {
      font-size: 80px;
      white-space: nowrap;
    }
  }
  .img-container img {
    width: 500px;
    height: 400px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;

    .content {
      h1 {
        font-size: 40px;
        white-space: normal;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .img-container img {
      width: 350px;
      height: 250px;
    }

    .content {
      h1 {
        font-size: 30px;
        white-space: normal;
      }
    }
  }
`;
