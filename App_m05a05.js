import React from 'react';

import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  
  flex-direction:row;
`;
/*
 flex-direction:row -> linha
 flex-direction:row-reverse -> linha começando da esquerda pra direita
 flex-direction:column -> coluna
 flex-direction:column-reverse -> coluna começando de baixo pra cima
*/

const Quadrado = styled.View`
  background-color:${props=>props.cor};
  width:80px;
  height:80px;
`;

export default () => {
  return (
    <Page>
    <Quadrado cor="red"></Quadrado>
    <Quadrado cor="green"></Quadrado>
    <Quadrado cor="blue"></Quadrado>    
    </Page>
  );
}

