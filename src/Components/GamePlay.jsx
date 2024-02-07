import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);

  const generateRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * arrNumber.length);
    const random = arrNumber[randomIndex];
    return random;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Select Any Number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber();

    setCurrentDice((prev) => randomNumber);
    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber();
  };

  const reset = () => {
    setScore(0);
  };

  const showRules = () => {
    setRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          arrNumber={arrNumber}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
      </div>
      <div className="btns">
        <Button onClick={reset}>Reset</Button>
        <OutlineButton onClick={showRules}>
          {" "}
          {rules ? "Hide" : "Show"} Rules
        </OutlineButton>
      </div>
      <div>{rules && <Rules />}</div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px;
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    .top_section {
      flex-direction: column;
    }
  }
`;
