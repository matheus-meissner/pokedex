import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  color: #3498db;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to the Pokedex</Title>
    </Container>
  );
};

export default Home;
