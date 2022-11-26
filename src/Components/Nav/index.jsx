import React from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components"

const NavLabel = styled.nav`
    display:flex;
    justify-content: space-between;
    width:90%;
    height:70px;
    padding: 20px 30px;
`

const index = () => {
    return (
        <NavLabel className='border'>
            <img src='/dark-logo.png' alt='logo' className='border'/>
            <div className='border'>
                <Link exact= "true" to= "/"> Home </Link>
                <Link exact= "true" to= "/Freelances"> Profils</Link>
                <Link exact= "true" to= "/Questions"> Tester</Link>
            </div>
        </NavLabel>
    );
};

export default index;