import React from "react";
import styled from "styled-components";
const RemoveButton = ({ msg, setAlertStatus, btn_name }) => {
  const handleClear = () => {
    setAlertStatus(true);
  };
  return (
    <Container>
      <CountDisplay>{msg}</CountDisplay>
      <ClearButton onClick={handleClear}>{btn_name}</ClearButton>
    </Container>
  );
};
export default RemoveButton;
const Container = styled.div`
  width: 95%;
  height: 5%;
  margin: 0% 0% 0% 5%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CountDisplay = styled.h1`
  height: 15px;
  width: 30%;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  letter-spacing: 0;
  text-align: left;
`;
const ClearButton = styled.button`
  background-color: transparent;
  width: 9%;
  height: 100%;
  margin-right: 0;
  border: none;
  color: white;
  font-style: "Roboto";
  text-align: right;
  padding-right: 0;
`;
