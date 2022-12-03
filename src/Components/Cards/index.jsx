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
    transition: padding .5s;

    &:hover{
        cursor:pointer;
        padding: 17px;
    }

`
const CardLabel = styled.span`
    color: ${Colors.Navtext};
    font-size:0.8em;
    ${(props) => props.nameValue && `color:${Colors.Questions}; text-align:center;`}
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
            <CardLabel >{props.datas.label}</CardLabel>
            <CardImage src={props.datas.picture} alt='avatar' />
            <CardLabel nameValue>{props.datas.title}</CardLabel>
        </ContainerCard>
    ); {/*className='border' */ }
};

export default index;