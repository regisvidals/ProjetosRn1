import React from 'react';
import {Container, Header, Content, Spinner} from 'native-base';

export default () => {
  return (
    <Container>
      <Header />
      <Content>
        <Spinner />
        <Spinner color="red" />
        <Spinner color="green" />
        <Spinner color="blue" />
      </Content>
    </Container>
  );
};
