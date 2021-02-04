import React, { useState } from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';


const Page = styled.SafeAreaView`
  flex:1;  
  justify-content:center; 
  align-items:center; 
`;
 
export default () => {

  const [status, setStatus] = useState('');

  return (
    <Page> 
      <Image
      //source={{uri:'https://www.google.com.br/google.jpg'}}
      source={require('./src/images/residencial.jpg')}
      style={{width:200, height:200, backgroundColor:'#FFffff'}}
      resizeMode="contain"
      defaultSource={require('./src/images/placeholder.jpg')}
      onLoadStart={()=>setStatus('Carregando...')}
      onLoad={()=>setStatus('Carregou')}
      onError={(e)=>setStatus(e.nativeEvent.error)}
  />
  <Text>{status}</Text>
  </Page>
  );
}