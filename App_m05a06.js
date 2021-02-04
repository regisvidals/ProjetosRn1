import React from 'react';

import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;  
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-end;
  
`;
/*
 flex-direction:row -> linha
 flex-direction:column -> coluna
 justify-content:flex-end; 
 justify-content:center;
 justify-content:space-between; 
 align-items: mesmos parâmetros. inverte o efeito do flex-direction
*/

const Quadrado = styled.View`
  width:50px;
  height:50px;
  background-color:${props=>props.cor};
  
 
`;

export default () => {
 /* return (
    <Page>
    <Quadrado flex={1} cor="red"></Quadrado>
    <Quadrado flex={2} cor="green"></Quadrado>
    <Quadrado flex={1} cor="blue"></Quadrado>
    <Quadrado flex={1} cor="pink"></Quadrado>    
    </Page>
  );
  */

 return (
  <Page>
  <Quadrado  cor="red"></Quadrado>
  <Quadrado  cor="green"></Quadrado>
  <Quadrado  cor="blue"></Quadrado>    
  </Page>
);

 

}

