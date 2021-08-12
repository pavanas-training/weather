import React from "react";
import styled from "styled-components";
import Header from "../../common/Header/index.jsx";
import { getData, getCurrentLocationData } from "../../services/index.jsx";
import FooterCard from "./common/FooterCard/index.jsx";

import { useState, useEffect } from "react";
const Home = () => {
  const [data, setData] = useState(null);
  const [footerArray, setFooterArray] = useState([]);
  const [FState, setFState] = useState(false);
  const [CState, setCState] = useState(true);
  const [favState, setFavState] = useState(false);

  const handleFav = () => {
    var arr = JSON.parse(localStorage.getItem("Favourite"));
    var arr2 = JSON.parse(localStorage.getItem("FavLocations"));
    if (arr2.includes(data.name)) {
      const idx = arr2.indexOf(data.name);
      arr2.splice(idx, 1);
      arr.splice(idx, 1);
    } else {
      arr.push(data);
      arr2.push(data.name);
    }
    localStorage.setItem("FavLocations", JSON.stringify(arr2));
    localStorage.setItem("Favourite", JSON.stringify(arr));
    setFavState(
      JSON.parse(localStorage.getItem("FavLocations")).includes(data.name)
    );
  };
  const handleSearch = async (city) => {
    setData(null);
    callgetData(city);
  };
  const handleChangeUnitToC = () => {
    setCState(true);
    setFState(false);
  };
  const handleChangeUnitToF = () => {
    setFState(true);
    setCState(false);
  };
  const updateFooter = (data) => {
    setFooterArray([
      {
        heading: "Min - Max",
        value: `${Math.trunc(data.main.temp_min)}${"\u00b0"}-${Math.trunc(
          data.main.temp_max
        )}${"\u00b0"}C`,
      },
      { heading: "Precipitation", value: "0%" },
      { heading: "Humidity", value: `${data.main.humidity}%` },
      { heading: "Wind", value: `${data.wind.speed}m/s` },
      { heading: "Visibility", value: `${data.visibility / 1000}km` },
    ]);
  };
  const callgetData = async (city) => {
    var data1, arr, arr2;
    data1 = await getData(city);
    setData(data1);
    if (data1 !== []) {
      updateFooter(data1);
      arr = JSON.parse(localStorage.getItem("RecentSearch"));
      arr2 = JSON.parse(localStorage.getItem("RecentLocations"));
      if (!arr2.includes(data1.name)) {
        arr.push(data1);
        arr2.push(data1.name);
      }
      localStorage.setItem("RecentLocations", JSON.stringify(arr2));
      localStorage.setItem("RecentSearch", JSON.stringify(arr));
      setFavState(
        JSON.parse(localStorage.getItem("FavLocations")).includes(data1.name)
      );
    }
  };
  useEffect(() => {
    const callgetCurrentLocationData = async () => {
      var data2;
      data2 = await getCurrentLocationData();
      setData(data2);
      setFavState(
        JSON.parse(localStorage.getItem("FavLocations")).includes(data2.name)
      );
      if (data2 !== null) {
        updateFooter(data2);
      }
    };
    callgetCurrentLocationData();
  }, []);

  return (
    <HomeContainer>
      <Header handleSearch={handleSearch}></Header>
      {data && footerArray && (
        <Body>
          <City>{`${data.name}, ${
            data.sys.country === "IN" ? "India" : data.sys.country
          }`}</City>
          <AddFavButton onClick={handleFav}>
            {favState ? (
              <>
                <Like src={`/assets/icons/icon_liked.svg`}></Like>
                <AddedToFav>Added to favourite</AddedToFav>
              </>
            ) : (
              <>
                <Like src={`/assets/icons/icon_not_liked.png`}></Like>
                <AddToFav>Add to favourite</AddToFav>
              </>
            )}
          </AddFavButton>
          <Icon
            src={`/assets/icons/icon_mostly_cloudy_small.svg`}
            alt="icon"
          ></Icon>
          {data && (
            <Temperature>
              <TempValue>
                {CState
                  ? Math.trunc(data.main.temp)
                  : Math.trunc((data.main.temp * 9) / 5 + 32)}
              </TempValue>
              <Fahrenheit
                className={CState ? "inactive" : "active"}
                onClick={handleChangeUnitToF}
              >{`${"\u00b0"}F`}</Fahrenheit>
              <Celsius
                className={FState ? "inactive" : "active"}
                onClick={handleChangeUnitToC}
              >{`${"\u00b0"}C`}</Celsius>
            </Temperature>
          )}
          <Description>
            {data.weather[0].description.charAt(0).toUpperCase() +
              data.weather[0].description.slice(1)}
          </Description>
        </Body>
      )}
      <FooterContainer>
        {footerArray &&
          data &&
          footerArray.map((element) => {
            return (
              <FooterCard
                src={`/assets/icons/icon_${element.heading}_info.svg`}
                heading={element.heading}
                value={element.value}
                key={element.heading}
              />
            );
          })}
      </FooterContainer>
      )
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  .active {
    background-color: #ffffff;
    color: #e32843;
  }
  .inactive {
    background-color: transparent;
  }
`;
const Body = styled.div`
  width: 95%;
  height: 60%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid white;
`;
const City = styled.h1`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  text-align: left;
`;

const AddFavButton = styled.button`
  background-color: transparent;
  height: 5%;
  width: 50%;
  border: none;
  display: flex;
  flex-direction: row;
`;
const AddToFav = styled.h1`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
`;
const AddedToFav = styled.h1`
  color: #fad05b;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
`;
const Like = styled.img`
  height: 70%;
  width: 5%;
  margin: 1.5% 2% 0% -1.5%; ;
`;
const Icon = styled.img`
  width: 30%;
  height: 20%;
  margin: 3% 35% 1% 35%;
`;
const Temperature = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const TempValue = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 64px;
  font-weight: 500;
  letter-spacing: 0;
  color: white;
  text-align: bottom;
  margin-right: 1%;
`;
const Fahrenheit = styled.button`
  height: 50%;
  margin-top: 2.5%;
  border: 1px solid white;
`;
const Celsius = styled.button`
  height: 50%;
  margin-top: 2.5%;
  border: 1px solid white;
`;
const Description = styled.h1`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  letter-spacing: 0;
  text-align: center;
`;
const FooterContainer = styled.div`
  background-color: transparent;
  width: 75%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 5%;
  padding: 0% 10% 0% 10%;
`;
export default Home;
