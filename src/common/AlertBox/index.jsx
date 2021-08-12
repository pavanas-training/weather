import React from "react";
import styled from "styled-components";
const AlertBox = ({ msg, changeFav, setChangeFav, setAlertStatus }) => {
  const handleClickYes = () => {
    const arr = [];
    if (msg === "Are you sure want to clear recent searches?") {
      localStorage.setItem("RecentSearch", JSON.stringify(arr));
      localStorage.setItem("RecentLocations", JSON.stringify(arr));
    } else {
      localStorage.setItem("Favourite", JSON.stringify(arr));
      localStorage.setItem("FavLocations", JSON.stringify(arr));
    }
    setChangeFav(!changeFav);
    setAlertStatus(false);
  };
  const handleClickNo = () => {
    setChangeFav(!changeFav);
    setAlertStatus(false);
  };
  return (
    <Alert>
      <Message>{msg}</Message>
      <ButtonContainer>
        <ButtonYesNo onClick={handleClickNo} className="no">
          NO
        </ButtonYesNo>
        <ButtonYesNo onClick={handleClickYes} className="yes">
          YES
        </ButtonYesNo>
      </ButtonContainer>
    </Alert>
  );
};
const Alert = styled.div`
  .yes {
    background-color: #f76b1c;
    color: white;
    border-radius: 2px;
    margin-left: 2%;
    width: 25%;
    height: 100%;
    font-weight: normal;
  }

  height: 30%;
  width: 30%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 28%;
  right: 35%;
  z-index: 4;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
`;
const Message = styled.h1`
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  letter-spacing: 0;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 10%;
  font-weight: normal;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20%;
`;
const ButtonYesNo = styled.button`
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  letter-spacing: 0;
  text-align: center;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  font-weight: bold;
`;
export default AlertBox;
