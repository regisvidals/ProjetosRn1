import React from 'react';
import styled from 'styled-components/native';
const Header = styled.View`
    width:100%;
    height:50px;
    background-color:#CCC;
    justify-content:center;
    align-items:center;
`;

const HeaderText = styled.Text``;

export default () => {
    return(
        <HeaderText>Cabeçalho do App </HeaderText>
    );
}