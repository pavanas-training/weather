import React from "react";
import styled from "styled-components";
const RemoveButton = ({ msg, btn_name, setChangeFav, changeFav }) => {
  const arr = [];
  const handleClear = () => {
    if (btn_name === "Clear all") {
      localStorage.setItem("RecentSearch", JSON.stringify(arr));
      localStorage.setItem("RecentLocations", JSON.stringify(arr));
    } else {
      localStorage.setItem("Favourite", JSON.stringify(arr));
      localStorage.setItem("FavLocations", JSON.stringify(arr));
    }
    setChangeFav(!changeFav);
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
  font-family: "Roboto";
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
