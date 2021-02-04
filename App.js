import React from 'react';
import styled from 'styled-components/native';
import ListaItem from './src/components/ListaItem';
import lista from './src/lista';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Listagem = styled.FlatList`
  flex: 1;
`;
const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;
const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #fff;
`;

export default () => {
  return (
    <Page>
      <Listagem
        data={lista}
        renderItem={({item}) => <ListaItem data={item} />}
        keyExtractor={(item)=>item.id}
      />
    </Page>
  );
}