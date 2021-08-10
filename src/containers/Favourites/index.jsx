import React from "react";
import styled from "styled-components";
import Header from "../../common/Header/index.jsx";
import DisplayEmpty from "../../common/DisplayEmpty/index.jsx";
import TableRow from "../../common/TableRow/index.jsx";
const Favourite = () => {
  const fav = JSON.parse(localStorage.getItem("Favourite"));
  return (
    <FavouriteContainer>
      <Header />
      {fav !== [] &&
        fav.map((data, index) => {
          return (
            <TableRow
              key={index}
              location={`${data.name}`}
              temp={Math.trunc(data.main.temp)}
              weather={
                data.weather[0].description.charAt(0).toUpperCase() +
                data.weather[0].description.slice(1)
              }
              src={`/assets/icons/icon_mostly_sunny.svg`}
              likeStatus={`/assets/icons/icon_liked.svg`}
            ></TableRow>
          );
        })}
      {fav.length === 0 && <DisplayEmpty msg="No Favourites added" />}
    </FavouriteContainer>
  );
};
const FavouriteContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export default Favourite;
