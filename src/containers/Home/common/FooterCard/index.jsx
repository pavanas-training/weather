import React from "react";
import styled from "styled-components";
const FooterCard = ({ src, heading, value }) => {
  return (
    <CardContainer>
      <InfoIcon src={src} />
      <InfoContainer>
        <Key>{heading}</Key>
        <Value>{value}</Value>
      </InfoContainer>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
`;
const InfoIcon = styled.img`
  height: 28%;
  width: 28%;
  margin-right: 10%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  text-align: left;
`;

const Key = styled.h1`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 18px;
  margin: 0;
  padding-bottom: 10%;
  font-weight: normal;
`;
const Value = styled.h1`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0;
  margin: 0;
`;
export default FooterCard;
