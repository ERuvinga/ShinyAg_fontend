import React from 'react';
import styled from "styled-components"

const ContainerCard= styled.div`
    display:flex;
    flex-direction: column;
    padding:15px;
`
const CardLabel = styled.label`
    color: #8186a0;
    font-size:0.8em;
`
const CardImage = styled.img`
        width:80px;
        height:80px;
        border-radius:50%;
`

const index = (props) => {
    return (
        <ContainerCard>
            <CardLabel> {props.datas.label}</CardLabel>
            <CardImage src={props.datas.picture} alt='avatar'/>
            <CardLabel>{props.datas.title}</CardLabel>   
        </ContainerCard>
    );
};

export default index;