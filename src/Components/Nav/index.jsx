import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Color from '../../style/colors/Color';
import { ThemeContext } from '../../style/utils/context/index'

const NavLabel = styled.nav`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-top: 10px;
`
const NavBarStyle = styled.div`
    display:flex;
    justify-content: space-around;
    width:35%;
`
const LinkStyle = styled(Link)`
    color: ${Color.Navtext};
    text-decoration: none;
    padding: 5px 0px;
    font-size: .9em;

    ${(props) => props.isfulllink && `background-color : ${Color.primary}; color:white; padding: 5px 20px; border-radius:30px; `
    }
`
const ChangeModeBtn = styled.span`
    text-decoration: none;
    color: ${Color.Headtext};
    padding: 5px 0px;
    font-size: .9em;
    cursor: pointer;
`


const NavBar = () => {
    const { theme, toogleTheme } = useContext(ThemeContext);
    const [Mode, setMode] = useState(theme);

    const HandletoogleMode = () => {
        toogleTheme();
        setMode(theme);
    }

    return (
        <NavLabel>
            <img src={theme === 'light' ? '/dark-logo.png' : '/light-logo.png'} alt='logo' className='logo' />
            <NavBarStyle>
                <ChangeModeBtn onClick={HandletoogleMode}>{Mode}</ChangeModeBtn>
                <LinkStyle exact="true" to="/" className='NavLink'> Home </LinkStyle>
                <LinkStyle exact="true" to="/Freelances" className='NavLink'> Profils</LinkStyle>
                <LinkStyle isfulllink='true' exact="true" to="/Questions" className='NavLink'> Faire le test</LinkStyle>
            </NavBarStyle>
        </NavLabel>
    );
};

export default NavBar;