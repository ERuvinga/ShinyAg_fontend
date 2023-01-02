import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyleBody = createGlobalStyle`
    body{
           background-color: black;
    }
`

const GlobalStyle = styled.div`
    width:95%;
    height:100vh;
    display:grid;
    grid-template-colums: 1fr;
    grid-template-rows: 10vh 89vh;
    margin: auto;
`
export default GlobalStyle;