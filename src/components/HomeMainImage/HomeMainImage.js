import React from 'react';
import "./HomeMainImage.css";
import MainImage from "../../resources/pexels-aleksandar-pasaric-2338113.jpg";

function HomeMainImage(){

    return(
        <div className="HomwMainImageWrapper">
            <img src={MainImage} className="home-main-image"/>
        </div>
    )
}

export default HomeMainImage;