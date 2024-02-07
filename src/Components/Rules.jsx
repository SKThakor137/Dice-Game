import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <ShowRules>
      <div className="rules">
        <h2>How to play dice game</h2>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted</li>
        </ul>
      </div>{" "}
    </ShowRules>
  );
};

export default Rules;

const ShowRules = styled.div`
  background: #fae6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  max-width: 800px;
  margin: 20px auto;
  /* margin-top: 20px; */
  border-radius: 10px;
  li {
    margin-bottom: 10px;
  }
  ul li {
    list-style: url("./images/icon.png");
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    margin: 20px;
  }
`;
