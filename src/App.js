import React from 'react';
import Routes from './routes/index.jsx';
import styled from 'styled-components';
import background_image from "./assets/images/background.svg";
function App() {
var arr=[];
localStorage.getItem('RecentSearch');
localStorage.getItem('Favourite');
localStorage.setItem('RecentSearch',JSON.stringify(arr));
localStorage.setItem('Favourite',JSON.stringify(arr));
  return(
  <Wrapper>
   <Routes />
  </Wrapper>);
}
const Wrapper=styled.div`
background-image: url(${background_image});
text-align: center;
background-size: cover;
background-position: center;
width: 100vw;
height: 100vh;
max-width: 86%;
padding:1% 9% 1% 5%; `
;
export default App;
