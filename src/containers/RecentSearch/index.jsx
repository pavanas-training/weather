import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DisplayEmpty from "../../common/DisplayEmpty/index.jsx";
import Header from "../../common/Header/index.jsx";
import TableRow from "../../common/TableRow/index.jsx";
const RecentSearch = () => {
  const [changeFav, setChangeFav] = useState(true);
  useEffect(() => {}, [changeFav]);
  const recent = JSON.parse(localStorage.getItem("RecentSearch"));
  return (
    <RecentSearchContainer>
      <Header />
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
  );
};
const RecentSearchContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export default RecentSearch;
