import React from 'react';
import styled from 'styled-components';
import icon from '../../assets/icons/icon_nothing.svg';
const DisplayEmpty = ({ msg }) => {
  return (
    <DisplayEmptyContainer>
              <StyledNothingIcon src={icon}></StyledNothingIcon>
      <StyledMessage>{msg}</StyledMessage>
    </DisplayEmptyContainer>
  );
};
const DisplayEmptyContainer = styled.div``;
const StyledNothingIcon = styled.img`
  width: 12%;
  height: 15%;
  padding-top: 15%;
`;
const StyledMessage = styled.h1`
  height: 21px;
  width: 100%;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 21px;
`;
export default DisplayEmpty;
