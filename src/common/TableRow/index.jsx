import React from "react";
import styled from "styled-components";
const TableRow = ({ location, src, temp, weather, likeStatus }) => {
  /*const handleFav = (id) => {
    arr.push(id);
    localStorage.setItem("Favourite", JSON.stringify(arr));
    setFavState(!favState);
  };*/
  return (
    <RowContainer>
      <Location>{location}</Location>
      <Icon src={src} alt="icon" />
      <Temp>{`${temp}${"\u00b0"}c`}</Temp>
      <Weather>{weather}</Weather>
      <Button disabled={true}>
        <Like src={likeStatus}></Like>
      </Button>
    </RowContainer>
  );
};
const RowContainer = styled.div`
  width: 91%;
  height: 5%;
  margin: 0% 0% 0.15% 5%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  padding: 1.5% 2% 2% 2%;
`;
const Location = styled.h1`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  margin-right: 20%;
  width: 10%;
  text-align: left;
`;
const Icon = styled.img`
  height: 100%;
  width: 15%;
  margin: 0;
`;
const Like = styled.img`
  height: 60%;
  width: 90%;
  margin: 0;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
`;
const Temp = styled.h1`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0;
  margin: 0;
  margin-right: 5%;
`;
const Weather = styled.h1`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  margin-right: 30%;
  width: 20%;
  text-align: left;
`;
export default TableRow;
