import React from 'react';
import {Link} from 'react-router-dom'

const index = () => {
    return (
        <nav>
            <Link exact= "true" to= "/"> Home</Link>
            <Link exact= "true" to= "/Questions"> Questions</Link>
            <Link exact= "true" to= "/Freelances"> Freelances</Link>
        </nav>
    );
};

export default index;