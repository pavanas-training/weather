import logo_web from '../../assets/icons/logo_web.svg';
import styled from 'styled-components';
import moment from 'moment';
import search_icon from '../../assets/icons/icon_search_white.svg';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
const Header = () => {
  const handleSearch = (location) => {
    history.push({ pathname: '/home', state: { place: { location } } });
  };
  const history = useHistory();
  const menuItems = ['HOME', 'FAVOURITE', 'RECENT SEARCH'];
  const [city, setCity] = useState();
  return (
    <Wrapper>
      <TopContainer>
        <Logo src={logo_web} alt='logo'></Logo>
        <StyledInput
          placeholder='Search city'
          onChange={(event) => setCity(event.target.value)}
          onKeyDown={(event) => {
            setCity(event.target.value);
            if (event.key === 'Enter') handleSearch(city);
          }}
        />
        <SearchButton
          onClick={() => {
            handleSearch(city);
          }}
        >
          <img alt='icon' src={search_icon}></img>
        </SearchButton>
      </TopContainer>
      <NavBarContainer>
        {menuItems.map((item, index) => {
          return (
            <NavLink
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              activeClassName='selected'
              id={index}
              key={index}
              className='header-elements'
            >
              {item}
            </NavLink>
          );
        })}
        <StyledDate>{moment().format('ddd, DD MMM YYYY')}</StyledDate>
        <StyledTime>{moment().format(' h:mm A')}</StyledTime>
      </NavBarContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 20%;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 30%;
  padding: 1% 0% 1% 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 25%;
  height: 90%;
  @media (max-width: 550px) {
    margin-left: 5%;
  }
`;
const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3px 0px 0px 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  outline: none;
  width: 35%;
  color: #ffffff;
  margin-left: 38%;
  border-right: none;
  text-decoration: none;
  ::placeholder {
    color: #ffffff;
    opacity: 0.8;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    padding-left: 2%;
  }
`;
const SearchButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-left: none;
  border-radius: 0px 3px 3px 0px;
  padding-right: 1%;
`;
const NavBarContainer = styled.div`
  width: 95%;
  height: 40%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 5%;
  .header-elements {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 0.938rem;
    text-decoration: none;
    margin: 3% 2% 0% 0%;
    padding-left: 2%;
    padding-right: 2%;
    :hover {
      color: #ffd639;
    }
  }

  .selected {
    color: #ffd639;
    border-bottom: 3px solid;
  }
`;
const StyledDate = styled.h1`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.938rem;
  margin: 3% 1% 0% 44%;
  font-weight: normal;
  @media (max-width: 550px) {
    margin: 3% 3% 0% 5%;
  }
`;
const StyledTime = styled.h1`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.938rem;
  margin: 3% auto;
  font-weight: normal;
`;
export default Header;
