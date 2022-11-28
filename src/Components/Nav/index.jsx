import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Color from '../../style/colors/Color';

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
    width:300px;
`
const LinkStyle = styled(Link)`
    color: ${Color.Navtext};
    text-decoration: none;
    padding: 5px 0px;
    font-size: .9em;

    ${(props) => props.isFullLink && `background-color : ${Color.primary}; color:white; padding: 5px 20px; border-radius:30px; `
    }
`

const index = () => {
    return (
        <NavLabel>
            <img src='/dark-logo.png' alt='logo' className='logo' />
            <NavBarStyle>
                <LinkStyle exact="true" to="/" className='NavLink'> Home </LinkStyle>
                <LinkStyle exact="true" to="/Freelances" className='NavLink'> Profils</LinkStyle>
                <LinkStyle isFullLink exact="true" to="/Questions" className='NavLink'> Faire le test</LinkStyle>
            </NavBarStyle>
        </NavLabel>
    );
};

export default index;