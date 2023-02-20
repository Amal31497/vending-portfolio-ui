import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./HomeMainImage.css";
import MainImage from "../../resources/main-image.jpg";

function HomeMainImage(){
    let history = useHistory ();
    function scrollToProducts(){
        history.push("./Products");
    };

    function scrollToContact(){
        const section = document.querySelector( '#contact' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return(
        <div className="HomwMainImageWrapper">
            <img src={MainImage} className="home-main-image"/>
            <div className="home-main-image-darkening-wrapper">
                <p className="home-main-image-title">Vending Solution for your business</p><br />
                <p className="home-main-image-title">Pasadena, CA</p>
                <div className="home-main-image-first-buttons">
                    <button className="home-main-image-leftButton" onClick={scrollToProducts}>
                        EXPLORE OUR PRODUCT
                    </button>
                    <button className="home-main-image-rightButton" onClick={scrollToContact}>
                        START HERE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeMainImage;