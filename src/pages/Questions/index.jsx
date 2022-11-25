import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Questions = () => {
    const [numberPage, setNumber] = useState(0);
    const [redirectLink, setredirectLink] = useState('#');
    const [nextLink, setnextLink] = useState('Suivant');

    const Handleminus = ()=>{
        if(numberPage > 0){
            setNumber(numberPage-1);
        }
    }

    const HandelPlus = ()=>{
       
        if(numberPage > 9){
        setredirectLink("/Results");
        setnextLink("Result");
       }
       
       else {
        setredirectLink("#");
        setnextLink("suivant");       
       }
       
       
        if(numberPage < 10){
         setNumber(numberPage+1);
       }


    }

    return (
        <div>
            <p>
               Questionnaire : {numberPage}
            </p>
               <Link to ='#' onClick={Handleminus}> precedent</Link>
               <Link to ={redirectLink} onClick={HandelPlus}> {nextLink}</Link>
        </div>
    );
};

export default Questions;