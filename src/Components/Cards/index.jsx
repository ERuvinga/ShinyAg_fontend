import React from 'react';
import styled from "styled-components"
import Colors from "../../style/colors/Color"

const ContainerCard = styled.div`
    width:130px;
    height:150px;
    display:flex;
    flex-direction: column;
    padding:15px;
    margin: 15px 25px;
    border-radius: 25px;
    background-color:${Colors.backgroundLight};
    box-shadow:1px 1px 5px ${Colors.Shadow};

    &:hover{
        cursor:pointer;
    }

`
const CardLabel = styled.span`
    color: ${Colors.Navtext};
    font-size:0.65em;
    ${(props) => props.nameValue && `color:${Colors.Questions}; text-align:center; font-size:0.8em;
    `}
`
const CardImage = styled.img`
        width:80px;
        height:80px;
        border-radius:50%;
        margin:auto;
`

const index = (props) => {
    return (
        <ContainerCard>
            <CardLabel >{props.datas.job}</CardLabel>
            <CardImage src={props.datas.picture} alt='avatar' />
            <CardLabel nameValue>{props.datas.name}</CardLabel>
        </ContainerCard>
    );
};

export default index;