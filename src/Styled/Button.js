import styled from "styled-components";

export const Button = styled.button`
  background: #000;
  color: #fff;
  padding: 13px 10px;
  min-width: 220px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    background: #fff;
    color: #000;
    transition: 0.3s all ease-in;
    border: 1px solid #000;
  }
`;

export const OutlineButton = styled(Button)`
  background: #fff;
  color: #000;
  transition: 0.3s all ease-in;
  border: 1px solid #000;

  &:hover {
    background: #000;
    color: #fff;
    border: 1px solid transparent;
  }
`;
