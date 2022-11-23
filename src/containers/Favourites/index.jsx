import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../common/Header/index.jsx';
import DisplayEmpty from '../../common/DisplayEmpty/index.jsx';
import TableRow from '../../common/TableRow/index.jsx';
import RemoveButton from '../../common/RemoveButton/index.jsx';
import AlertBox from '../../common/AlertBox/index.jsx';
const Favourite = () => {
  const [changeFav, setChangeFav] = useState(true);
  const [alertStatus, setAlertStatus] = useState(false);
  const fav = JSON.parse(localStorage.getItem('Favourite'));
  useEffect(() => {}, [changeFav]);
  return (
    <>
      <FavouriteContainer>
        <div
          className='overlay'
          id={alertStatus && 'overlay'}
        ></div>
        <Header />
        {fav.length !== 0 && (
          <RemoveButton
            msg={`${fav.length} City added as favourite`}
            btn_name='Remove all'
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
                location={`${data.name}, ${data.sys.country === 'IN' ? 'India' : data.sys.country}`}
                temp={Math.trunc(data.main.temp)}
                weather={
                  data.weather[0].description.charAt(0).toUpperCase() +
                  data.weather[0].description.slice(1)
                }
                src={`/assets/icons/${data.weather[0].icon}.svg`}
                likeStatus={JSON.parse(localStorage.getItem('FavLocations')).includes(
                  `${data.name}, ${data.sys.country === 'IN' ? 'India' : data.sys.country}`
                )}
                setChangeFav={setChangeFav}
                changeFav={changeFav}
              ></TableRow>
            );
          })}
        {JSON.parse(localStorage.getItem('FavLocations')).length === 0 && (
          <DisplayEmpty msg='No Favourites added' />
        )}
      </FavouriteContainer>
      {alertStatus && (
        <AlertBox
          msg='Are you sure want to remove all the favourites?'
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

const FavouriteContainer = styled.div`
  background-color: transparent;
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

export default Favourite;
