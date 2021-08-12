import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../common/Header/index.jsx";
import DisplayEmpty from "../../common/DisplayEmpty/index.jsx";
import TableRow from "../../common/TableRow/index.jsx";
import RemoveButton from "../../common/RemoveButton/index.jsx";
import AlertBox from "../../common/AlertBox/index.jsx";
const Favourite = () => {
  const [changeFav, setChangeFav] = useState(true);
  const [alertStatus, setAlertStatus] = useState(false);
  const fav = JSON.parse(localStorage.getItem("Favourite"));
  useEffect(() => {}, [changeFav]);
  //const fav = JSON.parse(localStorage.getItem("Favourite"));
  return (
    <>
      <FavouriteContainer>
        <Header />
        {fav.length !== 0 && (
          <RemoveButton
            msg={`${fav.length} City added as favourite`}
            btn_name="Remove all"
            setChangeFav={setChangeFav}
            changeFav={changeFav}
            setAlertStatus={setAlertStatus}
          ></RemoveButton>
        )}
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
                likeStatus={JSON.parse(
                  localStorage.getItem("FavLocations")
                ).includes(data.name)}
                setChangeFav={setChangeFav}
                changeFav={changeFav}
              ></TableRow>
            );
          })}
        {JSON.parse(localStorage.getItem("FavLocations")).length === 0 && (
          <DisplayEmpty msg="No Favourites added" />
        )}
      </FavouriteContainer>
      {alertStatus && (
        <AlertBox
          msg="Are you sure want to remove all favourites?"
          setChangeFav={setChangeFav}
          changeFav={changeFav}
          setAlertStatus={setAlertStatus}
        ></AlertBox>
      )}
    </>
  );
};
const FavouriteContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export default Favourite;
