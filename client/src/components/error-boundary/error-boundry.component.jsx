import React from 'react';
import styled from 'styled-components';

class ErrorBondry extends React.Component {

    state = {
        hasErrored: false
    }


    static getDerivedStateFromError(error) {

        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
                    <ErrorImageText>Sorry this Page is Broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
} 

export default ErrorBondry;

const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;
