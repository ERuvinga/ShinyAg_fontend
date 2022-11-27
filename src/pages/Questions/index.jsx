import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav'
import GlobalStyle from '../../style/Global';


const Questions = () => {
    const [numberPage, setNumber] = useState(0);
    const [redirectLink, setredirectLink] = useState('#');
    const [nextLink, setnextLink] = useState('Suivant');

    const Handleminus = () => {
        if (numberPage > 0) {
            setNumber(numberPage - 1);
        }
        console.log(numberPage);

        if (numberPage < 5) {
            setredirectLink("#");
            setnextLink("suivant");
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
            <p>
                Questionnaire : {numberPage}
            </p>
            <Link to='#' onClick={Handleminus}> precedent</Link>
            <Link to={redirectLink} onClick={HandelPlus}> {nextLink}</Link>
        </GlobalStyle>
    );
};

export default Questions;