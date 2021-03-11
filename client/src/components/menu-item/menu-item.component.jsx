import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {

    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
            <ContentContainer className='content'>
                <TitleContainer>{title}</TitleContainer>
                <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    );
};

export default withRouter(MenuItem);

const MenuItemContainer = styled.div`
  height: ${({ size }) => size ? '380px' : '240px'};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:hover {
    cursor: pointer;

    & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
        opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({imageUrl}) => imageUrl});
`;


const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

const TitleContainer = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
