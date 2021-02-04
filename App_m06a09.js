import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';
import {Platform} from 'react-native';

const Page = styled.SafeAreaView`
  flex:1;  
  justify-content:center; 
  align-items:center; 
`;
 
const Input = styled.TextInput`
  width:200px;
  height:40px;
  border:1px solid #000;
`;

const Quadrado = styled.View`
  width:100px;
  height:100px;
  justify-content:center;
  align-items:center;
  border:3px dashed #000;
  margin-top:30px;
  background-color:#000;
  margin-bottom:30px;
`;

const KeyboardArea = styled.KeyboardAvoidingView`
  background-color:${Platform.OS=='ios'?'#00FF00':'#AABBFF'};
  flex:1
  width:100%;
  justify-content:center;
  align-items:center;
`;

export default () => {
  return (
    <Page> 
      <KeyboardArea behavior={Platform.OS=='ios'?'padding':null} > 
              <Quadrado></Quadrado>
        <Input  />      
      </KeyboardArea>
        
      
    </Page>
  );
}