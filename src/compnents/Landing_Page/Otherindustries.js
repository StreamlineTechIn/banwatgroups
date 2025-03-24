import React from 'react';
import { BgColor } from './css/commonStyles';

export default function Otherindustries() {
    const dummyData = {
        "section": "otherindustries",
        "imageUrl1": require("../../Assests/_MG_6875.JPG"),
        "imageUrl2": require("../../Assests/_MG_6875.JPG"),
        "imageUrl3": require("../../Assests/_MG_6875.JPG"),
        "imageUrl4": require("../../Assests/_MG_6875.JPG"),
        "imageUrl5": require("../../Assests/_MG_6875.JPG"),
    };

    return (
        <BgColor>
            <style>
                {`
                    .otherindustries-container {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 2rem;
                        padding-bottom:40px;
                        gap: 1rem;
                        flex-wrap: wrap; /* Allows wrapping on smaller screens */
                    }

                    .heading{
                        padding-top:10px;
                        margin-top:0px;
                    }

                    .card {
                        width: 18rem;
                        border: 1px solid;
                        border-radius: 8px;
                        padding: 1rem;
                        text-align: center;
                        transition: transform 0.3s ease;
                    }

                    .card:hover {
                        transform: scale(1.05);
                    }
                    `}
            </style>

            <h1 align='center' className='heading'>Banwat Industries  </h1>
            <div className='otherindustries-container'>
                <div className="card">
                    <img className="card-img-top" src={dummyData.imageUrl1} alt=" " />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={dummyData.imageUrl1} alt=" " />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={dummyData.imageUrl1} alt=" " />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={dummyData.imageUrl1} alt=" " />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </BgColor>
    );
}
