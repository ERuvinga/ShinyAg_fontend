import { React, useEffect, useState } from 'react';

import Cards from '../../Components/Cards'
import colors from "../../style/colors/Color"
import Nav from '../../Components/Nav'
import Loader from '../../Components/loading'
import GlobalStyle from '../../style/Global';
import styled from "styled-components"

const ProfilList = styled.div`
    width:70%;
    height: 80%;
    margin:auto;
    margin-top:20px;
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: scroll;
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

const Freelances = () => {

    const [dataFreelances, setDataFreelance] = useState([]);
    const [IsLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:8000/freelances')
            .then((response) => {
                if (response.ok) {
                    response.json()
                        .then((data) => {
                            setDataFreelance(data.freelancersList);
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <GlobalStyle >
            <Nav />
            <div className='mt-10'>
                <Title>Trouvez votre prestataire</Title>
                <DescriptionStyle>Chez Shiny nous réunissons les meilleurs profils pour vous.</DescriptionStyle>
                <ProfilList>
                    {
                        IsLoading ? <Loader /> : dataFreelances.map((freelance, id) => <Cards datas={freelance} key={id * 2} />
                        )}

                </ProfilList>
            </div>
        </GlobalStyle>
    );
};

export default Freelances;