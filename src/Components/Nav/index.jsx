import React, { useContext } from 'react';
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
    align-items: center;
    width:35%;
`
const LinkStyle = styled(Link)`
    color: ${Color.Navtext};
    text-decoration: none;
    text-align: center;
    padding: 5px 0px;
    font-size: .9em;

    ${(props) => props.isfulllink && `background-color : ${Color.primary}; color:white; padding: 5px 20px; border-radius:30px; `
    }
`

const DarkLightStyled = styled.span`
    width:60px;
    height: 25px;
    border: 1px solid ${Color.Navtext};
    border-radius: 20px;

    color: ${Color.Navtext};
    font-size: .9em;
    cursor: pointer;
`
const Circle = styled.img`
    padding: 2px;
    width: 22px;
    height: 22px;
    border-radius: 20px;
    background-color: ${Color.Navtext};
    opacity: .5;
    transition: all 1s;

    &: hover{
        opacity: 1;
        transform: scale(2) rotate(360deg);
    }

    ${(props) => props.mode && `opacity : 0.5; transform: rotate(0deg)`
    }
`

const NavBar = () => {
    const { theme, toogleTheme } = useContext(ThemeContext);

    const HandletoogleMode = () => {
        toogleTheme();
    }


    return (
        <NavLabel>
            <img src={theme === 'light' ? '/dark-logo.png' : '/light-logo.png'} alt='logo' className='logo' />
            <NavBarStyle className=''>
                <DarkLightStyled onClick={HandletoogleMode}><Circle src={theme === 'light' ? 'light.png' : '/dark.png'} mode={theme === 'light' ? true : false} className='' /> </DarkLightStyled>
                <LinkStyle exact="true" to="/" className='NavLink'> Home </LinkStyle>
                <LinkStyle exact="true" to="/Freelances" className='NavLink'> Profils</LinkStyle>
                <LinkStyle isfulllink='true' exact="true" to="/Questions" className='NavLink '> Faire le test</LinkStyle>
            </NavBarStyle>
        </NavLabel>
    );
};

export default NavBar;