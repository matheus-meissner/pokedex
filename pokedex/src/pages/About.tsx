import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  color: #e74c3c;
`;

const About: React.FC = () => {
  return (
    <Container>
      <Title>About This Pokedex</Title>
    </Container>
  );
};

export default About;
