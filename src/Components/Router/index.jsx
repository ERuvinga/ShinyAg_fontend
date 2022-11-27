import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home'
import Survey from "../../pages/Survey"
import Questions from "../../pages/Questions"
import Freelances from '../../pages/Freelances'
import Results from '../../pages/Results'

const index = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path='/Survey' element={<Survey />} />
            <Route path='/Questions' element={<Questions />} />
            <Route path='/Freelances' element={<Freelances />} />
            <Route path='/Results' element={<Results />} />

        </Routes>
    );
};

export default index;