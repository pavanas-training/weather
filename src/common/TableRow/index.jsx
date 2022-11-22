import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
const TableRow = ({ location, src, temp, weather, likeStatus, setChangeFav, changeFav, data }) => {
  const history = useHistory();
  const [favState, setFavState] = useState(likeStatus);
  const handleFav = (e) => {
    e.stopPropagation();
    var arr = JSON.parse(localStorage.getItem('Favourite'));
    var arr2 = JSON.parse(localStorage.getItem('FavLocations'));
    if (arr2.includes(location)) {
      const idx = arr2.indexOf(location);
      arr2.splice(idx, 1);
      arr.splice(idx, 1);
    } else {
      arr2.push(location);
      arr.push(data);
    }
    localStorage.setItem('FavLocations', JSON.stringify(arr2));
    localStorage.setItem('Favourite', JSON.stringify(arr));
    setFavState(JSON.parse(localStorage.getItem('FavLocations')).includes(location));
    setChangeFav(!changeFav);
  };
  return (
    <RowContainer
      onClick={() => history.push({ pathname: '/home', state: { place: { location } } })}
    >
      <Location>{location}</Location>
      <Icon src={src} alt='icon' />
      <Temp>{`${temp}`}</Temp>
      <Cel>{`${'\u00b0'}c`}</Cel>
      <Weather>{weather}</Weather>
      <Button>
        <Like
          src={
            favState || !data ? `/assets/icons/icon_liked.svg` : `/assets/icons/icon_not_liked.svg`
          }
          onClick={(e) => handleFav(e)}
        ></Like>
      </Button>
    </RowContainer>
  );
};
const RowContainer = styled.div`
  width: 91%;
  height: 4.5%;
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
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 0;
  margin-right: 10%;
  width: 40%;
  text-align: left;
  :hover {
    color: #ffd639;
  }
`;
const Icon = styled.img`
  height: 90%;
  width: 15%;
  margin: 0;
  @media (max-width: 550px) {
    height: 50%;
    width: 45%;
    margin-top: 0.625rem;
  }
`;
const Like = styled.img`
  height: 90%;
  width: 90%;
  margin: 0;
  @media (max-width: 550px) {
    height: 100%;
    width: 100%;
  }
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
`;
const Temp = styled.h1`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0;
  margin: 0;
  @media (max-width: 550px) {
    margin-top: 0.625rem;
  }
`;
const Cel = styled.h1`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  letter-spacing: 0;
  font-weight: 400;
  margin-right: 3%;
  margin-left: 1%;
  @media (max-width: 550px) {
    margin-top: 1.325rem;
  }
`;
const Weather = styled.h1`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1.125rem;
  letter-spacing: 0;
  margin-right: 20%;
  width: 30%;
  text-align: left;
  @media (max-width: 550px) {
    margin-top: 1%;
  }
`;
export default TableRow;
