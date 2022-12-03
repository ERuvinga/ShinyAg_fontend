import React from 'react';
import styled from "styled-components"
import Colors from "../../style/colors/Color"

const ContainerCard = styled.div`
    width:130px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding:15px;
    border-radius: 25px;
    background-color:${Colors.backgroundLight};
    box-shadow:1px 1px 5px ${Colors.Navtext};
`
const CardLabel = styled.span`
    color: ${Colors.Navtext};
    font-size:0.8em;
    ${(props) => props.nameValue && `color:${Colors.Questions}; `}
`
const CardImage = styled.img`
        width:80px;
        height:80px;
        border-radius:50%;
        margin:15px 0px;
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