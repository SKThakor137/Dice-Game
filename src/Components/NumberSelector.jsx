import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  arrNumber,
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <div className="error_message">{error}</div>

      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            is_Selected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media screen and (max-width: 560px) {
    align-items: center;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 24px;

    @media screen and (max-width: 560px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      justify-content: center;
    }
  }
  .error_message {
    /* display: none; */
    color: red;
    font-size: 20px;
    height: 2rem;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid #000;
  font-size: 24px;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.is_Selected ? "#000 " : "#fff")};
  color: ${(props) => (props.is_Selected ? "#fff " : "#000")};
`;
