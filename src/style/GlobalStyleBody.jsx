import React, { useContext } from 'react'
import { ThemeContext } from './utils/context';
import { createGlobalStyle } from "styled-components"

const StyleBody = createGlobalStyle`
    body{

        ${(props) => `background-color: ${props.mode}`
    }
    }

    .selected {
        /*css appliquer entre la selection de oui ou non sur la page des questions*/
        color: #5843E4;
        border: solid 1px #5843E4;

  }
`


function GlobalStyleBody() {

    const { theme } = useContext(ThemeContext);
    //console.log(theme);
    return (
        <StyleBody mode={theme === 'light' ? ' ' : 'black'} />
    )
}

export default GlobalStyleBody
