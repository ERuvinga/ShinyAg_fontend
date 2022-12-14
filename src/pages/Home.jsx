import Globalstyle from "../style/Global"
import Nav from "../Components/Nav"
import styled from "styled-components"
import Color from '../style/colors/Color';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../style/utils/context";

const ContainerHome = styled.section`
    margin-top:10px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    ${(props) => (props.mode === 'light') ? `background-color: ${Color.backgroundLight} ` : `background-color: black`};
    width:100%;
`
const LeftBloc = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:40%;
    max-height:100%;
`

const TextDescription = styled.h1`
    line-height:1.5em;
    font-family:comfortaa;
    color:${Color.Headtext};
    font-size: 2em;
    max-height:95%;
    margin-bottom:40px;
    width:100%;
`

const ButtonStyle = styled(Link)`
    color:white; 
    padding: 5px 20px; 
    text-decoration: none;
    text-align:center;
    width:35%;

    font-size: .9em;
    background-color : ${Color.primary}; 
    border-radius:35px; 
`

const Illustration = styled.img`
    display: bloc;
    max-width: 60%;
    max-height: 70%;
    `


function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <Globalstyle>
            <Nav />
            <ContainerHome mode={theme}>
                <LeftBloc>
                    <TextDescription>
                        Repérez vos besoins, <br /> on s’occupe du reste, <br />avec les meilleurs <br /> talents
                    </TextDescription>
                    <ButtonStyle exact="true" to="/Questions" className='NavLink'> Faire le test</ButtonStyle>
                </LeftBloc>
                <Illustration alt='illustration' src='/home-illustration.svg' />
            </ContainerHome>
        </Globalstyle>
    )
}

export default App;
