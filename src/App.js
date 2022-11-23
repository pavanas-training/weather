import React from 'react';
import Routes from './routes/index.jsx';
import styled from 'styled-components';
import background_image from './assets/images/background.svg';
function App() {
  // var arr = [];
  // localStorage.getItem('RecentLocations');
  // localStorage.getItem('FavLocations');
  // localStorage.setItem('RecentLocations', JSON.stringify(arr));
  // localStorage.setItem('FavLocations', JSON.stringify(arr));
  // localStorage.getItem('RecentSearch');
  // localStorage.getItem('Favourite');
  // localStorage.setItem('RecentSearch', JSON.stringify(arr));
  // localStorage.setItem('Favourite', JSON.stringify(arr));
  // localStorage.getItem('Latitude');
  // localStorage.getItem('Longitude');
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;
    localStorage.setItem('Latitude', crd.latitude);
    localStorage.setItem('Longitude', crd.longitude);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
  return (
    <Wrapper>
      <Routes />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-image: url(${background_image});
  text-align: center;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  max-width: 86%;
  padding: 1% 9% 1% 5%;
`;
export default App;
