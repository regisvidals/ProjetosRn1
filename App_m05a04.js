import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  background-color:blue;
`;

const Texto = styled.Text`
  color:${props=>props.cor};
  font-size:30px;
  background-color:green;
`;

export default () => {
  return (
    <Page>
    <Texto cor="red">Olá Mundo</Texto>
    <Texto cor="yellow">Olá Mundo</Texto>
    
    </Page>
  );
}

