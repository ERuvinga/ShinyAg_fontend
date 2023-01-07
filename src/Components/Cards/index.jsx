import React, {useContext} from 'react';
import styled from "styled-components"
import Colors from "../../style/colors/Color"
import { ThemeContext } from '../../style/utils/context';

const ContainerCard = styled.div`
    width:135px;
    height:150px;
    display:flex;
    flex-direction: column;
    padding:15px;
    margin: 15px 25px;
    border-radius: 25px;
    background-color:${Colors.backgroundLight};
    box-shadow: 1px 1px 4px ${(props) => props.mode === 'light' ? Colors.Shadow : 'black'};

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

const Index = (props) => {
    const {theme} = useContext(ThemeContext);

    return (
        <ContainerCard mode={theme}>
            <CardLabel >{props.datas.job}</CardLabel>
            <CardImage src={props.datas.picture} alt='avatar' />
            <CardLabel nameValue>{props.datas.name}</CardLabel>
        </ContainerCard>
    );
};

export default Index;