import React from 'react';
import Cards from '../../Components/Cards'
import colors from "../../style/colors/Color"
import Nav from '../../Components/Nav'
import GlobalStyle from '../../style/Global';
import styled from "styled-components"

const ProfilList = styled.div`
    width:60%;
    margin:auto;
    margin-top:20px;
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: Center;
`

const Title = styled.span`
    display:block;
    color: ${colors.Headtext};
    width:100%;
    text-align:center;
    font-size:.9em;
    font-weight:bold;
`

const DescriptionStyle = styled.div`
    font-size:.7em;
    color:${colors.secondary};
    text-align:center;
    margin:30px 0px;
`

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
            <di>
                <Title>Trouvez votre prestataire</Title>
                <DescriptionStyle>Chez Shiny nous réunissons les meilleurs profils pour vous.</DescriptionStyle>
                <ProfilList>
                    <Cards datas={freelance[2]} />
                    <Cards datas={freelance[1]} />
                    <Cards datas={freelance[0]} />
                    <Cards datas={freelance[1]} />
                    <Cards datas={freelance[0]} />
                    <Cards datas={freelance[2]} />
                </ProfilList>
            </di>
        </GlobalStyle>
    );
};

export default index;