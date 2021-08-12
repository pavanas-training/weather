import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DisplayEmpty from "../../common/DisplayEmpty/index.jsx";
import Header from "../../common/Header/index.jsx";
import TableRow from "../../common/TableRow/index.jsx";
import RemoveButton from "../../common/RemoveButton/index.jsx";
import AlertBox from "../../common/AlertBox/index.jsx";

const RecentSearch = () => {
  const [changeFav, setChangeFav] = useState(true);
  const [alertStatus, setAlertStatus] = useState(false);
  useEffect(() => {}, [changeFav]);
  const recent = JSON.parse(localStorage.getItem("RecentSearch"));
  return (
    <>
      <RecentSearchContainer>
        <div className="overlay" id={alertStatus && "overlay"}></div>
        <Header />
        {recent.length !== 0 && (
          <RemoveButton
            msg="You recently searched for"
            btn_name="Clear all"
            setChangeFav={setChangeFav}
            changeFav={changeFav}
            setAlertStatus={setAlertStatus}
          ></RemoveButton>
        )}
        {recent !== [] &&
          recent.map((data, index) => {
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
                data={data}
              ></TableRow>
            );
          })}
        {recent.length === 0 && <DisplayEmpty msg="No Recent Search" />}
      </RecentSearchContainer>
      {alertStatus && (
        <AlertBox
          msg="Are you sure want to clear recent searches?"
          setChangeFav={setChangeFav}
          changeFav={changeFav}
          setAlertStatus={setAlertStatus}
        ></AlertBox>
      )}
      <AlertStyle />
    </>
  );
};
const AlertStyle = createGlobalStyle`
#overlay:not(.alert.show) {
  display: block;
}`;
const RecentSearchContainer = styled.div`
  width: 100%;
  height: 100%;
  .overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
  }
`;
export default RecentSearch;
