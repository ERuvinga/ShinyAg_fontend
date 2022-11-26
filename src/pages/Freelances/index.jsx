import React from 'react';
import Cards from '../../Components/Cards'

const index = () => {

    const freelance=[
        {
            label:"DevOPs",
            title:"Administrator",
            picture:"def.png",
        },

        {
            label:"FullStack",
            title:"PDG",
            picture:"def.png",
        },

        {
            label:"UXDesigner",
            title:"Chef",
            picture:"def.png",
        }
    ]
    return (
        <div>
           <p>
                Freelances :
           </p>

           <Cards datas= {freelance[0]}/>
        </div>
    );
};

export default index;