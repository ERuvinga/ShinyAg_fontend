import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import GlobalStyle from '../../style/Global';
import ButtonQuestion from '../../Components/ButtonQuestion'
import Nav from '../../Components/Nav'
import Loader from '../../Components/loading'
import Colors from '../../style/colors/Color'

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
    height: 30px;
    margin: 50px 0;
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

    //state gerant l'affichage de la page
    const [numberPage, setNumber] = useState(1);
    const [redirectLink, setredirectLink] = useState('#');
    const [nextLink, setnextLink] = useState('Suivante');
    const [selected, setSelected] = useState([true, false]);
    const [IsLoading, setIsLoading] = useState(false);

    // les states gerant les donnees recus
    const [Question, setQuestion] = useState({});

    useEffect(() => {
        setIsLoading(true);  // the state to loading frame is to true
        fetch('http://localhost:8000/survey')
            .then((res) => {
                if (res.status) {
                    res.json()
                        .then((Data) => {
                            setQuestion(Data.surveyData); //data is Objet, content a other object"surveyData"
                            setIsLoading(false); //delete the frame loading and replace a datas questions when the Api he's response
                        })
                        .catch((error) => {
                            console.log("error");
                        })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const HandlePrec = () => {
        if (numberPage > 1) {
            setNumber(numberPage - 1);
        }

        if (numberPage <= 5) {
            setredirectLink("#");
            setnextLink("suivante");
        }
    }

    const HandleYes = () => {
        setSelected([true, false]);
    }
    const HandleNo = () => {
        setSelected([false, true]);
    }

    const HandeleNext = () => {

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
                    {
                        IsLoading ? <Loader /> : Question[numberPage] //if a data is loading the loader component is use else (the datas is available) use it 
                    }
                </QuestionStyle>
                <ContainerButtons>
                    <ButtonQuestion className={selected[0] ? 'selected' : 'delete_border'} onClick={HandleYes}>Oui</ButtonQuestion>
                    <ButtonQuestion className={selected[1] ? 'selected' : 'delete_border'} onClick={HandleNo}>Non</ButtonQuestion>
                </ContainerButtons>

                <ContainerLinks>
                    <Links to='#' onClick={HandlePrec}> précedente</Links>
                    <Links to={redirectLink} onClick={HandeleNext}> {nextLink}</Links>
                </ContainerLinks>
            </QuestionGlobalStyle>
        </GlobalStyle>
    );
};

export default Questions;