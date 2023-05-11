import React from 'react';
import styled from 'styled-components';
const RemoveButton = ({ msg, setAlertStatus, btn_name }) => {
  const handleClear = () => {
    setAlertStatus(true);
  };
  return (
    <MainContainer>
      <CountDisplay>{msg}</CountDisplay>
      <ClearButton onClick={handleClear}>{btn_name}</ClearButton>
    </MainContainer>
  );
};
export default RemoveButton;
const MainContainer = styled.div`
  width: 94%;
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
  font-family: 'Roboto', sans-serif;
  font-size: 0.813rem;
  letter-spacing: 0;
  text-align: left;
  font-weight: normal;
  margin-left: 2%;
`;
const ClearButton = styled.button`
  background-color: transparent;
  width: 20%;
  height: 100%;
  border: none;
  color: white;
  font-style: 'Roboto';
  text-align: right;
  font-size: 0.813rem;
  font-weight: normal;
  padding-right: 0.8%;
`;
