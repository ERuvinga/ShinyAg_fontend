import React from 'react';
import Cards from '../../Components/Cards'
import Nav from '../../Components/Nav'
import GlobalStyle from '../../style/Global';

const index = () => {

    const freelance = [
        {
            label: "DevOPs",
            title: "Administrator",
            picture: "def.png",
        },

        {
            label: "FullStack",
            title: "PDG",
            picture: "def.png",
        },

        {
            label: "UXDesigner",
            title: "Chef",
            picture: "def.png",
        }
    ]
    return (
        <GlobalStyle>
            <Nav />
            <p>
                Freelances :
            </p>

            <Cards datas={freelance[0]} />
        </GlobalStyle>
    );
};

export default index;