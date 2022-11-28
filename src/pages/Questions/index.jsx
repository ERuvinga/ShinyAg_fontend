import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonQuestion from '../../Components/ButtonQuestion'
import styled from 'styled-components'
import Nav from '../../Components/Nav'
import Colors from '../../style/colors/Color'
import GlobalStyle from '../../style/Global';

const QuestionGlobalStyle = styled.div`
    display:flex;
    color: ${Colors.Questions};
    flex-direction:column;
    justify-content:center;
    align-items:center;
`


const QuestionStyle = styled.p`
    color: ${Colors.Questions};
    text-align: center;
    width:60%;
    margin: 50px 0px;
`

const ContainerButtons = styled.div`
    display:flex;
    margin-bottom: 15px;
`
const ContainerLinks = styled.div`
    width:40%;
    display:flex;
    justify-content:space-around;
    margin-top:50px;
`

const Links = styled(Link)`
    color:${Colors.Questions};
`

const Questions = () => {
    const [numberPage, setNumber] = useState(1);
    const [redirectLink, setredirectLink] = useState('#');
    const [nextLink, setnextLink] = useState('Suivante');
    const [NowQuestion, setQuestion] = useState("Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?");

    const Handleminus = () => {
        if (numberPage > 1) {
            setNumber(numberPage - 1);
        }
        console.log(numberPage);

        if (numberPage <= 5) {
            setredirectLink("#");
            setnextLink("suivante");
        }
    }

    const HandelPlus = () => {

        if (numberPage < 5) {
            setNumber(numberPage + 1);
        }

        if (numberPage >= 4) {
            setredirectLink("/Results");
            setnextLink("Result");
        }
    }

    return (
        <GlobalStyle>
            <Nav />
            <QuestionGlobalStyle >
                <h2>
                    Question {numberPage}
                </h2>
                <QuestionStyle >
                    {NowQuestion}
                </QuestionStyle>
                <ContainerButtons>
                    <ButtonQuestion selected>Oui</ButtonQuestion>
                    <ButtonQuestion >Non</ButtonQuestion>
                </ContainerButtons>

                <ContainerLinks>
                    <Links to='#' onClick={Handleminus}> précedente</Links>
                    <Links to={redirectLink} onClick={HandelPlus}> {nextLink}</Links>
                </ContainerLinks>
            </QuestionGlobalStyle>
        </GlobalStyle>
    );
};

export default Questions;