import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const TableRow = ({
  location,
  src,
  temp,
  weather,
  likeStatus,
  setChangeFav,
  changeFav,
  data,
}) => {
  const history = useHistory();
  const [favState, setFavState] = useState(likeStatus);
  const handleFav = (e) => {
    e.stopPropagation();
    var arr = JSON.parse(localStorage.getItem("Favourite"));
    var arr2 = JSON.parse(localStorage.getItem("FavLocations"));
    if (arr2.includes(location)) {
      const idx = arr2.indexOf(location);
      arr2.splice(idx, 1);
      arr.splice(idx, 1);
    } else {
      arr2.push(location);
      arr.push(data);
    }
    localStorage.setItem("FavLocations", JSON.stringify(arr2));
    localStorage.setItem("Favourite", JSON.stringify(arr));
    setFavState(
      JSON.parse(localStorage.getItem("FavLocations")).includes(location)
    );
    setChangeFav(!changeFav);
  };
  return (
    <RowContainer onClick={(e) => history.push("/home")}>
      <Location>{location}</Location>
      <Icon src={src} alt="icon" />
      <Temp>{`${temp}${"\u00b0"}c`}</Temp>
      <Weather>{weather}</Weather>
      <Button>
        <Like
          src={
            favState || !data
              ? `/assets/icons/icon_liked.svg`
              : `/assets/icons/icon_not_liked.png`
          }
          onClick={(e) => handleFav(e)}
        ></Like>
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
  text-decoration: none;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const Location = styled.h1`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  margin-right: 20%;
  width: 20%;
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
