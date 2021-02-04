import React from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Scroll = styled.ScrollView`
  flex: 1;
`;
const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #aaa;
  flex-direction: row;
`;
const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;
const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #CCC;
`;

export default (props) => {
     return (
        <Item onPress={()=>{}} activeOpacity={0.7}>
          <>
            <ItemText>{props.data.task}</ItemText>
            <ItemCheck></ItemCheck>
          </>
        </Item>
    )
}

