import React from 'react';
import Cards from '../../Components/Cards'
import Nav from '../../Components/Nav'
import GlobalStyle from '../../style/Global';

const index = () => {

    const freelance = [
        {
            label: "DevOPs",
            title: "Administrator",
            picture: "profile.png",
        },

        {
            label: "FullStack",
            title: "PDG",
            picture: "profile.png",
        },

        {
            label: "UXDesigner",
            title: "Chef",
            picture: "profile.png",
        }
    ]
    return (
        <GlobalStyle >
            <Nav />
            <h1 className='border'>Trouvez vos prestataires</h1>
            <p className='border'>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </p>
            <Cards datas={freelance[0]} />
        </GlobalStyle>
    );
};

export default index;